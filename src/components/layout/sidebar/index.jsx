import {
  Activity,
  Box,
  Archive,
  Book,
  User,
  Users,
  Calendar,
  Truck,
  Info,
  Scissors,
} from "react-feather";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <aside className="sidebar-wrapper">
      <div className="sidebar sidebar-collapse" id="sidebar">
        <div className="sidebar__menu-group">
          <ul className="sidebar_nav">
            <li className="menu-title">
              <span>Thống kê</span>
            </li>
            <li>
              <NavLink to="/" className="">
                <Activity className="nav-icon" />
                <span className="menu-text">Thống kê dữ liệu</span>
              </NavLink>
            </li>
            <li className="menu-title">
              <span>Sản Phẩm</span>
            </li>
            <li>
              <NavLink to="/category" className="">
                <Archive className="nav-icon" />
                <span className="menu-text">Quản lý loại sản phẩm</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="">
                <Box className="nav-icon" />
                <span className="menu-text">Quản lý sản phẩm</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/combo" className="">
                <Box className="nav-icon" />
                <span className="menu-text">Quản lý combo sản phẩm</span>
              </NavLink>
            </li>
            <li className="menu-title">
              <span>Tin tức</span>
            </li>
            <li>
              <NavLink to="/news" className="">
                <Book className="nav-icon" />
                <span className="menu-text">Quản lý tin tức</span>
              </NavLink>
            </li>
            <li className="menu-title">
              <span>Lịch đặt (nhân viên mới xem được)</span>
            </li>
            <li>
              <NavLink to="/schedule" className="">
                <Calendar className="nav-icon" />
                <span className="menu-text">Quản lý lịch đặt</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
