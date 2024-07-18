import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Assuming you're using react-native-vector-icons or a similar library

interface RatingProps {
  rating: number; // Type the rating prop as a number
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const stars = Array(5).fill(0).map((_, index) => {
    const roundedRating = Math.round(rating * 2) / 2; // Round to nearest half star
    const filled = index < roundedRating;
    const halfFilled = index === Math.floor(roundedRating);

    return (
      <Icon
        key={index}
        name={filled ? 'star' : halfFilled ? 'star-half' : 'star-outline'}
        size={20}
        style={[styles.star, filled && styles.filledStar, halfFilled && styles.halfFilledStar]}
      />
    );
  });

  return <View style={styles.ratingContainer}>{stars}</View>;
};

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row', // Arrange stars horizontally
  },
  star: {
    marginRight: 5, // Spacing between stars
  },
  filledStar: {
    color: 'gold', // Customize filled star color
  },
  halfFilledStar: {
    color: 'orange', // Customize half-filled star color
  },
  myEmptyStarStyle: {
    // Override empty star styles if needed
  },
});

export default Rating;
