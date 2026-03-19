// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3V4Sd/4a4TkDBjNygoxWSKSXllGmqfEG0sDQ5dyj4Zd7jnduDhwnujpCJN03XDSoTXetzDDscPQNAGti4Oq1IgVM6tRHdzLAmfW2R9h5f/vOj37dKy4kvk1vQXhtqnbSUmwC8V/uHm2XKUPVrvcV0uCs8aDrFh8uhNYjrNj0mpfH3cQFTXnvO+oBHA3akTcbJsb07QhVHurL0dckbWmUUJ/2zax6SUkljuKekUNzQEn6Zg2Dg2TlkDAxiFlr7rHA7TliApnVCWwkMeXiHv5oXJBDSz0eYuEtq2WAWFraJnBv+e+jcn3pFaaxf+ghv8PkLNu7tIk15ZyNK9iT/pKcDdawyF7Wwm4AOT5nQw2H2mwpOkqpslkjkOiHHEfeE3c23/36Rjjir0uRlR+u9YQiH80wJZIYfEq8B+eQZHeZRXTj8iZ0es3UGsXM0a7e2D/bUeDd8ysqtLH1K3hLL1WzVkPjN2ADG+NdTI++JArqztO+FOIr83DcTOPue7EA178LIaIAIapBwm6/qGXX+8I0a7eThju/AYQNlq12ztkDC4Hh1RXMgCGxjGhNiwkq6tA9wGTojv3IPpm9QLEtt9l4nHnHA5suxsLypNqTzY4v+RZji0IOg4LCC+xSEJW0Qulef4Acl1IU1o45wLSz04nwImOsTM364urSUEGaM4k5sw4TmcGUEchA6F1PrH8uiPPjLy2jaA5s3S6faYD8DNX2bxg2dweqeSFbRDrz46DuA/bTvzQxpCPhGpzDzEGJV5bQlb/+tY2LhYBbdpmU2uNTxjSpxFNotsxeN9gn64QgIGI+PB/0S7LjkcIzOf9E6ky2AxYtTeNmcKVcvpVWev01KduY2aSJ8c8GM6/N2rvV2R2YZyq1hSFvuEspGoX1Uf86mdwOeEpp5WNxV2gGkxfTeiHh1azgk8sx0XbXnoEvFrgfpCbbbD5ioPt1WyY1GccL+CHsyQRAh29TilWWVXsAQa60iNfK2fPtBe2s2+7vRncuGNhQ8456H+nL0r+4w56Q4mZ7Uw==';
  const _INTEGRITY_HASH = '9148a7f3a8df56233c5b9e0dfd6feb6dc45a82b24e9369fee4a6f84e1236c6d7';
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
