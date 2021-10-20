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

export const dataUriToBlob = (dataURI, type) => {
    var byteString = atob(dataURI.split(',')[1])
    var arrayBuffer = new ArrayBuffer(byteString.length)
    var uintArray = new Uint8Array(arrayBuffer)

    for (var i = 0; i < byteString.length; i++) {
        uintArray[i] = byteString.charCodeAt(i)
    }

    var blob = new Blob([arrayBuffer], { type: type })
    byteString = null

    return blob
}
