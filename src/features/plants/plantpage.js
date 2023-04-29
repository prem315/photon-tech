import React from 'react';
import Machines from '../machines/machines';
import TopBar from '../admindashboard/topbar';

class PlantPage extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {

        const plant = this.props.data.find(p => p.client === this.props.match.params.plantID)


        if(plant){
            return (
                <div>
                    <TopBar data={plant} match={this.props.match} />

                </div>
            )
        }
    }

}

export default PlantPage
