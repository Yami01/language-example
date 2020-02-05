import React,{useEffect, useState}  from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';
import I18n from 'react-native-i18n';

const ContactScreen = props => {
        const [langValue, setLangValue] = useState('');
        function onChangeTextSearch(value) {
            setLangValue(value);
            I18n.locale = value;
        }
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{I18n.t('this-is-contact-page')}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text>{I18n.t('set-language')}</Text>
                    <TouchableOpacity
                        onPress={() => onChangeTextSearch('vi')}
                                      style={{ marginLeft: 20 }}>
                        <Text style={{ color: langValue === 'vi' ? 'blue' : 'grey' }}>Việt Nam</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onChangeTextSearch('en')}
                                      style={{ marginLeft: 5 }}>
                        <Text style={{ color: langValue === 'en' ? 'blue' : 'grey' }}>English</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

export default ContactScreen;
