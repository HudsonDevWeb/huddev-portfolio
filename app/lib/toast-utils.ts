

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
