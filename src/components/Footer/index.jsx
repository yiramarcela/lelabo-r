import React, { useState } from 'react';
import styles from './style.module.scss';
import { clsx } from 'clsx';
import useInfoPagesData from '../../hooks/useInfoPagesData';
import useListBase from '../../hooks/useListBase';
import { TABLE_NAME, viewType } from '../../api/config';
import { Grid } from '@mui/material';

export const Footer = ({ aboutUsData, filterData }) => {
  const [isExpand, setIsExpand] = useState(false);
  const contactPageData = useInfoPagesData(aboutUsData, filterData, 'Contact');
  const partners = useListBase(TABLE_NAME.partners, viewType.edv);

  const handleClick = () => {
    setIsExpand(prev => !prev)
  }

  const ShowContact = () => {
    const { Name, Contenu } = contactPageData;
    if (Name.length !== 0) {
      return (
        <React.Fragment>
          <h1 className={styles.contact__title}>
            {Name}
          </h1>
          <h3>{Contenu}</h3>
        </React.Fragment>
      )
    }
  }

  const PartnerElement = ({ partner }) => {
    if (!partner.ID || !partner.NOM) return null;
    return (
      <div className={styles['slider-card']}>
        <h4 className={styles['slider-card__text']}>
          {partner.NOM}
        </h4>
      </div>
    )
  }

  return (
    <footer
      className={clsx({
        [styles.footer]: true,
        [styles['footer--expanded']]: isExpand,
        [styles['footer--collapsed']]: !isExpand
      })}
      onClick={handleClick}
    >
      {
        isExpand ?
          <div>
            <ShowContact />

            <Grid
              container
              className={styles.partners__container}
              justifyContent='center'
              alignItems='center' >
              <Grid item sm={8}>
                <h1 className={styles.partners__title}>
                  Partenaires
                </h1>
              </Grid>
              {partners.length > 0 ?
                partners.map((partner, i) => (
                  <Grid
                    item
                    sm={6}
                    key={i}
                    className={styles.partners__content}>
                    <PartnerElement partner={partner} />
                  </Grid>
                ))
                : null}
            </Grid>
          </div>
          :
          <h3 className={styles.footer__date}> {new Date().getFullYear()}</h3>
      }
    </footer>)
};

