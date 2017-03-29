// @flow

/* exports a dataset */
/* sources:
   https://www.foodandwaterwatch.org/news/who%27s-banking-dakota-access-pipeline
   http://www.commondreams.org/views/2016/10/28/how-contact-17-banks-funding-dakota-access-pipeline
*/

type Phone = {
  name: string,
  number: string,
};

export type Bank = {
  name: string,
  amount: string,
  emailAddressee: string,
  emailTo: ?string[],
  emailCC: ?string[],
  phoneContacts?: Phone[],
};

const banks: Array<Bank> = [
  // {
  //   name: 'Test Phone Bank',
  //   funding: true,
  //   amount: '$100,000,000',
  //   emailAddressee: 'CEO and President Brian J. Porter',
  //   emailTo: null,
  //   emailCC: null,
  //   phoneContacts: [
  //     {
  //       name: "Some Silly CEO",
  //       number: '+41-43-266-14-14',
  //     },
  //   ],
  // },
  // {
  //   name: 'Test Phoneless Bank',
  //   funding: true,
  //   amount: '$100,000,000',
  //   emailAddressee: 'CEO and President Brian J. Porter',
  //   emailTo: null,
  //   emailCC: null,
  //   phoneContacts: [],
  // },
  {
    name: 'Bank of Nova Scotia (Scotiabank)',
    funding: true,
    amount: '$100,000,000',
    emailAddressee: 'CEO and President Brian J. Porter',
    emailTo: ['CEO and President Brian J. Porter <email@scotiabank.com>'],
    emailCC: ['BoardCommunications@wellsfargo.com'],
  },
  {
    name: 'Citizens Bank',
    funding: true,
    amount: '$72,500,000',
    emailAddressee: 'Chairman and CEO Bruce Van Saun, Mr. Peter Lucht, and Ms. DiGeronimo',
    emailTo: ['Peter Lucht <Peter.Lucht@citizensbank.com>', 'Lauren DiGeronimo <Lauren.Digeronimo@citizensbank.com>'],
    emailCC: null,
  },
  {
    name: 'Comerica Bank',
    funding: true,
    amount: '$75,500,000',
    emailAddressee: 'Chairman and CEO Ralph W. Babb Jr.',
    emailTo: ['Wendy Bridges <wwbridges@comerica.com>', 'Wayne Mielke <wjmielke@comerica.com>'],
    emailCC: null,
  },
  {
    name: 'US Bank',
    funding: true,
    amount: '$275,000,000',
    emailAddressee: 'Chairman and CEO Richard K. Davis',
    emailTo: ['CEO Richard K. Davis <richard.davis@usbank.com>'],
    emailCC: [
      'Senior VP of Corporate Communications Dana Ripley <dana.ripley@usbank.com>',
      'Brand & Corporate Social Responsibility Susan Beatty <susan.beatty@usbank.com>',
    ],
  },
  {
    name: 'PNC Bank',
    funding: true,
    amount: '$270,000,000',
    emailAddressee: 'Chairman, President, and CEO William S. Demchak c/o Mr Solomon & Mr Gill',
    emailTo: [
      'Media Relations Fred Solomon <corporate.communications@pnc.com>',
      'Investor Relations Bryan K. Gill <investor.relations@pnc.com>',
    ],
    emailCC: null,
  },
  {
    name: 'Barclays',
    funding: true,
    amount: '$370,558,456',
    emailAddressee: 'Chairman John McFarlane & CEO Jes Staley',
    emailTo: ['Chairman John McFarlane <john.mcfarlane@barclays.com>'],
    emailCC: ['CorporateCommunicationsAmericas@barclays.com'],
  },
  {
    name: 'JP Morgan Chase',
    funding: true,
    amount: '$312,500,000',
    emailAddressee: 'Chairman and CEO Jamie Dimon ',
    emailTo: ['Chairman and CEO Jamie Dimon <jamie.dimon@jpmchase.com>'],
    emailCC: [
      'Andrew Gray <andrew.s.gray@jpmchase.com>',
      'Jennifer Lavoie <jennifer.h.lavoie@jpmchase.com>',
      'Brian Marchiony <brian.j.marchiony@jpmorgan.com>',
    ],
  },
  {
    name: 'Bank of America',
    funding: true,
    amount: '$350,558,456',
    emailAddressee: 'President, CEO, and Chairman Brian Moynihan',
    emailTo: ['President, CEO, and Chairman Brian Moynihan <brian.t.moynihan@bankofamerica.com>'],
    emailCC: null,
  },
  {
    name: 'Deutsche Bank',
    funding: true,
    amount: '$275,558,456',
    emailAddressee: 'CEO John Cryan c/o Renee Calabro',
    emailTo: ['Renee Calabro <renee.calabro@db.com>'],
    emailCC: null,
  },
  {
    name: 'Credit Suisse',
    funding: true,
    amount: '$340,558,456',
    emailAddressee: "CEO Tidjane Thiam & Board Chairman Urs Rohner", // TODO
    emailTo: null,
    emailCC: null,
    phoneContacts: [
      {
        name: "Suisse Banking Ombudsman",
        number: '+41-43-266-14-14',
      },
      {
        name: "Swiss Corporate Office",
        number: '+41-44-333-11-11',
      },
      {
        name: "U.S. Office",
        number: '+1-415-249-2100',
      },
    ],
  },
  {
    name: 'Royal Bank of Canada',
    funding: true,
    amount: '$340,558,456',
    emailAddressee: 'CEO David I. McKay c/o Mr Paul French',
    emailTo: ['CEO Communications Paul French <paul.french@rbc.com>'],
    emailCC: ['Corporate Media Relations Catherine Hudon <catherine.hudon@rbc.com>'],
  },
  {
    name: 'UBS',
    funding: true,
    amount: '$336,437,500',
    emailAddressee: 'Mr. Mark Hengel & Ms. Marsha Askins',
    emailTo: [
      'Head Group External Communications Mark Hengel <mark.hengel@ubs.com>',
      'Chief Communication Officer-Americas Marsha Askins <marsha.askins@ubs.com>',
    ],
    emailCC: null,
  },
  {
    name: 'Goldman Sachs',
    funding: true,
    amount: '$243,937,500',
    emailAddressee: 'Chairman and CEO Lloyd C. Blankfein',
    emailTo: ['Chairman and CEO Lloyd C. Blankfein <lloyd.blankfein@gs.com>'],
    emailCC: null,
  },
  {
    name: 'Morgan Stanley',
    funding: true,
    amount: '$225,187,500',
    emailAddressee: 'CEO James P. Gorman',
    emailTo: ['CEO James P. Gorman <jgorman@morganstanley.com>'],
    emailCC: null,
  },
  {
    name: 'Community Trust',
    funding: true,
    amount: '$30,000,000',
    emailAddressee: 'Senior VP Investments, Christopher Meng',
    emailTo: ['Senior VP Investments, Christopher Meng <mengro@ctbi.com>'],
    emailCC: null,
  },
  {
    name: 'HSBC Bank',
    funding: true,
    amount: '$189,000,000',
    emailAddressee: 'Group Chief Executive Stuart Gulliver',
    emailTo: ['Group Chief Executive Stuart Gulliver <managingdirectoruk@hsbc.com>'],
    emailCC: null,
  },
  {
    name: 'Wells Fargo',
    funding: true,
    amount: '$467,000,000',
    emailAddressee: 'CEO Sloan',
    emailTo: ['CEO Timothy J. Sloan <timothy.j.sloan@wellsfargo.com>'],
    emailCC: ['BoardCommunications@wellsfargo.com'],
  },
  {
    name: 'BNP Paribas',
    funding: true,
    amount: '$444,558,456',
    emailAddressee: 'CEO Jean-Laurent Bonnafe',
    emailTo: ['CEO Jean-Laurent Bonnafe <jean-laurent.bonnafe@bnpparibas.com>'],
    emailCC: null,
  },
  {
    name: 'DNB Capital/ASA',
    funding: true,
    amount: '$460,558,456',
    emailAddressee: "CEO Rune Bjerke", // TODO
    emailTo: null,
    emailCC: null,
    phoneContacts: [
      {
        name: "Chairwoman of the Board Anne Carine Tanum",
        number: '+47-915-04800',
      },
      {
        name: "Executive Vice President Communications Even Westerveld",
        number: '+47-400-16-744',
      },
    ],
  },
  {
    name: 'SunTrust',
    funding: true,
    amount: '$430,015,334',
    emailAddressee: 'Chief Communications Officer Sue Mallino & CEO William H. Rodgers Jr.',
    emailTo: ['Chief Communications Officer Sue Mallino <sue.mallino@suntrust.com>'],
    emailCC: null,
  },
  {
    name: 'Royal Bank of Scotland',
    funding: true,
    amount: '$250,558,456',
    emailAddressee: 'CEO Ross McEwan',
    emailTo: ['CEO Ross McEwan <ross.mcewan@rbs.co.uk>'],
    emailCC: null,
  },
  {
    name: 'BBVA Compass',
    funding: true,
    amount: '$460,558,456',
    emailAddressee: 'Chairman and CEO Manolo Sanchez, Ms. Anderson, and Mr. Ortiz',
    emailTo: [
      'Christina Anderson, Director of External Communications <christina.anderson@bbva.com>',
      'Al Ortiz, Communications <al.ortiz@bbva.com>',
    ],
    emailCC: null,
  },
  {
    name: 'Sumitomo Mitsui Bank',
    funding: true,
    amount: '$358,558,456',
    emailAddressee: 'President and CEO Takeshi Kunibe',
    emailTo: null,
    emailCC: null,
    phoneContacts: [
      {
        name: 'Tokyo, Japan Office',
        number: '+81-3-3282-8111',
      },
      {
        name: 'New York, US Office',
        number: '+1-212-224-4000',
      },
    ],
  },
  {
    name: 'Bank of Tokyo Mitsubishi UFJ',
    funding: true,
    amount: '$548,058,456',
    emailAddressee: 'Chairman Nobuyuki Hirano & CEO and President Takashi Oyamada',
    emailTo: null,
    emailCC: null,
    phoneContacts: [
      {
        name: 'Tokyo, Japan Office',
        number: '+81-3-3240-8111',
      },
      {
        name: 'New York, U.S. Office',
        number: '+1-212-782-4000',
      },
    ],
  },
  {
    name: 'Citibank',
    funding: true,
    amount: '$521,808,456',
    emailAddressee: 'CEO Michael Corbat',
    emailTo: ['CEO Michael Corbat <michael.corbat@citi.com>'],
    emailCC: null,
  },
  {
    name: 'Mizuho Bank',
    funding: true,
    amount: '$589,558,456',
    emailAddressee: 'President and CEO Nobuhide Hayashi',
    emailTo: null,
    emailCC: null,
    phoneContacts: [
      {
        name: 'Tokyo, Japan Office',
        number: '+81-3-3214-1111',
      },
      {
        name: 'New York, U.S. Office',
        number: '+1-212-282-3000',
      },
    ],
  },
  {
    name: 'TD Securities',
    funding: true,
    amount: '$365,000,000',
    emailAddressee: 'Chairman, CEO, and President Bob Dorrance',
    emailTo: null,
    emailCC: null,
    phoneContacts: [
      {
        name: 'Toronto, Canada Corporate Office, Investment Banking',
        number: '+1-416-307-8500',
      },
      {
        name: 'New York, U.S. Office',
        number: '+1-212-827-7000',
      },
    ],
  },
  {
    name: 'Credit Agricole',
    funding: true,
    amount: '$344,558,456',
    emailAddressee: 'CEO Jean-Paul Chifflet',
    emailTo: ['CEO Jean-Paul Chifflet <infoamericas@ca-cib.com>'],
    emailCC: null,
  },
  {
    name: 'ABN Amro Capital',
    funding: true,
    amount: '$45,000,000',
    emailAddressee: 'Chairman of the Board Gerrit Zalm',
    emailTo: null,
    emailCC: null,
    phoneContacts: [
      {
        name: 'Amsterdam Corporate Office',
        number: '+31-10-241-17-2',
      },
      {
        name: 'New York, U.S. Office',
        number: '+1-917-284-6800',
      },
    ],
  },
  {
    name: 'Intesa Sanpaolo',
    funding: true,
    amount: '$339,000,000',
    emailAddressee: 'CEO Carlo Messina c/o Corporate Social Responsibility Unit',
    emailTo: [
      'Corporate Social Responsibility Unit <CSR@intesasanpaolo.com>',
      'CSRU <sostenibilita.ambientale@intesasanpaolo.com>',
    ],
    emailCC: null,
  },
  {
    name: 'ING Bank',
    funding: true,
    amount: '$248,353,779',
    emailAddressee: 'Ms Carolien van der Giessen & CEO Hamer',
    // CEO and Executive Board Chairman Ralph A.J.G Hamer
    emailTo: [
      'Sustainability, Corporate Governance Carolien van der Giessen <carolien.van.der.giessen@ing.com>',
      'Head of Media Relations Raymond Vermuelen <raymond.vermeulen@ing.com>',
    ],
    emailCC: null,
  },
  {
    name: 'Natixis',
    funding: true,
    amount: '$180,000,000',
    emailAddressee: 'CEO Pierre Servant',
    emailTo: null,
    emailCC: null,
    phoneContacts: [
      {
        name: 'France Corporate Office',
        number: '+33-1-78-40-90-00',
      },
      {
        name: 'Boston, U.S. Office',
        number: '+1-617-449-2100',
      },
    ],
  },
  {
    name: 'BayernLB',
    funding: true,
    amount: '$120,000,000',
    emailAddressee: 'Mr. Priwitzer',
    // CEO Johannes-Jorg Riegler
    emailTo: ['Head of Communications Matthias Priwitzer <Matthias.Priwitzer@bayernlb.de>'],
    emailCC: null,
  },
  {
    name: 'ICBC London',
    funding: true,
    amount: '$120,000,000',
    emailAddressee: "CEO and Managing Director Jin Chen",
    emailTo: null,
    emailCC: null,
    phoneContacts: [
      {
        name: 'London Office',
        number: '+44-203-145-5000',
      },
      {
        name: 'U.S. Office',
        number: '+1-212-407-5000',
      },
    ],
  },
  {
    name: 'Societe Generale',
    funding: true,
    amount: '$120,000,000',
    emailAddressee: 'Chiarman of the Board Lorenzo Bini Smaghi',
    emailTo: ['Chiarman of the Board Lorenzo Bini Smaghi <lorenzo.binismaghi@snam.it>'],
    emailCC: ['Corporate Office <2.0@societegenerale>'],
  },
];

/* returns a bank if we have a name match,
   otherwise undefined.
*/
export function findBank(name: string): ?Bank {
  const maybeBank = banks.find(bank => bank.name === name);
  return maybeBank;
}

export default banks;
