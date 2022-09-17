import React from 'react';
import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import cn from '../../node_modules/classnames/index';
import { Menu } from '../Menu/Menu';

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};
