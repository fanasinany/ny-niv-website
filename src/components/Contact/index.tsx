import React, { useRef, useState } from "react";
import "./style.css";
import emailjs from "@emailjs/browser";
import { HashLoader } from "react-spinners";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import RoundIcon from "../Icons/RoundIcon";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setloading] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [firstnameError, setFirstnameError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleChangeFirstname = (e: any) => {
    if (e.target.value !== "") {
      setFirstnameError(false);
    }
    setFirstname(e.target.value);
  };

  const handleChangeName = (e: any) => {
    if (e.target.value !== "") {
      setNameError(false);
    }
    setName(e.target.value);
  };

  const handleChangeEmail = (e: any) => {
    if (e.target.value !== "") {
      setEmailError(false);
    }
    setEmail(e.target.value);
  };

  const handleChangeSubject = (e: any) => {
    if (e.target.value !== "") {
      setSubjectError(false);
    }
    setSubject(e.target.value);
  };

  const handleChangeMessage = (e: any) => {
    if (e.target.value !== "") {
      setMessageError(false);
    }
    setMessage(e.target.value);
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (firstname === "") {
      setFirstnameError(true);
    }
    if (name === "") {
      setNameError(true);
    }
    if (email === "") {
      setEmailError(true);
    }
    if (subject === "") {
      setSubjectError(true);
    }
    if (message === "") {
      setMessageError(true);
    } else if (
      firstname !== "" &&
      name !== "" &&
      email !== "" &&
      subject !== "" &&
      message !== ""
    ) {
      if (form.current) {
        setloading(true);
        emailjs
          .sendForm(
            "service_t7u914j",
            "template_9rx5wo3",
            form.current,
            "mmyr7KX9ldWW28TT7"
          )
          .then(() => {
            toast.success("Mail sent successfully!");
          })
          .catch(() => {
            toast.error("Mail not sent!");
          })
          .finally(() => setloading(false));
      }
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="margin-y">
          <div className="contact-wrapper">
            <div className="form-contact">
              <h2 className="title-top">
                <RoundIcon />
                Get In Touch
              </h2>
              <p>
                You can contact me with any questions, suggestions or just to
                say 'Hello' !
              </p>
              <form className="form-wrapper" ref={form} onSubmit={sendEmail}>
                <div>
                  <input
                    type="text"
                    placeholder="Firstname"
                    className={`${firstnameError && "error-input"}`}
                    name="user_first_name"
                    value={firstname}
                    onChange={handleChangeFirstname}
                  />
                  <input
                    type="text"
                    placeholder="Lastname"
                    className={`${nameError && "error-input"}`}
                    name="user_name"
                    value={name}
                    onChange={handleChangeName}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    name="user_email"
                    className={`${emailError && "error-input"}`}
                    value={email}
                    onChange={handleChangeEmail}
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    name="user_subject"
                    className={`${subjectError && "error-input"}`}
                    value={subject}
                    onChange={handleChangeSubject}
                  />
                  <textarea
                    name="user_message"
                    id="message"
                    rows={10}
                    placeholder="Message"
                    className={`${messageError && "error-input"}`}
                    value={message}
                    onChange={handleChangeMessage}
                  ></textarea>
                </div>
                {(firstnameError ||
                  nameError ||
                  emailError ||
                  subjectError ||
                  messageError) && (
                  <span className="error-message">
                    (*) Please fill in the empty fields.
                  </span>
                )}
                <button
                  disabled={loading}
                  type="submit"
                  className="big-button btn-send"
                >
                  {loading ? (
                    <HashLoader color="#46dff0" size={30} loading={loading} />
                  ) : (
                    "Send"
                  )}
                </button>
              </form>
            </div>
            <div className="information-contact">
              <div className="baobab-img"></div>
              <div className="info-complete">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18.394"
                    height="26.961"
                    viewBox="0 0 18.394 26.961"
                  >
                    <g id="location-svgrepo-com" transform="translate(-69.335)">
                      <path
                        id="Tracé_37"
                        data-name="Tracé 37"
                        d="M86.485,4.591a9.182,9.182,0,0,0-15.9,0,9.089,9.089,0,0,0,0,9.182l7.444,12.893a.587.587,0,0,0,1.016,0l7.444-12.893A9.089,9.089,0,0,0,86.485,4.591Zm-1.017,8.6L78.532,25.2,71.6,13.187a8.009,8.009,0,1,1,13.872,0Z"
                        transform="translate(0)"
                      />
                      <path
                        id="Tracé_38"
                        data-name="Tracé 38"
                        d="M117.333,41.193a6.569,6.569,0,0,0-6.776,6.323,6.792,6.792,0,0,0,13.552,0A6.569,6.569,0,0,0,117.333,41.193Zm-2.609,10.924v-.373a2.615,2.615,0,0,1,5.218,0v.373a5.925,5.925,0,0,1-5.218,0Zm2.609-7.027a1.555,1.555,0,1,1-1.663,1.552A1.612,1.612,0,0,1,117.333,45.091Zm3.78,6.252a3.556,3.556,0,0,0-1.908-2.687,2.591,2.591,0,0,0,.987-2.013,2.866,2.866,0,0,0-5.718,0,2.591,2.591,0,0,0,.987,2.013,3.556,3.556,0,0,0-1.907,2.687,5.043,5.043,0,0,1-1.8-3.827,5.594,5.594,0,0,1,11.161,0A5.043,5.043,0,0,1,121.113,51.343Z"
                        transform="translate(-38.801 -38.774)"
                      />
                    </g>
                  </svg>
                </div>
                <div>Madagascar</div>
              </div>
              <div className="info-complete">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.381"
                    height="16.452"
                    viewBox="0 0 20.381 16.452"
                  >
                    <g id="mail-svgrepo-com" transform="translate(0 -5.646)">
                      <path
                        id="Tracé_39"
                        data-name="Tracé 39"
                        d="M41.132,27.942l-.992-.992a1.04,1.04,0,0,0-1.469,0l-5.357,5.357-.738,2.707-.181.181a.347.347,0,0,0,0,.489l0,.007.007,0a.347.347,0,0,0,.489,0l.181-.181,2.707-.738,5.356-5.357A1.04,1.04,0,0,0,41.132,27.942Zm-7.014,4.546,3.565-3.565L39.16,30.4l-3.565,3.565Zm-.314.67,1.121,1.121-1.541.42Zm6.836-4.239-.988.988-1.477-1.476.988-.988a.344.344,0,0,1,.485,0l.992.992A.344.344,0,0,1,40.64,28.919Z"
                        transform="translate(-21.055 -13.692)"
                      />
                      <path
                        id="Tracé_40"
                        data-name="Tracé 40"
                        d="M10.093,19.219H1.35c1.583-1.254,5.151-4.1,6.985-5.709l.495.437a1.944,1.944,0,0,0,2.526,0L19.49,6.766v5.493a.348.348,0,0,0,.7,0V5.994a.06.06,0,0,0,0-.008.34.34,0,0,0-.021-.115l0-.007c0-.009-.01-.017-.014-.025a.3.3,0,0,0-.081-.1.325.325,0,0,0-.071-.048.334.334,0,0,0-.034-.016.339.339,0,0,0-.122-.025H.348a.343.343,0,0,0-.122.025.275.275,0,0,0-.034.016.352.352,0,0,0-.071.048c-.01.009-.019.017-.029.027a.35.35,0,0,0-.052.077c0,.009-.01.016-.014.025l0,.007A.348.348,0,0,0,0,5.986a.066.066,0,0,0,0,.008V19.567s0,0,0,0a.35.35,0,0,0,.018.111s0,.007.006.011.012.023.018.034a.334.334,0,0,0,.047.07.348.348,0,0,0,.1.076.332.332,0,0,0,.035.018.352.352,0,0,0,.123.024h9.745a.348.348,0,1,0,0-.7Zm-9.4-.37V6.766l7.113,6.281C5.875,14.736,2.118,17.724.7,18.849ZM18.918,6.342l-8.025,7.086a1.231,1.231,0,0,1-1.6,0L8.6,12.819s0-.005,0-.007a.3.3,0,0,0-.027-.02l-7.3-6.449Z"
                      />
                    </g>
                  </svg>
                </div>
                <div>
                  <a
                    href="mailto:nynivoarijaona@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    nynivoarijaona@gmail.com
                  </a>
                </div>
              </div>
              <div className="info-complete">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.843"
                    height="20.077"
                    viewBox="0 0 17.843 20.077"
                  >
                    <path
                      id="call-svgrepo-com"
                      d="M17.293,21.681c-1.7,0-5.817-2.168-9.277-6.822-3.236-4.353-4.81-7.5-4.81-9.613A3.4,3.4,0,0,1,4.974,2.357l.153-.107A4.331,4.331,0,0,1,7.279,1.6a1.239,1.239,0,0,1,1.2.782c.155.308,1.437,3.061,1.567,3.4A1.485,1.485,0,0,1,9.56,7.524L9.452,7.6c-.306.212-.875.606-.954,1.086a.979.979,0,0,0,.238.745c.992,1.338,4.162,5.265,4.733,5.8a1.037,1.037,0,0,0,1.4.152,5.939,5.939,0,0,0,.579-.538l.041-.04a1.383,1.383,0,0,1,.856-.276,1.986,1.986,0,0,1,1.113.377c.961.649,3.129,2.1,3.129,2.1l.035.027a1.458,1.458,0,0,1,.211,1.814c-.485.925-1.987,2.835-3.542,2.835ZM7.279,2.349a3.569,3.569,0,0,0-1.72.508L5.4,2.969A2.683,2.683,0,0,0,3.949,5.246c0,1.95,1.526,4.95,4.663,9.169,3.427,4.609,7.344,6.522,8.68,6.522,1.136,0,2.439-1.587,2.884-2.437a.725.725,0,0,0-.028-.9c-.251-.168-2.206-1.476-3.105-2.084a1.263,1.263,0,0,0-.7-.25.7.7,0,0,0-.371.1,7.373,7.373,0,0,1-.627.581,1.793,1.793,0,0,1-2.388-.177c-.644-.6-3.895-4.649-4.823-5.9a1.7,1.7,0,0,1-.375-1.309A2.65,2.65,0,0,1,9.027,6.99l.1-.069a.763.763,0,0,0,.22-.866C9.237,5.766,7.97,3.041,7.81,2.721c-.131-.262-.234-.372-.533-.372Z"
                      transform="translate(-3.206 -1.604)"
                    />
                  </svg>
                </div>
                <div>
                  <a href="tel:0341568408" target="_blank" rel="noreferrer">
                    034 15 684 08
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </section>
  );
};

export default Contact;
