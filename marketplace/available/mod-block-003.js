// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GkFWo/e+tTotZb485eJLi8unmCVUkeyFsEqQIR9SRZlcGxBY/Cqs5lBPy5mOin9RyytyVQD3COmYy5owAnfJHA56pS028fptRwHY6qIwUmneBZuiUYH1F1neKqfKXjQ2eu5W1sj0DekweoBdTpcggQOHJm3yFvyOiRLYTWLKtgJYocBliGKMqueAKFvrOIBraPrt9C0rZGWpo7sXDz8J0N+eOeXcQ8sU4ZrKrXSJ71q7689oJS/MwPxg9CEFok2f9trF7iL2Ihf0IUwqRn8ZVRWwponEEkvWWDOweVYKaMFr3IcIka6pBeHCs13mU7JQv5URZQzE3maSsxbcoP2cArNZP959DzjNN6RRVw/31APjNY9CGaYiQfQrFwCOV1YFUvf40HkUPPkMm+7oLvsmZpQ2yXrh6dQJCJ6dvn5djK8zX0ibM6OASRXAz2Pjt7RcH2tDLXufFhdjtcQZtKksE76eXWYiAYBKOM/sJqCguCJ44rBfzqpUOWyf9MqWPUMmQwB9ji1ztO7AJcIENdqWxQTCSaR6zHU/yI0f1bSkW3wvC+Y1YFW+l48bAgzriAK0lOI599RAOoPBDElGhupnZPGNRrLww2PywVUXcA1kf6HXOdUWzUPG3XtQQeBKPnBnKsBZFfq+B5twJLOvHruFH0TRfzLovE9Ew1+ZK40RZFw0G/G3yOlnz9Ptjd+F3Sl3VgDvSoeDLnTgL30F1K/l+JY8VgadnlQ4//YEwNeeAAcLr14Ze18SEPUFJPUTlmVrbsA0c8vbt1swrnnztY87R789JR+Q++SYsIKDeqFLmBhlL5ARuXUxZJEPq1IXEOKpr9Q7O5xS0XBP4klkHY89f4AyBQ3JyyrgTaRrK07DAostLHwaQA99WpkHUUfTAZe1s4aeM3I2kYvwx2fXOfvK737fFzdIoks8B6sbWBTkRBhg3/9hkV1uZlMLDRPl6dtdWof0um4R27JUJ+J1ueGCuOX2mikBKFwVcj2SfJL4Eqaf2yJblG2IADo3aUrBPo/VHOj2lN5E6VPEHvL++9gS9MnYc8ZYtrFRkyvfMM0JoUSN9ShMc1JpIrmAKcf9jGwnDqhmv5S5B6TzKZNObWXi9u5JdmVkNh2MAEfc3X9Ag8OVAjltEd6Y2hDdTBAskrJ2QCiAREwLYfap78W1Xa+qvIh7U8MWfOhFSPx4JI0S+Xq0qSXIGqtDN/bveJYShY/AZT2ezbdHiKvLN+VB4NqjUYORKB5krkEUUWWWIar7JaztvuCHrlEwcHAajd335cMIi56XGWclQ0OwFtRs0HpkK0oFXO4/9xfjXhHoJgB5aftrIdSS0e6wZr0Vh0AYpc1D/eFTXruATZ2snpvQHz6brQKnh0A=';
  const _INTEGRITY_HASH = '9150497e1dfd0e9775fa185ea040b49171b04719cef887788fb58ede59dfad8a';
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
