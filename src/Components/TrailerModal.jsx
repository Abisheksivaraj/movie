import React from "react";

const TrailerModal = ({ movieId, onClose }) => {
  const trailerUrl = `https://www.youtube.com/embed/${movieId}?autoplay=1`;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <iframe
          title="trailer"
          width="560"
          height="315"
          src={trailerUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default TrailerModal;
