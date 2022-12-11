import React, { useState } from 'react'
import 'simplebar'
import 'simplebar/dist/simplebar.css'
import CloseIcon from '@mui/icons-material/Close'
import { EventCard } from './EventCard'
import SimpleBar from 'simplebar-react'
import useListBase from '../../hooks/useListBase'
import { TABLE_NAME, viewType } from '../../api/config'
import { useEffect } from 'react'
import styles from './style.module.scss'

export const Expo = ({ isOpenMenu }) => {
  const [Showdetail, setShowdetail] = useState(false)
  const [EventChoosen, setEventChoosen] = useState('')
  const eventsList = useListBase(TABLE_NAME.event, viewType.creationEdv)

  const handleShowdetail = (event) => {
    setShowdetail(!Showdetail)
    if (Showdetail) {
      setEventChoosen('')
    } else {
      const newdate = new Date(event['Date de début*'])
      const monthname = newdate.toLocaleString('fr', { month: 'short' })
      const artistes1 = new String(event['👋🏾Artiste Membre'])
      const inscription1 = new String(event['Lien inscription'])
      const img = new String(event['Media Image Google Drive'][0].url)

      setEventChoosen({
        name: event.Title,
        day: newdate.getDate(),
        month: monthname,
        description: event.Contenu,
        lieu: event.Lieu,
        horarie:
          newdate.getDate() + ' ' + monthname + ' ' + newdate.getFullYear(),
        artiste: !artistes1 ? artistes1 : ' ',
        inscription: !inscription1 ? inscription1 : ' ',
        imageCard: img ? img : ' ',
      })
    }
  }
  return (
    !isOpenMenu && (
      <div className="expocontent">
        <SimpleBar className="generalContainer">
          {Showdetail ? (
            <div className="detail">
              <button
                className="btn_close"
                onClick={() => {
                  handleShowdetail('')
                }}
              >
                <CloseIcon />
              </button>

              <SimpleBar className="simpleContainer">
                <div className="eventDate">
                <div className="blockInfoSuplEvent">
                    </div>
                      <div className='block2'>
                        <div className="datedetail">
                          <h1>{EventChoosen.day}</h1>
                          <h3>{EventChoosen.month}</h3>
                        </div>
                        <div className="blockInfoSuplEvent">
                          <h1 className="title">{EventChoosen.name}</h1>
                        </div>
                      </div>
                      <div className='block1'>
                        <img
                          className="usrcard__picture__detail"
                          src={EventChoosen.imageCard}
                          alt=""
                        />
                        <div className="infoSupl">
                          <h1 className="complement">Lieu: {EventChoosen.lieu?EventChoosen.lieu:'À venir'}</h1>
                          <h1 className="complement">
                            Horaire: {EventChoosen.horarie}
                          </h1>
                          <h1 className="complement">
                            Artistes: {!EventChoosen.artiste}
                          </h1>
                          <h1 className="complement">
                            Inscription: {EventChoosen.inscription}
                          </h1>
                          </div>
                      </div>
                    </div>
                <p>{EventChoosen.description}</p>
              </SimpleBar>
            </div>
          ) : (
            <div className="expocontent">
              {eventsList.map((event) => {
                return (
                  <EventCard
                    key={event.ID}
                    date={event['Date de début*']}
                    name={event.Title}
                    imageUrl={
                      event['Media Image Google Drive']
                        ? event['Media Image Google Drive'][0].url
                        : null
                    }
                    handleShowdetail={() => {
                      handleShowdetail(event)
                    }}
                    styles={styles}
                  />
                )
              })}
            </div>
          )}
        </SimpleBar>
      </div>
    )
  )
}
