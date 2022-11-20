import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import { addNews } from "../../app/services/admin/news.service";
import { useRef } from "react";
import { uploadLoadFIle } from "../../app/services/upload";
import { useSelector } from "react-redux";

const Modal = ({ loadNews }) => {
  const [news, setNews] = useState({ Is_Show: true });
  const [selected, setSelected] = useState(true);
  const [isValid, setIsValid] = useState(true);
  const file = useRef();
  const { name } = useSelector((state) => state.auth.user.name);

  const handleChange = (e) => {
    setNews((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    const urlImg = await uploadLoadFIle(file.current.files[0]);
    const data = { ...news, Is_Show: selected, image: urlImg, Create_By: name };
    await addNews(data);
    loadNews();
    e.preventDefault();
  };
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
        <div className="modal-dialog modal-xl modal-dialog-centered">
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
                      rows={2}
                      defaultValue={""}
                      name="Title"
                      onBlur={handleChange}
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
                      name="Desc"
                      onBlur={handleChange}
                    />
                  </div>
                  <div className="form-group mb-20">
                    <label
                      htmlFor="img-news"
                      className="fs-14 color-light strikethrough"
                    >
                      Hình ảnh
                    </label>

                    <input
                      ref={file}
                      className="form-control"
                      type="file"
                      id="formFile"
                    />
                  </div>
                  <div className="form-group mb-20">
                    <label className="fs-14 color-light strikethrough">
                      Nội dung
                    </label>
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="mail-message"
                        className="form-control-lg"
                        placeholder="Type your message..."
                      ></textarea>
                    </div>
                    {/* <CKEditor
                      editor={ClassicEditor}
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        console.log("Editor is ready to use!", editor);
                      }}
                      onBlur={(event, editor) => {
                        const data = editor.getData();
                        setNews((prev) => {
                          return { ...prev, Content: data };
                        });
                      }}
                    /> */}
                  </div>

                  <div className="form-group mb-20 ">
                    <label className="mb-15">Ẩn/Hiện</label>
                    <div className="d-flex">
                      <div className="radio-horizontal-list d-flex flex-wrap">
                        <div className="radio-theme-default custom-radio ">
                          <input
                            className="radio"
                            type="radio"
                            name="Is_Show"
                            value={true}
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
                            name="Is_Show"
                            value={false}
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
                  <div className="button-group d-flex pt-25 justify-content-end">
                    <button
                      type="button"
                      aria-label={isValid ? "close" : ""}
                      onClick={handleSubmit}
                      className="btn btn-success btn-default btn-squared text-capitalize"
                    >
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
