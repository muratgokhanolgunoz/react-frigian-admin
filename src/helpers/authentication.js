import AuthServices from '../services/AuthServices';

const login = (_payload) => {
    let authServices = new AuthServices();
    authServices.authenticate(_payload)
        .then((response) => {
            return response.data.token;
        })
        .catch(() => console.log("Error when authenticate"))
}

const logout = () => {

}

export const authentication = { login, logout };