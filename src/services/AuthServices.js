import axios from 'axios';

class AuthServices {
    authenticate(_data) {
        return axios.post(process.env.REACT_APP_API_AUTH_URL + "authenticate", _data);
    }
}
export default AuthServices;