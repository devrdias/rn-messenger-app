import React, { useRef } from 'react';
import { RNCamera } from 'react-native-camera';
import styles from './styles';
export default function Camera() {
  const inputEl = useRef(null);

  return (
    <RNCamera
      ref={inputEl}
      style={styles.preview}
      type={RNCamera.Constants.Type.back}
      flashMode={RNCamera.Constants.FlashMode.on}
      permissionDialogTitle={'Permission to use camera'}
      permissionDialogMessage={'We need your permission to use your camera phone'}
    />
  );
}
