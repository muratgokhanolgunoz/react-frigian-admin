import { toast } from 'react-toastify';

export const showToast = (_position, _text, _type, _timer) => {
    toast(_text, {
        position: _position,
        autoClose: _timer,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: _type
    })
}