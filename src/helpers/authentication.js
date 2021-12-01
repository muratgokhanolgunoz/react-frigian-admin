import { authenticate } from "../services/AuthServices";

const login = (_payload) => {
    return new Promise((resolve, reject) => {
        authenticate(_payload)
            .then((response) => {
                resolve(response);
            })
            .catch(() => {
                reject("An error occured when authentication");
            });
    });
};

const logout = (_context) => {
    _context.funcHandleSetToken("");
};

export const authentication = { login, logout };
