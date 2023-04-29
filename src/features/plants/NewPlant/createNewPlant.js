import React from 'react';
import './createnewplant.css';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { createNewPlant } from '../plants_actions';

// import { browserHistory } from 'react-router';
import {history} from '../../../store/configureStore';

class CreateNewPlant extends React.Component {

  handleFormSubmit = (values) => {
    console.log(values);
    this.props.createNewPlant(values);
  }

    render() {
      const { handleSubmit, pristine, submitting, reset } = this.props
        return (
            <div className="horizontal-form-layouts">

                <div class="row">
		<div class="col-md-12">
	        <div class="card">
	            <div class="card-header">
	                <h4 class="card-title" id="horz-layout-icons">Create New Plant</h4>
	                <a class="heading-elements-toggle"><i class="fa fa-ellipsis-v font-medium-3"></i></a>

	            </div>
	            <div class="card-content collpase show">
	                <div class="card-body">
						<div class="card-text">
							<p><code>Create a new plant for client using this section. </code> </p>
						</div>

	                    <form onSubmit={handleSubmit(this.handleFormSubmit)} class="form form-horizontal">
                        <div class="form-actions right">

	                    </div>
	                    	<div class="form-body">
	                			<div class="form-group row">
		                            <label class="center col-md-3 label-control" for="timesheetinput1">Plant Name</label>
		                            <div class="col-md-9">
			                            <div class="position-relative ">
                                  <Field
                                      className="form-control"
                                      name="name"
                                      component="input"
                                      type="text"
                                      placeholder="Name of the plant"
                                  />

			                            </div>
		                            </div>
		                        </div>
	                			<div class="form-group row">
	                            	<label class="center col-md-3 label-control" for="timesheetinput2">Client Name</label>
	                            	<div class="col-md-9">
			                            <div class="position-relative">
                                  <Field
                                      className="form-control"
                                      name="client"
                                      component="input"
                                      type="text"
                                      placeholder="Name of the client"
                                  />

			                            </div>
			                    	</div>
		                        </div>

                                <div class="form-group row">
	                            	<label class="center col-md-3 label-control" for="timesheetinput2">Plant Address</label>
	                            	<div class="col-md-9">
			                            <div class="position-relative ">
                                  <Field
                                      className="form-control"
                                      name="address"
                                      component="input"
                                      type="text"
                                      placeholder="Address of the plant"
                                  />

			                            </div>
			                    	</div>
		                      </div>
							</div>

	                        <div class="form-actions right">

  	                            <button type="button" class="btn btn-warning mr-1" onClick={history.goBack}>
  	                            	<i class="ft-x"></i> Cancel
  	                            </button>

	                            <button type="submit" class="btn btn-primary">
	                                <i class="fa fa-check-square-o"></i> Create Plant
	                            </button>
	                        </div>
	                    </form>

	                </div>
	            </div>
	        </div>
	    </div>
	</div>
            </div>
        )
    }
}

export default connect(null, { createNewPlant })(reduxForm({
    form: 'addPlant'
})(CreateNewPlant));
