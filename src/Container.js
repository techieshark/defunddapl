import React, { PropTypes } from 'react';
import { Navigator, StyleSheet, View } from 'react-native';

import stylePropType from 'react-style-proptype';

/*
A simple View with space above for the nav bar, flex layout with space between elements
*/

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    flex: 1,
    justifyContent: 'space-between',
    // not sure why but NavBarHeight is 20px shorter than it should be, so we fix that with the + 20 below
    // marginTop: Navigator.NavigationBar.Styles.General.NavBarHeight + 20,
    paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight + 20,
  },
});

function Container(props) {
  return (
    <View style={[styles.container, props.style]}>
      {props.children}
    </View>
  );
}

Container.propTypes = {
  style: stylePropType, // or stylePropTypes.supportingArrays
};

export default Container;
