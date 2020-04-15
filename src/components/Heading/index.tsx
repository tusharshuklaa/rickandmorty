import React from 'react';
import IHeading from './../../interfaces/IHeading';
import styles from './heading.module.scss';

const Heading = (props: IHeading) => {
  const { userAgent } = props;

  return <h1 className={styles.heading}>Hello world! - user agent: {userAgent}</h1>
};

export default Heading;