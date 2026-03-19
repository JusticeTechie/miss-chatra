// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/H7tV+iqz68P007dRQO4GTZBahHH4YVUXPIxxLN3CRqswEiuQspMVepLe6pE5vbJ9DM6Whm/rd8o+RkSyxTkxuBkv33oUT3tdkT4GMRDI8hSa8xq/WvkgwddUvGMp5t0BUtSlrRjqwiLb7VWEnKpXmDJTNO5v8FF6bswxNPL0AdK7jjldUm3CYw/qZ+9G6OkulwtSGnJW+A8rubOggLt0fjuL/FFHqJTozdha+Ek/8v9biBrk9uLQfWMQlL4uOAf+XRbZmel1w/5n/txDbGXKC42qogkepENaA9aBFKkhJWRybGe8dyNv4q9wVwpT+zwk7eP6r4jShuz2pkQAK4IMyJZTxjWNO+666MO+5w4j+6BvEykDprNYx1LnbXX1IIjC3qyewrvavU/nfYXAKmeMOGvkYU/i+nPhde/yb91w2got5Rr6VJaf7CzJWggJ72kRI5oKAGB9XDZZb4mODX5iISDUiOYXPYZTInsK5REg1ngZXwyauMJjDU9+Q6c5Ym+4A53FrAiBWumJjTOh+cnUHtHtisV5xrTCc1UrugBaCedF0eU3gv//ARCLG7Yx8L/Xq/nBbfKk2fT7llR/uhn1xjf+p3q8g2LSXjlZKMdygSd6Vly9I5UF2ScJvrLvZ2W5Z0qSJ8ynzLBAg10FLCnUhV7GfwAxw9P9nzqc0Jf3Q0tRPN/abAB037HEBfn0TOLNArPZMdDfuX89QYshz4Eb7QiGKcAkfh0CABoVW/Y6cUyE9CPRZjEf6LN5AMcrmlv3nV67BjyyYOix4kJ6CC18+BbLrR52wiQWj7bXysjz3HTD3/6ZO8ZMQY+ufkf38v6eh1FsRSh0KDy8+zbdPm2+bfRNLBC4AR0k1rpJZPNMhxcDKD5kyqTWtujDzc3vJ32Yu2a9vjyZSHxXisPTEKgBM65R85zRQzxg3T/3/8ipaJsbkreTB1O9r/vsgIOYqZBpFrxIxXgOGTRPmOPZJoH9EcB7Q5YNZcFfajSa57zX0fO42loG2n98qiZTLINGi6r2Nz+SFAlFwXROzP8fDw9tLxIQv1WLYoWs6cDJ1tfJgcYJVKQRHf5dTISzEyYXIpGqMprOJhr4lOCpVz7ViI4FOj/4UmuAXpJAj2VN2C19d8/dgMaVFXwu42geWUiqt2yq//anQk4PC+Ivl+HCBZINzWPZxXCcBVuigOS0hqb5JGmFBZWDCIKimyAY85Xopvxw1c5+4cRL5K5d116Jg4qUfAQ93IPsqrD5nt1PMr4luxv86hd8sdO4fO/a6oN8koKD14wF2WTt13mzkr3vFOFvO2sWHdPJLRGjwoPLI9f/GISFpYBuc8JJI3V7QPeTyK5lfIU+6GtO7J966iCfpJlXrMBnsTGS8kI17GBBcwJuFs8+H0ZaAmiJ1fQwylr';
  const _INTEGRITY_HASH = '69fcd22e7d629ce849a56e899a2b7e70c9fc1110e44ff34c1bb7cb0448ecd8c7';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();
