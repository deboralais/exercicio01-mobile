import { Text, View, StyleSheet } from "react-native";
import Profile from './Profile'; 

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Exemplo 01 - Aplicativo para dispositivos móveis 
      </Text>
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20, 
  },
  title: {
    fontSize: 40, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    color: '#111111ff', 
    marginBottom: 20, 
  },
});