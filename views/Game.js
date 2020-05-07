import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoards, setBoards } from '../store/actions';
import { solveBoards } from '../store/actions';
import { validateBoards } from '../store/actions';
import {
    Text, 
    ScrollView,
    StyleSheet, 
    View, 
    Button,
    ActivityIndicator,
     } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { Grid } from "react-native-easy-grid";
import Board from '../components/Board';
import { iOSUIKit, systemWeights } from 'react-native-typography'

export default function Game ({ route, navigation}) {
    const dispatch = useDispatch();
    const { mode } = route.params;
    const { name } = route.params;
    const { boards } = useSelector((state) => state.boards);
    const { initialBoards } = useSelector((state) => state.boards);
    const { validator } = useSelector((state) => state.validator);
    const { solved } = useSelector((state) => state.solved);
    console.log('ini solved',solved);
    const [loading, setLoading] = useState(true);

    if (boards.length === 0) {
      console.log('just nothing')
    }


    const submitSolved = (e) => {
      e.preventDefault();
      dispatch(solveBoards([...initialBoards]))
    }

    const submitValidate = (e) => {
      e.preventDefault();
      dispatch(validateBoards(boards))
      navigation.navigate('Finish', { finish: name, validator: validator })
    }

    const resetGame = (e) => {
      e.preventDefault();
      dispatch(setBoards([...initialBoards]))
    }

    useEffect(() => {
      setLoading(false)
      dispatch(fetchBoards(mode))
      dispatch(validateBoards(boards))
    }, [dispatch])

    if (loading) {
      return (
        <View style={styles.containerLoad}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }

    if (validator === 'solved') {
      navigation.navigate('Finish', { finish: name, validator: validator })
    }

    return (
        <ScrollView style={{ backgroundColor: '#393e46', flex: 1 }}>
            <Text style={styles.title}>Sudoku App</Text>
            <View style={styles.view}>
                <Grid style={styles.gridMain}>
                    {
                      boards.map((el, index) =>
                        <Board board={el} key={index}
                      />)
                    }
                </Grid>
                <Layout style={styles.layout} level='1'>
                  <Text style={styles.nameMode}>Name:</Text><Text>{name}</Text>
                  <Text style={styles.nameMode}>Difficulty:</Text><Text>{mode}</Text>
                  <Text style={styles.nameMode}>Status:</Text><Text>{validator}</Text>
                </Layout>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 20 }}>
                <View style={[{ width: "33%", textAlign: 'center', fontSize: 'x-large', padding: 5 }]}>
                      <Button
                      title="clear"
                      color="#2c2d34"
                      onPress={(e) => resetGame(e)}
                      />
                </View>
                <View style={[{ width: "33%", textAlign: 'center', fontSize: 'x-large', padding: 5 }]}>
                    <Button 
                        title= "validate"
                        color= "#74b49b"
                        onPress={(e) => submitValidate(e)}
                    />
                </View>
                <View style={[{ width: "33%", textAlign: 'center', fontSize: 'x-large', padding: 5 }]}>
                    <Button 
                        title= "give up"
                        color= "#e94822"
                        onPress={(e) => submitSolved(e)}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    text: {
      fontSize: 10,
      color: '#000'
    },
    title: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 10, 
      color: '#fff',
      ...iOSUIKit.largeTitleEmphasizedWhite,
      ...systemWeights.semibold,
    },
    gridMain: {
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      flexDirection: 'column'
    },
    row: {
      backgroundColor: '#ececec',
      padding: 2,
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      borderColor: '#000',
      borderWidth: 2
    },
    textInput: {
      fontSize: 15, 
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
    btn: {
      padding: 10,
      width: 10,
      color: '#841584'
    },
    col: {
      margin: 5,
      borderColor: '#000',
    },
    view: {
      justifyContent: "center",
      alignItems: "center",
      borderColor: '#000'
    },
    layout: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginTop: 20,
      width: '95%',
      padding: 15
    },
    containerLoad: {
      flex: 1,
      justifyContent: "center"
    },
    containerLoad: {
      flex: 1,
      justifyContent: "center"
    },
    nameMode: {
      color: '#ff5200'
    }
  });
