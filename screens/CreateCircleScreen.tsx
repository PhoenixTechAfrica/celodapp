import * as React from 'react';
import { StyleSheet } from 'react-native';

// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Input, Layout, Button } from '@ui-kitten/components';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a Savings Circle</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Layout style={styles.rowContainer} level='1'>

      <Input
        style={styles.input}
        // value={value}
        placeholder='Circle Name'
        // onChangeText={nextValue => setValue(nextValue)}
      />

      <Input
        style={styles.input}
        // disabled={true}
        placeholder='Contribution Amount'
      />

    </Layout>
    <Button>
        Create
    </Button>
      {/* <EditScreenInfo path="/screens/TabThreeScreen.tsx" /> */}
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
  },
  input: {
    // flex: '1',
    margin: 2,
  },
  rowContainer: {
    paddingTop: '40%',
    padding: '2%',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
  },
});
