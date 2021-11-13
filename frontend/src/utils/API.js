/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default {
    register: function (userData) {
        console.log(userData)
        axios.post(`/register/${userData}`)
            .then(res => {
                return (res.data);
            })
            .catch((error) => {
                console.log("An Error Occurred: ", error);
            });
    }
};
