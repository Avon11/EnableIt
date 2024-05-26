// App.js
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "./redux/actions/jobActions";
import JobCard from "./components/Card";

const App = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);
  const loading = useSelector((state) => state.loading);
  const bottomRef = useRef();

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.1,
    });
    observer.observe(bottomRef.current);

    return () => {
      observer.disconnect();
    };
  }, [dispatch]);

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && !loading) {
      dispatch(fetchJobs());
    }
  };

  return (
    <div className="App">
      <div className="job-list">
        {jobs.jobs.map((job) => (
          <JobCard key={job.ID} job={job} />
        ))}
        {loading && <div>Loading...</div>}
        <div ref={bottomRef} style={{ height: "10px" }}></div>
      </div>
    </div>
  );
};

export default App;
