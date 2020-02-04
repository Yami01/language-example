import React, { PureComponent } from 'react';
import {
    View, Text
} from 'react-native';
import AppText from '../components/app-text';

const ContactScreen = props => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <AppText i18nKey={'this-is-contact-page'}>This is contact screen</AppText>
            </View>
        );
    };

export default ContactScreen;
