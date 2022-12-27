import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import './dashboard.css';

import Order from './Order';
import HeadCard from './HeadCard';
import TableOrdersData from './TableOrdersData';

import {
  getTotalOrderByMonth,
  getAllOrders,
} from '../../app/services/admin/statistic.service';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [datas, setDatas] = useState({});

  useEffect(() => {
    Promise.all([getTotalOrderByMonth(), getAllOrders()]).then((responses) => {
      const [orders, ordersData] = responses;
      setDatas({ orders, ordersData });
      console.log(ordersData);
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-lg-12">
          <div className="breadcrumb-main">
            <h4 className="text-capitalize breadcrumb-title">
              Thống kê dữ liệu
            </h4>
          </div>
        </div>
        {/* Card 1 */}
        <HeadCard />
        <Order data={datas.orders} />
        {/* Card 1 End */}

        <div className="col-xxl-6 mb-30">
          <div className="revenue-device-chart">
            <div className="card broder-0">
              <div className="card-header">
                <h6>Đơn hàng mới nhất</h6>
              </div>
              {/* ends: .card-header */}
              <div className="card-body">
                <div className="tab-content">
                  <TableOrdersData datas={datas.ordersData} />
                </div>
              </div>
              {/* ends: .card-body */}
            </div>
          </div>
        </div>
      </div>
      {/* ends: .row */}
    </div>
  );
}

export default Dashboard;
