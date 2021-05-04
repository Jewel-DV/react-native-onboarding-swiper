import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const Dot = ({ isLight, selected }) => {
  let backgroundColor;
  if (isLight) {
    backgroundColor = selected ? '#3989ca' : 'rgba(215, 223, 223, 0.5)';
  } else {
    backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
  }
  return (
    <View
      style={{
        ...styles.dot,
        backgroundColor,
        width: selected ? 19 : 10
      }}
    />
  );
};

Dot.propTypes = {
  isLight: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
};

const styles = {
  dot: {
    width: 10,
    height: 10,
    borderRadius: 12,
    marginHorizontal: 3,
  },
};

export default Dot;
