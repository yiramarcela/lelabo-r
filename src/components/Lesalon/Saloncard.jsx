/* eslint-disable jsx-a11y/iframe-has-title */
import ReactMarkdown from 'react-markdown'
import ReactPlayer from 'react-player'

import 'simplebar'
import 'simplebar/dist/simplebar.css'
import CloseIcon from '@mui/icons-material/Close'

import '../../index.css'
import '../../styles/lesalon.css'
import clsx from 'clsx'
import { useEffect } from 'react'

const Saloncard = ({
  articleProp,
  toggleDetails,
  setArticleChosen,
  styles,
}) => {
  useEffect(() => {
    console.log(articleProp)
  }, [articleProp])

  return (
    <>
      <button
        className="btn_close"
        onClick={() => {
          toggleDetails()
          setArticleChosen(null)
        }}
      >
        <CloseIcon />
      </button>
      <div
        data-simplebar
        data-simplebar-auto-hide="false"
        className="description_sec"
      >
        <div className={clsx([styles['salon-card'], 'article_body'])}>
          {articleProp.TypeDeMedia && articleProp.TypeDeMedia[0] === 'video' ? (
            <ReactPlayer
              controls
              url={articleProp.MediaURL}
              className="videocontainer"
            />
          ) : articleProp.MediaImageGoogleDrive ||
            articleProp.TypeDeMedia[0] === 'audio' ? (
            <img className='articleImg'
              style={{
                marginTop: '20px',
                width: '600px',
                height: '400px',
              }}
              src={articleProp.MediaImageGoogleDrive[0].url}
              alt=""
            />
          ) : null}
          <div className="article_title">
            <h1>{articleProp.Titre}</h1>
            <h3>{articleProp?.DateDepublication}</h3>
            {articleProp.TypeDeMedia[0] === 'audio' ? (
              <div className="embed-container">
                <iframe
                  src={articleProp.MediaURL}
                  className="audioframe"
                  scrolling="no"
                ></iframe>
              </div>
            ) : null}
            
            {articleProp.type === 'balado' && (
              <div className="embed-container">
                <iframe
                  src={articleProp.MediaURL}
                  className="audioframe"
                  scrolling="no"
                ></iframe>
              </div>
            )}
          </div>
        </div>
        <div className={styles['salon-card__description']}>
          <ReactMarkdown>{articleProp.Contenu}</ReactMarkdown>
        </div>
        {/* <p>{articleProp.description}</p> */}
      </div>
    </>
  )
}

export default Saloncard
