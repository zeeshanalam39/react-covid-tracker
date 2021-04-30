import React from "react";
import moment from "moment";

const Title = ({ title, date }) => {
  return (
    <div className="p-4 mt-5">
      <div className="m=1 text-2xl">
        {title === "Global" ? (
          <p>
            <i className="fas fa-globe"></i> {title}
          </p>
        ) : (
          <p>
            <i className="fas fa-map-marker-alt"></i> {title}
          </p>
        )}
      </div>
      <p className="m-1 text-base">
        {moment(date).format("MMMM Do YYYY, h:mm:ss a")}
      </p>
    </div>
  );
};

export default Title;
