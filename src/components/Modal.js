import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { singleMovie } from "../config/api";
import axios from "../config/base";
import { FiXCircle } from "react-icons/fi";
import "../css/Modal.css";
const imageUrl = "https://image.tmdb.org/t/p/original";

Modal.setAppElement("#root");

function ModalComponent({ isModal, closeModal, modalId }) {
  const [info, setInfo] = useState(null);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#141414",
    },
  };

  const fetchInfo = async (id) => {
    try {
      const req = await axios.get(singleMovie(id));
      setInfo(req.data);
    } catch (err) {
      console.log("err: ", err);
    }
  };

  useEffect(() => {
    if (modalId && isModal) {
      setInfo(null);
      fetchInfo(modalId);
    }
  }, [modalId]);

  return (
    <Modal isOpen={isModal} style={customStyles} contentLabel="Information">
      {info ? (
        <div className="modal-main">
          <div
            className="modal-imgDiv"
            style={{
              backgroundImage: `url(${imageUrl}${info?.backdrop_path})`,
            }}
          >
            <FiXCircle className="closeIcon" size={25} onClick={closeModal} />
          </div>
          <div className="modal-info">
            <div>
              <p className="modal-title">
                {info?.title}
                <span className="modal-adult">
                  {info?.adult ? "18" : "13"}+
                </span>
              </p>
              <p className="modal-tag">{info?.tagline}</p>
              <p className="modal-overview">{info?.overview}</p>
              <p className="modal-genres">
                <span style={{ color: "#777" }}>Genres: </span>
                {info &&
                  info.genres &&
                  info.genres.length > 0 &&
                  info.genres.map((g, i) => {
                    return i < info.genres.length - 1
                      ? `${g?.name}, `
                      : `${g?.name}`;
                  })}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading ...</p>
      )}
    </Modal>
  );
}

export default ModalComponent;
