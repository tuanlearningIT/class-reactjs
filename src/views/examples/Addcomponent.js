import React from "react";

class Addcomponent extends React.Component {
    state = {
        title: '',
        salary: ''
    }
    handleonChangesalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleonChangetitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleonClicksubmit = (event) => {
        event.preventDefault();
        if (!this.state.title || !this.state.salary) {
            alert('Missing');
            return;

        }
        this.props.AddNewJob({
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
    }
    render() {
        return (
            <form>
                <label forhtml="fname">Job title:</label><br />
                <input type='text' value={this.state.title} onChange={(event) => this.handleonChangetitleJob(event)} /><br />
                <label forhtml="lname">Salary:</label><br />
                <input type='text' value={this.state.salary} onChange={(event) => this.handleonChangesalary(event)} /><br /><br />
                <input type="submit" value="submit" onClick={(event) => this.handleonClicksubmit(event)} />

            </form>
        )
    }
}
export default Addcomponent;