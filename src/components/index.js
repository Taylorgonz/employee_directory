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
            <div >
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Picture</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Cell</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.names.map((name,index) => (
                            <tr key={index}>
                            <th scope="row"><img alt={name.name.first} src={name.picture.thumbnail}/></th>
                            <td>{name.name.first}</td>
                            <td>{name.name.last}</td>
                            <td>{name.cell}</td>
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