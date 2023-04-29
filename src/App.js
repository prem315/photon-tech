import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch, Redirect } from 'react-router'
import { connect } from 'react-redux';
import { history } from './store/configureStore';
import AdminLogin from './features/adminauth/adminlogin';
import AdminDashboard from './features/admindashboard/admindashboard';


// import '../src/app-assets/vendors/css/vendors.min.css';

// theme css
import './app-assets/css/bootstrap.css';
import './app-assets/css/bootstrap-extended.css';
import './app-assets/css/colors.css';
import './app-assets/css/components.css';
// page css
import './app-assets/css/core/menu/menu-types/vertical-menu.css';
import './app-assets/css/core/colors/palette-gradient.css';
import './app-assets/fonts/simple-line-icons/style.css';
import './app-assets/css/core/colors/palette-gradient.css';
import './app-assets/css/pages/timeline.css';
// icons
import './app-assets/vendors/css/weather-icons/climacons.min.css'

const PrivateRoute = ({component: Component, auth, ...props}) => {
	console.log(auth);
    return (
        <Route
            {...props}
            render={(props) => (auth === true)
                ? <Component {...props} />
                : <Redirect  to="/" to={{pathname: '/', state: {from: props.location}}} />}
        />
    );
};

const PublicRoute = ({component: Component, auth, ...props}) => {
	console.log(auth);
    return (
        <Route
            {...props}
            render={(props) => (auth === false)
                ? <Component {...props} />
                : <Redirect to='/admindashboard/plants' />}
        />
    );
};
// no match reducer
const NoMatch = ({ location }) => (
    <div>
        <h3>
            No match for <code>{location.pathname}</code>
        </h3>
    </div>
);

class App extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<ConnectedRouter history={history}>
				<Switch>
				<PublicRoute exact auth={this.props.auth} path="/" component={AdminLogin} />
				<PrivateRoute auth={this.props.auth} path="/admindashboard" component={AdminDashboard} />
				{/* <Route path="/clientdashboard" component={ClientDashboard} /> */}
				<Route component={NoMatch} />
				</Switch>
			</ConnectedRouter>
		)
	}
}

// const App = ({history}, props) => {
//   return(
//     <ConnectedRouter history={history}>
// 		<Switch>
// 		<PublicRoute exact auth={props.auth} path="/" component={AdminLogin} />
// 		<PrivateRoute auth={props.auth} path="/admindashboard" component={AdminDashboard} />
// 		{/* <Route path="/clientdashboard" component={ClientDashboard} /> */}
// 		<Route component={NoMatch} />
// 		</Switch>
//     </ConnectedRouter>
//   )
// }

const mapStateToProps = (state) => {
    return {
        auth: state.adminAuthReducer.isAuthenticated,
        //merchantRole: state.auth.merchantRole
    };
};

export default connect(mapStateToProps, null)(App);
