import React, { Component } from "react";
import API from "../utils/API";

class Table extends Component {

    state = {
        search: "",
        names: [],
        error: ""
    };

    componentDidMount() {
        API.getEmployees()
            .then(res => this.setState({ name: res.data.name }))
            .catch(err => console.log(err));
            
    }
    

    render() {


        return (
            <div>
                <h2 className="text-center">
                    Employees
            </h2>
            </div>
        )
    }
}

export default Table;