import  React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class BookTransactionScreen extends Component{
    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                 ISSUE OR RETURN A BOOK!   
                </Text>
            </View>
        )
    }
}