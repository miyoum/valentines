import React, { useState } from "react";

const Invitation = () => {
  const startImage = "https://media.tenor.com/tXJsHJmrkIcAAAAi/bubu-dudu.gif";
  const images = [
    "https://media.tenor.com/S8Gp7kQbP7EAAAAi/bubu-dudu-sseeyall.gif",
    "https://media.tenor.com/2DbtR2cs0-8AAAAi/mimibubu.gif", // really ?
    "https://media.tenor.com/BrJjmVscA4YAAAAj/bubu-angry-bubu-fierce.gif",
    "https://media.tenor.com/pZR1wz2VO9AAAAAj/bubududu-panda.gif",
  ];

  const text = ["Are you sure ?", "Really ? 😨", "Think again ! 😤", "Last chance! 🙂"];

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
    <div
      style={{ 
        // borderTop: "4px solid #DCC6E0;", /* Lavande douce */
        // borderLeft: "4px solid #DCC6E0;",
        // borderRight: "4px solid #B5D8EB;", /* Bleu pastel */
        // borderBottom: "4px solid #B5D8EB;",
       border: "1px solid #3A3A3A",
        //width:"25vw"
        padding:"4em"
   }}
      className="flex flex-col items-center"
    >
      <div className="border-solid border-4 border-light-blue-900 p-4 flex flex-col items-center">
        {yesClicked ? (
          <>
            <img className="flex flex-col items-center"src="https://i.imgur.com/cYsLrOz.gif" alt="kiss" />
            <span style={{ color: "#3A3A3A", fontSize:"1.2em" }}> I love you bébou 💕</span>
          </>
        ) : (
          <>
            <img
            className="flex flex-col items-center"
              src={initialRun ? startImage : images[count % images.length]}
              alt="reaction-gif"
            />
            <p>
              {initialRun ? (
                <span style={{ color: "#3A3A3A" }}>
                  Will you be my valentine ? 🥹
                </span>
              ) : (
                text[count] || (
                  <span style={{ color: "#3A3A3A" }}>
                    No is no longer an option! 😈
                  </span>
                )
              )}
            </p>
          </>
        )}

        <div
          className={`mt-4 flex ${showOnlyYes ? "justify-center" : "gap-4"}`}
        >
          {/* YES Button (grandit et se centre si No disparaît) */}
          <button
            style={{
              margin:"2vw",
              // width:"12em",
              backgroundColor: "#C1E1C1",
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
          {!yesClicked && !showOnlyYes && (
            <button
              style={{
                margin:"2vw",
                // width:"12em",

                backgroundColor: "#DCC6E0",
                padding: `${Math.max(8 - count * 3, 2)}px ${Math.max(
                  12 - count * 6,
                  4
                )}px`,
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
