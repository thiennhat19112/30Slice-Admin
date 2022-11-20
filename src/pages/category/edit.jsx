import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useEffect, useState, useRef } from 'react';

import {
  getParentCategory,
  getOneCategory,
  UpdateCategory,
} from '../../app/services/admin/category.service';

const EditCategory = () => {
  const params = useParams();
  const id = params.id;
  const [category, setCategory] = useState({});
  const [parentCategory, setParentCategory] = useState([]);
  const _isMounted = useRef(false);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState();
  const refName = useRef('');
  const refOrdinal = useRef();
  const refParent = useRef();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit1 = (data) => {
    console.log(data);
  };

  useEffect(() => {
    _isMounted.current = true;
    return () => {
      _isMounted.current = false;
    };
  });
  const loadCategory = async () => {
    _isMounted.current && setLoading(true);
    const data = await getOneCategory(id);
    _isMounted.current && setSelected(data.Is_Show);
    _isMounted.current && setCategory(data);
    const dataParent = await getParentCategory();
    _isMounted.current && setParentCategory(dataParent);
    _isMounted.current && setLoading(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      _id: id,
      Name: refName.current.value,
      Is_Show: selected,
      Ordinal: parseInt(refOrdinal.current.value),
      Parent_Id:
        refParent.current.value === '0' ? null : refParent.current.value,
    };

    const res = await UpdateCategory(data);
    if (res.status === 201) {
      toast.success(res.data.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } else {
      toast.error(res.data.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
    setLoading(false);
    _isMounted && loadCategory();
    console.log(res);
  };

  useEffect(() => {
    loadCategory().then(() => {
      reset(category, parentCategory);
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
          {loading ? (
            <div className="card-body">
              <div className="spin-container text-center">
                <div className="atbd-spin-dots spin-lg">
                  <span className="spin-dot badge-dot dot-primary"></span>
                  <span className="spin-dot badge-dot dot-primary"></span>
                  <span className="spin-dot badge-dot dot-primary"></span>
                  <span className="spin-dot badge-dot dot-primary"></span>
                </div>
              </div>
            </div>
          ) : (
            <div className="col-lg-12">
              {/* Start: product page */}
              <div className="global-shadow border px-sm-30 py-sm-50 px-0 py-20 bg-white radius-xl w-100 mb-40">
                <div className="row justify-content-center">
                  <div className="col-xl-7 col-lg-10">
                    <form onSubmit={handleSubmit(onSubmit1)}>
                      <div className="mx-sm-30 mx-20 ">
                        {/* Start: card */}
                        <div className="card add-product p-sm-30 p-20 mb-30">
                          <div className="card-body p-0">
                            <div className="card-header">
                              <h6 className="fw-500">
                                Thông tin loại sản phẩm
                              </h6>
                            </div>
                            {/* Start: card body */}
                            <div className="add-product__body px-sm-40 px-20">
                              {/* Start: form */}

                              {/* form group */}
                              <div className="form-group">
                                <label htmlFor="id">ID</label>
                                <input
                                  id="id"
                                  readOnly
                                  type="text"
                                  className="form-control"
                                  defaultValue={category._id}
                                  {...register('_id')}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="name">Tên Loại</label>
                                <input
                                  type="text"
                                  id={'name'}
                                  defaultValue={category.Name}
                                  className="form-control"
                                  {...register('Name')}
                                />
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

                              <div className="form-group">
                                <label htmlFor="name8">Thứ tự</label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="name8"
                                  placeholder="Số thứ tự"
                                  defaultValue={category?.Ordinal}
                                  ref={refOrdinal}
                                />
                              </div>
                              <div className="form-group">
                                <div className="countryOption">
                                  <label htmlFor="countryOption">Con ?</label>
                                  <select
                                    className="js-example-basic-single js-states form-control"
                                    id="countryOption"
                                    defaultValue={category?.Parent_Id}
                                    ref={refParent}
                                  >
                                    <option
                                      value="0"
                                      selected={category?.Parent_Id == null}
                                    >
                                      Không
                                    </option>
                                    {parentCategory &&
                                      parentCategory.map((item) => {
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

                              {/* End: form */}
                            </div>
                            {/* End: card body */}
                          </div>
                        </div>
                        {/* End: card */}
                        {/* Start: button group */}
                        <div className="button-group add-product-btn d-flex justify-content-end mt-40">
                          <button className="btn btn-light btn-default btn-squared fw-400 text-capitalize">
                            Huỷ
                          </button>
                          <button className="btn btn-primary btn-default btn-squared text-capitalize">
                            Lưu
                          </button>
                        </div>
                        {/* End: button group */}
                      </div>
                    </form>
                  </div>
                  {/* ends: col-lg-8 */}
                </div>
              </div>
              {/* End: Product page */}
            </div>
          )}
          {/* ends: col-lg-12 */}
        </div>
      </div>
    </>
  );
};
export default EditCategory;
