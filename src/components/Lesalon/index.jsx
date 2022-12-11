/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "simplebar";
import "simplebar/dist/simplebar.css";
import "../../styles/lesalon.css";
import { pageKeys } from "../../api/config";
import { Information } from "../Information";
import Saloncard from "./Saloncard";
import styles from './style.module.scss';
import NotFound from "../common/NotFound";

const Lesalon = ({
  isOpenMenu,
  baseArticles,
  aboutUsData,
  filterInformationPage }) => {

  const { search } = useLocation();
  const path = search.slice(1);
  const [ShowDetails, setShowDetails] = useState(false);
  const [menuElements, setMenuElements] = useState([]);
  const [isFromArticles, setIsFromArticles] = useState(false);
  const [isInformative, setIsInformative] = useState(false);
  const [pageKey, setPageKey] = useState(null);
  const [articleChosen, setArticleChosen] = useState(null);
  const history = useNavigate();

  const toggleDetails = () => {
    menuElements.length !== 0 ? setShowDetails(!ShowDetails) : history("/submenu");
  };

  const filterArticle = pageKey => {
    if (baseArticles.length === 0) return;
    setMenuElements(baseArticles.filter(article => {
      if (article.SectionDuMenu) {
        return article.SectionDuMenu[0] === pageKey
      }
      return false;
    }
    ));
  };

  useEffect(() => {
    if (!path &&
      baseArticles.length === 0 &&
      aboutUsData.length === 0) return;
    switch (path) {
      case 'location':
        setPageKey(pageKeys.location);
        setIsInformative(true);
        break;
      case 'studio':
        setPageKey(pageKeys.studio);
        setIsInformative(true);
        break;
      case 'formation':
        setPageKey(pageKeys.formation);
        filterArticle(pageKeys.formation);
        setIsInformative(false);
        setIsFromArticles(true);
        break;
      case 'benevolat':
        setPageKey(pageKeys.benevolat);
        filterArticle(pageKeys.benevolat);
        setIsInformative(false);
        setIsFromArticles(true);
        break;
      case 'balado':
        setPageKey(pageKeys.balado);
        filterArticle(pageKeys.balado);
        setIsInformative(false);
        setIsFromArticles(true);
        break;
      case 'video':
        setPageKey(pageKeys.video);
        filterArticle(pageKeys.video);
        setIsInformative(false);
        setIsFromArticles(true);
        break;
      case 'expositions':
        setPageKey(pageKeys.exposition);
        filterArticle(pageKeys.exposition);
        setIsInformative(false);
        setIsFromArticles(true);
        break;
      case 'appels':
        setPageKey(pageKeys.appels);
        filterArticle(pageKeys.appels);
        setIsInformative(false);
        setIsFromArticles(true);
        break;
      case 'communiqueDePresse':
        setPageKey(pageKeys.pressRelease);
        filterArticle(pageKeys.pressRelease);
        setIsInformative(false);
        setIsFromArticles(true);
        break;
      case 'dossier':
        setPageKey(pageKeys.dossier);
        filterArticle(pageKeys.dossier);
        setIsInformative(false);
        setIsFromArticles(true);
        break;
      default:
    }
  }, [path, baseArticles, aboutUsData]);

  if (isInformative) {
    return <Information
      isOpenMenu={isOpenMenu}
      data={aboutUsData}
      filterData={filterInformationPage}
      pageKey={pageKey}
    />
  }

  if (isFromArticles) {
    return (
      !isOpenMenu && (
        <>
          {!ShowDetails && menuElements.length !== 0 ? (
            <>
              <button
                className="btn_close"
                onClick={() => {
                  history("/submenu");
                }}
              >
                <ArrowBackIcon />
              </button>
              <h1 className="generalTitle">
                {localStorage.getItem("title")}
              </h1>
              <div
                data-simplebar
                data-simplebar-auto-hide="false"
                className="generalContent"
              >
                {menuElements.map((article) => (
                  <li key={article.ID} className="itemArticles">
                    <button
                      onClick={() => {
                        toggleDetails();
                        setArticleChosen(article);
                      }}
                    >
                      <h1>{article.Titre}</h1>
                    </button>
                  </li>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="article">
                {articleChosen &&
                  <Saloncard
                    articleProp={articleChosen}
                    toggleDetails={toggleDetails}
                    setArticleChosen={setArticleChosen}
                    styles={styles}
                  />
                }
              </div>
            </>
          )}
        </>
      )
    );
  }
  return <NotFound searchPath={path} />

};

export default Lesalon;
