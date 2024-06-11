import React from "react";
import AddSection from "./AddSection";

function Lists() {
  return (
    <div>
      <AddSection />

      <div className=" grid grid-cols-3 ">
        <div className=" ">
          <h1>All</h1>
        </div>
        <div>
          
          <h1>Completed</h1>
        </div>
        <div>
          
          <h1>Pending</h1>
        </div>
      </div>
    </div>
  );
}

export default Lists;
