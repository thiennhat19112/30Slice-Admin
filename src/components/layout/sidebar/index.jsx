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
            <li className="has-child">
              <a href="#" className="">
                <span data-feather="home" className="nav-icon" />
                <span className="menu-text">Dashboard</span>
                <span className="toggle-icon" />
              </a>
              <ul>
                <li>
                  <a className="" href="index.html">
                    Social Media
                  </a>
                </li>
                <li>
                  <a className="" href="business.html">
                    FineTech / Business
                  </a>
                </li>
                <li>
                  <a className="" href="performance.html">
                    Site Performance
                  </a>
                </li>
                <li>
                  <a className="" href="ecommerce.html">
                    Ecommerce
                  </a>
                </li>
                <li>
                  <a className="" href="crm.html">
                    CRM
                  </a>
                </li>
                <li>
                  <a className="" href="sales.html">
                    Sales Performance
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
