import clsx from "clsx";
import React from "react";
import '../../styles/lesalon.css'

export const EventCard = ({
  date,
  name,
  handleShowdetail,
  imageUrl,
  styles }) => {

  const present = new Date();
  const newdate = new Date(date);
  const month = newdate.toLocaleString('fr', { month: 'short' });

  const printPresent = () =>{
    console.log(present)
  }

  return (
    <button
      onClick={handleShowdetail}
      className={clsx([styles['event-card'], 'card'])}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className={styles['event-card__content']}>
        <h2
          className={clsx([styles['event-card__text__day'],])}>
          {newdate.getDate()}
        </h2>
        <h3
          className={clsx([styles['event-card__text'], "h3--card"])}>
          {month}
        </h3>
        <p className={styles['event-card__text__title']}>
          {name}
        </p>
      </div>
    </button>
  );
};
