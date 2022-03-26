import React from "react";
import '../App.scss'
class Childcomponent extends React.Component {
    state = {
        showJob: false
    }
    handleOnclickdelete = (job) => {
        this.props.DeleteJob(job)
    }
    handleHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }
    render() {
        let { arr } = this.props;
        let { showJob } = this.state;
        return (
            <>
                {showJob === false ?
                    <div ><button className="btn-show" onClick={() => this.handleHide()}>Show</button></div>
                    : <>
                        <div className="Job- list">
                            {
                                arr.map((item, index) => {
                                    return (
                                        <div key={item.id}>{item.title} - {item.salary} <></> <span onClick={() => this.handleOnclickdelete(item)}>x</span></div>
                                    )

                                }
                                )
                            }
                        </div>
                        <div><button onClick={() => this.handleHide()}>Hide</button></div>
                    </>
                }
            </>
        )
    }
}
export default Childcomponent;