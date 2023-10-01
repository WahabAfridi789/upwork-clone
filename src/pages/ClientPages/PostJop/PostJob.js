import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PostJobAside from '../../../Components/ClientComponents/PostJobAside/PostJobAside';
import PostJobTitle from './../../../Components/ClientComponents/PostJobTitle/PostJobTitle';
import PostJobDescription from './../../../Components/ClientComponents/PostJobDescription/PostJobDescription';
import PostJobDetails from './../../../Components/ClientComponents/PostJobDetails/PostJobDetails';
import PostJobExpertise from './../../../Components/ClientComponents/PostJobExpertise/PostJobExpertise';
import PostJobVisibility from '../../../Components/ClientComponents/PostJobVisibility/PostJobVisibility';
import PostJobBudget from './../../../Components/ClientComponents/PostJobBudget/PostJobBudget';
import PostJobReview from './../../../Components/ClientComponents/PostJobReview/PostJobReview';
import PostJobGetStarted from './../../../Components/ClientComponents/PostJobGetStarted/PostJobGetStarted';

export default function PostJob() {
  const [start, setStart] = useState(false);

  const isStart = () => {
    setStart(true);
  };

  const [btns, setBtns] = useState({
    title: true,
    description: true,
    details: true,
    expertise: true,
    visibility: true,
    budget: true,
    review: true,
  });

  return (
    <section className="sec-bg-cn p-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <PostJobAside btns={btns} />
          </div>
          <div className="col-lg-9">
            <Routes>
              <Route path="/" element={<PostJobGetStarted start={start} isStart={isStart} setBtns={setBtns} btns={btns} />} />
              <Route path="/title" element={<PostJobTitle setBtns={setBtns} btns={btns} />} />
              <Route path="/description" element={<PostJobDescription setBtns={setBtns} btns={btns} />} />
              <Route path="/details" element={<PostJobDetails setBtns={setBtns} btns={btns} />} />
              <Route path="/expertise" element={<PostJobExpertise setBtns={setBtns} btns={btns} />} />
              <Route path="/visibility" element={<PostJobVisibility setBtns={setBtns} btns={btns} />} />
              <Route path="/budget" element={<PostJobBudget setBtns={setBtns} btns={btns} />} />
              <Route path="/review" element={<PostJobReview />} />
            </Routes>
          </div>
        </div>
      </div>
    </section>
  );
}
