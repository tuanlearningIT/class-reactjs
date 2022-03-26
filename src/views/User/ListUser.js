import React from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';
class ListUser extends React.Component {

    state = {
        ListUsers: []
    }
    async componentDidMount() {
        // axios.get('https://reqres.in/api/users?page=2')
        //     .then(res => {
        //         console.log('<<< check res', res)
        //     })
        let res = await axios.get('https://reqres.in/api/users?page=2')
        this.setState({
            ListUsers: res && res.data && res.data.data ? res.data.data : []
        })
        console.log('>>> check res:', res.data.data)
    }
    handleViewDetail = (user) => {
        this.props.history.push(`/User/${user.id}`)
    }
    render() {
        let { ListUsers } = this.state;
        return (
            <div className="list-user-container">
                <div className="title">
                    Fecth All list user
                </div>
                {ListUsers && ListUsers.length > 0 &&
                    ListUsers.map((item, index) => {
                        return (
                            <div className="child" key={item.id}
                                onClick={() => this.handleViewDetail(item)}>
                                {index + 1} - {item.first_name} {item.last_name}
                            </div>
                        )

                    }
                    )
                }

            </div>
        )
    }
}
export default withRouter(ListUser);