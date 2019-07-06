// @flow

/* We're using require() to get photos rather than modules,
   and we don't want no complaints about using require() outside
   of the top level */
/* eslint-disable global-require */
const photos = [
  {
    src: require('./images/pic1.png'),
    file: 'pic1.png',
  },
  {
    src: require('./images/pic2.png'),
    file: 'pic2.png',
  },
  {
    src: require('./images/pic3.png'),
    file: 'pic3.png',
  },
  {
    src: require('./images/pic4.png'),
    file: 'pic4.png',
  },
  {
    src: require('./images/pic5.png'),
    file: 'pic5.png',
  },
  {
    src: require('./images/pic6.png'),
    file: 'pic6.png',
  },
];
// TODO: add to assets? https://stackoverflow.com/questions/29290460/use-image-with-a-local-file
/* eslint-disable global-require */

// {
//   src: 'images/pic1',
//   // note: intentionally drop file extension
//   // http://stackoverflow.com/a/36677492/1024811
// },

export default photos;
