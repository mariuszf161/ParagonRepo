import style from '../../constans/defaultView';
import TopText from '../../constans/text'

import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { Icon } from 'react-native-elements/dist/icons/Icon';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
   const takePicture= async () =>{
    if(camera){
      const data = await camera.takePictureAsync(null);
      console.log(data.uri)
      setImage(data.uri);
    }
   }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={style.container}>

      <TopText>Skaner</TopText>
      <View style={{flex: 1}}>
        <View style={styles.cameraContainer}>

          <Camera
          ref={ref => setCamera(ref)}
          style={styles.fixedRatio} 
          type={type}
          ratio={'9:16'}/>
          </View>
            <View style={{paddingBottom: 15}}><Icon margin={10} size={50} color={'white'} name="camera" onPress={() => takePicture()}/></View>
            {image && <Image source={{uri: image}} style={{flex : 1}}/>} 
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cameraContainer:{
    flex: 1,
    flexDirection:'row'
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 9/16
  },
  
})
