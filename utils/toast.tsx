import toast from "react-hot-toast";
export const showToastSuccess = (message: string) => {
  toast.success(`${message}`, {
    style: {
      backgroundColor: "#d1fae5",
    },
  });
};
export const showToastError = (message: string) => {
  toast.error(`${message}`, {
    style: {
      backgroundColor: "#fee2e2",
    },
  });
};

