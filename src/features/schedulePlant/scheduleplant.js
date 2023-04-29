import React from 'react';
import './Scheduleplant.css';
import delet from '../../assets/icons/delete.svg';
import edit from '../../assets/icons/edit.svg';
import Modal from 'react-modal';
import DatePicker from "react-datepicker";
import { connect } from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";

Modal.setAppElement(document.getElementById('root'));

const customStyles = {
  content : {
    top                   : '55%',
    left                  : '60%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    border                : '0.5px solid #ecf0f1',
    padding               : '0px',
    width                 : '500px',
    height                : '75%'
  }
};
class SchedulePlant extends React.Component {

constructor() {
  super();
  this.state = {
    modalIsOpen: false,
    calendar: false,
    startDate: new Date()
  };
  this.openModal = this.openModal.bind(this);
   this.closeModal = this.closeModal.bind(this);
   this.handleChange = this.handleChange.bind(this);
}

openModal() {
  console.log('open clandj');
 this.setState({ modalIsOpen: true });
}

closeModal() {
 this.setState({modalIsOpen: false});
}

handleChange(date) {
   this.setState({
     startDate: date
   });
 }

    render() {
        return (
            <React.Fragment>
                <div class="card">
                  <div class="card-header">
                    <h2 class="scheduleHeader">Rules</h2>
                    <div class="heading-elements">
                      <ul class="list-inline mb-0">
                        <li>
                          <button onClick={this.openModal} type="button" class="btn btn-outline-primary square btn-min-width mr-1 mb-1">
                            Add Rule
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="card-content">
                    <div id="audience-list-scroll" class="table-responsive height-300 position-relative">
                      <table class="table mb-0">
                        <thead>
                          <tr>
                            <th>Serial No</th>
                            <th>Frequency</th>
                            <th>Start</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>

                          <tr>
                            <td>One</td>
                            <td>Daily</td>
                            <td><p class="badge badge-danger">18:00</p></td>
                            <td>
                              <img src={edit} alt={edit} class="icons"/>
                              <img src={delet} alt={delet} class="icons" />
                            </td>
                          </tr>
                          <tr>
                            <td>Two</td>
                            <td>Weekly</td>
                            <td><p class="badge badge-danger">Thursday, 18:00</p></td>
                            <td>
                              <img src={edit} alt={edit} class="icons"/>
                              <img src={delet} alt={delet} class="icons" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <Modal
                   isOpen={this.state.modalIsOpen}
                   onAfterOpen={this.afterOpenModal}
                   onRequestClose={this.closeModal}
                   style={customStyles}
                   contentLabel="Set a Schedule"
                 >
                  <div class="row justify-content-md-center">
                    <div class="col-md-12 col-xs-12 col-lg-12">
                      <div class="card">
                        <div class="card-header header-color">
                          <h3 class="formfont">Schedule a Drive</h3>
                          <div class="heading-elements">
                            <ul class="list-inline mb-0">
                              <li>
                                <a data-action="close">
                                  <i class="ft-x" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="card-content collapse show">
                          <div class="card-text dialog">
                            <p>Please schedule a cleaning drive for the whole plant from here. Here frequency denotes the frequency of executing these drives. It can range from just once to weekly and daily cycles.</p>
                          </div>
                          <form class="form dialog">
                            <div class="form-body">

                              <div class="form-group element-spacing">
                                <label for="eventRegInput1">Frequency</label>
                                <div class="input-group">
              										<div class="d-inline-block custom-control custom-radio mr-1">
                                      <input type="radio" name="customer2" class="custom-control-input" id="once" />
                                      <label class="custom-control-label" for="once">One time</label>
                                  </div>
                                  <div class="d-inline-block custom-control custom-radio mr-1">
                                      <input type="radio" name="customer2" class="custom-control-input" id="daily" />
                                      <label class="custom-control-label" for="daily">Daily</label>
                                  </div>
                                  <div class="d-inline-block custom-control custom-radio">
                                      <input type="radio" name="customer2" class="custom-control-input" id="weekly" />
                                      <label class="custom-control-label" for="weekly">Weekly</label>
                                  </div>
									              </div>
                              </div>

                              <div class="form-group spacing">
                                <label for="eventRegInput1">Start time</label>
                                <div class="input-group date" id="datetimepicker2" onClick={this.openCalendar}>
                                    <DatePicker
                                      selected={this.state.startDate}
                                      onChange={this.handleChange}
                                      showTimeSelect
                                       timeFormat="HH:mm"
                                       timeIntervals={15}
                                       dateFormat="MMMM d, yyyy h:mm aa"
                                       timeCaption="time"
                                    />
                                </div>
                              </div>

                              <div class="form-actions center element-spacing">
                								<button type="reset" class="btn btn-warning mr-1" onClick={this.closeModal}>
                									<i class="ft-x"></i> Cancel
                								</button>
                								<button type="submit" class="btn btn-primary">
                									<i class="fa fa-check-square-o"></i> Save
                								</button>
                							</div>

                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                 </Modal>
                </div>
            </React.Fragment>
        )
    }
}

export default connect(null, null)(SchedulePlant);
