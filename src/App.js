/**
 * Defund the Dakota Access Pipeline
 * defunddapl.org
 * @flow
 */

import React, { Component } from 'react';
import {
 Navigator, StyleSheet, Text, TouchableHighlight, View 
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import codePush from 'react-native-code-push';

// import CodePushTest from './CodePushTest';
import StartScreen from './StartScreen';
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
import styles, { px } from './styles';

const appStyles = StyleSheet.create({
  navBar: {
    // backgroundColor: colors.navBar,
    backgroundColor: colors.white,
    paddingLeft: 30,
  },
  backBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: px(120),
    height: px(44),
    marginLeft: px(10),
  },
  backBtnText: {
    color: colors.black,
    paddingLeft: 1,
    paddingTop: -1,
  },
  navText: {
    fontWeight: 'bold',
    paddingTop: px(10),
    fontSize: px(16),
  },
});

/* eslint-disable react/prefer-stateless-function */
// because codepush needs a class
class App extends Component {
/* eslint-enable react/prefer-stateless-function */

  // function App() {
  //   return (
  render() {
    return (
      <Navigator
        style={styles.app}
        initialRoute={{ title: 'Start', screen: screens.HOME }}
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
                      <Icon name="ios-arrow-back" size={px(26)} />
                      <Text style={[appStyles.navText, appStyles.backBtnText]} >
                        {navState.routeStack[index - 1].title}
                      </Text>
                    </View>
                  </TouchableHighlight>
                );
              },
              Title: route => <Text style={[appStyles.navText]}>{ route.title }</Text>,
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
            // case screens.HOME:
            //   nextScene = (
            //     <CodePushTest
            //       navigator={navigator}
            //     />
            //   );
            //   break;
            case screens.HOME:
              nextScene = (
                <StartScreen
                  navigator={navigator}
                />
              );
              break;
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
                  >
How did we get here?? Unhandled Navigation case.
</Text>
                </View>
              );
          }

          return (
            <View style={styles.sceneContainer}>
              { nextScene }
            </View>
          );
        }}
      />
    );
  }
}

// const codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };
// App = codePush(codePushOptions)(App); // eslint-disable-line no-class-assign

App = codePush(App); // eslint-disable-line no-class-assign

export default App;
