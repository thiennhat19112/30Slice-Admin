import { Tooltip } from "@mui/material";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { Eye, Edit, XCircle } from "react-feather";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  deleteProduct,
  getProducts,
  updateProduct,
} from "../../app/services/admin/product.service";
import ModalConfirm from "../../components/sharedComponents/ModalConfirm";
import {
  toastError,
  toastSuccess,
} from "../../components/sharedComponents/toast";
import SwitchIOS from "../../CustomMui/switch";
import Add from "./Add";
import Detail from "./Detail";
import { fetchCategories } from "../../app/redux/slices/categories";
import EditProduct from "./Edit";
const Product = () => {
  const _isMounted = useRef(false);
  const detailRef = useRef();
  const productsRef = useRef();
  const addRef = useRef();
  const id = useRef();
  const editRef = useRef();
  const [param] = useSearchParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const modalConfirmRef = useRef();
  const [isShowModalEdit, setIsShowModalEdit] = useState(false);

  const pageNumber = new URLSearchParams(location.search).get("page") || 1;
  const search = param.get("search") || "";

  const dispatch = useDispatch();
  const fetchProduct = async (pageNumber, search) => {
    setIsLoading(true);
    const data = await getProducts(pageNumber, search);
    setIsLoading(false);
    _isMounted.current && setProducts(data);
    return;
  };

  const handleUpdateStatus = async (id, Is_Show) => {
    const data = { Is_Show: !Is_Show, _id: id };
    try {
      await updateProduct(data);
      _isMounted && fetchProduct();
    } catch (err) {
      throw new Error(err);
    }
  };

  const handleUpdateHot = async (id, Is_Hot) => {
    let data = [];
    if (Is_Hot) {
      data = { Is_Hot: !Is_Hot, _id: id };
    } else {
      data = { Is_Hot: true, _id: id };
    }

    try {
      await updateProduct(data);
      await fetchProduct();
    } catch (err) {
      throw new Error(err);
    }
  };

  const handleShowModalDetail = (arr) => {
    productsRef.current = { ...arr };
    _isMounted.current && setIsShowDetail(true);
    detailRef.current?.handleShow();
  };

  const handleSearch = (e) => {
    setTimeout(() => {
      navigate(`?search=${e.target.value}`);
    }, [500]);
  };

  const onDelete = async (id) => {
    const data = { _id: id };
    const res = await deleteProduct(data);
    if (res.status === 200) {
      toastSuccess("xoa thanh cong");
      await fetchProduct();
      _isMounted.current && setIsShowModal(false);
      return;
    }
    toastError("loi");
  };

  const onShowModalEdit = (data) => {
    productsRef.current = { ...data };
    _isMounted.current && setIsShowModalEdit(true);
    editRef.current?.handleShow();
  };

  const onConfirm = (_id) => {
    id.current = _id;
    _isMounted.current && setIsShowModal(true);
    modalConfirmRef.current?.handleShow();
  };

  const renderPaging = () => {
    let listPage = [];
    for (let i = 1; i <= products.totalPage; i++) {
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
    fetchProduct(pageNumber, search);
    dispatch(fetchCategories());
  }, [pageNumber, search]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb-main user-member justify-content-sm-between ">
            <div className=" d-flex flex-wrap justify-content-center breadcrumb-main__wrapper">
              <div className="d-flex align-items-center user-member__title justify-content-center mr-sm-25">
                <h4 className="text-capitalize fw-500 breadcrumb-title">
                  Quản lí sản phẩm
                </h4>
                <span className="sub-title ml-sm-25 pl-sm-25">
                  {products?.totalItem} sản phẩm
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
            <div className="action-btn">
              <a
                href="javascript:void(0)"
                className="btn px-15 btn-primary"
                onClick={() => addRef.current?.handleShow()}
              >
                <i className="las la-plus fs-16" />
                Thêm sản phẩm
              </a>
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
                <table className="table mb-0 table-borderless">
                  <thead>
                    <tr className="userDatatable-header">
                      <th>
                        <span className="userDatatable-title ">
                          Tên sản phẩm
                        </span>
                      </th>
                      <th>
                        <span className="userDatatable-title">
                          Hình sản phẩm
                        </span>
                      </th>
                      <th>
                        <span className="userDatatable-title">Loại</span>
                      </th>
                      <th>
                        <span className="userDatatable-title">Ẩn/hiện</span>
                      </th>
                      <th>
                        <span className="userDatatable-title">Nỗi bật</span>
                      </th>
                      <th>
                        <span className="userDatatable-title">Thao tác</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products?.products?.length > 0
                      ? products?.products?.map((item) => (
                          <tr key={item?._id}>
                            <td>
                              <div className="userDatatable-content text-wrap text-start">
                                {item?.Name}
                              </div>
                            </td>
                            <td>
                              <div className="userDatatable-content">
                                <img src={item?.Images[0]} width={50} alt="" />
                              </div>
                            </td>
                            <td>
                              <div className="userDatatable-content">
                                {item?.Id_Categories &&
                                  item?.Id_Categories.Name}
                              </div>
                            </td>
                            <td>
                              <div className="userDatatable-content d-inline-block">
                                <SwitchIOS
                                  onChange={() =>
                                    handleUpdateStatus(item?._id, item?.Is_Show)
                                  }
                                  defaultChecked={item?.Is_Show}
                                  name="Is_Show"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="userDatatable-content d-inline-block">
                                <SwitchIOS
                                  defaultChecked={item?.Is_Hot}
                                  name="Is_Hot"
                                  onChange={() =>
                                    handleUpdateHot(item?._id, item?.Is_Hot)
                                  }
                                />
                              </div>
                            </td>
                            <td>
                              <ul className="orderDatatable_actions mb-0 d-flex flex-wrap">
                                <Tooltip title="Xem chi tiết">
                                  <li
                                    onClick={() => handleShowModalDetail(item)}
                                  >
                                    <a href="javascript:void(0)" class="view">
                                      <Eye />
                                    </a>
                                  </li>
                                </Tooltip>
                                <Tooltip title="Sửa">
                                  <li onClick={() => onShowModalEdit(item)}>
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
                          </tr>
                        ))
                      : "Không có sản phẩm"}
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
                        <select
                          onChange={(e) => setLimit(e.target.value)}
                          name="page-number"
                          className="page-selection"
                        >
                          <option value={5}>
                            5/Trang
                          </option>
                          <option value={10}>
                            10/Trang
                          </option>
                          <option value={15}>
                            15/Trang
                          </option>
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
            product={productsRef.current}
            ref={detailRef}
          />
        )}
        {<Add loadProduct={fetchProduct} ref={addRef} />}
        {isShowModal && (
          <ModalConfirm
            id={id.current ?? null}
            funcDelete={onDelete}
            ref={modalConfirmRef}
          />
        )}
        {isShowModalEdit && (
          <EditProduct
            product={productsRef.current}
            ref={editRef}
            loadProduct={fetchProduct}
            setIsShowModalEdit={setIsShowModalEdit}
          />
        )}
      </div>
    </div>
  );
};

export default Product;
