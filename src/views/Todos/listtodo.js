import React from "react";
import AddNewTodo from "./addtodo";
import { toast } from 'react-toastify';

class ListTodos extends React.Component {
    state = {
        ListTodo: [
            { id: 'job1', title: 'Doing Making' },
            { id: 'job2', title: 'Making Videos' },
            { id: 'job3', title: 'Fixing Bugs' }
        ],
        EditTodo: {}
    }
    AddNewTodo = (job) => {
        this.setState({
            ListTodo: [...this.state.ListTodo, job]
        })
        toast.success("Wow so easy!")
    }
    handleonClickDelete = (todo) => {


        let currentTodo = this.state.ListTodo;
        currentTodo = currentTodo.filter(item => item.id !== todo.id)
        this.setState({
            ListTodo: currentTodo
        })
        toast.info('successful delete')


    }
    handleonClickEdit = (todo) => {
        let { EditTodo, ListTodo } = this.state;
        let isEmptyObj = Object.keys(EditTodo).length === 0;
        //save
        if (isEmptyObj === false && EditTodo.id === todo.id) {
            let ListTodoCopy = [...ListTodo];
            let objindex = ListTodoCopy.findIndex((item => item.id === todo.id))

            ListTodoCopy[objindex].title = EditTodo.title;
            this.setState({
                ListTodo: ListTodoCopy,
                EditTodo: {}
            })
            toast.success('Update TODO success')
            return;
        }
        //edit
        this.setState({
            EditTodo: todo
        })

    }
    handleonChangeEditTodo = (event) => {
        let EditTodoCopy = { ...this.state.EditTodo }
        EditTodoCopy.title = event.target.value
        this.setState({
            EditTodo: EditTodoCopy
        })
    }

    render() {
        let { ListTodo, EditTodo } = this.state;
        let isEmptyObj = Object.keys(EditTodo).length === 0;
        console.log('>>.check emoty:', isEmptyObj)
        return (
            <>
                <p>
                    HELLO WORLD WITH REACT
                </p>
                <div className="list-todo-container">
                    <AddNewTodo AddNewTodo={this.AddNewTodo}
                        DeleteTodo={this.DeleteTodo} />
                    <div className="list-todo-content">
                        {ListTodo && ListTodo.length > 0 &&
                            ListTodo.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObj === true ?
                                            <span>{index + 1} - {item.title}</span>
                                            :
                                            <>
                                                {EditTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input value={EditTodo.title}
                                                            onChange={(event) => this.handleonChangeEditTodo(event)} />
                                                    </span>
                                                    :
                                                    <span>{index + 1} - {item.title}</span>
                                                }
                                            </>

                                        }
                                        <button className="edit" onClick={() => this.handleonClickEdit(item)}>
                                            {isEmptyObj === false && EditTodo.id === item.id ?
                                                "Save" : "Edit"
                                            }
                                        </button>
                                        <button className="dellete" onClick={() => this.handleonClickDelete(item)}>Delete</button>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </>
        )
    }
}

export default ListTodos;