import React from "react";
import Carousel from "react-multi-carousel";
import styles from "../../assets/styles/home.module.css";
import Container from "../common/Container";
import { Link } from "react-router-dom";

const RestaurantsNearYouSection = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const restaurants = [
    {
      id: 0,
      href: "",
      imgSrc:
        "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/v/f/p31393-171569505266436dcc88e82.jpg?tr=tr:n-large",
      title: "The G.T. Road",
      alt: "The G.T. Road",
      rating: 4.3,
      location: "Connaught Place, Central Delhi",
    },
    {
      id: 1,
      href: "",
      imgSrc:
        "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/d/f/p19636-16463919576221f295ae1f1.jpg?tr=tr:n-large",
      title: "My Bar Headquarters",
      alt: "My Bar Headquarters",
      rating: 4.0,
      location: "Connaught Place, Central Delhi",
    },
    {
      id: 2,
      href: "",
      imgSrc:
        "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/u/b/p919-150182627559840ce33f574.jpg?tr=tr:n-large",
      title: "Dhaba Estd 1986 Delhi",
      alt: "Dhaba Estd 1986 Delhi",
      rating: 4.0,
      location: "Connaught Place, Central Delhi",
    },
    {
      id: 3,
      href: "",
      imgSrc:
        "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/e/z/p53380-15544492915ca7038b700f1.jpg?tr=tr:n-large",
      title: "Ghoomar Traditional Thali Restaurant",
      alt: "Ghoomar Traditional Thali Restaurant",
      rating: 4.1,
      location: "Connaught Place, Central Delhi",
    },
    {
      id: 4,
      href: "",
      imgSrc:
        "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/8/e/u/p80493-16064603115fc0a397716de.jpg?tr=tr:n-large",
      title: "Sandoz",
      alt: "Sandoz",
      rating: 3.9,
      location: "Connaught Place, Central Delhi",
    },
    {
      id: 5,
      href: "",
      imgSrc:
        "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/l/m/p532-168239919964475fdfdb926.jpg?tr=tr:n-large",
      title: "Barbeque Nation",
      alt: "Barbeque Nation",
      rating: 4.3,
      location: "Connaught Place, Central Delhi",
    },
  ];
  return (
    <section className={styles.restaurantsNearYouSection}>
      <Container>
        <div className={styles.restaurantsNearYouHeader}>
          <h2>Restaurants Near You</h2>
          <span className={styles.restaurantsNearYouSeeAll}>
            <Link
              to=""
              title="Restaurants Near You"
            >
              See all
            </Link>
          </span>
        </div>
        <div className={styles.carouselList}>
          <Carousel responsive={responsive}>
            {restaurants.map((restaurant) => (
              <div key={restaurant.id} data-index={restaurant.id}>
                <Link to={restaurant.href}>
                  <div className={styles.restaurantItem}>
                    <div className={styles.restaurantImage}>
                      <img
                        data-src={restaurant.imgSrc}
                        className={styles.lazyImg}
                        title={restaurant.title}
                        alt={restaurant.alt}
                        width="266"
                        height="140"
                        src={restaurant.imgSrc}
                      />
                    </div>
                    <div className={styles.restaurantInfo}>
                      <div className={styles.restaurantName}>
                        <h4 className={styles.restaurantTitle}>
                          {restaurant.title}
                        </h4>
                        <p className={styles.restaurantLocation}>
                          {restaurant.location}
                        </p>
                      </div>
                      <div className={styles.restaurantRating}>
                        {restaurant.rating}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default RestaurantsNearYouSection;
