import React, { useState } from 'react';
import {
    StyleSheet, 
    View,
    ActivityIndicator
} from 'react-native';
import { Layout, Text, Card } from '@ui-kitten/components';
import { iOSUIKit, systemWeights } from 'react-native-typography'

export default function Finish ({ route, navigation }) {
    const name = route.params.finish;
    const validate = route.params.validator;

    if (validate === 'solved') {
        return (
            <Layout style={styles.container} level='1'>
                <Text style={styles.title}>Congratulations {name} You Win The Game !</Text>
                    <View style={{ marginTop: 30, justifyContent: 'center', width: '100%' }}>
                    <Card style={styles.card} onPress={() => navigation.navigate('Home')} status='basic'>
                        <Text style={styles.selectMode}>Back Home</Text>
                    </Card>
                    </View>
            </Layout>
        )
    } else {
        return (
            <Layout style={styles.container} level='1'>
                <Text style={styles.titleLose}>We're sorry {name} You lose The Game !</Text>
                    <View style={{ marginTop: 30, justifyContent: 'center', width: '100%' }}>
                    <Card style={styles.card} onPress={() => navigation.navigate('Home')} status='basic'>
                        <Text style={styles.selectMode}>Back Home</Text>
                    </Card>
                    </View>
            </Layout>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      flex: 1
    },
    title: {
        textAlign: 'center',
        ...iOSUIKit.largeTitleEmphasized,
        ...systemWeights.semibold,
        color: '#00a8cc',
        textShadowColor: '#142850',
        textShadowOffset: {width: -2, height: 1},
        textShadowRadius: 3
      },
      titleLose: {
        textAlign: 'center',
        ...iOSUIKit.largeTitleEmphasized,
        ...systemWeights.semibold,
        color: '#ff5200',
        textShadowColor: '#142850',
        textShadowOffset: {width: -2, height: 1},
        textShadowRadius: 3
      },
      card: {
        margin: 5,
      },
      selectMode: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      },
      containerLoad: {
        flex: 1,
        justifyContent: "center"
      }
  });