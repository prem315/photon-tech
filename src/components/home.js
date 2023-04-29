import React from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from './header';
import './dashboard.css';
import About from './about'
import History from './history';


class Home extends React.Component {

   constructor(props) {
       super(props);
   }

   render() {
       
        return (
            <div>
                <Header {...this.props} />

                <div className="app-content content">
                    <div className="content-wrapper">
                        <div className="content-header row">
                        </div>
                        <Switch>
                            
                            <Route path="/history" component={History} />
                            {/* <Route path="/dashboard" component={SingleDashboard} /> */}
                            
                            <Route path="/about" component={About} />
                        </Switch>
                    </div>
                </div>
           </div>
       )
   }
}

export default Home;