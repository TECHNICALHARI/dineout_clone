import styles from "../../assets/styles/home.module.css";
import Container from "../common/Container";
import { SearchIcon } from "../../utils/icons";
const Banner = () => {
  return (
    <div className={styles.bigImage}>
      <Container>
        <div className={styles.bannerMain}>
          <div className={styles.bannerHead}>
            <h1>
              It's Now Safe To <span>Crave!</span>
            </h1>
          </div>
          <div className={styles.searchInput}>
            <span className={styles.searchIcon}>
              <SearchIcon />
            </span>
            <input
              type="text"
              id="restaurantSearch"
              placeholder="Search for Restaurants, Cuisines, Location..."
              maxLength="50"
            />
            <button className="fillBtn" type="submit">
              Search
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
