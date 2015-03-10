var test = require('tape');
var fontFace = require('./index');

test('it requires at least one src', function(t) {
  t.plan(1);

  t.throws(
    function() {
      fontFace('Super Font', {});
    },
    'At least one font source (SRC) must be present!'
  );
});

test('it does the right thing for a simple font', function(t) {
  t.plan(1);

  t.equal(
    fontFace('Super Font', {
      src: ['url(super_font.woff)']
    }),
    '@font-face {\nfont-family: Super Font;\nsrc: local("☺︎"), url(super_font.woff);\n}'
  );
});

test('it can handle multiple sources', function(t) {
  t.plan(1);

  t.equal(
    fontFace('Super Font', {
      src: ['url(super_font.woff)', 'url(super_font.woff2)']
    }),
    '@font-face {\nfont-family: Super Font;\nsrc: local("☺︎"), url(super_font.woff), url(super_font.woff2);\n}'
  );
});

test('it correctly handles font-weight and font-style', function(t) {
  t.plan(1);

  t.equal(
    fontFace('Super Font', {
      src: ['url(super_font.woff)'],
      'font-weight': 'normal',
      'font-style': 'normal'
    }),
    '@font-face {\nfont-family: Super Font;\nsrc: local("☺︎"), url(super_font.woff);\nfont-weight: normal;\nfont-style: normal;\n}'
  );
});
