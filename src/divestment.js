// @flow
/* global fetch */

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
  fetch(url)
    .then(response => response.json())
    .then((sheet) => {
      // console.log('fetched sheet: ', sheet);
      if (sheet.error) {
        // console.log('Error accessing sheet: ', sheet.error);
        throw new Error(`Could not access Google Sheet: ${sheet.error.message}`);
      }

      const dollarText = sheet.values[row][column];
      console.log(`row ${row}:`, sheet.values[row]);
      callback(dollarText);
    })
    .catch((error) => {
      console.error('Error fetching divestment total: ', error);
    });
}

export default getDivestmentTotal;
