import React from 'react';
import styles from './Layout.module.scss';
import { NavLink, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

export const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_title}>
          <Logo className={styles.header_logo}/>
          <h1>Notebook</h1>
        </div>
        <div className={styles.header_links}>
          <NavLink to="/" className={styles.header_links__item}>
            About
          </NavLink>
          <NavLink to="/posts" className={styles.header_links__item}>
            Posts
          </NavLink>
        </div>
      </header>
      <Outlet />
    </>
  );
};
