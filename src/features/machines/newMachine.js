import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { history } from '../../store/configureStore';
import { RequestNewMachine } from './machinesActions';


class NewMachine extends Component {

  handleFormSubmit = (values) => {
    console.log(values);
    console.log(this.props.clientPlantData.id);
    this.props.RequestNewMachine(values.name, this.props.clientPlantData.id);
  }

  render() {
    const { handleSubmit, pristine, submitting, reset } = this.props
    console.log(this.props);
    return (
      <div className="horizontal-form-layouts">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                 <h4 class="card-title" id="horz-layout-icons">Create New Machine</h4>
              </div>
                <div class="card-content collpase show">
                  <div class="card-body">
                    <div class="card-text">
                      <p><code>Create a new mahcine for this plant using this section. </code> </p>
                    </div>

                      <form class="form form-horizontal" onSubmit={handleSubmit(this.handleFormSubmit)}>
                        <div class="form-body">
                          <div class="form-group row">
                            <label class="center col-md-3 label-control" for="timesheetinput1">Machine Name</label>
                            <div class="col-md-9">
                              <div class="position-relative ">
                                <Field
                                    className="form-control"
                                    name="name"
                                    component="input"
                                    type="text"
                                    placeholder="Name of the Machine"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="form-actions right">
                            <button type="button" class="btn btn-warning mr-1" onClick={history.goBack}>
                              <i class="ft-x"></i> Cancel
                            </button>

                            <button type="submit" class="btn btn-primary">
                              <span class={this.props.loading_new_machine ? "spinner-border spinner-border-sm" : ""} role="status" aria-hidden="true">
                              </span>
                                {this.props.loading_new_machine ? 'Loading': 'Create Machine'}
                            </button>
                          </div>
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

const mapStateToProps = (state) => {
  const { loading_new_machine } = state.machinesList;
  return { loading_new_machine };
}
export default connect(mapStateToProps, { RequestNewMachine })(reduxForm({
    form: 'addMachine'
})(NewMachine));
