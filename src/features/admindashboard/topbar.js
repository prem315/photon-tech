import React from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import Machines from '../machines/machines';
import SchedulePlant from '../schedulePlant/scheduleplant';
import '../machines/machines.css';

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render(){

        const clientPlantData = this.props.data;
        return (
            <React.Fragment>
            <ul class="nav customtab nav-tabs nav-underline no-hover-bg topbar-ul" role="tablist">
                    <li class="nav-item">
                        <NavLink
                            to={`${this.props.match.url}/machines`}
                            activeClassName="nav-link active"
                            id="home-tab3" data-toggle="tab"
                            style = {{
                                position: 'relative',
                                display: 'block',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                lineHeight: '2.5',
                                padding: '0.5rem 1rem',
                                transition: 'color 0.2s',
                                color: '#2dcee3',
                                border: 'none',
                            }}
                            >Machines</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to={`${this.props.match.url}/schedule`}
                        activeClassName="nav-link active"
                        id="profile-tab3" data-toggle="tab"
                        style = {{
                            position: 'relative',
                            display: 'block',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            lineHeight: '2.5',
                            padding: '0.5rem 1rem',
                            transition: 'color 0.2s',
                            color: '#2dcee3',
                            border: 'none',
                        }}
                        >Scheduling</NavLink>
                    </li>

                </ul>
                <Switch>


                    <Route path={`${this.props.match.url}/machines`}
                        render={props => <Machines {...props} clientPlantData={clientPlantData} />} />

                    <Route path={`${this.props.match.url}/schedule`} component={SchedulePlant} />
                </Switch>
            </React.Fragment>
        )
    }
}

export default TopBar;
