import React from 'react';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer
      {...props}
      className={cn(className, styles.footer)}
    >
      <p className={styles.copyright}>
        OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
      </p>
      <a
        href='https://github.com/ardintsev-sergey/nextjs'
        target='_blank'
      >
        Repo
      </a>
      <a
        href='/'
        target='_blank'
      >
        Пользовательское соглашение
      </a>
      <a
        href='/'
        target='_blank'
      >
        Политика конфиденциальности
      </a>
    </footer>
  );
};
