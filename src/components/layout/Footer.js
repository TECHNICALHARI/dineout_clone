import React from "react";
import styles from "../../assets/styles/layout.module.css";
import Container from "../common/Container";
import {
  FaceBookIcon,
  InstagramIcon,
  TwitterIcon,
  YouTubeIcon,
} from "../../utils/icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const locations = [
    ["Delhi", "Pune", "Jaipur", "Vadodara"],
    ["Mumbai", "Kolkata", "Lucknow", "Nagpur"],
    ["Bangalore", "Ahmedabad", "Indore", "Kochi"],
    ["Chennai", "Chandigarh", "Udaipur", "Surat"],
    ["Hyderabad", "Goa", "Agra", "Ludhiana"],
  ];

  return (
    <footer className={styles.footer}>
      <Container>
        <h3 className={styles.sectionHeader}>Available in</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 mb-10">
          {locations.map((cityList, index) => (
            <div key={index}>
              <ul className={styles.LocationListF}>
                {cityList.map((city) => (
                  <li key={city}>
                    <Link to={""}>{city}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
      <hr />
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 mb-10">
          <div>
            <h3 className={styles.sectionHeader}>Discover</h3>
            <ul className={styles.LocationListF}>
              <li>
                <Link to={""}>Trending Restaurants</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={styles.sectionHeader}>About</h3>
            <ul className={styles.LocationListF}>
              <li>
                <Link to={""}>About Us</Link>
              </li>
              <li>
                <Link to={""}>Blog</Link>
              </li>
              <li>
                <Link to={""}>Terms & Conditions</Link>
              </li>
              <li>
                {" "}
                <Link to={""}> Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={styles.sectionHeader}>Top Cuisines</h3>
            <ul className={styles.LocationListF}>
              <li>
                <Link to={""}>Chinese</Link>
              </li>
              <li>
                <Link to={""}>Italian</Link>
              </li>
              <li>
                <Link to={""}>South Indian</Link>
              </li>
              <li>
                <Link to={""}>Mexican</Link>
              </li>
              <li>
                <Link to={""}>Bengali</Link>
              </li>
              <li>
                <Link to={""}>Thai</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={styles.sectionHeader}>Top Facilities</h3>
            <ul className={styles.LocationListF}>
              <li>
                <Link to={""}>Fine Dining</Link>
              </li>
              <li>
                <Link to={""}>5 Star</Link>
              </li>
              <li>
                <Link to={""}>Rooftop</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={styles.sectionHeader}>Top Locations</h3>
            <ul className={styles.LocationListF}>
              <li>
                <Link to={""}> Rajouri Garden</Link>
              </li>
              <li>
                <Link to={""}> Hauz Khas Village</Link>
              </li>
              <li>
                <Link to={""}> DLF Cyber City</Link>
              </li>
              <li>
                <Link to={""}> Connaught Place</Link>
              </li>
              <li>
                <Link to={""}> Khan Market</Link>
              </li>
              <li>
                <Link to={""}> Dwarka</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <hr />
      <Container>
        <div className={styles.footerLogoSec}>
          <div>
            <img
              src="https://im1.dineout.co.in/images/uploads/misc/2023/Jun/19/swiggy_dineout_logo.png"
              alt="logo"
              width="125"
              height="30"
            />
          </div>
          <div>Find the best Restaurants, Deals, Discounts &amp; Offers</div>
          <div className={styles.writeUs}>
            Write to us at:{" "}
            <strong>
              <a href="mailto:dineout.helpdesk@swiggy.in">
                dineout.helpdesk@swiggy.in
              </a>
            </strong>
          </div>
          <div>
            <ul className={styles.socialIcons}>
              <li>
                <a href="#">
                  <YouTubeIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaceBookIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <TwitterIcon />
                </a>
              </li>
            </ul>
          </div>
          <div>© 2022 - Swiggy All Rights Reserved</div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
