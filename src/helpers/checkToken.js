
const check = (_token) => {
    if (_token === undefined || _token === "" || _token === null || typeof _token !== "string")
        return false;
    else
        return true;
}

export const checkToken = { check };