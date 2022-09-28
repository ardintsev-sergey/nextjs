import React from 'react';
import cn from 'classnames';
import { AdvantagesProps } from './Advantages.props';
import styles from './Advantages.module.css';
import CheckIcon from './check.svg';

export const Advantages = ({advantages}: AdvantagesProps): JSX.Element => {
  return (
    <>
      {/* {advantages[0]} */}
      {advantages.map(a => (
        <div key={a._id} className={styles.advantage}>
          <CheckIcon />
          <div className={styles.title}>{a.title}</div>
          <hr className={styles.vline}/>
          <div className={styles.desc}>{a.description}</div>
        </div>
      ))}
    </>
  );
};
