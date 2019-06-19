import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function TabIcon({ name, type, tintColor, style, size }) {
  switch (type) {
    case 'material':
      return <Icon style={style ? style : {}} name={name} size={size} color={tintColor} />;

    case 'entypo':
      return <EntypoIcon style={style ? style : {}} name={name} size={size} color={tintColor} />;

    case 'rounded':
      return (
        <View>
          <Icon
            style={style ? style : {}}
            name={name}
            size={size}
            color={
              tintColor
              //=== AppStyles.colors.inactiveGreyColor ? AppStyles.colors.white : tintColor
            }
          />
        </View>
      );
  }
}

TabIcon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['material', 'entypo', 'rounded']),
  tintColor: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.number,
};
TabIcon.defaultProps = {
  type: 'material',
  size: 24,
};
