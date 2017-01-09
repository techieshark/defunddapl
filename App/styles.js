import { Navigator, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    // marginTop: 20,
    marginVertical: 20,
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
  tweet_container: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#252525',
  },
  text_tweet: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '300',
  },
  container: {
    backgroundColor: '#191919', // lead black
    // padding: 30,
    // padding: 20,
    paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight,
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: 'space-between',
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
