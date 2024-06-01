import {ActionSheetProvider} from '@expo/react-native-action-sheet'
import RootNavigator from '@navigations/RootNavigator'
import {ReactElement} from 'react'
import {StatusBar, StyleSheet} from 'react-native'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {SafeAreaProvider} from 'react-native-safe-area-context'

const App = (): ReactElement => {
  return (
    <SafeAreaProvider>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <ActionSheetProvider>
        <GestureHandlerRootView style={styles.gestureHandlerRootView}>
          <RootNavigator />
        </GestureHandlerRootView>
      </ActionSheetProvider>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  gestureHandlerRootView: {
    flex: 1,
  },
})

export default App
