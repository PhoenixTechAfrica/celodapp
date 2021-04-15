import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              HomeScreen: 'one',
            },
          }
        },
      },
      UserScreen: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'two',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'three',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
