const Product = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb-main user-member justify-content-sm-between ">
            <div className=" d-flex flex-wrap justify-content-center breadcrumb-main__wrapper">
              <div className="d-flex align-items-center user-member__title justify-content-center mr-sm-25">
                <h4 className="text-capitalize fw-500 breadcrumb-title">
                  users list datatable
                </h4>
                <span className="sub-title ml-sm-25 pl-sm-25">274 Users</span>
              </div>
              <form
                action="/"
                className="d-flex align-items-center user-member__form my-sm-0 my-2"
              >
                <span data-feather="search" />
                <input
                  className="form-control mr-sm-2 border-0 box-shadow-none"
                  type="search"
                  placeholder="Search by Name"
                  aria-label="Search"
                />
              </form>
            </div>
            <div className="action-btn">
              <a
                href="#"
                className="btn px-15 btn-primary"
                data-toggle="modal"
                data-target="#new-member"
              >
                <i className="las la-plus fs-16" />
                Add New Member
              </a>
              {/* Modal */}
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
                      <h6
                        className="modal-title fw-500"
                        id="staticBackdropLabel"
                      >
                        Create project
                      </h6>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span data-feather="x" />
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
                            <div className="category-member">
                              <select
                                className="js-example-basic-single js-states form-control"
                                id="category-member"
                              >
                                <option value="JAN">1</option>
                                <option value="FBR">2</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group mb-20">
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows={3}
                              placeholder="Project description"
                              defaultValue={""}
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
                          <div className="mb-25">
                            <div className="form-group mb-10">
                              <label htmlFor="name47">project member</label>
                              <input
                                type="text"
                                className="form-control"
                                id="name47"
                                placeholder="Search members"
                              />
                            </div>
                            <ul className="d-flex flex-wrap mb-20 user-group-people__parent">
                              <li>
                                <a href="#">
                                  <img
                                    className="rounded-circle wh-34"
                                    src="img/tm1.png"
                                    alt="author"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img
                                    className="rounded-circle wh-34"
                                    src="img/tm2.png"
                                    alt="author"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img
                                    className="rounded-circle wh-34"
                                    src="img/tm3.png"
                                    alt="author"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img
                                    className="rounded-circle wh-34"
                                    src="img/tm4.png"
                                    alt="author"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img
                                    className="rounded-circle wh-34"
                                    src="img/tm5.png"
                                    alt="author"
                                  />
                                </a>
                              </li>
                            </ul>
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
              {/* Modal */}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="userDatatable global-shadow border p-30 bg-white radius-xl w-100 mb-30">
            <div className="table-responsive">
              <table className="table mb-0 table-borderless">
                <thead>
                  <tr className="userDatatable-header">
                    <th>
                      <div className="d-flex align-items-center">
                        <div className="custom-checkbox  check-all">
                          <input
                            className="checkbox"
                            type="checkbox"
                            id="check-3"
                          />
                          <label htmlFor="check-3">
                            <span className="checkbox-text userDatatable-title">
                              user
                            </span>
                          </label>
                        </div>
                      </div>
                    </th>
                    <th>
                      <span className="userDatatable-title">emaill</span>
                    </th>
                    <th>
                      <span className="userDatatable-title">company</span>
                    </th>
                    <th>
                      <span className="userDatatable-title">position</span>
                    </th>
                    <th>
                      <span className="userDatatable-title">join date</span>
                    </th>
                    <th>
                      <span className="userDatatable-title">status</span>
                    </th>
                    <th>
                      <span className="userDatatable-title float-right">
                        action
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex">
                        <div className="userDatatable__imgWrapper d-flex align-items-center">
                          <div className="checkbox-group-wrapper">
                            <div className="checkbox-group d-flex">
                              <div className="checkbox-theme-default custom-checkbox checkbox-group__single d-flex">
                                <input
                                  className="checkbox"
                                  type="checkbox"
                                  id="check-grp-12"
                                />
                                <label htmlFor="check-grp-12" />
                              </div>
                            </div>
                          </div>
                          <a
                            href="#"
                            className="profile-image rounded-circle d-block m-0 wh-38"
                            style={{
                              backgroundImage: 'url("img/tm6.png")',
                              backgroundSize: "cover",
                            }}
                          />
                        </div>
                        <div className="userDatatable-inline-title">
                          <a href="#" className="text-dark fw-500">
                            <h6>Kellie Marquot</h6>
                          </a>
                          <p className="d-block mb-0">San Francisco, CA</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        john-keller@gmail.com
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        Business Development
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">Web Developer</div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        January 20, 2020
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content d-inline-block">
                        <span className="bg-opacity-success  color-success rounded-pill userDatatable-content-status active">
                          active
                        </span>
                      </div>
                    </td>
                    <td>
                      <ul className="orderDatatable_actions mb-0 d-flex flex-wrap">
                        <li>
                          <a href="#" className="view">
                            <span data-feather="eye" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="edit">
                            <span data-feather="edit" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="remove">
                            <span data-feather="trash-2" />
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex">
                        <div className="userDatatable__imgWrapper d-flex align-items-center">
                          <div className="checkbox-group-wrapper">
                            <div className="checkbox-group d-flex">
                              <div className="checkbox-theme-default custom-checkbox checkbox-group__single d-flex">
                                <input
                                  className="checkbox"
                                  type="checkbox"
                                  id="check-grp-13"
                                />
                                <label htmlFor="check-grp-13" />
                              </div>
                            </div>
                          </div>
                          <a
                            href="#"
                            className="profile-image rounded-circle d-block m-0 wh-38"
                            style={{
                              backgroundImage: 'url("img/tm1.png")',
                              backgroundSize: "cover",
                            }}
                          />
                        </div>
                        <div className="userDatatable-inline-title">
                          <a href="#" className="text-dark fw-500">
                            <h6>Kellie Marquot</h6>
                          </a>
                          <p className="d-block mb-0">San Francisco, CA</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        john-keller@gmail.com
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        Business Development
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">Web Developer</div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        January 20, 2020
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content d-inline-block">
                        <span className="bg-opacity-warning  color-warning rounded-pill userDatatable-content-status active">
                          deactivete
                        </span>
                      </div>
                    </td>
                    <td>
                      <ul className="orderDatatable_actions mb-0 d-flex flex-wrap">
                        <li>
                          <a href="#" className="view">
                            <span data-feather="eye" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="edit">
                            <span data-feather="edit" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="remove">
                            <span data-feather="trash-2" />
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex">
                        <div className="userDatatable__imgWrapper d-flex align-items-center">
                          <div className="checkbox-group-wrapper">
                            <div className="checkbox-group d-flex">
                              <div className="checkbox-theme-default custom-checkbox checkbox-group__single d-flex">
                                <input
                                  className="checkbox"
                                  type="checkbox"
                                  id="check-grp-14"
                                />
                                <label htmlFor="check-grp-14" />
                              </div>
                            </div>
                          </div>
                          <a
                            href="#"
                            className="profile-image rounded-circle d-block m-0 wh-38"
                            style={{
                              backgroundImage: 'url("img/tm2.png")',
                              backgroundSize: "cover",
                            }}
                          />
                        </div>
                        <div className="userDatatable-inline-title">
                          <a href="#" className="text-dark fw-500">
                            <h6>Kellie Marquot</h6>
                          </a>
                          <p className="d-block mb-0">San Francisco, CA</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        john-keller@gmail.com
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        Business Development
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">Web Developer</div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        January 20, 2020
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content d-inline-block">
                        <span className="bg-opacity-danger  color-danger rounded-pill userDatatable-content-status active">
                          blocked
                        </span>
                      </div>
                    </td>
                    <td>
                      <ul className="orderDatatable_actions mb-0 d-flex flex-wrap">
                        <li>
                          <a href="#" className="view">
                            <span data-feather="eye" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="edit">
                            <span data-feather="edit" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="remove">
                            <span data-feather="trash-2" />
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex">
                        <div className="userDatatable__imgWrapper d-flex align-items-center">
                          <div className="checkbox-group-wrapper">
                            <div className="checkbox-group d-flex">
                              <div className="checkbox-theme-default custom-checkbox checkbox-group__single d-flex">
                                <input
                                  className="checkbox"
                                  type="checkbox"
                                  id="check-grp-4"
                                />
                                <label htmlFor="check-grp-4" />
                              </div>
                            </div>
                          </div>
                          <a
                            href="#"
                            className="profile-image rounded-circle d-block m-0 wh-38"
                            style={{
                              backgroundImage: 'url("img/tm3.png")',
                              backgroundSize: "cover",
                            }}
                          />
                        </div>
                        <div className="userDatatable-inline-title">
                          <a href="#" className="text-dark fw-500">
                            <h6>Kellie Marquot</h6>
                          </a>
                          <p className="d-block mb-0">San Francisco, CA</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        john-keller@gmail.com
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        Business Development
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">Web Developer</div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        January 20, 2020
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content d-inline-block">
                        <span className="bg-opacity-success  color-success rounded-pill userDatatable-content-status active">
                          active
                        </span>
                      </div>
                    </td>
                    <td>
                      <ul className="orderDatatable_actions mb-0 d-flex flex-wrap">
                        <li>
                          <a href="#" className="view">
                            <span data-feather="eye" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="edit">
                            <span data-feather="edit" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="remove">
                            <span data-feather="trash-2" />
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex">
                        <div className="userDatatable__imgWrapper d-flex align-items-center">
                          <div className="checkbox-group-wrapper">
                            <div className="checkbox-group d-flex">
                              <div className="checkbox-theme-default custom-checkbox checkbox-group__single d-flex">
                                <input
                                  className="checkbox"
                                  type="checkbox"
                                  id="check-grp-5"
                                />
                                <label htmlFor="check-grp-5" />
                              </div>
                            </div>
                          </div>
                          <a
                            href="#"
                            className="profile-image rounded-circle d-block m-0 wh-38"
                            style={{
                              backgroundImage: 'url("img/tm4.png")',
                              backgroundSize: "cover",
                            }}
                          />
                        </div>
                        <div className="userDatatable-inline-title">
                          <a href="#" className="text-dark fw-500">
                            <h6>Kellie Marquot</h6>
                          </a>
                          <p className="d-block mb-0">San Francisco, CA</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        john-keller@gmail.com
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        Business Development
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">Web Developer</div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        January 20, 2020
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content d-inline-block">
                        <span className="bg-opacity-success  color-success rounded-pill userDatatable-content-status active">
                          active
                        </span>
                      </div>
                    </td>
                    <td>
                      <ul className="orderDatatable_actions mb-0 d-flex flex-wrap">
                        <li>
                          <a href="#" className="view">
                            <span data-feather="eye" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="edit">
                            <span data-feather="edit" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="remove">
                            <span data-feather="trash-2" />
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex">
                        <div className="userDatatable__imgWrapper d-flex align-items-center">
                          <div className="checkbox-group-wrapper">
                            <div className="checkbox-group d-flex">
                              <div className="checkbox-theme-default custom-checkbox checkbox-group__single d-flex">
                                <input
                                  className="checkbox"
                                  type="checkbox"
                                  id="check-grp-6"
                                />
                                <label htmlFor="check-grp-6" />
                              </div>
                            </div>
                          </div>
                          <a
                            href="#"
                            className="profile-image rounded-circle d-block m-0 wh-38"
                            style={{
                              backgroundImage: 'url("img/tm5.png")',
                              backgroundSize: "cover",
                            }}
                          />
                        </div>
                        <div className="userDatatable-inline-title">
                          <a href="#" className="text-dark fw-500">
                            <h6>Kellie Marquot</h6>
                          </a>
                          <p className="d-block mb-0">San Francisco, CA</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        john-keller@gmail.com
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        Business Development
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">Web Developer</div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        January 20, 2020
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content d-inline-block">
                        <span className="bg-opacity-success  color-success rounded-pill userDatatable-content-status active">
                          active
                        </span>
                      </div>
                    </td>
                    <td>
                      <ul className="orderDatatable_actions mb-0 d-flex flex-wrap">
                        <li>
                          <a href="#" className="view">
                            <span data-feather="eye" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="edit">
                            <span data-feather="edit" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="remove">
                            <span data-feather="trash-2" />
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex">
                        <div className="userDatatable__imgWrapper d-flex align-items-center">
                          <div className="checkbox-group-wrapper">
                            <div className="checkbox-group d-flex">
                              <div className="checkbox-theme-default custom-checkbox checkbox-group__single d-flex">
                                <input
                                  className="checkbox"
                                  type="checkbox"
                                  id="check-grp-7"
                                />
                                <label htmlFor="check-grp-7" />
                              </div>
                            </div>
                          </div>
                          <a
                            href="#"
                            className="profile-image rounded-circle d-block m-0 wh-38"
                            style={{
                              backgroundImage: 'url("img/tm6.png")',
                              backgroundSize: "cover",
                            }}
                          />
                        </div>
                        <div className="userDatatable-inline-title">
                          <a href="#" className="text-dark fw-500">
                            <h6>Kellie Marquot</h6>
                          </a>
                          <p className="d-block mb-0">San Francisco, CA</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        john-keller@gmail.com
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        Business Development
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">Web Developer</div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        January 20, 2020
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content d-inline-block">
                        <span className="bg-opacity-success  color-success rounded-pill userDatatable-content-status active">
                          active
                        </span>
                      </div>
                    </td>
                    <td>
                      <ul className="orderDatatable_actions mb-0 d-flex flex-wrap">
                        <li>
                          <a href="#" className="view">
                            <span data-feather="eye" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="edit">
                            <span data-feather="edit" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="remove">
                            <span data-feather="trash-2" />
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex">
                        <div className="userDatatable__imgWrapper d-flex align-items-center">
                          <div className="checkbox-group-wrapper">
                            <div className="checkbox-group d-flex">
                              <div className="checkbox-theme-default custom-checkbox checkbox-group__single d-flex">
                                <input
                                  className="checkbox"
                                  type="checkbox"
                                  id="check-grp-8"
                                />
                                <label htmlFor="check-grp-8" />
                              </div>
                            </div>
                          </div>
                          <a
                            href="#"
                            className="profile-image rounded-circle d-block m-0 wh-38"
                            style={{
                              backgroundImage: 'url("img/tm1.png")',
                              backgroundSize: "cover",
                            }}
                          />
                        </div>
                        <div className="userDatatable-inline-title">
                          <a href="#" className="text-dark fw-500">
                            <h6>Kellie Marquot</h6>
                          </a>
                          <p className="d-block mb-0">San Francisco, CA</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        john-keller@gmail.com
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        Business Development
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">Web Developer</div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        January 20, 2020
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content d-inline-block">
                        <span className="bg-opacity-success  color-success rounded-pill userDatatable-content-status active">
                          active
                        </span>
                      </div>
                    </td>
                    <td>
                      <ul className="orderDatatable_actions mb-0 d-flex flex-wrap">
                        <li>
                          <a href="#" className="view">
                            <span data-feather="eye" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="edit">
                            <span data-feather="edit" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="remove">
                            <span data-feather="trash-2" />
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex">
                        <div className="userDatatable__imgWrapper d-flex align-items-center">
                          <div className="checkbox-group-wrapper">
                            <div className="checkbox-group d-flex">
                              <div className="checkbox-theme-default custom-checkbox checkbox-group__single d-flex">
                                <input
                                  className="checkbox"
                                  type="checkbox"
                                  id="check-grp-9"
                                />
                                <label htmlFor="check-grp-9" />
                              </div>
                            </div>
                          </div>
                          <a
                            href="#"
                            className="profile-image rounded-circle d-block m-0 wh-38"
                            style={{
                              backgroundImage: 'url("img/tm2.png")',
                              backgroundSize: "cover",
                            }}
                          />
                        </div>
                        <div className="userDatatable-inline-title">
                          <a href="#" className="text-dark fw-500">
                            <h6>Kellie Marquot</h6>
                          </a>
                          <p className="d-block mb-0">San Francisco, CA</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        john-keller@gmail.com
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        Business Development
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">Web Developer</div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        January 20, 2020
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content d-inline-block">
                        <span className="bg-opacity-success  color-success rounded-pill userDatatable-content-status active">
                          active
                        </span>
                      </div>
                    </td>
                    <td>
                      <ul className="orderDatatable_actions mb-0 d-flex flex-wrap">
                        <li>
                          <a href="#" className="view">
                            <span data-feather="eye" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="edit">
                            <span data-feather="edit" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="remove">
                            <span data-feather="trash-2" />
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex">
                        <div className="userDatatable__imgWrapper d-flex align-items-center">
                          <div className="checkbox-group-wrapper">
                            <div className="checkbox-group d-flex">
                              <div className="checkbox-theme-default custom-checkbox checkbox-group__single d-flex">
                                <input
                                  className="checkbox"
                                  type="checkbox"
                                  id="check-grp-10"
                                />
                                <label htmlFor="check-grp-10" />
                              </div>
                            </div>
                          </div>
                          <a
                            href="#"
                            className="profile-image rounded-circle d-block m-0 wh-38"
                            style={{
                              backgroundImage: 'url("img/tm3.png")',
                              backgroundSize: "cover",
                            }}
                          />
                        </div>
                        <div className="userDatatable-inline-title">
                          <a href="#" className="text-dark fw-500">
                            <h6>Kellie Marquot</h6>
                          </a>
                          <p className="d-block mb-0">San Francisco, CA</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        john-keller@gmail.com
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        Business Development
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">Web Developer</div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        January 20, 2020
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content d-inline-block">
                        <span className="bg-opacity-success  color-success rounded-pill userDatatable-content-status active">
                          active
                        </span>
                      </div>
                    </td>
                    <td>
                      <ul className="orderDatatable_actions mb-0 d-flex flex-wrap">
                        <li>
                          <a href="#" className="view">
                            <span data-feather="eye" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="edit">
                            <span data-feather="edit" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="remove">
                            <span data-feather="trash-2" />
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex">
                        <div className="userDatatable__imgWrapper d-flex align-items-center">
                          <div className="checkbox-group-wrapper">
                            <div className="checkbox-group d-flex">
                              <div className="checkbox-theme-default custom-checkbox checkbox-group__single d-flex">
                                <input
                                  className="checkbox"
                                  type="checkbox"
                                  id="check-grp-11"
                                />
                                <label htmlFor="check-grp-11" />
                              </div>
                            </div>
                          </div>
                          <a
                            href="#"
                            className="profile-image rounded-circle d-block m-0 wh-38"
                            style={{
                              backgroundImage: 'url("img/tm4.png")',
                              backgroundSize: "cover",
                            }}
                          />
                        </div>
                        <div className="userDatatable-inline-title">
                          <a href="#" className="text-dark fw-500">
                            <h6>Kellie Marquot</h6>
                          </a>
                          <p className="d-block mb-0">San Francisco, CA</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        john-keller@gmail.com
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        Business Development
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">Web Developer</div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        January 20, 2020
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content d-inline-block">
                        <span className="bg-opacity-success  color-success rounded-pill userDatatable-content-status active">
                          active
                        </span>
                      </div>
                    </td>
                    <td>
                      <ul className="orderDatatable_actions mb-0 d-flex flex-wrap">
                        <li>
                          <a href="#" className="view">
                            <span data-feather="eye" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="edit">
                            <span data-feather="edit" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="remove">
                            <span data-feather="trash-2" />
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="d-flex justify-content-end pt-30">
              <nav className="atbd-page ">
                <ul className="atbd-pagination d-flex">
                  <li className="atbd-pagination__item">
                    <a
                      href="#"
                      className="atbd-pagination__link pagination-control"
                    >
                      <span className="la la-angle-left" />
                    </a>
                    <a href="#" className="atbd-pagination__link">
                      <span className="page-number">1</span>
                    </a>
                    <a href="#" className="atbd-pagination__link active">
                      <span className="page-number">2</span>
                    </a>
                    <a href="#" className="atbd-pagination__link">
                      <span className="page-number">3</span>
                    </a>
                    <a
                      href="#"
                      className="atbd-pagination__link pagination-control"
                    >
                      <span className="page-number">...</span>
                    </a>
                    <a href="#" className="atbd-pagination__link">
                      <span className="page-number">12</span>
                    </a>
                    <a
                      href="#"
                      className="atbd-pagination__link pagination-control"
                    >
                      <span className="la la-angle-right" />
                    </a>
                    <a href="#" className="atbd-pagination__option"></a>
                  </li>
                  <li className="atbd-pagination__item">
                    <div className="paging-option">
                      <select name="page-number" className="page-selection">
                        <option value={20}>20/page</option>
                        <option value={40}>40/page</option>
                        <option value={60}>60/page</option>
                      </select>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
