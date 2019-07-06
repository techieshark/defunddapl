// @flow
import React from 'react';
import { StyleSheet, View } from 'react-native';

import stylePropType from 'react-style-proptype';

import colors from './colors';

/*
  A simple View with flex layout with space between elements
*/

const localStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryBackground,
    flex: 1,
    justifyContent: 'space-between',
  },
});

type Props = {
  style?: stylePropType | Array<stylePropType>,
  children?: any,
}


function Container(props: Props) {
  const { children, style } = props;

  return (
    <View style={[localStyles.container, style]}>
      {children}
    </View>
  );
}

Container.defaultProps = {
  children: undefined,
  style: {},
};

export default Container;
