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
    inputRef,
  } = useSearchHeader();

  //   const onFocus = () => {
  //     this.setState(
  //       {
  //         isFocused: true,
  //       },
  //       () => {
  //         this.props.navigation.navigate('SearchScreen');
  //         setTimeout(() => {
  //           this.searchTextInput.focus();
  //         }, 240);
  //       },
  //     );
  //   };

  //   const onBlur = () => {
  //     this.setState({
  //       isFocused: false,
  //     });
  //   };

  //   const onPress = () => {
  //     if (isFocused) {
  //       this.setState({
  //         isFocused: false,
  //       });
  //       this.props.navigation.pop();
  //     } else {
  //       this.onFocus();
  //     }
  //   };

  // const activeScreen = this.props.navigation.state.routes[this.props.navigation.state.index]
  //   .routeName;

  const activeScreen = 'HomeScreen';
  console.log('TCL: getStatusBarHeight', getStatusBarHeight());
  return (
    <View style={activeScreen === 'HomeScreen' ? styles.container : styles.elevatedContainer}>
      <FBStatusBar backgroundColor="black" barStyle="light-content" />
      {isFocused ? (
        <Appbar.Header style={styles.toolbar}>
          <Searchbar
            ref={inputRef}
            style={styles.searchbar}
            placeholder="Search"
            icon={Platform.OS === 'ios' ? 'keyboard-arrow-left' : 'arrow-back'}
            onIconPress={() => {}}
            onChangeText={handleOnChangeValue(query)}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            value={searchQuery}
          />
        </Appbar.Header>
      ) : (
        <Appbar.Header style={styles.toolbar}>
          <Appbar.Action icon="search" onPress={() => {}} />
          <TouchableOpacity style={styles.btn} onPress={() => {}}>
            <Text style={styles.btnText}>Search</Text>
          </TouchableOpacity>
          <Appbar.Action icon="face" onPress={this._onSearch} />
        </Appbar.Header>
      )}
    </View>
  );
}
