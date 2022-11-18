import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "../../app/redux/slices/auth";
import { useForm } from "react-hook-form";
import Input from "../../components/sharedComponents/input";
import { passwordValidator } from "../../components/sharedComponents/validatorPatterns";
import { selectMessage } from "../../app/redux/slices/message";
import { clearMessage } from "../../app/redux/slices/message";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Profile = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const message = useSelector(selectMessage);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useSelector((state) => state.auth);

  const onSubmit = async (user) => {
    const { old_password, new_password } = user;

    setLoading(true);
    adminService
      .ChangePassword(old_password, new_password)
      .then(() => {
        setLoading(false);
        toast.success('Đổi mật khẩu thành công', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        // navigate('/');
        // window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    // dispatch(getInfo());
  }, [loading]);

  return (
    <>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
  />
    <div className="profile-setting ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-main">
              <h4 className="text-capitalize breadcrumb-title">
                Tài Khoản Của Tôi
              </h4>
              <div className="breadcrumb-action justify-content-center flex-wrap">
                <div className="action-btn">
                  <div className="form-group mb-0">
                    <div className="input-container icon-left position-relative">
                      <span className="input-icon icon-left">
                        <span data-feather="calendar" />
                      </span>
                      <input
                        type="text"
                        className="form-control form-control-default date-ranger"
                        name="date-ranger"
                        placeholder="Oct 30, 2019 - Nov 30, 2019"
                      />
                      <span className="input-icon icon-right">
                        <span data-feather="chevron-down" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="dropdown action-btn">
                  <button
                    className="btn btn-sm btn-default btn-white dropdown-toggle"
                    type="button"
                    id="dropdownMenu2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="la la-download" /> Export
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenu2"
                  >
                    <span className="dropdown-item">Export With</span>
                    <div className="dropdown-divider" />
                    <a href="" className="dropdown-item">
                      <i className="la la-print" /> Printer
                    </a>
                    <a href="" className="dropdown-item">
                      <i className="la la-file-pdf" /> PDF
                    </a>
                    <a href="" className="dropdown-item">
                      <i className="la la-file-text" /> Google Sheets
                    </a>
                    <a href="" className="dropdown-item">
                      <i className="la la-file-excel" /> Excel (XLSX)
                    </a>
                    <a href="" className="dropdown-item">
                      <i className="la la-file-csv" /> CSV
                    </a>
                  </div>
                </div>
                <div className="dropdown action-btn">
                  <button
                    className="btn btn-sm btn-default btn-white dropdown-toggle"
                    type="button"
                    id="dropdownMenu3"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="la la-share" /> Share
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenu3"
                  >
                    <span className="dropdown-item">Share Link</span>
                    <div className="dropdown-divider" />
                    <a href="" className="dropdown-item">
                      <i className="la la-facebook" /> Facebook
                    </a>
                    <a href="" className="dropdown-item">
                      <i className="la la-twitter" /> Twitter
                    </a>
                    <a href="" className="dropdown-item">
                      <i className="la la-google" /> Google
                    </a>
                    <a href="" className="dropdown-item">
                      <i className="la la-feed" /> Feed
                    </a>
                    <a href="" className="dropdown-item">
                      <i className="la la-instagram" /> Instagram
                    </a>
                  </div>
                </div>
                <div className="action-btn">
                  <a href="" className="btn btn-sm btn-primary btn-add">
                    <i className="la la-plus" /> Add New
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-lg-4 col-sm-5">
            {/* Profile Acoount */}
            <div className="card mb-25">
              <div className="card-body text-center p-0">
                <div className="account-profile border-bottom pt-25 px-25 pb-0 flex-column d-flex align-items-center ">
                  <div className="ap-img mb-20 pro_img_wrapper">
                    <input
                      id="file-upload"
                      type="file"
                      name="fileUpload"
                      className="d-none"
                    />
                    <label htmlFor="file-upload">
                      {/* Profile picture image*/}
                      <img
                        className="ap-img__main rounded-circle wh-120"
                        src="assets/img/author/profile.png"
                        alt="profile"
                      />
                      <span className="cross" id="remove_pro_pic">
                        <span data-feather="camera" />
                      </span>
                    </label>
                  </div>
                  <div className="ap-nameAddress pb-3">
                    <h5 className="ap-nameAddress__title">Duran Clayton</h5>
                    <p className="ap-nameAddress__subTitle fs-14 m-0">
                      UI/UX Designer
                    </p>
                  </div>
                </div>
                <div className="ps-tab p-20 pb-25">
                  <div
                    className="nav flex-column text-left"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
                      className="nav-link active"
                      id="v-pills-profile-tab"
                      data-toggle="pill"
                      href="#v-pills-profile"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="true"
                    >
                      <span data-feather="settings" />
                      Thông Tin Tài Khoản
                    </a>
                    <a
                      className="nav-link"
                      id="v-pills-messages-tab"
                      data-toggle="pill"
                      href="#v-pills-messages"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      <span data-feather="key" />
                      Đổi mật khẩu
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Profile Acoount End */}
          </div>
          <div className="col-xxl-9 col-lg-8 col-sm-7">
            <div className="mb-50">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  {/* Edit Profile */}
                  <div className="edit-profile mt-25">
                    <div className="card">
                      <div className="card-header  px-sm-25 px-3">
                        <div className="edit-profile__title">
                          <h6>Thông Tin Tài Khoản</h6>
                          <span className="fs-13 color-light fw-400">
                            Cập nhập thông tin tài khoản của bạn
                          </span>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="row justify-content-center">
                          <div className="col-xxl-6 col-lg-8 col-sm-10">
                            <div className="edit-profile__body mx-lg-20">
                              <form>
                                <div className="form-group mb-20">
                                  <label htmlFor="name1">Username</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="name1"
                                    placeholder="Duran Clayton"
                                  />
                                </div>
                                <div className="form-group mb-1">
                                  <label htmlFor="email45">Email</label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="email45"
                                    placeholder="Contact@example.com"
                                  />
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="row justify-content-center align-items-center">
                          <div className="col-xxl-6 col-lg-8 col-sm-10">
                            <div className="button-group d-flex flex-wrap pt-35 mb-35">
                              <button className="btn btn-primary btn-default btn-squared mr-15 text-capitalize">
                                Lưu
                              </button>
                              <button className="btn btn-light btn-default btn-squared fw-400 text-capitalize">
                                Huỷ
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Edit Profile End */}
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  {/* Edit Profile */}
                  <div className="edit-profile mt-25">
                    <div className="card">
                      <div className="card-header  px-sm-25 px-3">
                        <div className="edit-profile__title">
                          <h6>Đổi mật khẩu</h6>
                          <span className="fs-13 color-light fw-400">
                            Đổi mật khẩu tài khoản của bạn
                          </span>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="row justify-content-center">
                          <div className="col-xxl-6 col-lg-8 col-sm-10">
                            <div className="edit-profile__body mx-lg-20">
                              <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group mb-20">
                                  <Input
                                    register={register}
                                    type="password"
                                    label="Mật khẩu Cũ"
                                    id="old_password"
                                    required="Trường này không được để trống"
                                    pattern={passwordValidator}
                                    error={errors.password}
                                  />
                                </div>
                                <div className="form-group mb-1">
                                  <div className="position-relative">
                                    <Input
                                      register={register}
                                      type="password"
                                      label="Mật khẩu Mới"
                                      id="new_password"
                                      required="Trường này không được để trống"
                                      pattern={passwordValidator}
                                      error={errors.password}
                                    />
                                    <span className="fa fa-fw fa-eye-slash text-light fs-16 field-icon toggle-password2" />
                                  </div>
                                  {message && (
                                    <div className="form-group">
                                      <div
                                        className="alert alert-danger"
                                        role="alert"
                                      >
                                        {message}
                                      </div>
                                    </div>
                                  )}
                                </div>
                                <div className="button-group d-flex flex-wrap pt-45 mb-35">
                                  <button className="btn btn-primary btn-default btn-squared mr-15 text-capitalize">
                                    {loading && (
                                      <span className="spinner-border spinner-border-sm"></span>
                                    )}
                                    Lưu
                                  </button>
                                  <button className="btn btn-light btn-default btn-squared fw-400 text-capitalize">
                                    Huỷ
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Edit Profile End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;
