import React, { Component, PropTypes } from 'react';

import {
  // Navigator,
  // Alert,
  // Button,
  StyleSheet,
  Text,
  TextInput,
  ListView,
  ScrollView,
  TouchableHighlight,
  View,
} from 'react-native';

import Button from './Button';

import banks from './banks';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  searchRow: {
  },
  textinput: {
    height: 40,
    paddingLeft: 5,
    backgroundColor: 'white',
  },
  result: {
    backgroundColor: 'blue',
    marginBottom: 5,
  },
  result_text: {
    paddingVertical: 10,
    paddingLeft: 5,
    color: 'white',
  },
  button: {
    marginVertical: 5,
  },
});


const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

// only show results if there aren't too many of them
const MAX_LIST_LENGTH = 5;

class BankSearch extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchRow}>
          <TextInput
            style={styles.textinput}
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
            placeholder="Type your bank here"
          />
        </View>
        <Button
          style={styles.button}
          onPress={() => this.props.onClickResult(this.state.searchedText)}
          title={` ${this.state.searchedText ? `Search for "${this.state.searchedText}"` : ''}`}
          // title="search"
          disabled={!this.state.searchedText}
          accessibilityLabel={`Search for ${this.state.searchedText}`}
        />
        <ScrollView>
          <ListView
            dataSource={ds.cloneWithRows(this.state.searchResults)}
            renderRow={bank => (
              <View style={styles.result}>
                <TouchableHighlight
                  underlayColor="#f1c40f"
                  onPress={() => this.props.onClickResult(bank.name)}
                >
                  <View>
                    <Text
                      style={styles.result_text}
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


BankSearch.propTypes = {
  // navigator: PropTypes.instanceOf(Navigator).isRequired,
  onClickResult: PropTypes.func.isRequired, // function (selectedBank)
};

export default BankSearch;
