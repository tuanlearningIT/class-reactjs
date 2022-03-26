import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom"
class DetailUser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params.id) {
            let id = this.props.match.params.id;

            let res = await axios.get(`https://reqres.in/api/users/${id}`)

            this.setState({
                user: res.data && res.data.data ? res.data.data : {}

            })
        }
    }
    handleBack = () => {
        this.props.history.push('/User')
    }
    render() {
        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0;
        return (
            <>
                <div>
                    Id: {this.props.match.params.id}
                </div>
                {isEmptyObj === false &&
                    <>
                        <div>
                            user's name: {user.first_name} - {user.last_name}
                        </div>
                        <div>
                            user's email: {user.email}
                        </div>
                        <div><img src={user.avatar} alt='avatar' /></div>
                        <div><button onClick={() => this.handleBack()}>Back</button></div>
                    </>
                }
            </>
        )
    }
}

export default withRouter(DetailUser);