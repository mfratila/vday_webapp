import React from "react";
import { useState } from "react";
import "./App.css";

// Define the prop type for the Surprise component
interface SurpriseProps {
  onClose: () => void;
  imgLink : string;
}

// Surprise component to display the picture
const Surprise: React.FC<SurpriseProps> = ({ onClose, imgLink }) => {
  return (
    <div className="surprise-container">
      <img
        src={imgLink}
        alt="Photo"
        style={{ maxWidth: "100%" }}
      />
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const Page: React.FC = () => {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const [showHumping, setShowHumping] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const handleSurpriseClick = () => {
    setShowSurprise(true);
    setShowHumping(false);
  };

  const handleHumpingClick = () => {
    setShowHumping(true);
    setShowSurprise(false);
  }

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Esti sigura?",
      "Esti foarte sigura?",
      "Mai gandeste-te..!",
      "Ultima sansa!",
      "Siigur nu?",
      "S-ar putea sa regreti!",
      "Eu zic sa te mai gandesti!",
      "Este 100% sigura?",
      "Faci o greseala!!",
      "N-ai inima!!!",
      "E raspunsul tau final?",
      "Imi rupi inima in doua :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
            <div className="text-container" style={{ color: "yellow" }}>
              Yaaaaay!!!💖💗
            </div>
            {/* Show the Surprise button after "Yes" is clicked */}
            <button onClick={handleSurpriseClick} className="surprise-button">
              Apasa aici pentru o surpriza 😉
            </button>
            <button onClick={handleHumpingClick} className="humping-button">
              Asta o sa-ti fac cand te vad 😫
            </button>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px", marginLeft: "52%" }}
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            />
            <h1 className="text-container" style={{ color: "yellow" }}>
              Iubita mea minunata, 🌟Chicos Alexandra Ana Maria🌟
            </h1>
            <h1 className="text-container" style={{ color: "yellow" }}>
              Vrei sa fii partenera mea de Valentine's Day?💌
            </h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Da, normal
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "Nu" : getNoButtonText()}
              </button>
            </div>
          </>
        )}

        {/* Show the Surprise component when showSurprise state is true */}
        {showSurprise && <Surprise imgLink="/maria.jpg" onClose={() => setShowSurprise(false)} />}
        {showHumping && <Surprise imgLink="/humping.gif" onClose={() => setShowHumping(false)} />}
      </div>
    </div>
  );
};

export default Page;
