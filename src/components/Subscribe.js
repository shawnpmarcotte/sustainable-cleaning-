import React from 'react';

export default function Subscribe() {
  return (
    <section id="signup" className="signup-section">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
            <h5 className="text-white mb-5">GET IN TOUCH TO FIND OUT HOW WE MAY ASSIST YOU</h5>

            <form className="form-inline d-flex" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact" />
              <label>
                <input
                  name="name"
                  type="text"
                  className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                  placeholder="name"
                />
              </label>
              <label>
                <input
                  name="contact"
                  type="text"
                  className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                  placeholder="email | phone "
                />
              </label>
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
