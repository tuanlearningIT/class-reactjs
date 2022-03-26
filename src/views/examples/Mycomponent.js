import React from "react";
import Childcomponent from "./Childcomponent";
import Addcomponent from "./Addcomponent";

class Mycomponent extends React.Component {

    state = {
        arrJob: [
            { id: 'Job1', title: 'Deverlopers', salary: '500' },
            { id: 'Job2', title: 'Testter', salary: '400' },
            { id: 'Job3', title: 'Projeact mannager', salary: '1000' },
        ]
    }

    AddNewJob = (job) => {
        this.setState({
            arrJob: [...this.state.arrJob, job]
        })
    }
    DeleteJob = (job) => {
        let currentJob = this.state.arrJob;
        currentJob = currentJob.filter(item => item.id !== job.id);
        this.setState({
            arrJob: currentJob
        })
    }
    render() {
        return (
            <>

                <Addcomponent
                    AddNewJob={this.AddNewJob}
                />
                <Childcomponent
                    arr={this.state.arrJob}
                    DeleteJob={this.DeleteJob}
                />
            </>
        )
    }
}

export default Mycomponent;