import { useState } from 'react'
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CampsiteList from './src/screens/campsite/campsite-list.view'
import Profile from './src/screens/profile/profile.view'
import SignIn from './src/screens/account/signin.view'
import SignUp from './src/screens/account/signup.view'
import CampsiteDetail from './src/screens/campsite/campsite-detail.view'
import Connection from './src/screens/connection/connection.view'
import CampsiteAdd from './src/screens/campsite/campsite-add.view'
import CampsiteEdit from './src/screens/campsite/campsite-edit.view'
import Characteristic from './src/screens/characteristic/characteristic.view'
import { UserContext } from './src/context/user.context'

export default function App() {
    const Tab = createBottomTabNavigator()
    const Stack = createNativeStackNavigator()

    const [userEmail, setUserEmail] = useState<string>()

    const BottomTab = () => {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarHideOnKeyboard: true,
                    tabBarIcon: ({ focused }) => {
                        let tabIcon

                        switch (route.name) {
                            case 'CampsiteList':
                                tabIcon = focused
                                    ? require('./assets/icons/campsite-focused.png')
                                    : require('./assets/icons/campsite-unfocused.png')
                                break
                            case 'Profile':
                                tabIcon = focused
                                    ? require('./assets/icons/profile-focused.png')
                                    : require('./assets/icons/profile-unfocused.png')
                                break
                        }

                        return <Image source={tabIcon} />
                    }
                })}
            >
                <Tab.Screen name="CampsiteList" component={CampsiteList} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        )
    }

    return (
        <UserContext.Provider value={{ userEmail, setUserEmail }}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="Connection" component={Connection} />
                    <Stack.Screen name="BottomTab" component={BottomTab} />
                    <Stack.Screen name="CampsiteDetail" component={CampsiteDetail} />
                    <Stack.Screen name="CampsiteAdd" component={CampsiteAdd} />
                    <Stack.Screen name="CampsiteEdit" component={CampsiteEdit} />
                    <Stack.Screen name="Characteristic" component={Characteristic} />
                </Stack.Navigator>
            </NavigationContainer>
        </UserContext.Provider>
    )
}
