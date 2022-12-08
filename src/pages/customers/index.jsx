import { Eye, Edit, XCircle } from "react-feather";
import React, { useState, useRef, useEffect } from 'react';
import {

    getCus

} from "../../app/services/admin/customer.service";
import ModalConfirm from "../../components/sharedComponents/ModalConfirm";
import { toastError, toastSuccess } from "../../components/sharedComponents/toast";
import SwitchIOS from "../../CustomMui/switch";

const Customer = () => {
    const _isMounted = useRef(false);
    const [arrcus, setArrcus] = useState([]);
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false);

    const [Usersname, setUsername] = useState(null)
    const [Fullname, setFullname] = useState("")
    const [Phone, setPhone] = useState("")
    const [Role, setRole] = useState("")

    const loadCus = async () => {
        _isMounted.current && setLoading(true);
        const data = await getCus();
        _isMounted.current && setLoading(false);
        _isMounted.current && setArrcus(data);
    };
    useEffect(() => {
        _isMounted.current = true;

        return () => {
            _isMounted.current = false;
        };
    });
    useEffect(() => {
        loadCus();
    }, []);
    // let urlCus = 'https://30slice.online/api/user/getAllCustomer';
    // useEffect(() => {
    //     fetch(urlCus)
    //         .then((res) => res.json())
    //         .then((data) => setUsers(data));
    // }, [urlCus]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb-main user-member justify-content-sm-between ">
                        <div className=" d-flex flex-wrap justify-content-center breadcrumb-main__wrapper">
                            <div className="d-flex align-items-center user-member__title justify-content-center mr-sm-25">
                                <h4 className="text-capitalize fw-500 breadcrumb-title">
                                    Quản lý khách hàng
                                </h4>
                                <span className="sub-title ml-sm-25 pl-sm-25">
                                    {arrcus.length} Khách hàng
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

                                                    <label htmlFor="check-3">
                                                        <span className="checkbox-text userDatatable-title">
                                                            Khách hàng
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </th>
                                        <th>
                                            <span className="userDatatable-title">Tên người dùng</span>
                                        </th>
                                        <th>
                                            <span className="userDatatable-title">email</span>
                                        </th>
                                        <th>
                                            <span className="userDatatable-title">SDT</span>
                                        </th>
                                        <th>
                                            <span className="userDatatable-title">Ngày gia nhập</span>
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
                                    {arrcus.length > 0 &&
                                        arrcus.map((item) => (
                                            <tr key={item?._id}>
                                                <td>
                                                    <div className="d-flex">

                                                        <div className="userDatatable-inline-title">
                                                            <a href="#" className="text-dark fw-500">
                                                                {item?.user?.Username}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="userDatatable-content">
                                                        {item?.user?.Full_Name}

                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="userDatatable-content">
                                                        {item?.user?.Email}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="userDatatable-content">{item?.user?.Phone}</div>
                                                </td>
                                                <td>
                                                    <div className="userDatatable-content">
                                                        {item?.createdAt}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="userDatatable-content d-inline-block">
                                                        <span className="bg-opacity-success  color-success rounded-pill userDatatable-content-status active">
                                                            {item?.user?.Role}
                                                        </span>
                                                    </div>
                                                </td>

                                            </tr>
                                        ))
                                    }

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
// }
export default Customer;
