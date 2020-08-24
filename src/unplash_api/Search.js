import React, { useState } from "react";
import "./search-style.css";
import { fetchDataAction } from "../redux/fetchDataActions";
import { connect } from "react-redux";
import Modal from "./Modal";
import SkelentalLoader from "../unplash_api/loader/SkenlentalLoader";

const initialModalData = [
  {
    id: 0,
    alt_description: "",
    user: {
      name: "",
      location: null,
    },
    urls: { raw: "" },
  },
];
function Search({ dispatch, data }) {
  const [searchItem, setSearchTerm] = useState("");
  const [modal, setModal] = useState(initialModalData);
  const [showModal, setShowModal] = useState(false);
  const [searchParam, setsearchParam] = useState("");

  const showModalHandle = (id) => {
    let info = data.data.slice();
    let modalIfor = info.filter((item, i) => {
      return item.id === id;
    });

    setModal(modalIfor);
    setShowModal(!showModal);
  };

  const closeModalHandler = () => {
    setModal(initialModalData);
    setShowModal(!showModal);
  };

  const getInputValueHandler = (e) => {
    let address = "https://api.unsplash.com/search/photos?query=";
    let apiAccessKey =
      "&client_id=0fc8549db89ae4c1188627dcbfa7814ade834ef2ba33f5a738f9127b8eb1f11d";

    if (e.target.value !== "" && e.key === "Enter") {
      let q = e.target.value;
      let url = `${address}${q}${apiAccessKey}`;
      dispatch(fetchDataAction(url));
      setSearchTerm(q);
    }
  };

  return (
    <div>
      <div className="search-bar-cont">
        <div
          className={`search-bar-cont__search-bar ${data.isFetching && "hide"}`}
        >
          <span className="search-bar-cont__search-icon"></span>
          <input
            type="search"
            placeholder="Search for photo"
            onKeyPress={getInputValueHandler}
            className="search-bar-cont__input-field"
          />
        </div>

        <div className={`searching-for ${data.isFetching && "show"}`}>
          <span>Searching Results for</span>
          <span>{`"${searchItem}"`}</span>
        </div>
      </div>
      <Modal
        modal={modal}
        showModal={showModal}
        closeModalHandler={closeModalHandler}
      />

      {data.isFetching ? (
        <div className="skelental-loader">
          <SkelentalLoader />
        </div>
      ) : (
        <div className="card-list">
          {data.data.length > 0 &&
            data.data.map((item) => {
              return (
                <div className="card" key={item.id}>
                  <img
                    className="card-photo"
                    src={item.urls.raw}
                    alt={item.alt_description}
                    onClick={() => {
                      showModalHandle(item.id);
                    }}
                  />

                  <div className="card-text">
                    <p className="card-auto-name">{item.user.name}</p>
                    <p className="card-auto-location">{item.user.location}</p>
                  </div>
                </div>
              );
            })}
        </div>
      )}
      {data.err && data.data.length === 0 && <div>{data.err}</div>}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    data: state.data,
    modalData: state.modalData,
  };
};
export default connect(mapStateToProps)(Search);
/*   https://api.unsplash.com/search/photos?query=london&client_id=0fc8549db89ae4c1188627dcbfa7814ade834ef2ba33f5a738f9127b8eb1f11d */
// for development purpose
// useEffect(() => {console.log(data);});
