import { NavLink } from "react-router-dom";
import { useState } from "react";
import { uploadLoadFIle } from "../../app/services/upload";
function Testupload() {
  const [file, setFile] = useState("");

  const [percent, setPercent] = useState(0);
  // Handles input change event and updates state
  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  const handleUpload = async () => {debugger
    const a = await uploadLoadFIle(file);
    console.log(a);
  };
  const [check, setCheck] = useState("none");
  function Changebt() {
    if (check == "none") {
      setCheck("block");

      // statement
    } else {
      setCheck("none");
    }
  }

  return (
    <>
      <section className="banner-area organic-breadcrumb">
        <div className="container">
          <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div className="col-first">
              <h1>Sản phẩm</h1>
              <nav className="d-flex align-items-center">
                <NavLink
                  exact="true"
                  activeclass="active "
                  to="/"
                  className="nav-item"
                >
                  Trang chủ <span className="lnr lnr-arrow-right"></span>
                </NavLink>
                <a href="#a">Sản phẩm</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <input type="file" accept="image/*" onChange={handleChange} />
        <button className="btn btn-danger" onClick={handleUpload}>
          Upload to Firebase
        </button>
        <div className="percentage">
          <div className="progress">
            <div
              className="progress-bar color-6"
              role="progressbar"
              style={{ width: `${percent}%` }}
              aria-valuenow={0}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Testupload;
