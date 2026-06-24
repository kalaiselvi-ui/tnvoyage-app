import { createContext, useContext, useReducer } from "react";
import {
  destinationReducer,
  initialState,
} from "../reducers/destinationReducer.js";
import API from "../api/axiosInstance.js";

const DestinationContext = createContext();

export const DestinationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(destinationReducer, initialState);

  //get destination
  const getAllDestination = async () => {
    try {
      dispatch({
        type: "FETCH_START",
      });
      const res = await API.get(`/destination`);
      dispatch({
        type: "FETCH_SUCCESS",
        payload: res.data.destination,
      });
    } catch (err) {
      dispatch({
        type: "FETCH_ERROR",
        payload: err.message,
      });
    }
  };
  //create destination
  const addDestination = async (formData) => {
    try {
      const res = await API.post(`/destination/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      dispatch({
        type: "ADD_DESTINATION",
        payload: res.data.data,
      });
      return res.data.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  const editDestination = async (id, formData) => {
    try {
      const res = await API.put(`/destination/edit/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      dispatch({
        type: "EDIT_DESTINATION",
        payload: res.data.data,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  const deleteDestination = async (id) => {
    try {
      const res = await API.delete(`/destination/delete/${id}`);
      dispatch({
        type: "DELETE_DESTINATION",
        payload: id,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  return (
    <DestinationContext.Provider
      value={{
        destinations: state.destinations,
        loading: state.loading,
        error: state.error,
        getAllDestination,

        editDestination,
        addDestination,
        deleteDestination,
      }}
    >
      {children}
    </DestinationContext.Provider>
  );
};

export const useDestination = () => {
  return useContext(DestinationContext);
};
