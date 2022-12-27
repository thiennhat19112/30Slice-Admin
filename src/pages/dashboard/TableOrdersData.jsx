import moment from 'moment/moment';
import { useEffect, useState } from 'react';
import { Eye, Edit, XCircle } from 'react-feather';

function TableOrdersData({ datas: orders }) {
  // const [orders, setOrders] = useState([]);
  // useEffect(() => {
  //   setOrders(datas);
  // });
  // console.log(orders);

  return (
    <>
      <div className="userDatatable global-shadow border p-30 bg-white radius-xl w-100 mb-30">
        <div className="table-responsive">
          <table className="table mb-0 table-borderless w-100">
            <thead>
              <tr className="userDatatable-header">
                <th>
                  <span className="userDatatable-title ">STT</span>
                </th>
                <th>
                  <span className="userDatatable-title ">Tên khách hàng</span>
                </th>
                <th>
                  <span className="userDatatable-title">Địa chỉ</span>
                </th>
                <th>
                  <span className="userDatatable-title">Số điện thoại</span>
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
                  <span className="userDatatable-title">Ngày đặt hàng</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((item, index) => (
                  <tr key={item?._id}>
                    <td>
                      <div className="userDatatable-content text-wrap text-start">
                        {index + 1}
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
                      <div className="userDatatable-content">{item?.Phone}</div>
                    </td>
                    <td>
                      <div className="userDatatable-content ">
                        {(item?.Amount).toLocaleString('vi-VN', {
                          style: 'currency',
                          currency: 'VND',
                        })}
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        {item?.Payment_Method}
                      </div>
                    </td>
                    <td>
                      {item?.Status === 'completed' && (
                        <div class="userDatatable-content d-inline-block">
                          <span class="bg-opacity-success  color-success rounded-pill userDatatable-content-status active">
                            Hoàn tất
                          </span>
                        </div>
                      )}
                      {item?.Status === 'Pending' && (
                        <div class="userDatatable-content d-inline-block">
                          <span class="bg-opacity-warning  color-warning rounded-pill userDatatable-content-status active">
                            Đang vận chuyển
                          </span>
                        </div>
                      )}
                      {item?.Status === 'failed' && (
                        <div class="userDatatable-content d-inline-block">
                          <span class="bg-opacity-danger  color-danger rounded-pill userDatatable-content-status active">
                            Đã huỷ
                          </span>
                        </div>
                      )}
                    </td>

                    <td>
                      <div className="userDatatable-content">
                        {moment(item?.createdAt).format('L')}
                      </div>
                    </td>
                    <td>
                      <ul className="orderDatatable_actions mb-0 d-flex flex-wrap">
                        {/* <Tooltip title="Xem chi tiết đơn hàng">
                            <li onClick={() => handleShowModalDetail(item)}>
                              <a href="javascript:void(0)" className="view">
                                <Eye />
                              </a>
                            </li>
                          </Tooltip>
                          <Tooltip title="Sửa">
                            <li onClick={() => handleShowModalNote(item._id)}>
                              <Link className="edit">
                                <Edit />
                              </Link>
                            </li>
                          </Tooltip>
                          <Tooltip title="Xoá">
                            <li onClick={() => onConfirm(item._id)}>
                              <a href="javascript:void(0)" className="remove">
                                <XCircle />
                              </a>
                            </li>
                          </Tooltip> */}
                      </ul>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TableOrdersData;
