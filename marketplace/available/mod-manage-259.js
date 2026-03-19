// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KtIY8aRTD2XU2clcuYh9+NgKc8ZCn63hNuOx0tthJrFJeQmpCWsIHruq54q6rhsT1cunAOy6LlJXBGURcjNGxzDjU9nrV9Xd7GlNQi5PFjqWOFlUn3AjzgrkfCGo2a2nQIO7Uz7HqMH5WBYurTGhIplmKrNDZfk0bfvSu3NsW47j4a6Rl0XdL2J+NEQEZ9U3s8OYBfJ/aBrWlF+rNL8j6oJBqnJ0VqHXimI+XWbe/yx/supCPoInBxshvzP0nTYDXq53JXY+5+jiPZx3OQClAnU7qIUGusRgIbd2MM3ZLU1+hxyTgVe+Wv0cHXrFoFJtcOOkLGx6ghf0kIPTaZFlcs002tnRaujh5bNtz3aJqaY+/y1i/9klnUysO712mJSwXpNNz329CmbxgrZa4HtAB2oDcOEA+cxjsqEi4ovguaKaFDDkBgOl5WSBbMCAcJuSk7Q8Mc/mgZ6a8prab84wStbPiMcprhasqxBPu29pqDE/Qqut+ZdPAMAOtauUqlMvrmLsNGvcUfZMhZpx5stmalfL4AeIkeFkXhG2qfGwjnSUvfvOX0YudcrGnqbjQrxZi5n9k10RfFwfcXzu3Q0vvWqoHNkr6pLXXrm/sIuvEVI8SLg6tAFZvnAqZIZe25Gxg3MhheXRo36qmGYMpOYmS9cEHnBcaGGy1ZH+zywAU3Up+rKgMhG/i8xBs38CnN1XSIr1ouIF/cg79LJAA24W6Xs3Q3vYkEDziaeenSdJojncTVZY4Kyz940J8L+R2xeBLmY1wfMdHiMteS3JBQ8onyTVFZ+/xT5iEv/lJTTOUoA4XExFOkMZ7I7v/r5P5t9/2aETgqkFkIKmJJsXdURmhFvWWziL5Q03c6RBMQkJqLRtX3S3mumkBNmfEgilN2VUqDHAG74/vCKRK8XSFUKOmO5tdVkOKECr4ogMJ+KNaHkRlNOab8O8mlcoJ4zz08c8ZIrUrBgIe4k5Lg5bb687X9XeryQZv8hjeXSSPUtRCYzhN/Rx0NcATKpR/c7Mcp4h4Y4sWhb9JNCXIQRnxdo8dd3+Pjty4v8Eyy3Kogns2NJ6coF/hczi7RLv1iZzwnvMtvVN2Apgq3Tx4O3uEXopeaRXJ+f7DZpXWv7EOhnvc3jxfzeSiB2dehV2bQW0/Tw/3wd9IeiVufXGRrPfiWwLPwi/hNsbLYF5gjh7oiddUUQ13dgOutQdqwH+FDJHNxITyn45E1zC24N20LFFxKmzxIvhY5w8+JeC91BjKSnUuDfsMuoMlh4ylmQJSxhwQQTGD2cLhAwPHKPNHQp/vr22C+qOzeW+cY6ctofhI18R88/Gz99pQ0pdXqswXzEgmuAaCC9CVonfpMrSvYlOSXfQgfo2R/ytG51tE1cLGOeddVOYKc2iiycfVQ==';
  const _INTEGRITY_HASH = '10c7de1ad6350eab2530c94a11b5623dfa581b1475aeba097d9a325b9b1770f4';
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
