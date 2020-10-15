import { IS_FETCHING, IS_AVAILABLE, IS_NOT_AVAILABLE } from "./types";

export const fetchDataAction = (url) => {
  return (dispatch) => {
    //Add loader
    dispatch({
      type: IS_FETCHING,
    });

    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(res.statusText);
        }
      })
      .then((data) => {
        let fetchedData = data.results; // is an array of objects
        //remove loader
        dispatch({
          type: IS_AVAILABLE,
          payload: fetchedData,
        });
      })
      .catch((error) => {
        //remove loader
        dispatch({
          type: IS_NOT_AVAILABLE,
          payload: error.massage,
        });
      });
  };
};
