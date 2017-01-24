import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    marginTop: 10,
    // marginBottom: 10,
    textAlign: 'center',
  },
  text_impact: {
    backgroundColor: 'white',
    color: 'black',
    // alignSelf: 'center',
    // paddingHorizontal: 10,
  },
  text_italic: {
    fontStyle: 'italic',
  },
  text_size_s: {
    fontSize: 18,
    marginVertical: 12,
  },
  text_size_l: {
    fontSize: 36,
  },
  textinput: {
    height: 40,
    paddingLeft: 5,
    backgroundColor: 'white',
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
  app: {
    backgroundColor: '#191919', // lead black
  },
  container: {
    // marginTop: Navigator.NavigationBar.Styles.General.NavBarHeight,
    marginTop: 64, // above isn't working: evaluates to 44, not 64
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  spaceAround: {
    flex: 1,
    justifyContent: 'space-around',
  },
});

export default styles;

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
