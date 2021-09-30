import axios from 'axios';

class AuthServices {
    authenticate(_data) {
        return axios.post("https://fmsis.frigian.net/api/authenticate", _data);
    }
}
export default AuthServices;