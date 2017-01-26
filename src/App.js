/**
 * Defund the Dakota Access Pipeline
 * defunddapl.org
 * @flow
 */

import React from 'react';
import { Navigator, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import BankReportScene from './BankReportScene';
import BankCheckScene from './BankCheckScene';
import Step1Scene from './Step1Scene';
import Step2Scene from './Step2Scene';
import Step3Scene from './Step3Scene';
import Step4Scene from './Step4Scene';
import Step5Scene from './Step5Scene';
import ThanksScene from './ThanksScene';

import colors from './colors';
import screens from './screens';
import styles from './styles';

const appStyles = StyleSheet.create({
  navBar: {
    backgroundColor: colors.navBar,
    paddingLeft: 30,
  },
  backBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 120,
    height: 44,
    marginLeft: 10,
  },
  backBtnText: {
    color: colors.black,
    fontWeight: "bold",
    paddingLeft: 1,
    paddingTop: -1,
  },
  navTitleText: {
    fontWeight: "bold",
    paddingTop: 10,
  },
});

function App() {
  return (
    <Navigator
      style={styles.app}
      initialRoute={{ title: '#DefundDAPL', screen: screens.LOOKUP }} // title: 'Check your bank'
      navigationBar={
        /* not sure why eslint barfs without the following turned off;
           maybe too complex for it to detect component? or the null? */
        /* eslint-disable react/display-name */
        <Navigator.NavigationBar
          routeMapper={{ // route, navigator, index, navState
            LeftButton: (route, navigator, index, navState) => {
              if (index === 0) { // route.index
                return null;
              }
              return (
                <TouchableHighlight
                  onPress={() => navigator.pop()}
                  underlayColor={colors.transparent}
                >
                  <View style={appStyles.backBtnContainer} >
                    <Icon name="ios-arrow-back" size={26} />
                    <Text style={appStyles.backBtnText} >
                      {navState.routeStack[index - 1].title}
                    </Text>
                  </View>
                </TouchableHighlight>
              );
            },
            Title: route => <Text style={appStyles.navTitleText}>{ route.title }</Text>,
            RightButton: () => <Text />,
          }}
          style={appStyles.navBar}
        />
        /* eslint-enable react/display-name */
      }

      configureScene={() => Navigator.SceneConfigs.HorizontalSwipeJump}


      renderScene={(route, navigator) => {
        let nextScene;
        switch (route.screen) {
          case screens.LOOKUP:
            nextScene = (
              <BankCheckScene
                navigator={navigator}
              />
            );
            break;
          case screens.REPORT:
            nextScene = (
              <BankReportScene
                navigator={navigator}
                bankName={route.bankName}
              />
            );
            break;
          case screens.STEP1:
            nextScene = (
              <Step1Scene
                // bankName={route.bankName}
                bank={route.bank}
                navigator={navigator}
              />
            );
            break;
          case screens.STEP2:
            nextScene = (
              <Step2Scene
                navigator={navigator}
              />
            );
            break;
          case screens.STEP3:
            nextScene = (
              <Step3Scene
                navigator={navigator}
              />
            );
            break;
          case screens.STEP4:
            nextScene = (
              <Step4Scene
                navigator={navigator}
              />
            );
            break;
          case screens.STEP5:
            nextScene = (
              <Step5Scene
                navigator={navigator}
              />
            );
            break;
          case screens.THANKS:
            nextScene = (
              <ThanksScene
                navigator={navigator}
              />
            );
            break;
          default:
            nextScene = (
              <View style={styles.container}>
                <Text
                  style={[styles.text, styles.text_size_s]}
                >How did we get here?? Unhandled Navigation case.
                </Text>
              </View>
            );
        }
        return nextScene;
      }}
    />
  );
}

export default App;

