const initialState = {
  data: [],
  isError: null,
  isLoading: true,
};

export const UpdateWorkerReducers = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_WORKER_REQUEST":
      return {
        ...state,
      };
    case "UPDATE_WORKER_SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case "UPDATE_WORKER_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};
