import { Tooltip } from "@mui/material";
import moment from "moment/moment";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { Eye, Edit, XCircle } from "react-feather";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  deleteOrder,
  getAllOrders,
  updateOrder,
} from "../../app/services/admin/order.service";
import ModalConfirm from "../../components/sharedComponents/ModalConfirm";
import {
  toastError,
  toastSuccess,
} from "../../components/sharedComponents/toast";
import Detail from "./Detail";
import Note from "./Note";
const Order = () => {
  const _isMounted = useRef(false);
  const detailRef = useRef();
  const orderDetail = useRef();
  const id = useRef();
  const noteRef = useRef();

  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowModalNote, setIsShowModalNote] = useState(false);
  const modalConfirmRef = useRef();

  const [param] = useSearchParams();
  const navigate = useNavigate();
  const pageNumber = new URLSearchParams(location.search).get("page") || 1;
  const search = param.get("search") || "";

  const loadOrders = async (pageNumber, search) => {
    setIsLoading(true);
    const data = await getAllOrders(pageNumber, search);
    // const filedData = data.filter((item) => !item.IsAdmin_Delete);
    setIsLoading(false);
    _isMounted.current && setOrders(data);
    _isMounted.current && setIsShowModalNote(false);
    return;
  };

  const handleShowModalDetail = (arr) => {
    orderDetail.current = [...arr?.Products];
    _isMounted.current && setIsShowDetail(true);
    detailRef.current?.handleShow();
  };

  const onDelete = async (id) => {
    const data = { _id: id };
    const res = await deleteOrder(data);
    if (res.status === 200) {
      toastSuccess("Xoá thành công");
      await loadOrders();
      _isMounted.current && setIsShowModal(false);
      return;
    }
    toastError("loi");
  };

  const onConfirm = (_id) => {
    id.current = _id;
    _isMounted.current && setIsShowModal(true);
    modalConfirmRef.current?.handleShow();
  };

  const handleShowModalNote = (_id) => {
    id.current = _id;
    _isMounted.current && setIsShowModalNote(true);
    noteRef.current?.handleShow();
  };

  const handleUpdateStatusOrder = async (status,_id) => {
    const data = {
      Status : status,
      _id : _id
    }
    const res = await updateOrder(data);
    if(res.status === 200) {
      toastSuccess("Cập nhật thành công!");
      loadOrders(pageNumber,search);
      return
    }else{
      toastError("Đã có lỗi xảy ra!")
    }

    
  }

  const handleSearch = (e) => {
    setTimeout(() => {
      navigate(`?search=${e.target.value}`);
    }, [700]);
  };

  const renderPaging = () => {
    let listPage = [];
    for (let i = 1; i <= orders.totalPage; i++) {
      listPage.push(
        <Link
          to={"?page=" + i + "&search=" + search}
          key={"toPage" + i}
          className={`atbd-pagination__link ${pageNumber == i ? "active" : ""}`}
        >
          <span className="page-number">{i}</span>
        </Link>
      );
    }
    return listPage;
  };

  useEffect(() => {
    _isMounted.current = true;
    return () => {
      _isMounted.current = false;
    };
  });

  useEffect(() => {
    loadOrders(pageNumber, search);
  }, [pageNumber, search]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb-main user-member justify-content-sm-between ">
            <div className=" d-flex flex-wrap justify-content-center breadcrumb-main__wrapper">
              <div className="d-flex align-items-center user-member__title justify-content-center mr-sm-25">
                <h4 className="text-capitalize fw-500 breadcrumb-title">
                  Quản lí đơn hàng
                </h4>
                <span className="sub-title ml-sm-25 pl-sm-25">
                  {orders?.totalItem} đơn hàng
                </span>
              </div>
              <form className="d-flex align-items-center user-member__form my-sm-0 my-2">
                <input
                  className="form-control mr-sm-2 border-0 box-shadow-none"
                  type="text"
                  placeholder="Nhập tên để tìm kiếm"
                  onChange={handleSearch}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          {isLoading ? (
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
            <div className="userDatatable global-shadow border p-30 bg-white radius-xl w-100 mb-30">
              <div className="table-responsive">
                <table className="table mb-0 table-borderless w-100">
                  <thead>
                    <tr className="userDatatable-header">
                      <th>
                        <span className="userDatatable-title ">
                          Tên khách hàng
                        </span>
                      </th>
                      <th>
                        <span className="userDatatable-title ">Người nhận</span>
                      </th>
                      <th>
                        <span className="userDatatable-title">Địa chỉ</span>
                      </th>
                      <th>
                        <span className="userDatatable-title">
                          Số điện thoại
                        </span>
                      </th>
                      <th>
                        <span className="userDatatable-title">Email</span>
                      </th>
                      <th>
                        <span className="userDatatable-title">Tổng giá</span>
                      </th>
                      <th>
                        <span className="userDatatable-title">
                          Phương thức thanh toán
                        </span>
                      </th>
                      <th>
                        <span className="userDatatable-title">
                          Trạng thái giao hàng
                        </span>
                      </th>
                      <th>
                        <span className="userDatatable-title">
                          Ghi chú khách hàng
                        </span>
                      </th>
                      <th>
                        <span className="userDatatable-title">
                          Ghi chú người bán
                        </span>
                      </th>
                      <th>
                        <span className="userDatatable-title">
                          Ngày đặt hàng
                        </span>
                      </th>
                      <th>
                        <span className="userDatatable-title">Thao tác</span>
                      </th>
                      <th>
                        <span className="userDatatable-title">Cập nhât</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders?.orders?.length > 0
                      ? orders?.orders?.map((item) => (
                          <tr key={item?._id}>
                            <td>
                              <div className="userDatatable-content text-wrap text-start">
                                {item?.Id_Customer?.Full_Name}
                              </div>
                            </td>
                            <td>
                              <div className="userDatatable-content text-wrap text-start">
                                {item?.Receiver}
                              </div>
                            </td>
                            <td>
                              <div className="userDatatable-content">
                                {item?.Address}
                              </div>
                            </td>
                            <td>
                              <div className="userDatatable-content">
                                {item?.Phone}
                              </div>
                            </td>
                            <td>
                              <div className="userDatatable-content">
                                {item?.Email}
                              </div>
                            </td>
                            <td>
                              <div className="userDatatable-content ">
                                {(item?.Amount).toLocaleString("vi-VN", {
                                  style: "currency",
                                  currency: "VND",
                                })}
                              </div>
                            </td>
                            <td>
                              <div className="userDatatable-content">
                                {item?.Payment_Method}
                              </div>
                            </td>
                            <td>
                              {item?.Status === "completed" && (
                                <div class="userDatatable-content d-inline-block">
                                  <span class="bg-opacity-success  color-success rounded-pill userDatatable-content-status active">
                                    Hoàn tất
                                  </span>
                                </div>
                              )}
                              {item?.Status === "Pending" && (
                                <div class="userDatatable-content d-inline-block">
                                  <span class="bg-opacity-warning  color-warning rounded-pill userDatatable-content-status active">
                                    Đang vận chuyển
                                  </span>
                                </div>
                              )}
                              {item?.Status === "failed" && (
                                <div class="userDatatable-content d-inline-block">
                                  <span class="bg-opacity-danger  color-danger rounded-pill userDatatable-content-status active">
                                   Đã huỷ
                                  </span>
                                </div>
                              )}
                            </td>
                            <td>
                              <div className="userDatatable-content">
                                {item?.Customer_Note}
                              </div>
                            </td>
                            <td>
                              <div className="userDatatable-content">
                                {item?.Admin_Note}
                              </div>
                            </td>
                            <td>
                              <div className="userDatatable-content">
                                {moment(item?.createdAt).format("L")}
                              </div>
                            </td>
                            <td>
                              <ul className="orderDatatable_actions mb-0 d-flex flex-wrap">
                                <Tooltip title="Xem chi tiết đơn hàng">
                                  <li
                                    onClick={() => handleShowModalDetail(item)}
                                  >
                                    <a
                                      href="javascript:void(0)"
                                      className="view"
                                    >
                                      <Eye />
                                    </a>
                                  </li>
                                </Tooltip>
                                <Tooltip title="Sửa">
                                  <li
                                    onClick={() =>
                                      handleShowModalNote(item._id)
                                    }
                                  >
                                    <Link className="edit">
                                      <Edit />
                                    </Link>
                                  </li>
                                </Tooltip>
                                <Tooltip title="Xoá">
                                  <li onClick={() => onConfirm(item._id)}>
                                    <a
                                      href="javascript:void(0)"
                                      className="remove"
                                    >
                                      <XCircle />
                                    </a>
                                  </li>
                                </Tooltip>
                              </ul>
                            </td>
                            <td>
                            <div className="orderDatatable_actions mb-0 d-flex justify-content-between align-items-center">
                              <button
                                onClick={() => handleUpdateStatusOrder("completed",item?._id)}
                                type="button"
                                className="btn btn-outline-success btn-default btn-squared text-capitalize mx-1  global-shadow"
                              >
                                <i className="fa-solid fa-trash"></i> Hoàn tất
                              </button>

                              <button
                               onClick={() => handleUpdateStatusOrder("failed",item?._id)}
                                type="button"
                                className="btn btn-outline-danger btn-default btn-squared text-capitalize mx-1  global-shadow"
                              >
                                <i className="fa-solid fa-trash"></i> Huỷ
                              </button>
                            </div>
                            </td>
                          </tr>
                        ))
                      : "Không có đơn hàng"}
                  </tbody>
                </table>
              </div>
              <div className="d-flex justify-content-end pt-30">
                <nav className="atbd-page ">
                  <ul className="atbd-pagination d-flex">
                    <li className="atbd-pagination__item">
                      {/* <a
                        href="#"
                        className="atbd-pagination__link pagination-control"
                      >
                        <span className="la la-angle-left" />
                      </a> */}
                      {renderPaging()}
                      {/* <a
                        href="#"
                        className="atbd-pagination__link pagination-control"
                      >
                        <span className="la la-angle-right" />
                      </a>
                      <a href="#" className="atbd-pagination__option"></a> */}
                    </li>
                    {/* <li className="atbd-pagination__item">
                      <div className="paging-option">
                        <select name="page-number" className="page-selection">
                          <option value={20}>20/page</option>
                          <option value={40}>40/page</option>
                          <option value={60}>60/page</option>
                        </select>
                      </div>
                    </li> */}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
        {/* modal */}
        {isShowDetail && (
          <Detail
            setIsShowDetail={setIsShowDetail}
            order={orderDetail.current}
            ref={detailRef}
          />
        )}
        {isShowModal && (
          <ModalConfirm
            id={id.current ?? null}
            funcDelete={onDelete}
            ref={modalConfirmRef}
          />
        )}
        {isShowModalNote && (
          <Note
            ref={noteRef}
            id={id.current ?? null}
            setIsShowModalNote={setIsShowModalNote}
            loadOrders={loadOrders}
          />
        )}
      </div>
    </div>
  );
};

export default Order;
