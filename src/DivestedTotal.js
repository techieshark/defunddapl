// @flow

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import colors from './colors';
import getDivestmentTotal from './divestment';
import Amount from './Amount';

import { px } from './styles';

const localStyles = StyleSheet.create({
  amountText: {
    fontSize: px(33),
    textAlign: 'center',
    paddingVertical: px(13),
    borderWidth: 1,
    borderColor: 'teal',
    backgroundColor: colors.schemes.standingRock.blue,
  },
});

class DivestedTotal extends Component {
  state: { // flow type definition
    dollarsText: string,
  };

  constructor() {
    super();

    this.state = {
      dollarsText: '$79,324,566.85',
      // TODO: this should be stored in global app state and saved, so it doesn't
      // appear to "reset" every time the screen is opened.
    };

    // start with some default amount and update as soon as possible
    getDivestmentTotal((dollarsText) => {
      console.log('Got updated divestment total: ', dollarsText);
      this.setState({ dollarsText });
    });
  }

  render() {
    return (
      <Amount amount={this.state.dollarsText} textStyle={localStyles.amountText} />
    );
  }
}

export default DivestedTotal;
