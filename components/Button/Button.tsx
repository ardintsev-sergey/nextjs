import React from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from '../../node_modules/classnames/index';
import ArrowIcon from './arrow.svg';
// import cn from 'classnames'

export const Button = ({ appeareance, arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <button 
        className={cn(styles.button, className, {
            [styles.primary]: appeareance == 'primary',
            [styles.ghost]: appeareance == 'ghost',
        })}
        {...props}
        >
        {children}
        {arrow != 'none' && <span className={cn(styles.arrow, {
          [styles.down]: arrow == 'down'
        })}>
          <ArrowIcon />
          </span>}
    </button>
  );
};
