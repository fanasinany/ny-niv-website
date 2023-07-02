import React, { useRef, useState } from "react";
import "./style.css";
import photo from "../../images/4x4.webp";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { HashLoader } from "react-spinners";

const Citation = () => {
  const form = useRef<HTMLFormElement>(null);
  const [avis, setAvis] = useState("");
  const [messageError, setMessageError] = useState(false);
  const [loading, setloading] = useState(false);
  const handleChangeAvis = (e: any) => {
    if (e.target.value !== "") {
      setMessageError(false);
    }
    setAvis(e.target.value);
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (avis === "") {
      setMessageError(true);
    } else {
      if (form.current) {
        setloading(true);
        emailjs
          .sendForm(
            "service_t7u914j",
            "template_5agwmkl",
            form.current,
            "mmyr7KX9ldWW28TT7"
          )
          .then(() => {
            toast.success("Thank you very much for your advice!");
            setAvis("");
          })
          .catch(() => {
            toast.error("Erreur !");
          })
          .finally(() => setloading(false));
      }
    }
  };

  return (
    <section id="citation">
      <div className="container">
        <div className="margin-y">
          <hr className="line-separator"></hr>
          <div className="citation-wrapper">
            <div className="photo-ny">
              <img src={photo} alt="Ny Niv" />
            </div>
            <div className="citation-details">
              <p className="developer-quote">
                “Never turn down an opportunity for fear of not being up to the job.”
              </p>
              <p>-</p>
              <p>Unkown</p>
            </div>
          </div>
          <hr className="line-separator"></hr>
          <div className="avis-wrapper">
            <h1>What do you think of my portfolio?</h1>
            <p>
              Tell me below what you think of this site, whether it's a positive
              or negative review!
            </p>
            <form ref={form} onSubmit={sendEmail}>
              <textarea
                name="avis"
                id="avis"
                rows={6}
                placeholder="Your opinion..."
                className={`${messageError && "error-input"}`}
                value={avis}
                onChange={handleChangeAvis}
              ></textarea>
              {messageError && (
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
        </div>
      </div>
    </section>
  );
};

export default Citation;
