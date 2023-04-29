import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import firebase from 'firebase';
import MachinePage from './machinepage';
import { connect } from 'react-redux';
import _ from 'lodash';

import Machine from './machine';
import NewMachine from './newMachine';
import About from '../../components/about';
import { RequestMachinesForPlant } from './machinesActions';
import './machines.css';

class Machines extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            machines: [],
            isChecked: null,
            isModalOpen: false
        }
        this.machineList = this.machineList.bind(this);

        //console.log(props.clientPlantData.key);
    }

    componentDidMount() {
      console.log(this.props.clientPlantData.id);
      this.props.RequestMachinesForPlant(this.props.clientPlantData.id);
    }

    componentWillUpdate(nextProps, nextState){
        //localStorage.setItem('machineData', JSON.stringify(nextState.machines))
    }


    machineList(){
      if (!_.isEmpty(this.props.machines)) {
        console.log(this.props.machines);
        return (
        <div class="container">
          <div class="content-header row">
            <div class="content-header-left col-md-12 col-12 mb-4 ">
              <div class="heading-elements btn-elements mr-1">
                <Link to={`${this.props.match.url}/newmachine`} class="LinkText">
                  <button type="button" class="btn btn-secondary btn-block">NEW MACHINE</button>
                </Link>
              </div>

            </div>
          </div>
          <div className="row">
                    {
                        this.props.machines.map((m) => {
                            return (
                                <Machine machine={m} {...this.props} />
                            )
                        })
                    }
          </div>
        </div>
        )
      } else if(_.isEmpty(this.props.machines)) {
        return (
        <div class="">
          <div class="content-header row">

             <div class="content-header-left col-md-12 col-12 mb-2">
                <div class="heading-elements btn-elements mr-1">
                  <Link to={`${this.props.match.url}/newmachine`} class="LinkText">
                    <button  type="button" class="btn btn-secondary btn-block">CREATE NEW MACHINE</button>
                  </Link>
                </div>

             </div>
             <div class="row">

             </div>
          </div>

          <div>
            <span>No devices</span>
          </div>
        </div>
        )
      }

    }



    render() {

        return (
            <React.Fragment>
                <Switch>
                    <Route
                      exact path={`${this.props.match.url}/newmachine`}
                      render={props => <NewMachine clientPlantData={this.props.clientPlantData} {...props} /> }
                    />

                    <Route exact path={`${this.props.match.url}`} render={() => this.machineList()} />


                   <Route
                        path={`${this.props.match.url}/asd`}
                        render={props => <About />}
                    />

                    <Route
                        path={`${this.props.match.url}/machine/:machineID`}
                        render={props => <MachinePage machineData={this.props.machines} {...props}/>}
                    />
                </Switch>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
  const { machines, loading } = state.machinesList;
  console.log(machines);
  return {machines, loading };
}
export default connect(mapStateToProps, { RequestMachinesForPlant })(Machines);
