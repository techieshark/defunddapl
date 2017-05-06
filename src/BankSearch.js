// @flow
import React, { Component } from 'react';

import {
  ListView,
  ScrollView,
  View,
} from 'react-native';

import Button, { ButtonVariants } from './Button';
import TextInput from './TextInput';

import type { Bank } from './banks';

import banks from './banks';


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
              !this.state.searchedText && { opacity: 0 }, /* completely hide disabled button */
            ]}
            type={ButtonVariants.LIST} // or use btn for ios-search?
            disabled={!this.state.searchedText}
            accessibilityLabel={`Search for ${this.state.searchedText}`}
          />
        }
        <ScrollView>
          <ListView
            dataSource={ds.cloneWithRows(this.state.searchResults)}
            renderRow={bank => (
              <Button
                accessibilityLabel={bank.name}
                title={bank.name}
                type={ButtonVariants.LIST}
                onPress={() => this.props.onClickResult(bank.name)}
              />
            )}
            enableEmptySections // needed to avoid warning; see https://github.com/FaridSafi/react-native-gifted-listview/issues/39#issuecomment-217073492
          />
        </ScrollView>
      </View>
    );
  }
}

export default BankSearch;
