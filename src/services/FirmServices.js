import axios from 'axios';

class FirmServices {
  getFirmList(_token) {
    return axios.get(process.env.REACT_APP_API_URL + "getFirmList", {
      headers: {
        'Authorization': `Bearer ${_token}`
      }
    });
  }

  getCountries(_token) {
    return axios.get(process.env.REACT_APP_API_URL + "countries", {
      headers: {
        'Authorization': `Bearer ${_token}`
      }
    })
  }

  getIntegrators(_token) {
    return axios.get(process.env.REACT_APP_API_URL + "getIntegrators", {
      headers: {
        'Authorization': `Bearer ${_token}`
      }
    })
  }

  getPackages(_token) {
    return axios.get(process.env.REACT_APP_API_URL + "getPackages", {
      headers: {
        'Authorization': `Bearer ${_token}`
      }
    })
  }

  getCurrencies(_token) {
    return axios.get(process.env.REACT_APP_API_URL + "allCurrencies", {
      headers: {
        'Authorization': `Bearer ${_token}`
      }
    })
  }

  getLogo(_token, _firmId) {
    return axios.get(process.env.REACT_APP_API_URL + "getFirmLogo/" + _firmId, {
      headers: {
        'Authorization': `Bearer ${_token}`
      }
    })
  }

  updateLogo(_token, _data) {
    return axios.post(process.env.REACT_APP_API_URL + "updateFirmLogo", _data, {
      headers: {
        'Authorization': `Bearer ${_token}`
      }
    })
  }

  updateFirm(_token, _data) {
    return axios.post(process.env.REACT_APP_API_URL + "updateFirm", _data, {
      headers: {
        'Authorization': `Bearer ${_token}`
      }
    })
  }
}
export default FirmServices;