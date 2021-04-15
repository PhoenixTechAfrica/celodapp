import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, TouchableOpacity, View, LogBox } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { Button, Layout, Text } from '@ui-kitten/components';
import { RootStackParamList } from '../types';
import { walletActions } from "../store/actions";

export default function HomeScreen() {
  // const alert = useSelector(state => state.alert)
  const dispatch = useDispatch()

   const login = async () => {
    dispatch(walletActions.connect())
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is a DApp where you can join a co-operative circle, save together and earn.</Text>
      <Button onPress={login}>
        Connect Wallet
      </Button>
      {/* <TouchableOpacity onPress={() => navigation.navigate('UserScreen')} style={styles.link}>
        <Text style={styles.linkText}>This is the home screen!</Text>
      </TouchableOpacity> */}

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
