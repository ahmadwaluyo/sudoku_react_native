import React from 'react';
import { 
    StyleSheet,
    TextInput,
   } from 'react-native';
import { Col, Row } from "react-native-easy-grid";

export default function Board (props) {
  const { board } = props;

    return (
      <>
        <Row style={styles.col}>
            {
              board.map((el, index) => 
              el === 0 ? 
                <Col style={styles.rowZero} key={index}>
                    <TextInput style={styles.textInput}>{''}</TextInput>
                </Col>
                : 
                <Col style={styles.row} key={index}>
                    <TextInput style={styles.textInput}>{el}</TextInput>
                </Col>
            )}
        </Row>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
      color: '#2c7de9',
      fontSize: 40
    },
    gridMain: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    row: {
      backgroundColor: '#eeeeee',
      padding: 2,
      width: 38,
      height: 38,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      borderColor: '#000',
      borderWidth: 2
    },
    rowZero: {
      backgroundColor: '#00adb5',
      padding: 2,
      width: 38,
      height: 38,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      borderColor: '#222831',
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
      borderColor: '#000',
    },
    view: {
      marginLeft: 0,
      marginRight: 0,
      borderColor: '#000'
    }
  });