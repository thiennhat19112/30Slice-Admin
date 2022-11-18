import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getParentCategory,
  getOneCategory,
  UpdateCategory,
} from "../../app/services/auth/category.service";

const EditCategory = () => {
  const params = useParams();
  const id = params.id;
  const [category, setCategory] = useState({});
  const [selected, setSelected] = useState(true);
  const [parentCategory, setParentCategory] = useState([]);

  useEffect(() => {
    getOneCategory(id).then((res) => {
      setCategory(res);
      setSelected(res.Is_Show);
    });
    getParentCategory().then((res) => {
      setParentCategory(res);
    });
  }, [id]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="shop-breadcrumb">
              <div className="breadcrumb-main">
                <h4 className="text-capitalize breadcrumb-title">
                  Sửa Loại Sản Phẩm
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            {/* Start: product page */}
            <div className="global-shadow border px-sm-30 py-sm-50 px-0 py-20 bg-white radius-xl w-100 mb-40">
              <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-10">
                  <div className="mx-sm-30 mx-20 ">
                    {/* Start: card */}
                    <div className="card add-product p-sm-30 p-20 mb-30">
                      <div className="card-body p-0">
                        <div className="card-header">
                          <h6 className="fw-500">Thông tin loại sản phẩm</h6>
                        </div>
                        {/* Start: card body */}
                        <div className="add-product__body px-sm-40 px-20">
                          {/* Start: form */}
                          <form>
                            {/* form group */}
                            <div className="form-group">
                              <label htmlFor="name1">ID</label>
                              <input
                                type="text"
                                className="form-control"
                                id="name1"
                                placeholder="red chair"
                                defaultValue={category._id}
                                readOnly
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="name1">Tên Loại</label>
                              <input
                                type="text"
                                className="form-control"
                                id="name1"
                                placeholder="red chair"
                                defaultValue={category.Name}
                              />
                            </div>

                            <div className="form-group status-radio add-product-status-radio mb-20">
                              <label className="mb-15">Ẩn/Hiện</label>
                              <div className="d-flex">
                                <div className="radio-horizontal-list d-flex flex-wrap">
                                  <div className="radio-theme-default custom-radio ">
                                    <input
                                      className="radio"
                                      type="radio"
                                      name="radio-optional"
                                      defaultValue={true}
                                      id="radio-hl1"
                                      checked={selected === true}
                                      onChange={() => setSelected(true)}
                                    />
                                    <label htmlFor="radio-hl1">
                                      <span className="radio-text">Hiện</span>
                                    </label>
                                  </div>
                                  <div className="radio-theme-default custom-radio ">
                                    <input
                                      className="radio"
                                      type="radio"
                                      name="radio-optional"
                                      defaultValue={false}
                                      id="radio-hl2"
                                      checked={selected === false}
                                      onChange={() => setSelected(false)}
                                    />
                                    <label htmlFor="radio-hl2">
                                      <span className="radio-text">Ẩn</span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <label htmlFor="name8">Thứ tự</label>
                              <input
                                type="number"
                                className="form-control"
                                id="name8"
                                placeholder="Số thứ tự"
                                defaultValue={category.Ordinal}
                              />
                            </div>
                            <div className="form-group">
                              <div className="countryOption">
                                <label htmlFor="countryOption">Con ?</label>
                                <select
                                  className="js-example-basic-single js-states form-control"
                                  id="countryOption"
                                  defaultValue={category.Parent_Id}
                                >
                                  <option
                                    value="null"
                                    selected={category.Parent_Id == null}
                                  >
                                    Không
                                  </option>

                                  {parentCategory.map((item) => {
                                    return (
                                      <option
                                        key={item._id}
                                        value={item?._id}
                                        selected={
                                          item._id === category?.Parent_Id
                                        }
                                      >
                                        {item.Name}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>
                          </form>
                          {/* End: form */}
                        </div>
                        {/* End: card body */}
                      </div>
                    </div>
                    {/* End: card */}
                    {/* Start: button group */}
                    <div className="button-group add-product-btn d-flex justify-content-end mt-40">
                      <button className="btn btn-light btn-default btn-squared fw-400 text-capitalize">
                        cancel
                      </button>
                      <button className="btn btn-primary btn-default btn-squared text-capitalize">
                        save product
                      </button>
                    </div>
                    {/* End: button group */}
                  </div>
                </div>
                {/* ends: col-lg-8 */}
              </div>
            </div>
            {/* End: Product page */}
          </div>
          {/* ends: col-lg-12 */}
        </div>
      </div>
    </>
  );
};
export default EditCategory;
