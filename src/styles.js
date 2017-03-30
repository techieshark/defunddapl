// @flow
import { StyleSheet } from 'react-native';

import { height as dotHeight } from './ProgressIndicatorDots';

import colors from './colors';
import constants from './constants';
import { px } from './vendor/ResponsiveStyle';

export { em, px } from './vendor/ResponsiveStyle';

const TEXT_STEP_LINEHEIGHT = px(34); // defined here so we can use more than once below

const styles = StyleSheet.create({
  text: {
    fontSize: px(30),
    color: colors.primaryTextColor,
    marginBottom: px(10),
    textAlign: 'center',
    fontFamily: 'Museo-700',
  },
  text_impact: {
    backgroundColor: colors.invertBackground,
    color: colors.invertText,
  },
  text_italic: {
    fontStyle: 'italic',
  },
  text_size_s: {
    fontSize: px(18),
    marginVertical: px(12),
  },
  text_left: {
    textAlign: 'left',
  },
  text_minor: {
    fontFamily: 'Museo-500',
    fontSize: px(18),
    textAlign: 'left',
  },
  text_size_l: {
    fontSize: px(36),
  },
  text_step: {
    color: '#7F7F7F',
    fontFamily: 'Futura-Bold',
    fontSize: px(13),
    lineHeight: px(TEXT_STEP_LINEHEIGHT),
  },
  textinput: {
    height: px(40),
    paddingLeft: 5,
    backgroundColor: colors.white,
  },
  text_logo: {
    fontSize: px(18),
    backgroundColor: colors.invertBackground,
    color: colors.invertText,
    padding: px(9),
    paddingHorizontal: 14,
    marginTop: px(10),
  },
  tweet_container: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#252525',
  },
  text_tweet: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '300',
  },
  button_narrow: {
    paddingVertical: px(8),
  },
  app: {
    backgroundColor: colors.primaryBackground,
    // marginTop: constants.NAVBAR_HEIGHT, <- doesn't work, pushes nav bar down by navbar height
  },
  sceneContainer: {
    marginTop: px(constants.NAVBAR_HEIGHT),
    marginHorizontal: px(25),
    flex: 1,
  },
  container: {
    flex: 1,
  },
  stepSpaceAbove: {
    // (space between navbar and large text) - (height of "STEP __")
    marginTop: px(constants.SPACING_LARGE) - px(TEXT_STEP_LINEHEIGHT),
  },
  spaceBelow: {
    marginBottom: px(dotHeight),
  },
  main: {
    flex: 1,
    justifyContent: 'space-between',
  },
  spaceBetween: {
    flex: 1,
    justifyContent: 'space-between',
  },
  debug_highlight: {
    backgroundColor: 'yellow',
  },
});

export default styles;

// keep here: screenHeight will update when orientation changes
// const screenHeight = Dimensions.get('window').height;

// styles.js
// export default {
//    margin: 0,
//    padding: 0
// }
// SomeComponent.jsx
//  import style from './styles

// If using ES6, this seems like a candidate for the spread operator :
// const baseStyle = {
//    margin: 0,
//    padding: 0
// }
// const emphasis {
//   ...baseStyle,
//   fontSize: 38
// }
