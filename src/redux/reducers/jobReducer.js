import { FETCH_JOBS_REQUEST, FETCH_JOBS_SUCCESS } from "../actionTypes";

const initialState = {
  jobs: [],
  loading: false,
  error: null,
  page: 1,
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        jobs: [...state.jobs, ...action.payload.jobs],
        page: action.payload.page,
      };
    default:
      return state;
  }
};

export default jobsReducer;
