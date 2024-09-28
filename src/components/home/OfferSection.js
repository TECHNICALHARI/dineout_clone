import React from 'react';
import Carousel from 'react-multi-carousel';
import styles from "../../assets/styles/home.module.css";
import Container from '../common/Container';

const OffersSection = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  const offers = [
    {
      id: 0,
      href: '/delhi-restaurants/more-than-30instant-discount',
      imgSrc: 'https://im1.dineout.co.in/images/uploads/misc/2020/Nov/20/30offid.png?tr=tr:n-small',
      title: 'Best offers',
      alt: 'Best offers'
    },
    {
      id: 1,
      href: '/delhi-restaurants/25instant-discount',
      imgSrc: 'https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/25offid.png?tr=tr:n-small',
      title: 'Best offers',
      alt: 'Best offers'
    },
    {
      id: 2,
      href: '/delhi-restaurants/20instant-discount',
      imgSrc: 'https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/20offid.png?tr=tr:n-small',
      title: 'Best offers',
      alt: 'Best offers'
    },
    {
      id: 3,
      href: '/delhi-restaurants/15instant-discount',
      imgSrc: 'https://im1.dineout.co.in/images/uploads/misc/2020/Nov/20/15offid.png?tr=tr:n-small',
      title: 'Best offers',
      alt: 'Best offers'
    }
  ];

  return (
    <section className={styles.offerMain}>
      <Container>
        <div className={styles.offerHeader}>
          <h2>Best offers</h2>
        </div>
        <div className={styles.carouselList}>
          <Carousel responsive={responsive}>
            {offers.map((offer) => (
                <div key={offer.id} className={styles.offerItem}>
                  <a href={offer.href}>
                    <img
                      data-src={offer.imgSrc}
                      className={styles.lazyImg}
                      title={offer.title}
                      alt={offer.alt}
                      width="134"
                      height="180"
                      src={offer.imgSrc}
                    />
                  </a>
              </div>
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default OffersSection;