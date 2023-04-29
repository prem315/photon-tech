import React from 'react';
import firebase from 'firebase';
import axios from 'axios';
import { getJwt } from '../utils/getJwt';
import fire from './config';
import Switch from "react-switch";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class DemoMachine extends React.Component {
    constructor(props) {
        super(props);

        this.ref = firebase.firestore().collection('devices').doc("ZbGWor1qJqKHh8MLMeSa");
        this.unsubscribe = null;

        this.state = {
            machine: {},
            checked: false,
            power: 0,
            startDate: new Date()
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleDateChange(date) {
        // date 
        Date.prototype.getUnixTime = function() { return this.getTime()/1000|0 };
        if(!Date.now) Date.now = function() { return new Date(); }
        Date.time = function() { return Date.now().getUnixTime(); }

        // 
        const currentUnixTime = date.getUnixTime();
        console.log(currentUnixTime);

        const jwt = getJwt();
        this.setState({
            startDate: date
        }, () => console.log(this.state.startDate));
        console.log(this.state.startDate);
        const values = {
            "serial": "78",
            "power": 1,
            "unixtime": currentUnixTime,
            "token": jwt
        }
        return axios.post(`https://us-central1-photom-iot-1.cloudfunctions.net/schedule?token=${jwt}`, values, {
            headers: {
                'Content-Type': 'application/json', 
            }
        }).then((res) => {
            console.log(res)
        })
       
    }
    

    handleChange(checked) {
        const jwt = getJwt();
        console.log(jwt);
        this.setState({ checked });

        if(this.state.checked === false) {
            const values = {
                "serial": "78",
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
                "serial": "78",
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

    componentDidMount() {
        this.ref.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                this.setState({
                    machine: doc.data()
                })
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }

    render(){
        if(this.state.machine != undefined) {
            return (
                <div class="row">
                    <div class="col-xl-4 col-lg-6 col-12">
                                <div class="card bg-danger">
                                    <a to="#" class="card-content">
                                        <div class="card-body">
                                            <div class="media d-flex">
                                                <div class="align-self-center">
                                                    <i class="icon-graph white font-large-2 float-left"></i>
                                                </div>
                                                <div class="media-body white text-right">
                                                    <h3>{this.state.machine.name}</h3>
                                                    <span>Machine</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="form-group ">
                                <Switch onChange={this.handleChange} checked={this.state.checked} />
                                </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-12">
                        <h4 className="card-title">Scheduling</h4>
                        {/* <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleDateChange}
                        /> */}
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleDateChange}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            dateFormat="MMMM d, yyyy h:mm aa"
                            timeCaption="time"
                        />
                    </div>
                </div>
            )
        }
    }
}

export default DemoMachine