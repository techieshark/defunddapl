import React, { PropTypes } from 'react';
import { Alert, Linking, Navigator, Text, View, WebView } from 'react-native';

import Button from './Button';
import Container from './Container';
import screens from './screens';
import styles from './styles';

// // <View style={[styles.container, styles.main]}>
//       <View style={{ marginTop: 70 }}>
//         <Text style={styles.text}>step 4</Text>
//       </View>

function Step4Scene(props) {
  return (
    <Container>
      <View>
        <Text style={styles.text}>Post about #DefundDAPL. Find inspiration below.
        </Text>
      </View>
      <WebView
        source={{ uri: 'https://www.instagram.com/explore/tags/defunddapl/' }}
        style={{ marginTop: 20 }}
      />
      <Button
        title="Open Instagram"
        accessibilityLabel="Post on Instagram"
        onPress={() => {
          const url = 'instagram://app';
          Alert.alert(
            'Opens Instagram',
            `Return after you've posted.`,
            [
              {
                text: 'Roger that!',
                onPress: () => {
                  Linking.openURL(url).catch(err => console.error('An error occurred', err));
                },
              },
            ],
          );
        }}
      />
      <Button
        title="Next"
        accessibilityLabel="I have posted on Instagram"
        onPress={() => {
          props.navigator.push({
            title: 'Step 5', // : Organize for #DefundDAPL.
            screen: screens.STEP5,
          });
        }}
      />
    </Container>
  );
}


export default Step4Scene;

Step4Scene.propTypes = {
  navigator: PropTypes.instanceOf(Navigator).isRequired,
};
