// @flow
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  ListView,
  ScrollView,
  TouchableHighlight,
  View,
} from 'react-native';

import Button from './Button';
import TextInput from './TextInput';

import type { Bank } from './banks';

import banks from './banks';
import colors from './colors';
import { px } from './styles';

const localStyles = StyleSheet.create({
  resultButton: {
    justifyContent: 'flex-start',
    marginBottom: 0,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: colors.black,
    paddingVertical: 0,
  },
  result_text: {
    paddingVertical: px(10),
    paddingLeft: px(5),
    fontFamily: 'Museo-700',
    fontSize: px(20),
    letterSpacing: 0,
  },
});


const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

// only show results if there aren't too many of them
const MAX_LIST_LENGTH = 5;

type Props = {
  onClickResult: (string) => any // function (selectedBank)
}

class BankSearch extends Component {
  state: { // flow type definition
    searchedText: string,
    searchResults: Array<Bank>,
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      searchedText: '',
      searchResults: [],
    };
  }

  render() {
    return (
      <View>
        <TextInput
          onChangeText={(searchedText) => {
            const searchResults = banks.filter((bank) => {
              const lcBankName = bank.name.toLowerCase();
              const lcSearchedText = searchedText.toLowerCase();
              return (lcBankName.indexOf(lcSearchedText) > -1);
            });
            if (searchResults.length <= MAX_LIST_LENGTH) {
              this.setState({ searchedText, searchResults });
            } else {
              this.setState({ searchedText, searchResults: [] });
            }
          }}
          placeholder="Enter your bank here"
        />
        {
          <Button
            onPress={() => this.props.onClickResult(this.state.searchedText)}
            title={`${this.state.searchedText ? `“${this.state.searchedText}”` : ''}`}
            buttonStyle={[
              localStyles.resultButton,
              !this.state.searchedText && { opacity: 0 }, /* completely hide disabled button */
            ]}
            textStyle={localStyles.result_text}
            disabled={!this.state.searchedText}
            accessibilityLabel={`Search for ${this.state.searchedText}`}
          />
        }
        <ScrollView>
          <ListView
            dataSource={ds.cloneWithRows(this.state.searchResults)}
            renderRow={bank => (
              <View style={localStyles.resultButton}>
                <TouchableHighlight
                  underlayColor={colors.highlight}
                  onPress={() => this.props.onClickResult(bank.name)}
                >
                  <View>
                    <Text
                      style={localStyles.result_text}
                    >
                      {bank.name}
                    </Text>
                  </View>
                </TouchableHighlight>
              </View>
            )}
            enableEmptySections // needed to avoid warning; see https://github.com/FaridSafi/react-native-gifted-listview/issues/39#issuecomment-217073492
          />
        </ScrollView>
      </View>
    );
  }
}

export default BankSearch;
