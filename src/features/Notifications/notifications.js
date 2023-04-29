import React from 'react';
import firebase from 'firebase';

class Notifications extends React.Component {
    
    constructor(props) {
        super(props);

        this.ref = firebase.firestore().collection('notifications');
        this.unsubscribe = null;

        this.state = {
            isLoading: true,
            notifications: []
        }
    }

    onCollectionUpdate = (querySnapshot) => {
        const notifications = []
        const self = this;
        querySnapshot.forEach((doc) => {
            
            const { device, optimum, type, voltage } = doc.data();
            
            notifications.push({
                key: doc.id,
                //doc,
                device,
                optimum,
                type,
                voltage
            });

            self.setState({
                notifications
            });
        });
        this.setState({
            notifications
        });
  
    }

    componentWillMount() {
        localStorage.getItem('notifications') && this.setState({
            notifications: JSON.parse(localStorage.getItem('notifications')),
            isLoading: false
        })
    }

    componentDidMount() { 
        //this.props.requestAdminPlants();  
        if(!localStorage.getItem('notifications')){
            this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
        }else {
            console.log('using data from localstorage');
        }
        
    }

    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('notifications', JSON.stringify(nextState.notifications))
    }

    render() {
        if(this.state.notifications != undefined) {
            return (
                <React.Fragment>
                    <div className="row">
                    <div class="col-lg-12 col-md-12">
                <div class="card notification-card">
                    <div class="card-header notification-header">
                        <h4 class="card-title notificatrion-title">Notifications</h4>
                        <a class="heading-elements-toggle"><i class="fa fa-ellipsis font-medium-3"></i></a>
                        <div class="heading-elements">
                            <ul class="list-inline mb-0">
                                <li><a data-action="collapse"><i class="ft-minus"></i></a></li>
                                <li><a data-action="reload"><i class="ft-rotate-cw"></i></a></li>
                                <li><a data-action="expand"><i class="ft-maximize"></i></a></li>
                                <li><a data-action="close"><i class="ft-x"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-content collapse show">
                        <div class="card-body">
                            <p>Notification of this plant.</p>
                            <div class="list-group">
                                {
                                    this.state.notifications.map((n) => {
                                        return (
                                            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                                                <div class="d-flex w-100 justify-content-between">
                                                <h5 class="text-bold-600">STATUS: {n.type}</h5>
                                                <small>device: {n.device}</small>
                                                </div>
                                                <p>Optimum: {n.optimum}</p>
                                                <p>Voltage: {n.voltage}</p>
                                                
                                            </a>
                                        )
                                    })
                                }
                              
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

export default Notifications;