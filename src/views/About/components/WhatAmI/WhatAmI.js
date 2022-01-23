import React from "react";

const WhatAmI = () => (
  <div className="flex items-center justify-center p-10 flex-col space-y-6">
    <h1 className="text-center text-4xl">What is easyKU?</h1>
    <p className="text-sm">
      <span className="font-semibold">easyKU</span> is a frontend for the{" "}
      {
        <code>
          <a href="https://kerala-university-api.herokuapp.com">
            kerala-university-api
          </a>
        </code>
      }
      , which scraps the{" "}
      {
        <code>
          <a href="https://exams.keralauniversity.ac.in">
            official kerala university site
          </a>
        </code>
      }{" "}
      for results and notifications.
    </p>
  </div>
);

export default WhatAmI;
