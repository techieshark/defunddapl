import React from 'react';
import { Navigator, Text, View } from 'react-native';

import Container from './Container';
// import screens from './screens';
import styles from './styles';

function ThanksScene() {
  return (
    <Container style={styles.spaceAround}>
      <View>
        <Text style={styles.text}>Thanks!</Text>
      </View>
      <View>
        <Text style={styles.text}>You're the best.</Text>
      </View>
    </Container>
  );
}


export default ThanksScene;

// ThanksScene.propTypes = {
//   navigator: PropTypes.instanceOf(Navigator).isRequired,
// };
