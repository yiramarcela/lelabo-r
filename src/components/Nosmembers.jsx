import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { Membercard } from "./Membercard";
import "../styles/lacommunautee.css";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import useListBase from "../hooks/useListBase";
import { TABLE_NAME, viewType } from '../api/config'
export const Nosmembers = ({ isOpenMenu, showArtists }) => {
  const [ShowDetails, setShowDetails] = useState(false);
  const [userSelected, setUserSelected] = useState({});
  const history = useNavigate();

  // use the same component for equipe only need change the query for the correct table
  const teamWork = useListBase(TABLE_NAME.team, viewType.edv);
  const artistMembersListBase = useListBase(TABLE_NAME.artistMembers);
  const [artistMembers, setArtistMembers] = useState([])

  const toggleDetails = () => setShowDetails(!ShowDetails);

  useEffect(() => {
    setArtistMembers(artistMembersListBase.filter(
      artistMember => artistMember['Image profil'])
    )
  }, [artistMembersListBase]);

  return (
    !isOpenMenu && (
      <>
        {!ShowDetails ? (
          <>
            <button
              className="btn_close"
              onClick={() => {
                history("/submenu");
              }}
            >
              <ArrowBackIcon />
            </button>
            <h1 className="generalTitle">{localStorage.getItem("title")}</h1>
            <SimpleBar className="cardContainer">
              {showArtists ?
                artistMembers.map((member, i) => {
                  return (
                    <Membercard
                      showArtists
                      key={i}
                      userdata={member}
                      toggleDetails={toggleDetails}
                      ShowDetail={ShowDetails}
                      UserSelected={setUserSelected}
                    />
                  );
                })
                :
                teamWork.map((member) => {
                  return (
                    <Membercard
                      key={member.ID}
                      userdata={member}
                      toggleDetails={toggleDetails}
                      ShowDetail={ShowDetails}
                      UserSelected={setUserSelected}
                    />
                  );
                })
              }
            </SimpleBar>
          </>
        ) : ShowDetails && !showArtists ? (
          <div className="container__usrcad__detail">
            <button
              className="btn_close"
              onClick={() => {
                toggleDetails();
              }}
            >
              <CloseIcon />
            </button>
            <SimpleBar className="simpleContainer">
              {userSelected.Photo ?
                <img
                  className="usrcard__picture__detail"
                  src={userSelected.Photo[0].url}
                  alt=""
                />
                : null
              }
              <h2>
                {userSelected["Prénom Nom"]}
              </h2>
              <p  className="articleText">
                {userSelected.Poste.map(poste => (
                  poste + " "
                ))}
                <br />
                {userSelected["Courriel pro"]}
              </p>
              {userSelected?.instagram && (
                <a href={userSelected.instagram} target="_blank" rel="noreferrer">
                  {" "}
                  <InstagramIcon fontSize="large" className="icons" />{" "}
                </a>
              )}
              {userSelected?.facebook && (
                <a href={userSelected.facebook} target="_blank" rel="noreferrer">
                  {" "}
                  <FacebookIcon fontSize="large" className="icons" />{" "}
                </a>
              )}
              {userSelected?.pinterest && (
                <a href={userSelected.pinterest} target="_blank" rel="noreferrer">
                  {" "}
                  <PinterestIcon fontSize="large" className="icons" />{" "}
                </a>
              )}
              {userSelected?.youtube && (
                <a href={userSelected.youtube} target="_blank" rel="noreferrer">
                  {" "}
                  <YouTubeIcon fontSize="large" className="icons" />{" "}
                </a>
              )}
            </SimpleBar>
          </div>
        ) : (ShowDetails && showArtists) && (
          <div className="container__usrcad__detail">
            <SimpleBar className="simpleContainer">
              <button
                className="btn_close"
                onClick={() => {
                  toggleDetails();
                }}
              >
                <CloseIcon />
              </button>
              {userSelected['Image profil'] ?
                <img
                  className="usrcard__picture__detail"
                  src={userSelected['Image profil'][0].url}
                  alt=""
                />
                : null
              }
              <h2>
                {userSelected["PrénomNom"]}
              </h2>
              <p className="articleText">
                {userSelected['Biographie / Démarche']}
                <br />
              </p>
              {userSelected[['Site web']] &&
                <a style={{
                  color: 'white',
                  marginTop: '8px',
                  fontSize: '30px'
                }}
                  href={userSelected[['Site web']]}
                  target='_blank'
                  rel="noreferrer"
                >
                  Site web
                </a>
              }
            </SimpleBar>
          </div>
        )}
        {/* </div> */}
      </>
    )
  );
};
