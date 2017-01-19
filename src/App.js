/**
 * Defund the Dakota Access Pipeline
 * defunddapl.org
 * @flow
 */

import React from 'react';
import { Navigator, Text, TouchableHighlight, View } from 'react-native';

import BankReportScene from './BankReportScene';
import BankCheckScene from './BankCheckScene';
import Step1Scene from './Step1Scene';
import Step2Scene from './Step2Scene';
import Step3Scene from './Step3Scene';
import Step4Scene from './Step4Scene';
import Step5Scene from './Step5Scene';
import ThanksScene from './ThanksScene';

import screens from './screens';
import styles from './styles';


function App() {
  return (
    <Navigator
      style={styles.app}
      initialRoute={{ title: '', screen: screens.LOOKUP }} // title: 'Check your bank'

      navigationBar={
        <Navigator.NavigationBar
          routeMapper={{
            LeftButton: (route, navigator, index) => {
              // console.warn('route', route);
              if (index === 0) { // route.index
                return null;
              }
              return (
                <TouchableHighlight onPress={() => navigator.pop()}>
                  <Text
                    style={{ color: "blue", fontWeight: "bold", paddingTop: 15, marginLeft: 10 }}
                  >&lt; Back
                  </Text>
                </TouchableHighlight>
              );
            },
            Title: () => <Text style={{ fontSize: 20, fontWeight: 'bold', paddingTop: 10 }}>#DefundDAPL</Text>,
            RightButton: route =>
              (
                <Text
                  style={{ fontWeight: "bold", paddingTop: 15, marginRight: 10 }}
                >
                  { route.title }
                </Text>
              ),
          }}
          style={{ backgroundColor: '#D5D3D5', paddingLeft: 30 }}
        />
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
                bankName={route.bankName}
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

