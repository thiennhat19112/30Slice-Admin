const EditCategory = () => {
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
                              <label htmlFor="name1">product name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="name1"
                                placeholder="red chair"
                              />
                            </div>
                            {/* form group 1 */}
                            <div className="form-group">
                              <label htmlFor="name2">sub text</label>
                              <input
                                type="text"
                                className="form-control"
                                id="name2"
                                placeholder="sub heading"
                              />
                            </div>
                            {/* form group 2 */}
                            <div className="form-group">
                              <div className="countryOption">
                                <label htmlFor="countryOption">category</label>
                                <select
                                  className="js-example-basic-single js-states form-control"
                                  id="countryOption"
                                >
                                  <option value="JAN">event</option>
                                  <option value="FBR">Venues</option>
                                </select>
                              </div>
                            </div>
                            {/* form group 3 */}
                            <div className="form-group quantity-appearance">
                              <label>price</label>
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                  >
                                    <span data-feather="dollar-sign" />
                                  </span>
                                </div>
                                <div className="pt_Quantity">
                                  <input
                                    type="number"
                                    className="form-control"
                                    min={0}
                                    max={100}
                                    step={1}
                                    defaultValue={0}
                                    data-inc={1}
                                  />
                                </div>
                              </div>
                            </div>
                            {/* form group 4 */}
                            <div className="form-group quantity-appearance">
                              <label>Discount</label>
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span
                                    className="input-group-text"
                                    id="basic-addon2"
                                  >
                                    <span data-feather="percent" />
                                  </span>
                                </div>
                                <div className="pt_Quantity">
                                  <input
                                    type="number"
                                    className="form-control"
                                    min={0}
                                    max={100}
                                    step={1}
                                    defaultValue={0}
                                    data-inc={1}
                                  />
                                </div>
                              </div>
                            </div>
                            {/* form group 5 */}
                            <div className="form-group status-radio add-product-status-radio mb-20">
                              <label className="mb-15">status</label>
                              <div className="d-flex">
                                <div className="radio-horizontal-list d-flex flex-wrap">
                                  <div className="radio-theme-default custom-radio ">
                                    <input
                                      className="radio"
                                      type="radio"
                                      name="radio-optional"
                                      defaultValue={0}
                                      id="radio-hl1"
                                    />
                                    <label htmlFor="radio-hl1">
                                      <span className="radio-text">
                                        Published
                                      </span>
                                    </label>
                                  </div>
                                  <div className="radio-theme-default custom-radio ">
                                    <input
                                      className="radio"
                                      type="radio"
                                      name="radio-optional"
                                      defaultValue={0}
                                      id="radio-hl2"
                                    />
                                    <label htmlFor="radio-hl2">
                                      <span className="radio-text">draft</span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* form group 6 */}
                            <div className="form-group">
                              <label htmlFor="exampleFormControlTextarea1">
                                Product Description
                              </label>
                              <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows={3}
                                placeholder="loram ipsum dolor sit amit"
                                defaultValue={""}
                              />
                            </div>
                            {/* form group 7 */}
                            <div className="form-group">
                              <label htmlFor="name8">Meta Title</label>
                              <input
                                type="text"
                                className="form-control"
                                id="name8"
                                placeholder="Meta title"
                              />
                            </div>
                            {/* form group 8 */}
                            <div className="form-group mb-0">
                              <label htmlFor="name9">Meta Keyword</label>
                              <input
                                type="text"
                                className="form-control"
                                id="name9"
                                placeholder="Meta keyword"
                              />
                            </div>
                          </form>
                          {/* End: form */}
                        </div>
                        {/* End: card body */}
                      </div>
                    </div>
                    {/* End: card */}
                    {/* Start: card */}
                    <div className="card add-product p-sm-30 p-20 ">
                      <div className="card-body p-0">
                        <div className="card-header">
                          <h6 className="fw-500">Product image</h6>
                        </div>
                        {/* Start: product body */}
                        <div className="add-product__body-img px-sm-40 px-20">
                          <label
                            htmlFor="upload"
                            className="file-upload__label"
                          >
                            <span className="upload-product-img px-10 d-block">
                              <span className="file-upload">
                                <span data-feather="upload" />
                                <input
                                  id="upload"
                                  className="file-upload__input"
                                  type="file"
                                  name="file-upload"
                                />
                              </span>
                              <span className="pera">
                                Drag and drop an image
                              </span>
                              <span>
                                or{" "}
                                <a href="#" className="color-secondary">
                                  Browse
                                </a>{" "}
                                to choose a file
                              </span>
                            </span>
                          </label>
                          <div className="upload-product-media d-flex justify-content-between align-items-center mt-25">
                            <div className="upload-media-area d-flex">
                              <img
                                src="img/food-restaurant-media.png"
                                alt="img"
                              />
                              <div className=" upload-media-area__title  d-flex flex-wrap align-items-center ml-10">
                                <div>
                                  <p>Product_image.jpg</p>
                                  <span>68.8 KB</span>
                                </div>
                                <div className="upload-media-area__btn">
                                  <button
                                    type="button"
                                    className="transparent rounded-circle wh-30 border-0 color-danger"
                                  >
                                    <span data-feather="trash-2" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End: product body */}
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
