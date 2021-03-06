import axios from "axios";

export default {
    getEmployees: function() {
        return axios.get("https://randomuser.me/api/?results=100&nat=us&inc=name,email,picture,cell");
    },
    getEmployeeName: function() {
        return axios.get("https://randomuser.me/api/?results=100&nat=us&inc=name,email,picture,cell");
    }
}