import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you're using react-native-vector-icons or a similar library

interface RatingProps {
  rating: number; // Type the rating prop as a number
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  // Ensure rating is within the 0 to 5 range
  const normalizedRating = Math.min(Math.max(rating, 0), 5);

  // Calculate the number of full, half, and empty stars
  const stars = Array.from({ length: 5 }, (_, index) => {
    const roundedRating = Math.round(normalizedRating * 2) / 2;
    const filled = index < Math.floor(roundedRating);
    const halfFilled = index === Math.floor(roundedRating) && roundedRating % 1 !== 0;

    return (
      <Icon
        key={index}
        name={filled ? 'star' : halfFilled ? 'star-half-full' : 'star-o'} // Use 'star' for empty stars to avoid confusion
        size={12}
        style={[
          styles.star,
          filled && styles.filledStar,
          halfFilled && styles.halfFilledStar,
        ]}
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
    color: 'gold', // Customize half-filled star color
  },
});

export default Rating;
