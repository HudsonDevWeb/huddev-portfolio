

import { toast, ToastPosition } from "react-hot-toast";

export const showToast = (message: string, type: "success" | "error" | "loading" = "success") => {
  const options = {
    position: "bottom-right" as ToastPosition,
    duration: 4000,
    style: {
      background: "#fff",
      color: "#333",
      borderRadius: "8px",
      padding: "12px",
    },
  };

  switch (type) {
    case "success":
      toast.success(message, options);
      break;
    case "error":
      toast.error(message, options);
      break;
    case "loading":
      toast.loading(message, options);
      break;
    default:
      toast.success(message, options);
  }
};

export const confirmDelete = (): Promise<boolean> =>
  new Promise((resolve) => {
    toast.custom(
      (toastObj) => (
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3 border border-gray-200">
          <p className="font-medium text-gray-900">Tem certeza que deseja excluir?</p>

          <div className="flex justify-end gap-2">
            <button
              className="px-3 py-1 rounded-md bg-gray-200 text-gray-800"
              onClick={() => {
                toast.remove(toastObj.id);
                resolve(false);
              }}
            >
              Cancelar
            </button>

            <button
              className="px-3 py-1 rounded-md bg-red-600 text-white"
              onClick={() => {
                toast.remove(toastObj.id);
                resolve(true);
              }}
            >
              Excluir
            </button>
          </div>
        </div>
      ),
      {
        position: "bottom-right",
        duration: 0,
      }
    );
  });

