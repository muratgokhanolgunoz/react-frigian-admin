import axios from "axios";

export const replyFeed = (_formData) => {
    return axios.post(
        process.env.REACT_APP_API_URL + "answerFeedback",
        _formData
    );
};
