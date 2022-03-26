import React from "react";
// import { withRouter } from "react-router";
import Color from "../HOC/color";
import logos from '../../assets/images/7.jpg';
import { connect } from 'react-redux';
class Home extends React.Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push("/Todos")
    //     }, 3000)
    // }
    handleUserlist = (user) => {
        console.log('>>>check:', user)
        this.props.deleteUserRedux(user);
    }
    handleCreatlist = () => {
        this.props.AddNewRedux()
    }
    render() {

        console.log("check props:", this.props.dataRedux)
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div>
                    Hello world with REACT
                </div>
                <div>
                    <img src={logos} className="logo-home" alt="logos" />
                </div>
                <div>
                    {
                        listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    &nbsp; <span onClick={() => this.handleUserlist(item)}>x</span>
                                </div>
                            )
                        })
                    }
                </div>
                <button onClick={() => this.handleCreatlist()}>Add new</button>
            </>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE', payload: userDelete }),
        AddNewRedux: () => dispatch({ type: 'CREAT_NEW', })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));