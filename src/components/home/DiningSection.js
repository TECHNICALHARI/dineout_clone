import React from 'react';
import styles from "../../assets/styles/home.module.css";
import Container from '../common/Container';
import { Link } from 'react-router-dom';

const DiningSection = () => {
  const diningOptions = [
    {
      id: 0,
      href: '',
      imgSrc: 'https://im1.dineout.co.in/images/uploads/misc/2020/May/8/bffet.png',
      title: 'Buffet',
      alt: 'Buffet'
    },
    {
      id: 1,
      href: '',
      imgSrc: 'https://im1.dineout.co.in/images/uploads/misc/2020/May/8/pocket_friendly.png',
      title: 'Pocket Friendly',
      alt: 'Pocket Friendly'
    },
    {
      id: 2,
      href: '',
      imgSrc: 'https://im1.dineout.co.in/images/uploads/misc/2020/May/8/pet_friendly.png',
      title: 'Pet Friendly',
      alt: 'Pet Friendly'
    },
    {
      id: 3,
      href: '',
      imgSrc: 'https://im1.dineout.co.in/images/uploads/misc/2020/May/8/must_visit.png',
      title: 'Must Visit',
      alt: 'Must Visit'
    },
    {
      id: 4,
      href: '',
      imgSrc: 'https://im1.dineout.co.in/images/uploads/misc/2020/May/8/family_time.png',
      title: 'Family Time',
      alt: 'Family Time'
    },
    {
      id: 5,
      href: '',
      imgSrc: 'https://im1.dineout.co.in/images/uploads/misc/2020/May/8/pure_veg.png',
      title: 'Pure Veg',
      alt: 'Pure Veg'
    },
    {
      id: 6,
      href: '',
      imgSrc: 'https://im1.dineout.co.in/images/uploads/misc/2020/May/8/new_on_dineout.png',
      title: 'New On Dineout',
      alt: 'New On Dineout'
    },
    {
      id: 7,
      href: '',
      imgSrc: 'https://im1.dineout.co.in/images/uploads/misc/2020/May/8/happiest_hour.png',
      title: 'Happiest Hours',
      alt: 'Happiest Hours'
    }
  ];

  return (
    <section className={styles.diningSection}>
      <Container>
        <ul className={styles.diningList}>
          {diningOptions.map((option) => (
            <li key={option.id}>
              <Link to={option.href}>
                <span>
                  <img
                    data-src={option.imgSrc}
                    title={option.title}
                    alt={option.alt}
                    src={option.imgSrc}
                  />
                </span>
                <span>{option.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default DiningSection;