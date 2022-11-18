import { Activity, Box, Archive, Book } from "react-feather";
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
              <span>Loại Sản Phẩm</span>
            </li>
            <li>
              <NavLink to="/category" className="">
                <Archive className="nav-icon" />
                <span className="menu-text">Quản lý loại sản phẩm</span>
              </NavLink>
            </li>
            <li className="menu-title">
              <span>Sản Phẩm</span>
            </li>
            <li>
              <NavLink to="/products" className="">
                <Box className="nav-icon" />
                <span className="menu-text">Quản lý sản phẩm</span>
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
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
