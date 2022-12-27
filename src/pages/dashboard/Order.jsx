import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

function getPercentageIncrease(a, b) {
  if (b === 0) return a * 100;
  return ((a - b) / b) * 100;
}

const Order = ({ data }) => {
  const date = new Date();

  const [totalOrdersThisMonth, setTotalOrdersThisMonth] = useState();
  const [compareToLastMonth, setCompareToLastMonth] = useState();

  const dataChart = {
    labels: data && data.map((item) => item.month),
    datasets: [
      {
        label: 'Tổng đơn hàng',
        data: data && data.map((item) => item.totalOrders),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const optionsChart = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: false,
        text: 'Tổng lượng đơn hàng tháng',
      },
    },
  };

  useEffect(() => {
    if (data) {
      data.forEach((item, index) => {
        if (Number(item.month.slice(0, 2)) === date.getMonth() + 1) {
          const thisMonth = item.totalOrders;
          const lastMonth = data[index - 1].totalOrders;
          setTotalOrdersThisMonth(thisMonth);
          const compare = getPercentageIncrease(
            Number(thisMonth),
            Number(lastMonth)
          );
          setCompareToLastMonth(compare);
          return;
        }
      });
    }
  });

  return (
    <>
      <div className="col-xxl-6 col-md-6 col-ssm-12 mb-30">
        <div className="ap-po-details p-25 radius-xl bg-white">
          <div className="overview-content">
            <div className="dashboard-card-container d-grid justify-content-between align-items-center mb-1">
              <div>
                <h1>{totalOrdersThisMonth}</h1>
                <span>Đơn hàng</span>
              </div>
              <div className="ap-po-details-time">
                <span
                  className={
                    compareToLastMonth >= 0 ? 'color-success' : 'color-danger'
                  }
                >
                  <i
                    className={
                      compareToLastMonth >= 0
                        ? 'las la-arrow-up'
                        : 'las la-arrow-down'
                    }
                  />
                  <strong>
                    {data && Math.trunc(Math.abs(compareToLastMonth))}%
                  </strong>
                </span>
                <small> so với tháng trước</small>
              </div>
            </div>
            <div className="ap-po-details-time align-self-center">
              <Bar options={optionsChart} data={dataChart} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
