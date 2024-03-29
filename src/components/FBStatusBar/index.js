import React from 'react';
import { View, StatusBar } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

// TODO: convert to styled-components
const FBStatusBar = props => {
  return (
    <View
      style={[
        styles.statusBar,
        {
          backgroundColor: props.backgroundColor,
        },
      ]}
    >
      <StatusBar
        animated
        translucent
        backgroundColor={props.backgroundColor}
        barStyle="light-content"
      />
    </View>
  );
};

FBStatusBar.propTypes = {
  backgroundColor: PropTypes.string,
};

export default FBStatusBar;
