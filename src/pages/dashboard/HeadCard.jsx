import { useState, useEffect } from 'react';
import {
  getTotalProduct,
  getTotalOrder,
  getTotalCustomer,
  getTotalStylist,
  getTotalBooking,
} from '../../app/services/admin/statistic.service';

function HeadCard() {
  const [datas, setDatas] = useState({});

  useEffect(() => {
    Promise.all([
      getTotalProduct(),
      getTotalOrder(),
      getTotalCustomer(),
      getTotalStylist(),
      getTotalBooking(),
    ]).then((responses) => {
      const [
        totalProduct,
        totalOrder,
        totalCustomer,
        totalStylist,
        totalBooking,
      ] = responses;
      setDatas({
        totalProduct,
        totalOrder,
        totalCustomer,
        totalStylist,
        totalBooking,
      });
    });
  }, []);


  return (
    <>
      <div className="col-xxl-3 col-md-6 col-ssm-12 mb-30">
        <div className="ap-po-details p-25 radius-xl bg-white">
          <div className="overview-content">
            <div className="dashboard-card-container d-grid justify-content-between align-items-center mb-1">
              <div>
                <h1>{datas.totalOrder}</h1>
                <span>Đơn hàng</span>
              </div>
            </div>
            {/* <div className="ap-po-details-time align-self-center">
              <Bar options={optionsChart} data={dataChart} />
            </div> */}
          </div>
        </div>
      </div>

      <div className="col-xxl-3 col-md-6 col-ssm-12 mb-30">
        <div className="ap-po-details p-25 radius-xl bg-white">
          <div className="overview-content">
            <div className="dashboard-card-container d-grid justify-content-between align-items-center mb-1">
              <div>
                <h1>{datas.totalBooking}</h1>
                <span>Yêu cầu đặt lịch</span>
              </div>
            </div>
            {/* <div className="ap-po-details-time align-self-center">
              <Bar options={optionsChart} data={dataChart} />
            </div> */}
          </div>
        </div>
      </div>

      <div className="col-xxl-3 col-md-6 col-ssm-12 mb-30">
        <div className="ap-po-details p-25 radius-xl bg-white">
          <div className="overview-content">
            <div className="dashboard-card-container d-grid justify-content-between align-items-center mb-1">
              <div>
                <h1>{datas.totalProduct}</h1>
                <span>Sản phẩm</span>
              </div>
            </div>
            {/* <div className="ap-po-details-time align-self-center">
              <Bar options={optionsChart} data={dataChart} />
            </div> */}
          </div>
        </div>
      </div>

      <div className="col-xxl-3 col-md-6 col-ssm-12 mb-30">
        <div className="ap-po-details p-25 radius-xl bg-white">
          <div className="overview-content">
            <div className="dashboard-card-container d-grid justify-content-between align-items-center mb-1">
              <div>
                <h1>{datas.totalCustomer}</h1>
                <span>Khách hàng</span>
              </div>
            </div>
            {/* <div className="ap-po-details-time align-self-center">
              <Bar options={optionsChart} data={dataChart} />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default HeadCard;
