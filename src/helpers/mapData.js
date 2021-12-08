import { showToast } from "../core/functions";
import { getFirmList } from "../services/MapServices";

export const getMapData = (_context) => {
    getFirmList()
        .then(({ data }) => {
            _context.funcHandleSetFirms(data.firms);
            _context.funcHandleSetFeeds(data.feeds);
            _context.funcHandleSetFiles(data.files);
            _context.funcHandleSetNumberOfActiveUsers(
                calculateActiveUsers(data.firms)
            );
            _context.funcHandleSetNumberOfAllUsers(
                calculateAllUsers(data.firms)
            );
            _context.funcHandleSetNumberOfActiveFirms(
                calculateActiveFirms(data.firms)
            );
            _context.funcHandleSetNumberOfAllFirms(data.firms.length);
        })
        .catch(() => {
            showToast(
                "bottom-center",
                "An error occured when fetching current map data",
                "error",
                10000
            );
        });
};

const calculateActiveUsers = (_array) => {
    let result = 0;
    for (const key in _array) {
        result += _array[key].ausers;
    }
    return result;
};

const calculateAllUsers = (_array) => {
    let result = 0;
    for (const key in _array) {
        result += _array[key].users;
    }
    return result;
};

const calculateActiveFirms = (_array) => {
    let result = 0;

    for (const key in _array) {
        if (_array[key].ausers > 0) {
            result++;
        }
    }
    return result;
};
