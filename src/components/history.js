import React from 'react';
import firebase from 'firebase';
import fire from './config';

class History extends React.Component {

    constructor(props) {
        super(props);

        this.ref = firebase.firestore().collection('voltages');
        this.unsubscribe = null;

        this.state = {
            currentData: [],
            volategesData: [],
        }
    }

    onCollectionUpdate = (querySnapshot) => {
        const volategesData = []
        const self = this;
        querySnapshot.forEach((doc) => {
            const { calculated, requestVoltages } = doc.data();
            console.log(doc.data());
            volategesData.push({
                key: doc.id,
                doc,
                calculated,
                requestVoltages,
            });

            self.setState({
                volategesData
            });
        });
        this.setState({
            volategesData
       });
    }

    componentDidMount() {   
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    render() {
        return (
            <div class="content-body">
                <div class="card">
                        <div class="card-header">
                            <h4 id="sizing" class="card-title">History</h4>
                            <div class="heading-elements">
                                <ul class="list-inline mb-0">
                                    <li><a data-action="collapse"><i class="ft-minus"></i></a></li>
                                    <li><a data-action="expand"><i class="ft-maximize"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-content collapse show" aria-expanded="true">
                            <div class="card-body">
                                <div class="card-text">
                                    <p>Volategs Data</p>
                                </div>
                                <table class="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>Key</th>
                                            <th>Requested Volategs</th>
                                            <th>Result</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    {
                                        this.state.volategesData.map((d) => {
                                            
                                            const cal = d.calculated;
                                            const requestedVols = d.requestVoltages;
                                            return (
                                                <tr key={d.key}>
                                                    <td><strong>{d.key}</strong></td>
                                                    <td>
                                                        {
                                                            requestedVols.map((v) => {
                                                                return (
                                                                    <p>requested voltage: {v}</p>
                                                                )
                                                            })
                                                        }
                                                    </td>    
                                                    <td>
                                                        {
                                                            cal.map((d) => {
                                                                return (
                                                                    <div>
                                                                    <p>result Voltage: {d.calculated}</p>
                                                                    
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                    
                                </table>
                            </div>
                        </div>
                    </div>
            </div>    
        )
    }
}

export default History


