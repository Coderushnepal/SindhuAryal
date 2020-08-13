import iziToast from "izitoast";

export const success = ({title, message}) => {
    iziToast.success({
        title, 
        message,
    });
};

export const error = ({title, message}) => {
    iziToast.error({
        title, 
        message,
    });
};