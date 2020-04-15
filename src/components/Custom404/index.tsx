// Inspiration from: https://codepen.io/vinnyA3/pen/RpjvNq

import React from 'react';
import styles from './custom404.module.scss';

const getHairs = () => {
  const hairs = [];
  let count = 1;
  while(count <= 12) {
    hairs.push(<div key={count} className={styles[`hair_${count}`]}></div>);
    ++count;
  }
  return hairs;
};

const getEyes = () => {
  return (
    <div className={styles.rick__eyeContainer}>
      <div className={styles.rick__eyeLeft}></div>
      <div className={styles.rick__eyeRight}></div>
    </div>
  );
}

export default function Rick404() {
  return (
    <div className={styles.wrapper}>
      <div>The page you are trying to search has been moved to another universe.</div>
      <div className={styles.rickContainer}>
        <div className={styles.rick__head}>
          <div className={styles.rick__ears}></div>
          <div className={styles.rick__scalp}>
            {getHairs()}
          </div>
          <div className={styles.rick__face}>
            <div className={styles.rick__brow}></div>
            {getEyes()}
            <div className={styles.rick__nose}></div>
            <div className={styles.rick__mouth}>
              <div className={styles.drool}></div>
            </div>
          </div>
        </div>
        <div className={styles.rick__body}>
          <div className={styles.rick__neck}></div>
        </div>
        <div className={styles.name__sign}>
          <h1>Page Not Found</h1>
        </div>
      </div>
    </div>
  )
}
