import {createNavigationContainerRef, NavigationContainer} from '@react-navigation/native'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import {RootStackParamsList} from './types'
import {ScreenName} from './constants'
import MainPage from '@components/pages/MainPage/components'
import {ReactElement} from 'react'

const navigationRef = createNavigationContainerRef()
const RootStack = createStackNavigator<RootStackParamsList>()

const RootNavigator = (): ReactElement => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        screenOptions={{
          headerMode: 'screen',
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
        initialRouteName={ScreenName.MAIN_PAGE}>
        <RootStack.Screen name={ScreenName.MAIN_PAGE} component={MainPage} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
