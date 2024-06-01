import {ReactElement} from 'react'
import {StyleSheet, Text, View} from 'react-native'

const MainPage = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
    </View>
  )
}

export default MainPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
