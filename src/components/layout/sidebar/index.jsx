import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <aside className="sidebar-wrapper">
      <div className="sidebar sidebar-collapse" id="sidebar">
        <div className="sidebar__menu-group">
          <ul className="sidebar_nav">
            <li className="menu-title">
              <span>Loại Sản Phẩm</span>
            </li>
            <li>
              <NavLink to="/category" className="">
                <span data-feather="activity" className="nav-icon" />
                <span className="menu-text">Quản lý loại sản phẩm</span>
              </NavLink>
            </li>
            <li className="menu-title">
              <span>Sản Phẩm</span>
            </li>
            <li>
              <NavLink to="/products" className="">
                <span data-feather="activity" className="nav-icon" />
                <span className="menu-text">Quản lý sản phẩm</span>
              </NavLink>
            </li>
            <li className="menu-title">
              <span>Tin tức</span>
            </li>
            <li>
            <NavLink to="/news" className="">
                <span data-feather="activity" className="nav-icon" />
                <span className="menu-text">Quản Lý tin tức</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
