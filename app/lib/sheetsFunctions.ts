import { google, sheets_v4 } from "googleapis";

let sheetsClient: sheets_v4.Sheets | null = null;


export async function getSheetsClient(): Promise<sheets_v4.Sheets> {
  if (sheetsClient) return sheetsClient; 

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  sheetsClient = google.sheets({ version: "v4", auth });
  return sheetsClient;
}


export async function readSheet(range: string) {
  const sheets = await getSheetsClient();

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range,
  });

  return response.data.values || [];
}


export async function appendSheet(values: any[][], range: string) {
  const sheets = await getSheetsClient();

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values },
  });
}

export async function deleteLinkById(id: string | number) {
  const sheets = await getSheetsClient();

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Página1!A:A",
  });

  const rows = res.data.values || [];

  const rowIndex = rows.findIndex((row) => String(row[0]) === String(id));
  if (rowIndex === -1) throw new Error("ID não encontrado");

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    requestBody: {
      requests: [
        {
          deleteDimension: {
            range: {
              sheetId: 0,
              dimension: "ROWS",
              startIndex: rowIndex,
              endIndex: rowIndex + 1,
            },
          },
        },
      ],
    },
  });
}

export async function incrementClicks(shortUrl: string) {
  const sheets = await getSheetsClient();

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Página1!D:D",
  });

  const rows = res.data.values || [];

  const rowIndex = rows.findIndex((row) => row[0] === shortUrl);
  if (rowIndex === -1) throw new Error("Short URL não encontrada");

  const clicksRes = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: `Página1!E${rowIndex + 1}`,
  });

  const currentClicks = Number(clicksRes.data.values?.[0]?.[0] || 0);

  await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: `Página1!E${rowIndex + 1}`,
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [[currentClicks + 1]] },
  });
}

export async function getLinkByShort(shortUrl: string) {
  const sheets = await getSheetsClient();

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Página1!A:F",
  });

  const rows = res.data.values || [];

  const row = rows.find((r) => r[3] === shortUrl);

  if (!row) return null;

  return {
    id: row[0],
    title: row[1],
    originalUrl: row[2],
    shortUrl: row[3],
    clicks: Number(row[4] || 0),
    createdAt: row[5],
    rowIndex: rows.indexOf(row),
  };
}