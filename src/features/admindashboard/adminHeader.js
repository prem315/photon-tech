import React from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { adminlogOut } from '../adminauth/adminactions';
import './admin.css';

import '../../components/dashboard.css';
import logo from '../../app-assets/images/logo/stack-logo.png';

//import stackImg from '../../app-assets/images/slider/slider-2.png'
//import logo from '../../app-assets/images/logo/stack-logo.png'
import avatar from '../../app-assets/images/portrait/small/avatar-s-1.png'



class AdminHeader extends React.Component {

	constructor(props) {
        super(props)

        this.toggleClass= this.toggleClass.bind(this);
				this.toggleNotifications = this.toggleNotifications.bind(this);
        this.state = {
            active: false,
						expanded: false
        };
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

	handleSignout() {
		console.log("called")
        this.props.adminlogOut();
	}

	toggleNotifications() {
		if (this.state.expanded) {
			this.setState({ expanded: false });
		} else {
			this.setState({ expanded: true })
		}

	}
    render() {
    return (
        <React.Fragment>



    <nav class="header-navbar navbar-expand-lg navbar navbar-with-menu fixed-top navbar-semi-dark navbar-shadow">
      <div class="navbar-wrapper">
        <div class="navbar-header expanded">
          <ul class="nav navbar-nav flex-row">
            <li class="nav-item mobile-menu d-lg-none mr-auto"><a class="nav-link nav-menu-main menu-toggle hidden-xs is-active" href="#"><i class="ft-menu font-large-1"></i></a></li>
            <li class="nav-item mr-auto"><a class="navbar-brand" href="../../../html/ltr/vertical-modern-menu-template/index.html"><img class="brand-logo" alt="stack admin logo" src={logo} />
                <h2 class="brand-text">Photom</h2></a></li>
            <li class="nav-item d-none d-lg-block nav-toggle"><a class="nav-link modern-nav-toggle pr-0" data-toggle="collapse"><i class="toggle-icon ft-toggle-right font-medium-3 white" data-ticon="ft-toggle-right"></i></a></li>
            <li class="nav-item d-lg-none"><a class="nav-link open-navbar-container" data-toggle="collapse" data-target="#navbar-mobile"><i class="fa fa-ellipsis-v"></i></a></li>
          </ul>
        </div>
        <div class="navbar-container content">
          <div class="collapse navbar-collapse" id="navbar-mobile">
            <ul class="nav navbar-nav mr-auto float-left">



            </ul>
            <ul class="nav navbar-nav float-right">

              <li
							class={this.state.expanded ? "dropdown dropdown-notification nav-item show" : "dropdown dropdown-notification nav-item" }
							onClick={this.toggleNotifications}
							>
								<a class="nav-link nav-link-label" aria-expanded={this.state.expanded ? true : false } href="#" data-toggle="dropdown">
									<i data-feather="bell" class="ficon ft-bell"></i>
									<span class="badge badge-pill badge-danger badge-up">5</span>
								</a>
                <ul class={this.state.expanded ? "dropdown-menu dropdown-menu-media dropdown-menu-right show" : "dropdown-menu dropdown-menu-media dropdown-menu-right"}>
									<li class="dropdown-menu-header">
										<h6 class="dropdown-header m-0"><span class="grey darken-2">Notifications</span><span class="notification-tag badge badge-danger float-right m-0">5 New</span></h6>
									</li>
                  <li class="scrollable-container media-list ps"><a href="javascript:void(0)">
                      <div class="media">
                        <div class="media-left align-self-center"><i class="ft-plus-square icon-bg-circle bg-cyan"></i></div>
                        <div class="media-body">
                          <h6 class="media-heading">You have new order!</h6>
                          <p class="notification-text font-small-3 text-muted">Lorem ipsum dolor sit amet, consectetuer elit.</p><small>
                            <time class="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">30 minutes ago</time></small>
                        </div>
                      </div></a><a href="javascript:void(0)">
                      <div class="media">
                        <div class="media-left align-self-center"><i class="ft-download-cloud icon-bg-circle bg-red bg-darken-1"></i></div>
                        <div class="media-body">
                          <h6 class="media-heading red darken-1">99% Server load</h6>
                          <p class="notification-text font-small-3 text-muted">Aliquam tincidunt mauris eu risus.</p><small>
                            <time class="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">Five hour ago</time></small>
                        </div>
                      </div></a><a href="javascript:void(0)">
                      <div class="media">
                        <div class="media-left align-self-center"><i class="ft-alert-triangle icon-bg-circle bg-yellow bg-darken-3"></i></div>
                        <div class="media-body">
                          <h6 class="media-heading yellow darken-3">Warning notifixation</h6>
                          <p class="notification-text font-small-3 text-muted">Vestibulum auctor dapibus neque.</p><small>
                            <time class="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">Today</time></small>
                        </div>
                      </div></a><a href="javascript:void(0)">
                      <div class="media">
                        <div class="media-left align-self-center"><i class="ft-check-circle icon-bg-circle bg-cyan"></i></div>
                        <div class="media-body">
                          <h6 class="media-heading">Complete the task</h6><small>
                            <time class="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">Last week</time></small>
                        </div>
                      </div></a><a href="javascript:void(0)">
                      <div class="media">
                        <div class="media-left align-self-center"><i class="ft-file icon-bg-circle bg-teal"></i></div>
                        <div class="media-body">
                          <h6 class="media-heading">Generate monthly report</h6><small>
                            <time class="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">Last month</time></small>
                        </div>
                      </div></a><div class="ps__rail-x" ><div class="ps__thumb-x" tabindex="0" ></div></div><div class="ps__rail-y"><div class="ps__thumb-y" tabindex="0"></div></div></li>
                  <li class="dropdown-menu-footer"><a class="dropdown-item text-muted text-center" href="javascript:void(0)">Read all notifications</a></li>
                </ul>
              </li>
              <li class="dropdown dropdown-notification nav-item"><a class="nav-link nav-link-label" href="#" data-toggle="dropdown"><i data-feather="mail" class="ficon ft-mail"></i><span class="badge badge-pill badge-warning badge-up">3</span></a>
                <ul class="dropdown-menu dropdown-menu-media dropdown-menu-right">
                  <li class="dropdown-menu-header">
                    <h6 class="dropdown-header m-0"><span class="grey darken-2">Messages</span><span class="notification-tag badge badge-warning float-right m-0">4 New</span></h6>
                  </li>
                  <li class="scrollable-container media-list ps"><a href="javascript:void(0)">
                      <div class="media">
                        <div class="media-left"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-1.png" alt="avatar" /><i></i></span></div>
                        <div class="media-body">
                          <h6 class="media-heading">Margaret Govan</h6>
                          <p class="notification-text font-small-3 text-muted">I like your portfolio, let's start.</p><small>
                            <time class="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">Today</time></small>
                        </div>
                      </div></a><a href="javascript:void(0)">
                      <div class="media">
                        <div class="media-left"><span class="avatar avatar-sm avatar-busy rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-2.png" alt="avatar" /><i></i></span></div>
                        <div class="media-body">
                          <h6 class="media-heading">Bret Lezama</h6>
                          <p class="notification-text font-small-3 text-muted">I have seen your work, there is</p><small>
                            <time class="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">Tuesday</time></small>
                        </div>
                      </div></a><a href="javascript:void(0)">
                      <div class="media">
                        <div class="media-left"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-3.png" alt="avatar" /><i></i></span></div>
                        <div class="media-body">
                          <h6 class="media-heading">Carie Berra</h6>
                          <p class="notification-text font-small-3 text-muted">Can we have call in this week ?</p><small>
                            <time class="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">Friday</time></small>
                        </div>
                      </div></a><a href="javascript:void(0)">
                      <div class="media">
                        <div class="media-left"><span class="avatar avatar-sm avatar-away rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-6.png" alt="avatar" /><i></i></span></div>
                        <div class="media-body">
                          <h6 class="media-heading">Eric Alsobrook</h6>
                          <p class="notification-text font-small-3 text-muted">We have project party this saturday.</p><small>
                            <time class="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">last month</time></small>
                        </div>
                      </div></a><div class="ps__rail-x" ><div class="ps__thumb-x" tabindex="0" ></div></div><div class="ps__rail-y" ><div class="ps__thumb-y" tabindex="0" ></div></div></li>
                  <li class="dropdown-menu-footer">
										<a class="dropdown-item text-muted text-center" href="javascript:void(0)">Read all messages</a>
									</li>
                </ul>
              </li>
              <li class="dropdown dropdown-user nav-item" className={this.state.active ? 'dropdown dropdown-user nav-item show': null}
                onClick={this.toggleClass} >
                    <a class="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown"><span class="avatar avatar-online"><img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" /><i></i></span><span class="user-name">{this.props.username}</span></a>
                <div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="user-profile.html"><i class="ft-user"></i> Edit Profile</a>
                  <div class="dropdown-divider"></div><a class="dropdown-item" onClick={() => this.handleSignout()}><i class="ft-power"></i> Logout</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>



    <div class="main-menu menu-fixed menu-dark menu-accordion menu-shadow left-menu-header" data-scroll-to-active="true">
        <div class="main-menu-content ps ps--active-y">
            <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                <li class="navigation-header"><span>General</span><i class=" ft-minus" data-toggle="tooltip" data-placement="right" data-original-title="General"></i>
                </li>
                <li class="nav-item has-sub">
                    <NavLink to={`/admindashboard/plants`} >
                        <i data-feather="home" class="left-sidebar-icon"></i>
                        <span class="menu-title" data-i18n="">Dashboard</span>
                    </NavLink>

                </li>
                <li class="nav-item has-sub">
                    <NavLink to="/admindashboard/about" activeClassName="active"
                    >
                    <i class="ft-layout"></i>
                    <span class="menu-title" data-i18n="">About</span>
                    </NavLink>
                </li>

                <li class="nav-item has-sub">
                    <NavLink to="/admindashboard/history" activeClassName="active">
                    <i class="ft-layout"></i>
                    <span class="menu-title" data-i18n="">History</span>
                    </NavLink>
                </li>
                <li class="nav-item has-sub" >
                    <NavLink to="/admindashboard/notifications" activeClassName="active"
                    >
                    <i class="ft-layout"></i>
                    <span class="menu-title" data-i18n="">Live Feed</span>
                    </NavLink>
                </li>
                <li class="nav-item has-sub" onClick={() => this.handleSignout()} >
                    <a href="#">
                    <i class="ft-layout"></i>
                    <span class="menu-title" data-i18n="">Logout</span>
                      </a>
                </li>
                {/* <li class="nav-item has-sub"  activeClassName="active" onClick={() => this.handleSignout()} >
                    <NavLink to={`/`}

                    >
                    <i class="ft-monitor"></i>
                    <span class="menu-title" data-i18n="">Log Out</span>
                    </NavLink>
                </li> */}
            </ul>
        <div class="ps__rail-x ps-rail-x" >
        <div class="ps__thumb-x ps-thumb-x" tabindex="0" >
        </div></div>
        <div class="ps__rail-y ps-rail-y-left-header">
        <div class="ps__thumb-y ps-thumb-y-left-header" tabindex="0">
        </div>
        </div>
        </div>
    </div>

    </React.Fragment>
	)
	}
}

const mapStateToProps = (state) => {
    return {
        location: state.router.location.pathname,
        username: state.adminAuthReducer.user.displayName
    }
}

export default connect(mapStateToProps, {adminlogOut})(AdminHeader);
