// @flow
import React from 'react';
import { Navigator } from 'react-native';

import Container from './Container';
import GuiltyBank from './GuiltyBank';
import InnocentBank from './InnocentBank';
import { findBank } from './banks'; // banks

type Props = {
  bankName: string,
  navigator: Navigator,
};

function BankReportScene(props: Props) {
  const { bankName, navigator } = props;
  const maybeBank = findBank(bankName); // bank, or undefined if not found

  const bankView = maybeBank ? (
    <GuiltyBank
      bank={maybeBank}
      navigator={navigator}
    />
  ) : (
    <InnocentBank bankName={bankName} />
  );

  return (
    <Container>
      { bankView }
    </Container>
  );
}

export default BankReportScene;


/** Produces a view like:

Yikes!

Wells Fargo  is
funding the Dakota Access Pipeline
with
$470,000,000
belonging to you and other customers.

[defund them]

--- or a view like ---

As far as we know, BECU
is not funding
the Dakota Access Pipeline.

Banks that are:
Wells Fargo
US Bank
Morgan Stanley
...
...

Share the good news:

"I just checked and my bank *is not*
funding the Dakota Access Pipeline.
#winning

Is yours?
#DeFundDAPL #DeFundDaplApp"

*/
