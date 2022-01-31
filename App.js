import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <div>
       <h1>Subhan Yousaf (19-Ariid-1269)</h1>
       <p class="tite">Student / Software Construction / BSSE-5</p>
       <p>PMAS UARR</p>
     </div>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
