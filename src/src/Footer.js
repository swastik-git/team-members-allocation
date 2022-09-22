import React from "react";
const Footer = () => {
  var Datenow = new Date();
  return (
    <footer>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-7 ">
          <h5 className="Datetoday">Team Members allocation -  ({Datenow.getDate()}/{Datenow.getMonth()+1}/{Datenow.getFullYear()})</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
