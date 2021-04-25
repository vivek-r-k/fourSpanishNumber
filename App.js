import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import Sound from 'react-native-sound'

const soundList = [
  require('./Assets/one.wav'),
  require('./Assets/two.wav'),
  require('./Assets/three.wav'),
  require('./Assets/four.wav'),
  require('./Assets/five.wav'),
  require('./Assets/six.wav'),
  require('./Assets/seven.wav'),
  require('./Assets/eight.wav'),
  require('./Assets/nine.wav'),
  require('./Assets/ten.wav'),
]

const App = () => {

  const playSound = (sound) => {
    const soundVar = new Sound(sound, Sound.MAIN_BUNDLE, (err) => {
      if(err){
        console.log("NOT ABLE TO PLAY SOUND");
      }
    })

    setTimeout(() => {
      soundVar.play()
    }, 1000)

    soundVar.release()

  }

  return(
    <ScrollView style={styles.container}>
      <Image style={styles.logo} source={require('./Assets/logo.png')} />
      <View style={styles.gridContainer}>
        {soundList.map((sound) => (
          <TouchableOpacity
          key={sound}
          onPress={() => {playSound(sound)}}
          style={styles.box}
          >
            <Text style={styles.text}>{sound}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c'
  },
  logo: {
    alignSelf: 'center',
    marginTop: 15,
  },
  gridContainer: {
    flex: 1,
    margin: 5,
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
    marginVertical: 6,
    backgroundColor: '#0f4c75',
    borderRadius: 5,
    shadowColor: '#393e46',
    elevation: 5,
  },
  text: {
    fontSize: 50,
    color: '#ff4301',
  }
})