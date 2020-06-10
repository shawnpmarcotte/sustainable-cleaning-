import React from 'react';

export default function Subscribe() {
  return (
    <section id="signup" className="signup-section">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
            <h3 className="text-white mb-5">GET IN TOUCH TO FIND OUT HOW WE CAN HELP</h3>

            <form className="form-inline d-flex">
              <input
                type="email"
                className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                id="inputEmail"
                placeholder="name"
              />
              <input
                type="number"
                className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                id="inputNumber"
                placeholder="email | phone "
              />
              <br />
              <button type="submit" className="btn btn-primary mx-auto">
                SEND IT!
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
