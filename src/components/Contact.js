import React, { useState } from 'react';
import { MainHeading } from './Common';
import ContactImg from '../static/chat.svg';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = ({ idProps }) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSent, setIsSent] = useState('');
  const [isVerified, setIsVerified] = useState(null);
  const [isError, setIsError] = useState(false);

  const handleChange = (event) => {
    setIsSent(false);
    const { target } = event;
    const { value } = target;
    const { name } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  function contactme(event) {
    event.preventDefault();
    if (isVerified) {
      const { name, email, message } = state;
      const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLScgIe3UPagt8uKHvpUPpnMfFhrhdYlbxS2_cF5tDB9x0ltu1g/formResponse?entry.129154247=${name}&entry.815887852=${email}&entry.500869233=${message}`;
      const xmlHttp = new XMLHttpRequest();
      xmlHttp.open('GET', formUrl);
      xmlHttp.send(null);
      setIsSent('Message Sent!');
      setIsError(false);
      setState({
        name: '',
        email: '',
        message: '',
      });
    } else {
      setIsError(true);
      setIsSent('Captcha Verify!');
    }
  }

  return (
    <div id={idProps}>
      <MainHeading text="Contact" />
      <div className="row mt-1">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
          <h3 className="font-weight-bold mb-1 color-primary mt-2">
            Let&apos;s chat{' '}
            <span role="img" aria-label="">
              💬
            </span>
          </h3>
          <p className="text-muted mb-2">
            Like the portfolio or have some freelance work? Feel free to drop an
            email and grab a cup of coffee!
          </p>
          <form onSubmit={contactme}>
            <div className="form-group mb-4 mt-2">
              <input
                type="text"
                className="form-control"
                id="nameContact"
                placeholder="Full Name"
                aria-describedby="nameHelp"
                name="name"
                value={state.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="nameContact" className="floating-label">
                Full Name
              </label>
            </div>
            <div className="form-group mb-4 mt-2">
              <input
                type="email"
                className="form-control"
                id="emailContact"
                placeholder="Email"
                aria-describedby="emailHelp"
                name="email"
                value={state.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="emailContact" className="floating-label">
                Email
              </label>
            </div>
            <div className="form-group mb-4 mt-2">
              <textarea
                className="form-control"
                id="messageContact"
                placeholder="Message"
                rows="5"
                maxLength="250"
                name="message"
                onChange={handleChange}
                value={state.message}
                required
              />
              <label htmlFor="messageContact" className="floating-label">
                Message
              </label>
            </div>
            <ReCAPTCHA
              sitekey="6LdHrE0cAAAAADXEmrUhd9HDXEDKfGv8Z1-ScMSJ"
              className="my-3"
              onChange={(value) => setIsVerified(value)}
            />
            <div className="d-flex">
              <button
                type="submit"
                className="btn btn-gradient btn-sm small rounded-pill px-5 mt-1 py-1"
              >
                Submit
              </button>
              <div
                className={`mb-0 ml-auto d-flex align-items-center small border-0 py-0 text-uppercase alert ${
                  isError ? 'alert-danger' : 'alert-success'
                } hidden ${isSent ? '' : 'hide'}`}
              >
                {isSent}
              </div>
            </div>
          </form>
        </div>
        <div className="col-6 d-none d-md-flex justify-content-center py-5 px-5">
          <img src={ContactImg} className="w-75" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
