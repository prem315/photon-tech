import React from 'react';
import Switch from "react-switch";
// import Timer from 'react-compound-timer';
import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { getJwt } from '../../utils/getJwt';
import './machines.css';

class Machine extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
        this.state = { checked: false, power: 0 };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        const jwt = getJwt();

        this.setState({ checked });

        if(this.state.checked === false) {
            const values = {
                "serial": this.props.machine.serial,
                "power": 1,
                "token": jwt
            }
            return axios.post(`https://us-central1-photom-iot-1.cloudfunctions.net/power?token=${jwt}`, values, {
                headers: {
                    'Content-Type': 'application/json',
                }

            }).then((res) => {
                console.log(res);
            })
        }else {
            const values = {
                "serial": this.props.machine.serial,
                "power": 0,
                "token": jwt
            }
            return axios.post(`https://us-central1-photom-iot-1.cloudfunctions.net/power?token=${jwt}`, values, {
                headers: {
                    'Content-Type': 'application/json',
                }

            }).then((res) => {
                console.log(res);
            })
        }
    }

    render() {

        return (

            <div className="col-xl-4 col-md-6">
                    <div class="card scheduling-card">
                        <div class="card-header">
                            <h4 class="card-title info">{this.props.machine.serial}</h4>
                            <div class="heading-elements switch-heading">
                         <Switch onChange={this.handleChange} checked={this.state.checked}/>

                                 <span class="switchery switchery-small switchery-default" ><small ></small></span>
                         </div>
                        </div>
                        <div class="card-content">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <span class="badge badge-pill bg-danger float-right">{this.props.machine.plant}</span>Plant
                            </li>
                            <li class="list-group-item">
                                <span class="badge badge-pill bg-info float-right">{this.props.machine.serial}</span>Serial No.
                            </li>
                            <li class="list-group-item">
                                <span class="badge badge-pill bg-info float-right">{this.props.machine.power}</span>Power
                            </li>
                            <li class="list-group-item">
                                <span class={this.state.checked ? "badge badge-pill float-right actText" : "badge badge-pill float-right nonActText"}>{this.state.checked? <div>ON</div> : <div>OFF</div>}</span>Status
                            </li>
                        </ul>


                        </div>
                        <div class="card-footer border-top-blue-grey border-top-lighten-5 text-muted">
                            {/* <span class="float-left">3 hours left</span> */}
                            <span class="centerAlign">

                                <Link to={`${this.props.locationUrl}/machine/${this.props.machine.serial}`}>
                                  <button class="btn btn-outline-primary btn-min-width mr-1 mb-1">
                                    Machine's Statistics <i class="fa fa-angle-right"></i>
                                  </button>
                                </Link>
                            </span>
                        </div>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        locationUrl: state.router.location.pathname
    }
}

export default connect(mapStateToProps)(Machine);
