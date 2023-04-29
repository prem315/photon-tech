import React from 'react';
import './MachineDetailsCss';

class MachineDetailsPage extends React.Component {

    render() {
      console.log(this.props);
        const machine = this.props.data.find(m => m.key === this.props.match.params.machineID)
        if(machine) {
            return (
                <React.Fragment>
                <div className="row">
                    <div class="col-lg-12 col-md-12">
			        <div class="card notification-card">
				        <div class="card-header notification-header">
					    <h4 class="card-title notificatrion-title">Machine Serial: {machine.key}</h4>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="row">
                <div class="col-xl-3 col-lg-6 col-12">
                    <div class="card stat-card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="media-body text-left">
                                        <h3 class="danger">278</h3>
                                        <span>No of Cycles</span>
                                    </div>
                                    <div class="align-self-center">
                                        <i class="icon-rocket danger font-large-2 float-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="media-body text-left">
                                        <h3 class="success">156</h3>
                                        <span>Cycle Duration</span>
                                    </div>
                                    <div class="align-self-center">
                                        <i class="icon-user success font-large-2 float-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-lg-6 col-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="media-body text-left">
                                        <h3 class="warning">64.89 %</h3>
                                        <span>Cleaning Distance</span>
                                    </div>
                                    <div class="align-self-center">
                                        <i class="icon-pie-chart warning font-large-2 float-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="media-body text-left">
                                        <h3 class="primary">423</h3>
                                        <span>Cleaning Area</span>
                                    </div>
                                    <div class="align-self-center">
                                        <i class="icon-support primary font-large-2 float-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                {/* <div class="row">
                    <div class="col-12 mt-3 mb-1">
                        <h4 class="text-uppercase">Statistics</h4>
                        <p>Battery Data.</p>
                    </div>
                </div> */}


                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-content">
                                <div class="row">
                                    <div class="col-lg-4 col-md-12 col-sm-12 border-right-blue-grey border-right-lighten-5">
                                        <div class="card-body text-center">
                                            <div class="card-header">
                                                <span class="success">Pre cleaning Voltage</span>
                                                <h3 class="display-4 blue-grey darken-1">24,879</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-12 col-sm-12 border-right-blue-grey border-right-lighten-5">
                                        <div class="card-body text-center">
                                            <div class="card-header">
                                                <span class="warning darken-2">Post cleaning Voltage</span>
                                                <h3 class="display-4 blue-grey darken-1">14,962</h3>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-12 col-sm-12 border-right-blue-grey border-right-lighten-5">
                                        <div class="card-body text-center">
                                            <div class="card-header">
                                                <span class="danger">Battery Voltage</span>
                                                <h3 class="display-4 blue-grey darken-1">76,894</h3>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

            </React.Fragment>
            )
        }

    }
}

export default MachineDetailsPage;
