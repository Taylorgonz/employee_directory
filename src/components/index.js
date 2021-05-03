import React, { Component } from "react";
import API from "../utils/API";
// import Employee from "./Employees/index"

class Table extends Component {

    state = {
        search: "",
        names: [],
        error: ""
    };

    componentDidMount() {
        API.getEmployees()
            .then(res => this.setState({ names: res.data.results }))
            .catch(err => console.log(err));
    }



    render() {
        console.log(this.state)


        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Picture</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.names.map(name => (
                            <tr>
                            <th scope="row"><img src={name.picture.thumbnail}/></th>
                            <td>{name.name.first}</td>
                            <td>{name.name.last}</td>
                            <td>{name.email}</td>
                        </tr>
                        ))}
                        

                    </tbody>
                </table>

            </div>
        )
    }
}

export default Table;