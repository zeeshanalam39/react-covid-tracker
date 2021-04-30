import React from "react";

const Header = () => {
  return (
    <header className="p-2.5 bg-blue-500 text-white flex flex-col justify-center text-center align-center">
      <div className="text-3xl">
        <i className="fa fa-viruses"></i> Covid-19 Tracker
      </div>
      <p className="text-sm">
        API by{" "}
        <a
          className="underline"
          href="https://covid19api.com"
          target="_blank"
          rel="noreferrer">
          covid19api.com
        </a>
      </p>
    </header>
  );
};

export default Header;
