import Modal from "react-bootstrap/Modal";
import { useImperativeHandle } from "react";
import { useState } from "react";
import { X } from "react-feather";
import { useRef } from "react";
import { useEffect } from "react";

const Delete = (props) => {
  return (
    <div
      className="modal-basic modal fade show"
      id={"modal-info-delete" + props?.item?.Id_User}
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content modal-bg-white ">
          <div className="modal-header">
            <h6 className="modal-title">Bạn có muốn xóa khách hàng: {props?.item?.user?.Full_Name}
            </h6>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span data-feather="x" />
            </button>

          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-success btn-sm"
              data-dismiss="modal"
            >
              Xác nhận
            </button>

            <button
              type="button"
              className="btn btn-secondary btn-sm"
              data-dismiss="modal"
            >
              Đóng
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Delete;
