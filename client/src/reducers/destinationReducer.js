export const initialState = {
  destinations: [],
  loading: false,
  error: null,
};

export const destinationReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        destinations: action.payload,
        error: null,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "ADD_DESTINATION":
      return {
        ...state,
        destinations: [...state.destinations, action.payload],
      };
    case "EDIT_DESTINATION":
      return {
        ...state,
        destinations: state.destinations.map((dest) =>
          dest._id === action.payload._id ? action.payload : dest,
        ),
      };
    case "DELETE_DESTINATION":
      return {
        ...state,
        destinations: state.destinations.filter(
          (dest) => dest._id !== action.payload,
        ),
      };
    default:
      return state;
  }
};
