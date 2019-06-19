import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import RootNavigator from './src/routes/rootNavigator';
import NavigationService from './src/services/NavigationService';
import AppStyles from './src/config/styles';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0084ff',
    accent: '#f1c40f',
    background: '#f9f9f9',
    paper: 'white',
  },
};
// Debug Only - yellow box
console.disableYellowBox = true;

const AppContainer = createAppContainer(RootNavigator);

function App() {
  //   useEffect(() => {
  //     NavigationService.navigateAndReset('MainScreen');
  //   });

  return (
    // <PaperProvider theme={theme}>
    <SafeAreaView style={styles.safeAreaView}>
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor={styles.backgroundColor} />
        <AppContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </View>
    </SafeAreaView>
    // </PaperProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: AppStyles.colors.white,
  },
});

export default App;
