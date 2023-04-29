import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.css';
import { stacklogodark } from '../../app-assets/images/logo/stack-logo-dark.png';
import { adminloginRequest } from '../adminauth/adminactions';

const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }

    if (!values.password) {
      errors.password = "Please enter a password.";
    }

    return errors;
};



class AdminLogin extends React.Component {

    handleFormSubmit = (values) => {
        //console.log("click");
        console.log(values);
        this.props.adminloginRequest(values);
    };

    renderField = ({ input, label, type, imageSrc, dataFeather, dataFeatherClass, meta: { touched, error } }) => (
        <fieldset class="form-group position-relative has-icon-left mb-0">
            <input {...input}
                type={type}
                class="form-control form-control-lg"
                id="user-name"
                placeholder={label}
                 />
            {/* {touched && error && <div className="help-block">{error}</div>} */}
            {touched && (error && <span>{error}</span>) }
            <div class="form-control-position">
                <i data-feather={dataFeather} class={dataFeatherClass}></i>
            </div>
        </fieldset>
  	);

    renderError() {
      if (this.props.errors) {
        return (
          <p>{this.props.errors}</p>
        )
      }
    }

    render() {
        return (
            <React.Fragment>
                <div class="pace  pace-inactive">
                    <div class="pace-progress" data-progress-text="100%" data-progress="99" >
                        <div class="pace-progress-inner"></div>
                    </div>
                    <div class="pace-activity"></div>
                </div>

                <div class="app-content content login-content">
                            <div class="content-wrapper">
                                <div class="content-header row">
                                </div>
                                <div class="content-body"><section class="flexbox-container">
                            <div class="col-12 d-flex align-items-center justify-content-center">
                                <div class="col-lg-4 col-md-8 col-10 box-shadow-2 p-0">
                                    <div class="card border-grey border-lighten-3 m-0">
                                        <div class="card-header border-0">
                                            <div class="card-title text-center">
                                                <div class="p-1"><img src={stacklogodark} alt="photom" /></div>
                                            </div>
                                            <h6 class="card-subtitle line-on-side text-muted text-center font-small-3 pt-2"><span>Login with Photom</span></h6>
                                        </div>
                                        <div class="card-content">
                                            <div class="card-body">
                                                <form class="form-horizontal form-simple"
                                                action="" novalidate=""
                                                onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>


                                                    <Field
                                                        name="email"
                                                        component={this.renderField}
                                                        className="form-control"
                                                        type="email"
                                                        label="Username"
                                                        dataFeather="user"
                                                        dataFeatherClass="ft-user"
                                                        imageSrc="pre-icon os-icon os-icon-user-male-circle"/>
                                                    <Field
                                                        name="password"
                                                        component={this.renderField}
                                                        className="form-control"
                                                        type="password"
                                                        label="Password"
                                                        dataFeather="key"
                                                        dataFeatherClass="ft-key"
                                                        imageSrc="pre-icon os-icon os-icon-fingerprint"/>

                                                    <div class="form-group row">
                                                        <div class="col-sm-6 col-12 text-center text-sm-left">
                                                            <fieldset>
                                                                <input type="checkbox" id="remember-me" class="chk-remember" />
                                                                <label for="remember-me"> Remember Me</label>
                                                            </fieldset>
                                                        </div>
                                                        <div class="col-sm-6 col-12 text-center text-sm-right"><a href="recover-password.html" class="card-link">Forgot Password?</a></div>
                                                    </div>

                                                    <button type="submit" class="btn btn-primary btn-lg btn-block">
                                                      <span class={this.props.loading ? "spinner-grow spinner-grow-sm float-left index" : "hidden"} role="status" aria-hidden="true" />
                                                    <i data-feather="unlock" class="ft-unlock"></i>

                                                    Login
                                                    </button>

                                                    <div class="form-group row">
                                                      <div class="col-sm-6 col-12 text-center text-sm-left">
                                                        {this.renderError()}
                                                      </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <div class="">
                                                <p class="float-sm-left text-center m-0"><Link to="#" class="card-link">client</Link></p>
                                                <p class="float-sm-right text-center m-0">New to Photom? <Link to="/admindashboard/plants" class="card-link">Dashboard</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}

//export default AdminLogin

const mapStateToProps = ({ adminAuthReducer }) => {
    console.log(adminAuthReducer.loading);
    return {
        errors: adminAuthReducer.errors, loading : adminAuthReducer.loading
    }
}

export default connect(mapStateToProps, {adminloginRequest})(reduxForm({
    form: 'adminlogin',
    validate
})(AdminLogin));
