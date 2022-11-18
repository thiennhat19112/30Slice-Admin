import { FormControlLabel } from "@mui/material";
import React from "react";
import SwitchIOS from "../../CustomMui/switch";

const Modal = () => {
  return (
    <div>
      {/* Modal */}
      <div
        className="modal fade new-member"
        id="new-member"
        role="dialog"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content  radius-xl">
            <div className="modal-header">
              <h6 className="modal-title fw-500" id="staticBackdropLabel">
                Thêm tin tức
              </h6>
            </div>
            <div className="modal-body">
              <div className="new-member-modal">
                <form>
                  <div className="form-group mb-20">
                    <label
                      htmlFor="title-news"
                      className="fs-14 color-light strikethrough"
                    >
                      Tiêu đề tin tức
                    </label>
                    <textarea
                      className="form-control"
                      id="title-news"
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group mb-20">
                    <label
                      htmlFor="desc-news"
                      className="fs-14 color-light strikethrough"
                    >
                      Mô tả
                    </label>
                    <textarea
                      className="form-control"
                      id="desc-news"
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group mb-20">
                    <label
                      htmlFor="img-news"
                      className="fs-14 color-light strikethrough"
                    >
                      Hình ảnh
                    </label>
                    <input class="form-control" type="file" id="formFile" />
                  </div>
                  <div className="form-group mb-20 ">
                    <FormControlLabel
                      className="mr-50"
                      labelPlacementStart
                      control={<SwitchIOS defaultChecked={true} />}
                      label="Ẩn/Hiện"
                    />
                    <FormControlLabel
                      className="mr-50"
                      labelPlacementStart
                      control={<SwitchIOS />}
                      label="Nỗi bật"
                    />
                  </div>
                  <div className="button-group d-flex pt-25 justify-content-end">
                    <button className="btn btn-success btn-default btn-squared text-capitalize">
                      Thêm
                    </button>
                    <button
                      type="button"
                      data-dismiss="modal"
                      aria-label="Close"
                      className="btn btn-danger btn-default btn-squared fw-400 text-capitalize"
                    >
                      Huỷ
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
    </div>
  );
};

export default Modal;
