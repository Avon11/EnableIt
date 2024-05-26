import { FETCH_JOBS_REQUEST, FETCH_JOBS_SUCCESS } from "../actionTypes";

export const fetchJobs = () => {
  return async (dispatch, getState) => {
    dispatch({ type: FETCH_JOBS_REQUEST });

    try {
      const state = getState();
      const page = state.jobs.page;
      const response = await fetch(
        `https://give-me-users-forever.vercel.app/api/users/${
          (page - 1) * 10
        }/next`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      const jobs = data.users;
      dispatch({ type: FETCH_JOBS_SUCCESS, payload: { jobs, page: page + 1 } });
    } catch (error) {
      console.log("Error ", error);
    }
  };
};
