import iziToast from "izitoast";

iziToast.settings({
    timeout: 6000,
    resetOnHover:true,
    // transitionIn:'bounceInLeft',
    // transitionOut: 'flipOutX',
    // progressBar:false,
});

export const success = ({title, message}) => {
    iziToast.success({
        title, 
        message,
        progressBarColor: '#008000',
    });
};

export const error = ({title, message}) => {
    iziToast.error({
        title, 
        message,
        progressBarColor:'#FF0000',
    });
};