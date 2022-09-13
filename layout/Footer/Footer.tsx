import React from 'react';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from '../../node_modules/classnames/index';

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return (
    <div {...props}>
      Footer
    </div>
  );
};
