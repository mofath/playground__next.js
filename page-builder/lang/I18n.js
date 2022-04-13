let texts = {};

function setLocale(locale) {
  texts = require('./' + locale + '.js').default;
}

function __(key) {
  return _getObjValByStr(texts, key);
}

function _getObjValByStr(o, s) {
  s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  s = s.replace(/^\./, ''); // strip a leading dot
  var a = s.split('.');
  for (var i = 0, n = a.length; i < n; ++i) {
    var k = a[i];
    if (k in o) {
      o = o[k];
    } else {
      return;
    }
  }
  return o;
}

export { __, setLocale };
