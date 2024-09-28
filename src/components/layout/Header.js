import React from "react";
import styles from "../../assets/styles/layout.module.css";
import { LocationIcon } from "../../utils/icons";
import Container from "../common/Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerMain}>
          <div className={styles.logo}>
            <img
              src="https://im1.dineout.co.in/images/uploads/misc/2023/Jun/19/swiggy_dineout_logo.png"
              alt="Swiggy Dineout"
              title="Swiggy Dineout"
            />
          </div>
          <div className={styles.locationSec}>
            <span className={styles.locationIcon}>
              <LocationIcon />
            </span>
            <span className={styles.cityName}>Delhi</span>
          </div>
          <div className={styles.navLinks}>
            <ul>
              <li>
                <Link to="/delhi">Home</Link>
              </li>
              <li>
                <Link to="/delhi-restaurants">Book a Table</Link>
              </li>
              <li>
                <Link
                  to="https://www.dineout.co.in/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.login}>
            <button className={`fillBtn ${styles.loginBtn}`}>Login</button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
