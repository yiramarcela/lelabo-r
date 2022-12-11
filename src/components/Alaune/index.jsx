import { useState, useEffect } from "react";
import Saloncard from "../Lesalon/Saloncard";
import "../../styles/galerie.css";
import useListBase from "../../hooks/useListBase";
import { TABLE_NAME } from "../../api/config";
import MediaCard from "./MediaCard";
import getRandomInt from "../../utils/randomInt";
import sortArrayListByDate from "../../utils/arraySorts";
import styles from './style.module.scss';

export const Alaune = ({ isOpenMenu, baseArticles }) => {
  const [ShowDetails, setShowDetails] = useState(false);
  const [articleChosen, setArticleChosen] = useState({});
  const [articles, setArticles] = useState([]);
  const slogans = useListBase(TABLE_NAME.slogan);
  const numOfArticles = 5;

  const toggleDetails = () => {
    setShowDetails(!ShowDetails);
  };

  useEffect(() => {
    if (baseArticles.length !== 0) {
      setArticles(
        sortArrayListByDate(
          baseArticles.filter(
            (baseArticle) => baseArticle.Nouvelles),
          'DateDepublication'
        ).slice(0, numOfArticles)
      )
    }
  }, [baseArticles]);

  return (
    !isOpenMenu && (
      <>
        {!ShowDetails ? (
          <div className="aLaUne">
            <ul className="galerie">
              {articles.length !== 0 &&
                articles.map((article) => {
                  if (article?.Titre) {
                    return (
                      <button
                        key={article.ID}
                        className="galerieItem"
                        onClick={() => {
                          toggleDetails();
                          setArticleChosen(article);
                        }}
                      >
                        <li
                          className="galerieItem"
                        >
                          <span>{article.Titre}</span>
                          <MediaCard
                            article={article}
                          />
                        </li>
                      </button>
                    );
                  }
                  return null
                }
                )}
            </ul>

            {/*slogans*/}
            <div className='slogan'>
              <p className='sloganText'>
                {slogans[getRandomInt(0, 2)]?.Slogan}
              </p>
            </div>

          </div>
        ) : (
          <>
            <div className="article">
              <Saloncard
                articleProp={articleChosen}
                toggleDetails={toggleDetails}
                setArticleChosen={setArticleChosen}
                styles={styles}
              />
            </div>
          </>
        )
        }
      </>
    )
  );
};
