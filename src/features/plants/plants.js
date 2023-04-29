import React from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { requestAdminPlants } from '../plants/plants_actions';
import fire from '../../components/config';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import PlantPage from './plantpage';
import './plants.css';
import CreateNewPlant from './NewPlant/createNewPlant';

class Plants extends React.Component {

    constructor(props) {
        super(props);

        // this.ref = firebase.firestore().collection('plants');
        // this.unsubscribe = null;

        this.state = {
            isLoading: true,
            plantsData: []
        }
    }

    // onCollectionUpdate = (querySnapshot) => {
    //     const plantsData = []
    //     const self = this;
    //     querySnapshot.forEach((doc) => {
    //
    //         const { client, name, creator } = doc.data();
    //
    //         plantsData.push({
    //             key: doc.id,
    //             //doc,
    //             client,
    //             name,
    //             creator
    //         });
    //
    //         self.setState({
    //             plantsData
    //         });
    //     });
    //     this.setState({
    //         plantsData
    //    });
    //
    //
    // }

    componentWillMount() {
        // localStorage.getItem('plantData') && this.setState({
        //     plantsData: JSON.parse(localStorage.getItem('plantData')),
        //     isLoading: false
        // })
    }

    componentDidMount() {

        this.props.requestAdminPlants();
    }

    componentWillUpdate(nextProps, nextState){
      //  localStorage.setItem('plantData', JSON.stringify(nextState.plantsData))

    }

    plantList(){

        if(this.props.plantData !== undefined) {
            return(
                <React.Fragment>
                <div className="content-header row">
                    <div class="content-header-left col-md-12 col-12 mb-2">
                        <div className="heading-elements btn-elements">
                            <Link to={`${this.props.match.url}/newplant`} class="LinkText">
                              <button class="btn btn-outline-secondary btn-min-width mr-1 mb-1">
                                + NEW PLANT
                              </button>
                            </Link>

                        </div>
                        <h3 class="content-header-title mb-0">Plants</h3>

                    </div>
                </div>
                <div class="row">
                {
                        this.props.plantData.map((plant) => {
                            return (
                                <div class="col-md-6 col-sm-12" key={plant.key} >
                                <div class="card rounded-card">
                                    <div class="card-header machine-card-header">
                                        <h4 class="card-title" id="heading-switchery">{plant.name}
                                            <span class="badge badge-warning round"></span></h4>

                                        <a class="heading-elements-toggle"><i class="fa fa-ellipsis-v font-medium-3"></i></a>
                                        <div class="heading-elements">
                                        {/* <Switch onChange={this.handleChange} checked={this.state.checked}/> */}

                                                <span class="switchery switchery-small switchery-default" ><small ></small></span>
                                        </div>
                                    </div>
                                    <div class="card-content">


                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">
                                                <span class="float-right"><p>{plant.client}</p></span>
                                                Company
                                            </li>
                                            <li class="list-group-item">
                                                <span class="badge badge-pill bg-info float-right">31st May, 2019</span>
                                                Created On
                                            </li>
                                            <li class="list-group-item">
                                                <span class={plant.status ? "badge badge-pill badge-success float-right" : "badge badge-pill badge-danger float-right" }>{plant.status ? 'Active' : 'Inactive' }</span>
                                                Plant Status
                                            </li>
                                            <li class="list-group-item">
                                                <span class="badge badge-pill badge-warning float-right">{plant.devices}</span>
                                                No of Machines
                                            </li>

                                            <li class="list-group-item">
                                                <span class="badge badge-pill badge-warning float-right">{plant.key}</span>
                                                key
                                            </li>



                                        </ul>


                                        <div class="card-body">
                                            <div className="form-action">
                                            <Link to={`${this.props.match.url}/${plant.client}/machines`} class="btn btn-outline-teal">Machines</Link>

                                        </div>
                                        </div>

                                    </div>
                                </div>
                                </div>
                            )
                        })
                    }
                </div>

                </React.Fragment>
            )
        } else if(this.props.loading) {
          return (
            <div class="spinnercontainer">
              <div class="spinner-grow spinclass" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          )
        }


    }
    render() {

        if(this.state.plantsData !== undefined) {
            return (
                <React.Fragment>
                    <Switch>
                        <Route exact path={`${this.props.match.url}`} render={() => this.plantList()} />
                        <Route
                            path={`${this.props.match.url}/newplant`}
                            component={CreateNewPlant}
                            />
                        <Route
                            path={`${this.props.match.url}/:plantID`}
                            render={props => <PlantPage data={this.props.plantData} {...props} />}
                        />
                    </Switch>
                </React.Fragment>
            )
        }

    }
}


const mapStateToProps = ({ plants }) => {
    const { plantData, loading } = plants;
    //console.log(plantData);
    return { plantData, loading };
};

export default connect(mapStateToProps, { requestAdminPlants } )(Plants);
