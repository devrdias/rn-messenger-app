import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-navigation';
import NavigationService from '../../services/NavigationService';
import styles from './styles';
import Camera from '../../components/Camera';

export default function CameraScreen() {
  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      alert('Saved', data.uri);
    }
  };

  onPress = () => {
    NavigationService.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Camera />

      <SafeAreaView style={styles.absoluteView}>
        <View style={styles.head}>
          <TouchableOpacity onPress={this.onPress}>
            <Icon name="close" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
          <Icon name="photo-camera" size={75} color="white" />
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}
