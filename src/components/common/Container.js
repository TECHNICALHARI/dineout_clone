import React from 'react';
import styles from '../../assets/styles/layout.module.css';

const Container = ({ children }) => {
  return <div className={'container'}>{children}</div>;
};

export default Container;
