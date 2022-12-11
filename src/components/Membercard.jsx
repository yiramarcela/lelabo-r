import React from "react";
import "../styles/lacommunautee.css";

export const Membercard = ({
  userdata,
  toggleDetails,
  ShowDetail,
  UserSelected,
  showArtists
}) => {
  return (
    <>
      {!ShowDetail &&
        showArtists ?
        (
          <button
            className="usrcard"
            onClick={() => {
              UserSelected(userdata);
              toggleDetails();
            }}
          >
            <div className="usrcard__body">
              {userdata['Image profil'] ?
                <img
                  className="usrcard__picture"
                  src={userdata['Image profil'][0].url}
                  alt=""
                /> : null
              }
              <h2>{userdata["PrénomNom"]}</h2>
            </div>
          </button>
        )
        :
        (
          <button
            className="usrcard"
            onClick={() => {
              UserSelected(userdata);
              toggleDetails();
            }}
          >
            <div className="usrcard__body">
              {userdata.Photo ?
                <img
                  className="usrcard__picture"
                  src={userdata.Photo[0].url}
                  alt=""
                /> : null
              }
              <h2>{userdata["Prénom Nom"]}</h2>
              <h3>{userdata.Poste.map((poste) => (
                poste + " - "
              ))}</h3>
            </div>
          </button>
        )
      }
    </>
  );
};
