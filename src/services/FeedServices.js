import axios from 'axios';

class FeedServices {
    replyFeed(_formData) {
        return axios.post(process.env.REACT_APP_API_URL + "answerFeedback", _formData);
    }
}
export default FeedServices;