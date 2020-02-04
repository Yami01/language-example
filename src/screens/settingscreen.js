import React, { PureComponent } from 'react';
import {
    View, Text
} from 'react-native';
import AppText from '../components/app-text';

const SettingScreen = props => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <AppText i18nKey={'this-is-setting-page'}>This is setting screen</AppText>
            </View>
        );
    };

export default SettingScreen;
