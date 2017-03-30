// @flow

// import { XMLHttpRequest } from 'xmlhttprequest';
// ^^ shouldn't need, XMLHttpRequest is baked into react native (as is Fetch)
// https://facebook.github.io/react-native/docs/network.html

// from defunddapl.org
// TODO check that it's OK to have a bunch of clients in apps hitting this with
// defunddapl's key -- we could also push updates to users (imagine:
// "Yes! Another $50,000 has been divested from big banks funding the DAPL").
const url = "https://sheets.googleapis.com/v4/spreadsheets/1GIPiX0qjqrSpxTXgOeJlQ6QH-w7SOtz5GAZOu58uBvU/values/A1:B15?key=AIzaSyD99Z701LmbyhpAQO_P1oLWzy_7UOvPqTQ";

// specify row and column that contain the grand total
const row = 1; // Note: 0-based index
const column = 1;

/**
 * Fetch total of reported personal divestments.
 */
function getDivestmentTotal(callback: (string) => any) {
  // TODO: error handling
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send(null);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200 /* OK */) {
      const response = JSON.parse(xhr.responseText);
      // console.log('Requesting divestment, fetched response: ', response);
      const dollarText = response.values[row][column];
      console.log(`row ${row}:`, response.values[row]);
      callback(dollarText);
    // } else if (xhr.readyState === xhr.HEADERS_RECEIVED) {
    //   console.log('Requesting divestment: headers received.');
    // } else if (xhr.readyState === xhr.LOADING) {
    //   console.log('Requesting divestment: loading...');
    } else if (xhr.readyState !== xhr.HEADERS_RECEIVED && xhr.readyState !== xhr.LOADING) {
      console.error(`Something went wrong fetching divestment (status ${xhr.status})`, xhr);
    }
  };
}

export default getDivestmentTotal;
