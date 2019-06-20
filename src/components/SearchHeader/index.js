import React, { set } from 'react';
import { View, Platform, TouchableOpacity } from 'react-native';
import FBStatusBar from '../FBStatusBar';
import styles from './styles';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { Appbar, Searchbar, Text } from 'react-native-paper';
import useSearchHeader from './hooks/useSearchHeader';

export default function SearchHeader() {
  const {
    searchQuery,
    handleOnChangeValue,
    isFocused,
    handleOnFocus,
    handleOnBlur,
    handleOnPress,
    handleOnSearch,
    inputEl,
  } = useSearchHeader();

  // const activeScreen = this.props.navigation.state.routes[this.props.navigation.state.index]
  //   .routeName;

  const activeScreen = 'HomeScreen';
  console.log('TCL: SearchHeader -> isFocused,', isFocused);
  console.log('TCL: SearchHeader -> searchQuery', searchQuery);
  return (
    <View style={activeScreen === 'HomeScreen' ? styles.container : styles.elevatedContainer}>
      <FBStatusBar backgroundColor="black" barStyle="light-content" />
      {isFocused ? (
        <Appbar.Header style={styles.toolbar}>
          <Searchbar
            ref={inputEl}
            style={styles.searchbar}
            placeholder="Search"
            icon={Platform.OS === 'ios' ? 'keyboard-arrow-left' : 'arrow-back'}
            onIconPress={handleOnPress}
            onChangeText={handleOnChangeValue}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            value={searchQuery}
          />
        </Appbar.Header>
      ) : (
        <Appbar.Header style={styles.toolbar}>
          <Appbar.Action icon="search" onPress={handleOnPress} />
          <TouchableOpacity style={styles.btn} onPress={handleOnPress}>
            <Text style={styles.btnText}>Search</Text>
          </TouchableOpacity>
          <Appbar.Action icon="face" onPress={handleOnSearch} />
        </Appbar.Header>
      )}
    </View>
  );
}
