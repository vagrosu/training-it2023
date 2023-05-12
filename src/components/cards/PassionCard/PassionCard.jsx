import React from 'react';
import styles from './PassionCard.module.scss';
import placeholder from '../../../images/placeholder.png'

function PassionCard({title, description, importance, image}) {

  return  <div className={styles.container}>
    <img src={image || placeholder} alt={"passion"} className={styles.image}/>
    <div className={styles.infoContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{title}</h1>
        <h4 className={styles.importance}>{importance}</h4>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  </div>
}

export default PassionCard;