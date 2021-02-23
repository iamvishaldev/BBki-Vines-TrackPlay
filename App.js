import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import Sound from 'react-native-sound';

const soundList = [
  require('./assets/one.mp3'),
  require('./assets/two.mp3'),
  require('./assets/three.mp3'),
  require('./assets/four.mp3'),
  require('./assets/five.mp3'),
  require('./assets/six.mp3'),
  require('./assets/seven.mp3'),
  require('./assets/eight.mp3'),
  require('./assets/nine.mp3'),
  require('./assets/ten.mp3'),
];

const App = () => {
  const playSound = (sound) => {
    let whoosh = new Sound(sound, Sound.MAIN_BUNDLE, (err) => {
      if (err) {
        console.log('failed to load the sound', err);
      }
    });

    setTimeout(() => {
      whoosh.play();
    }, 1000);

    whoosh.release();
  };

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.logo} source={require('./assets/logo.png')} />
      <View style={styles.gridContainer}>
        {soundList.map((sound) => (
          <TouchableOpacity
            key={sound}
            style={styles.box}
            onPress={() => playSound(sound)}>
            <Text style={styles.text}>Play</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginTop: 5,
  },
  gridContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  box: {
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    width: '46%',
    marginVertical: 5,
    backgroundColor: '#0f4c75',
    borderRadius: 5,
    shadowColor: '#393e46',
    elevation: 5,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#fff',
  },
});

export default App;
