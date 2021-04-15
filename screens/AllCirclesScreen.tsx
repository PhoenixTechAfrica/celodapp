import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from "react-redux";

import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';
import { Card, Text } from '@ui-kitten/components';

export default function TabOneScreen({ navigation }) {
  const wallet = useSelector((state: any) => state.wallet);

  React.useEffect(() => {
    if (wallet.failed) {
      navigation.navigate('Root');
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>View All Circles</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.card}> 
      
      <Card>
      <TouchableOpacity onPress={() => navigation.navigate('ViewCircleScreen')}>
    <Text>
      Circle Name, Amount
    </Text>
    </TouchableOpacity>
  </Card>

  <Text style={styles.sm}>{wallet.address}</Text>
  <Text style={styles.sm}>{wallet.phone}</Text>
  
  </View>
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '15%'
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sm: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red',
  },
  separator: {
    marginVertical: 15,
    height: 1,
    width: '100%',
  },
  card: {
    paddingLeft: '2%',
    paddingRight: '2%',
    width: '100%'
  }
});
