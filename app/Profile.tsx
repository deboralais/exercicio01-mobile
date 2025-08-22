import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
const profileImage = require ('../assets/images/debra.png');

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image
        source={profileImage}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Débora Laís Macedo</Text>

      <Text style={styles.bio}>
       Tecnólogo em Sistemas para Internet •
        Universidade Católica de Pernambuco
        
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#b3b3b3c7', 
    borderRadius: 10,
    margin: 20,
    shadowColor: '#111111ff',
    shadowRadius: 3.84,
    elevation: 5,
  },
  profileImage: {
    width: 170,
    height: 190,
    borderRadius: 40,
    marginBottom: 25,
    borderWidth: 0, //
    // borderColor: '#090f42ff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111111ff',
    marginBottom: 9,
  },
  bio: {
    fontSize: 20,
    color: '#111111ff',
    textAlign: 'center',
  },
});

export default Profile;