import { showToast } from '../core/functions';
import MapServices from '../services/MapServices';
let mapServices = new MapServices();

export const getMapData = (_context) => {
    mapServices.getFirmList()
        .then((response) => {
            _context.funcHandleSetFirms(response.data.firms);
            _context.funcHandleSetFeeds(response.data.feeds);
            _context.funcHandleSetFiles(response.data.files);
        })
        .catch(() => {
            showToast("bottom-center", "An error occured when fetching current map data", "error", 10000);
        });
}