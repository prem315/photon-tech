import React from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import AdminHeader from './adminHeader';
import About from '../../components/about';
// import History from '../../components/history';
import History from '../History/history';
import Plants from '../plants/plants';
import TopBar from './topbar';
import DemoMachine from '../../components/demoMachine';
import Notifications from '../Notifications/notifications';

class AdminDashboard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <AdminHeader />

                <div className="app-content content">
                    <div className="content-wrapper">


                        {/* <TopBar /> */}

                        <Switch>

                            <Route path="/admindashboard/history" component={History} />
                            <Route path="/admindashboard/plants" component={Plants} />

                            <Route path="/admindashboard/about" component={About} />
                            
                            <Route path="/admindashboard/notifications" component={Notifications} />
                        </Switch>
                    </div>
                </div>


            </React.Fragment>
        )
    }
}

export default AdminDashboard;
