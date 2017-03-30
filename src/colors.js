// @flow
const schemes = {
  standingRock: {
    // https://coolors.co/54c1e7-fdfffc-d1202d-235789-fcca17
    blue: '#54c1e7',
    red: '#d1202d',
    yellow: '#fcca17',
    white: '#fdfffc',
    steelblue: '#235789',
  },
  brutalism: {
    // https://coolors.co/000080-e8615f-dd0000-c1dbe3-f0ff1e
    blue: '#000080',
    mandy: '#e8615f',
    monza: '#dd0000',
    ziggurat: '#c1dbe3',
    broom: '#f0ff1e',
  },
  plain: {
    white: '#fff',
    black: 'black',
  },
};

const colors = {
  // primary: schemes.standingRock.blue,
  primary: schemes.standingRock.steelblue,
  white: schemes.plain.white,
  // white: schemes.standingRock.white,
  black: schemes.plain.black,
  transparent: '#ffffff00',
  // disabled: '#dadee0',
  disabled: 'dimgrey',
  // highlight: '#f1c40f',
  highlight: schemes.standingRock.blue,
  modalBackground: '#c3c9d7', // slategrey is also nice
  // modalBackground: 'slategrey',
  navBar: '#D5D3D5',
  primaryBackground: schemes.plain.white,
  primaryTextColor: schemes.plain.black,
  invertBackground: schemes.plain.black,
  invertText: schemes.plain.white,
};

export default colors;

// see also:
// https://github.com/react-native-community/react-native-elements/
// blob/master/src/config/colors.js

