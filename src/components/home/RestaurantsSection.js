import React from 'react';
import styles from '../styles/RestaurantsSection.module.css';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import Container from '../common/Container';

const restaurants = [
  { name: "The G.T. Road", location: "Connaught Place, Central Delhi", image: "/path/to/image1.jpg" },
  { name: "My Bar Headquarters", location: "Connaught Place, Central Delhi", image: "/path/to/image2.jpg" },
  { name: "Dhaba Estd 1986", location: "Connaught Place, Central Delhi", image: "/path/to/image3.jpg" },
  { name: "Ghoomar Traditional", location: "Connaught Place, Central Delhi", image: "/path/to/image4.jpg" },
];

const RestaurantsSection = () => {
  return (
    <Container>
      <div className={styles.restaurantsSection}>
        <Typography variant="h5">Restaurants Near You</Typography>
        <Grid container spacing={3}>
          {restaurants.map((restaurant, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={restaurant.image}
                  alt={restaurant.name}
                />
                <CardContent>
                  <Typography variant="h6">{restaurant.name}</Typography>
                  <Typography>{restaurant.location}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default RestaurantsSection;
