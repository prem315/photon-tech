import React from 'react';
import './MachineDetailsCss.css';
import cycle from '../../assets/icons/CircuitCycle.svg';
import time from '../../assets/icons/Time.svg';
import firebase from 'firebase';

class MachinePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          cycles: 0,
          distance: 0,
          battVoltage: 0
        }
    }

    componentDidMount() {

      // this.ref = firebase.firestore().collection('cleanings')
      // var query = this.ref.where("device", "==", "1234")
      // query.onSnapshot(this.onCollectionUpdate);
      firebase.firestore().collection('cleanings').where("device", "==", this.props.match.params.machineID).get().then((snap) => {
        this.setState({
          cycles: snap.size
        });
      });

          firebase.firestore().collection('voltages').where("serial", "==", this.props.match.params.machineID).orderBy('datetime').limit(1).onSnapshot((snap) => {
            snap.forEach(doc => {
              console.log(doc.data());
              this.setState({
                battVoltage: doc.data().calculated[4].calculated
              })
            })
          })

      firebase.firestore().collection('devices').where("serial", "==", this.props.match.params.machineID).onSnapshot((snap) => {
        snap.forEach(doc => {
          console.log(doc.data().encodersSum);
          this.setState({
            distance: doc.data().encodersSum
          })
        })
      });

      firebase.firestore().collection('plants').onSnapshot((snap) => {
        snap.forEach(doc => {
          console.log(doc.data());
        })
      })

    }

    render() {
      console.log(this.props);
        const machine = this.props.machineData.find(m => m.serial === this.props.match.params.machineID)
        if(machine) {
            return (
                <React.Fragment>
                <div className="row">
                    <div class="col-lg-12 col-md-12">
			        <div class="card notification-card  stat-card">
				        <div class="card-header notification-header stat-card">
					    <h4 class="card-title notificatrion-title">Serial: {machine.serial}</h4>
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
                                        <h4 class="cycletext">{this.state.cycles}</h4>
                                        <span>No of Cycles</span>
                                    </div>
                                    <div class="align-self-center">
                                      <img class="staticons" src={cycle} alt="cycle" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-12">
                    <div class="card stat-card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="media-body text-left">
                                        <h4 class="success">156 minutes</h4>
                                        <span>Cycle Duration</span>
                                    </div>
                                    <div class="align-self-center">
                                          <img class="staticons" src={time} alt="time" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-lg-6 col-12">
                    <div class="card stat-card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="media-body text-left">
                                        <h4 class="warning">{this.state.distance} kms</h4>
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
                    <div class="card stat-card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="media-body text-left">
                                        <h4 class="primary">423 sqkm</h4>
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




                <div class="row">
                      <div class="col-xl-4 col-md-6 col-sm-12">
                        <div class="card">
                            <div class="card-body text-center">
                                <div class="card-header">
                                    <span class="success">Pre cleaning Voltage</span>
                                    <h4 class="margin display-4 blue-grey darken-1">24,879</h4>
                                </div>
                            </div>
                          </div>
                      </div>
                      <div class="col-xl-4 col-md-6 col-sm-12">
                        <div class="card">
                          <div class="card-body text-center">
                              <div class="card-header">
                                  <span class="warning darken-2">Post cleaning Voltage</span>
                                  <h4 class="margin display-4 blue-grey darken-1">14,962</h4>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div class="col-xl-4 col-md-6 col-sm-12">
                        <div class="card">
                          <div class="card-body text-center">
                              <div class="card-header">
                                  <span class="danger">Battery Voltage</span>
                                  <h4 class="margin display-4 blue-grey darken-1">{this.state.battVoltage}</h4>
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

export default MachinePage
