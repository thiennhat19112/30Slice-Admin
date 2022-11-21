import { Eye, Edit, XCircle } from "react-feather";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Modal from "./modal";
import { getStyleList } from "../../app/services/admin/stylelist.service";
import SwitchIOS from "../../CustomMui/switch";

const StyleList = () => {
  const _isMounted = useRef(false);
  const [loading, setLoading] = useState(false);
  const [arrStyleList, setArrStyleList] = useState([]);
  const allAvailableTime = [
    { value: "07:00", label: "07:00" },
    { value: "07:30", label: "07:30" },
    { value: "08:00", label: "08:00" },
    { value: "08:30", label: "08:30" },
    { value: "09:00", label: "09:00" },
    { value: "09:30", label: "09:30" },
    { value: "10:00", label: "10:00" },
    { value: "10:30", label: "10:30" },
    { value: "11:00", label: "11:00" },
    { value: "11:30", label: "11:30" },
    { value: "12:00", label: "12:00" },
    { value: "12:30", label: "12:30" },
    { value: "13:00", label: "13:00" },
    { value: "13:30", label: "13:30" },
    { value: "14:00", label: "14:00" },
    { value: "14:30", label: "14:30" },
    { value: "15:00", label: "15:00" },
    { value: "15:30", label: "15:30" },
    { value: "16:00", label: "16:00" },
    { value: "16:30", label: "16:30" },
    { value: "17:00", label: "17:00" },
    { value: "17:30", label: "17:30" },
    { value: "18:00", label: "18:00" },
    { value: "18:30", label: "18:30" },
    { value: "19:00", label: "19:00" },
    { value: "19:30", label: "19:30" },
    { value: "20:00", label: "20:00" },
    { value: "20:30", label: "20:30" },
    { value: "21:00", label: "21:00" },
  ];
  useEffect(() => {
    _isMounted.current = true;

    return () => {
      _isMounted.current = false;
    };
  });
  const loadStyleList = async () => {
    _isMounted.current && setLoading(true);
    const data = await getStyleList();
    console.log(data);
    _isMounted.current && setLoading(false);
    _isMounted.current && setArrStyleList(data);
  };
  useEffect(() => {
    loadStyleList();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb-main user-member justify-content-sm-between ">
            <div className=" d-flex flex-wrap justify-content-center breadcrumb-main__wrapper">
              <div className="d-flex align-items-center user-member__title justify-content-center mr-sm-25">
                <h4 className="text-capitalize fw-500 breadcrumb-title">
                  Quản lý thợ cắt tóc
                </h4>
                <span className="sub-title ml-sm-25 pl-sm-25">
                  {arrStyleList?.length} Thợ cắt tóc
                </span>
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
                Thêm thợ cắt tóc
              </a>
              {/* Modal */}
              <Modal time={allAvailableTime} />
              {/* Modal */}
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="card-body">
          <div className="spin-container text-center">
            <div className="atbd-spin-dots spin-lg">
              <span className="spin-dot badge-dot dot-primary"></span>
              <span className="spin-dot badge-dot dot-primary"></span>
              <span className="spin-dot badge-dot dot-primary"></span>
              <span className="spin-dot badge-dot dot-primary"></span>
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-12">
            <div className="userDatatable global-shadow border p-30 bg-white radius-xl w-100 mb-30">
              <div className="table-responsive">
                <table className="table mb-0 table-borderless">
                  <thead>
                    <tr className="userDatatable-header">
                      <th>
                        <span className=" userDatatable-title">
                          Tên người dùng
                        </span>
                      </th>
                      <th>
                        <span className=" userDatatable-title">Họ và tên</span>
                      </th>
                      <th>
                        <span className="userDatatable-title">emaill</span>
                      </th>
                      <th>
                        <span className="userDatatable-title">
                          Ngày gia nhập
                        </span>
                      </th>
                      <th>
                        <span className="userDatatable-title">Trạng thái</span>
                      </th>
                      <th>
                        <span className="userDatatable-title">Chặn</span>
                      </th>
                      <th>
                        <span className="userDatatable-title float-right">
                          Thao tác
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {arrStyleList.map((item) => (
                      <tr key={item?._id}>
                        <td>
                          <div className="d-flex">
                            <div className="userDatatable-inline-title">
                              <h6>{item?.Username}</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="userDatatable-inline-title">
                              <h6>{item?.Full_Name}</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="userDatatable-content">
                            {item?.Email}
                          </div>
                        </td>
                        <td>
                          <div className="userDatatable-content">
                            {moment(item?.Created_Date).format("L")}
                          </div>
                        </td>
                        <td>
                          <div className="userDatatable-content d-inline-block">
                            <SwitchIOS
                              defaultChecked={item?.Info.Status_Code}
                              name="Status"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="userDatatable-content d-inline-block">
                            <SwitchIOS
                              defaultChecked={item?.Info.Block_By_Admin}
                              name="Block"
                            />
                          </div>
                        </td>
                        <td>
                          <ul className="orderDatatable_actions mb-0 d-flex flex-wrap">
                            <li>
                              <Link
                                to={/stylelist/ + item?._id}
                                className="edit"
                              >
                                <Edit />
                              </Link>
                            </li>
                            <li>
                              <a href="#" className="remove">
                                <XCircle />
                              </a>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    ))}
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
      )}
    </div>
  );
};

export default StyleList;
