import { X } from 'react-feather';
import { useState } from 'react';
import { useEffect } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { groupedOptions } from './shift.js';

const animatedComponents = makeAnimated();

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};

const formatGroupLabel = (data) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

const Modal = (props) => {
  const [timeSelected, setTimeSelected] = useState([]);
  console.log(timeSelected);
  return (
    <div
      className="modal fade new-member"
      id="new-member"
      role="dialog"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content  radius-xl">
          <div className="modal-header">
            <h6 className="modal-title fw-500" id="staticBackdropLabel">
              Thêm thợ cắt tóc
            </h6>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <X />
            </button>
          </div>
          <div className="modal-body">
            <div className="new-member-modal">
              <form>
                <div className="form-group mb-20">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Duran Clayton"
                  />
                </div>
                <div className="form-group mb-20">
                  <Select
                    components={animatedComponents}
                    closeMenuOnSelect={false}
                    options={groupedOptions}
                    isMulti
                    formatGroupLabel={formatGroupLabel}
                    onChange={(e) =>
                      setTimeSelected(e.map((item) => item.value))
                    }
                  />
                </div>
                <div className="form-group mb-20">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    placeholder="Project description"
                    defaultValue={''}
                  />
                </div>
                <div className="form-group textarea-group">
                  <label className="mb-15">status</label>
                  <div className="d-flex">
                    <div className="project-task-list__left d-flex align-items-center">
                      <div className="checkbox-group d-flex mr-50 pr-10">
                        <div className="checkbox-theme-default custom-checkbox checkbox-group__single d-flex">
                          <input
                            className="checkbox"
                            type="checkbox"
                            id="check-grp-1"
                            defaultChecked=""
                          />
                          <label
                            htmlFor="check-grp-1"
                            className="fs-14 color-light strikethrough"
                          >
                            status
                          </label>
                        </div>
                      </div>
                      <div className="checkbox-group d-flex mr-50 pr-10">
                        <div className="checkbox-theme-default custom-checkbox checkbox-group__single d-flex">
                          <input
                            className="checkbox"
                            type="checkbox"
                            id="check-grp-2"
                          />
                          <label
                            htmlFor="check-grp-2"
                            className="fs-14 color-light strikethrough"
                          >
                            Deactivated
                          </label>
                        </div>
                      </div>
                      <div className="checkbox-group d-flex">
                        <div className="checkbox-theme-default custom-checkbox checkbox-group__single d-flex">
                          <input
                            className="checkbox"
                            type="checkbox"
                            id="check-grp-3"
                          />
                          <label
                            htmlFor="check-grp-3"
                            className="fs-14 color-light strikethrough"
                          >
                            bloked
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex new-member-calendar">
                  <div className="form-group w-100 mr-sm-15 form-group-calender">
                    <label htmlFor="datepicker">start Date</label>
                    <div className="position-relative">
                      <input
                        type="text"
                        className="form-control"
                        id="datepicker"
                        placeholder="mm/dd/yyyy"
                      />
                      <a href="#">
                        <span data-feather="calendar" />
                      </a>
                    </div>
                  </div>
                  <div className="form-group w-100 form-group-calender">
                    <label htmlFor="datepicker2">End Date</label>
                    <div className="position-relative">
                      <input
                        type="text"
                        className="form-control"
                        id="datepicker2"
                        placeholder="mm/dd/yyyy"
                      />
                      <a href="#">
                        <span data-feather="calendar" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="button-group d-flex pt-25">
                  <button className="btn btn-primary btn-default btn-squared text-capitalize">
                    add new project
                  </button>
                  <button className="btn btn-light btn-default btn-squared fw-400 text-capitalize b-light color-light">
                    cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
