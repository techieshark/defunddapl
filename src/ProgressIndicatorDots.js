// @flow

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import stylePropType from 'react-style-proptype';
import { px } from './styles';

/*
  Show progress simply using dots.
  Step 1 is: o · · ·
  Step 2 is: · o · ·
  etc

  Assumes 4 steps
*/

// const HEIGHT = 48;
const HEIGHT = 52;

const localStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingTop: 1, // ensure no overlap, even if bg is transparent
    backgroundColor: 'transparent',
    width: 250,
    alignSelf: 'center',
  },
  dot: {
    fontSize: px(26),
    lineHeight: px(HEIGHT), /* match dot_active*/
    fontFamily: 'Futura-Bold',
    textAlign: 'center',
  },
  dot_active: {
    fontSize: px(36),
    lineHeight: px(HEIGHT),
    color: '#1B7FD8',
    alignSelf: 'center',
  },
});

type Props = {
  style?: stylePropType,
  count: number, /* how many dots to show? */
  current: number, /* active dot, between 1 and count */
};


/* Notes on ProgressIndicatorDots
   - Array.from(Array) because JS can't just do [0..count].
   - Using key={i} index in <View> below maybe not ideal, see
      https://facebook.github.io/react/docs/lists-and-keys.html#keys
   - •·
*/

/* ·•·· */
function ProgressIndicatorDots(props: Props) {
  return (
    <View style={[localStyles.container, props.style]}>
      {Array.from(Array(props.count), (_, i) => (
        <View key={i}>
          <Text
            style={[
              localStyles.dot,
              i === (props.current - 1) && localStyles.dot_active,
            ]}
          >·</Text>
        </View>
      ))}
    </View>
  );
}

ProgressIndicatorDots.defaultProps = {
  style: {},
};

export default ProgressIndicatorDots;
export { HEIGHT as height };

