import axios from 'axios';

class MapServices {
    getFirmList() {
        return axios.get(process.env.REACT_APP_API_URL + "getAdminMapInfo");
    }
}
export default MapServices;