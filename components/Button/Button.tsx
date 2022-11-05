import React from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from '../../node_modules/classnames/index';
import ArrowIcon from './arrow.svg';
import { motion } from 'framer-motion';

export const Button = ({
  appeareance,
  arrow = 'none',
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className={cn(styles.button, className, {
        [styles.primary]: appeareance == 'primary',
        [styles.ghost]: appeareance == 'ghost',
      })}
      {...props}
    >
      {children}
      {arrow != 'none' && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow == 'down',
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </motion.button>
  );
};
