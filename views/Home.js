import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    StyleSheet, 
    View, 
} from 'react-native';
import { Card, Layout, Text, Input } from '@ui-kitten/components';
import { iOSUIKit, systemWeights } from 'react-native-typography'

export default function Home ({ navigation }) {
  const [value, setValue] = React.useState('');
  const boards = useSelector((state) => state.boards);

    if (boards.length === 0) {
      console.log('just nothing')
    }

    const modeHandler = (modeSelect) => {
      if (modeSelect === 'easy') {
        navigation.navigate('Game', { mode: 'easy', name: value })
      } else if (modeSelect === 'medium'){
        navigation.navigate('Game', { mode: 'medium', name: value })
      } else if (modeSelect === 'hard'){
        navigation.navigate('Game', { mode: 'hard', name: value })
      } else if (modeSelect === 'random'){
        navigation.navigate('Game', { mode: 'random', name: value })
      }
    }

    return (
      <Layout style={styles.container} level='1'>
        <Text style={styles.title}>Welcome to Sudoku</Text>
        <View style={styles.mode}>
            <Text style={styles.name}>Input your name : </Text>
            <Input
              placeholder='Fill your name'
              value={value}
              onChangeText={nextValue => setValue(nextValue)}
            />
        </View>
        <View style={styles.view}>
            <View style={styles.modeSelect}>
                <Text style={styles.nameMode}>Select your mode : </Text>
            </View>
            <Card style={styles.card} onPress={() => modeHandler('easy')} status='basic'>
              <Text style={styles.selectMode}>Easy</Text>
            </Card>

            <Card style={styles.card} onPress={() => modeHandler('medium')} status='warning'>
              <Text style={styles.selectMode}>Medium</Text>
            </Card>

            <Card style={styles.card} onPress={() => modeHandler('hard')} status='danger'>
              <Text style={styles.selectMode}>Hard</Text>
            </Card>

            <Card style={styles.card} onPress={() => modeHandler('random')} status='info'>
              <Text style={styles.selectMode}>Random</Text>
            </Card>
        </View>
      </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    },
    card: {
      margin: 5,
    },
    view: {
      width: '65%', 
      justifyContent: 'center',
      marginBottom: 40,
      marginTop: 20
    },
    mode: {
      alignItems: 'center',
      fontSize: 10,
      width: '78%'
    },
    modeSelect: {
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      textAlign: 'center',
      ...iOSUIKit.largeTitleEmphasized,
      ...systemWeights.semibold,
      color: '#eeeeee',
      marginTop: 50,
      textShadowColor: '#00adb5',
      textShadowOffset: {width: -2, height: 1},
      textShadowRadius: 3
    },
    name: {
      padding: 5,
      color: '#393e46',
    },
    nameMode: {
      padding: 5,
      color: '#393e46',
    },
    selectMode: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }
  });
