import React from 'react';
// import '../clientDashboard/dashboard.css';

class History extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            data: [
                {cycles: 12, es: "success", start: "3:40 PM", end: "4:15 PM", PI: "Plant"},
                {cycles: 10, es: "success", start: "3:00 PM", end: "3:25 PM", PI: "Individual"},
                {cycles: 12, es: "success", start: "4:00 PM", end: "4:40 PM", PI: "Plant"},
                {cycles: 15, es: "success", start: "2:10 PM", end: "4:10 PM", PI: "Individual"},
                {cycles: 20, es: "success", start: "4:40 PM", end: "5:15 PM", PI: "Individual"},
                {cycles: 10, es: "success", start: "3:40 PM", end: "4:15 PM", PI: "Plant"},
                {cycles: 30, es: "success", start: "3:40 PM", end: "4:15 PM", PI: "Plant"},
                {cycles: 65, es: "success", start: "5:40 PM", end: "6:15 PM", PI: "Plant"},
                {cycles: 45, es: "success", start: "3:40 PM", end: "4:50 PM", PI: "Individual"},
                {cycles: 50, es: "success", start: "1:40 PM", end: "2:15 PM", PI: "Plant"},
                {cycles: 60, es: "success", start: "1:00 PM", end: "1:15 PM", PI: "Individual"},
                {cycles: 70, es: "success", start: "6:40 PM", end: "7:20 PM", PI: "Plant"},
            ]
        }
        
    }
    render() {
        return (
            <React.Fragment>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header history-header">
                                <h4 class="card-title history-title">History</h4>
                                <a class="heading-elements-toggle"><i class="fa fa-ellipsis-v font-medium-3"></i></a>
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
                                    <p class="card-text">Machine/Plant History </p>
                                    
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th>Sessions/Cycles</th>
                                                    <th>Errors/Success</th>
                                                    <th>Date time of start</th>
                                                    <th>Date time of end</th>
                                                    <th>Plant/Individual Cycle</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.data.map((d) => {
                                                        return(
                                                            <tr>
                                                                <th scope="row">{d.cycles}</th>
                                                                <td>{d.es}</td>
                                                                <td>{d.start}</td>
                                                                <td>{d.end}</td>
                                                                <td>{d.PI}</td>
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
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default History