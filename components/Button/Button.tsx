import React from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import classNames from '../../node_modules/classnames/index';
// import cn from 'classnames'

export const Button = ({ appeareance, children, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <button 
        className={classNames(styles.button, className, {
            [styles.primary]: appeareance == 'primary',
            [styles.ghost]: appeareance == 'ghost',
        })}
        {...props}
        >
        {children}
    </button>
  );
};
