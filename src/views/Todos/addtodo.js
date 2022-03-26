import React from "react";
import { toast } from 'react-toastify';
class AddNewTodo extends React.Component {
    state = {
        title: ''
    }
    handleonChangeAdd = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleonClickAdd = (event) => {
        event.preventDefault();
        if (!this.state.title) {
            toast.error(`Missing titile's TODO`);
            return;
        }
        this.props.AddNewTodo({
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        })
        this.setState({
            title: ''
        })
    }
    render() {
        return (
            <div className="add-todo">
                <input type="text" value={this.state.title} onChange={(event) => this.handleonChangeAdd(event)} />
                <span><button className="add" onClick={(event) => this.handleonClickAdd(event)}>ADD</button></span>
            </div>
        )
    }
}

export default AddNewTodo;