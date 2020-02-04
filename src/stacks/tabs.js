import React from 'react';
import HomeScreen from '../screens/homescreen';
import ContactScreen from '../screens/contactscreen';
import SettingScreen from '../screens/settingscreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const Tabbar = createBottomTabNavigator({
        Home: {
            screen: HomeScreen,
        },
        Contact: {
            screen: ContactScreen,
        },
        Setting: {
            screen: SettingScreen,
        }
    }
);
const AppTabbar = createAppContainer(Tabbar);
export default AppTabbar;
