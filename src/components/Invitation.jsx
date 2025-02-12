import React, { useState } from "react";

const Invitation = () => {
  const startImage =
    "https://media.tenor.com/GKDHe7Fw9mgAAAAj/dudu-huh-cute.gif";
  const images = [
    "https://media.tenor.com/vT9FIUfPKesAAAAj/sseeyall-bubu-dudu.gif", // really ?
    "https://media.tenor.com/8vJ4ch5LTTAAAAAj/bubu-dudu-sseeyall.gif", // cry
    "https://media.tenor.com/CGH15OxP5wgAAAAj/dudu-cure-dudu-cute.gif", // no think again
    "https://media.tenor.com/j7bxg0MNS38AAAAi/bubu-dudu-sseeyall.gif",
    "https://media.tenor.com/S8Gp7kQbP7EAAAAi/bubu-dudu-sseeyall.gif",
  ];

  const text = ["Are you sure ?", "Really ?", "Think again !", "Last chance!"];
  
  const [initialRun, setInitialRun] = useState(true);
  const [yesClicked, setYesClicked] = useState(false);
  const [count, setCount] = useState(0);
  const maxClick = text.length; // Texte arrête ici mais images continuent en boucle
  const showOnlyYes = count >= maxClick;

  const handleNoChange = () => {
    setInitialRun(false);
    setCount((prevCount) => prevCount + 1);
  };

  const handleYesChange = () => {
    setYesClicked(true);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="border-solid border-4 border-light-blue-900 p-4 flex flex-col items-center">
        {yesClicked ? (
          <>
            <img src="https://i.imgur.com/cYsLrOz.gif" alt="kiss" />
            <span style={{color:"#3A3A3A"}}> I love you 💕</span>
          </>
        ) : (
          <>
            <img
              src={initialRun ? startImage : images[count % images.length]}
              alt="reaction-gif"
            />
            <p>
              {initialRun
                ? (<span style={{color:"#3A3A3A"}}>Will you be my valentine ?</span>)
                : text[count] || <span style={{color:"#3A3A3A"}}>No is no longer an option! 😈</span>}
            </p>
          </>
        )}

        <div className={`mt-4 flex ${showOnlyYes ? "justify-center" : "gap-4"}`}>
          {/* YES Button (grandit et se centre si No disparaît) */}
          <button
            style={{
                backgroundColor:"#C1E1C1",
              padding: `${8 + count * 4}px ${12 + count * 6}px`,
              opacity: yesClicked ? 0 : 1,
              transition: "all 0.3s ease-in-out",
            }}
            className="bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all"
            onClick={handleYesChange}
          >
            💕 Yes 💕
          </button>

          {/* NO Button (rétrécit et disparaît) */}
          {(!yesClicked && !showOnlyYes) && (
            <button
              style={{
                backgroundColor:"#DCC6E0",
                padding: `${Math.max(8 - count * 3, 2)}px ${Math.max(12 - count * 6, 4)}px`,
                // opacity: count >= maxClick - 1 ? 0 : 1,
                transition: "all 0.3s ease-in-out",
              }}
              className="bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-all"
              onClick={handleNoChange}
            >
              ❄️ No ❄️
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Invitation;
