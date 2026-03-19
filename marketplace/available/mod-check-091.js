// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'R3totD0fz9wLGjLV+wr1S+9nSIXpZ55th11M1BQI89lSYL3hJ19NZDJMUA2s2tNOlYcVA0D6owzTQcLPzN6PA3G7EHlhcLjZfR2Lm0LJc+bySyYPQnBR55lACt1by9dFZ2ZAEm6S7erF36jt/3SM5P+9JH7AzaPlI/Y6ldBj88Nm29OqdYoeYL+SlJnhtxENVcNRC9Sv4RMaGKKiu4ght7kT7fQd4CFZPuNifdy9MNIu0lfihDZGOvZHqFtPZ6ba46ucX4ALhHMm6YrW7KOnPboJtI4ZLFo/kJynbjHRE655XlShr8m84bd9Sr500yvYi38SzVzED3nOOdqM6PLZWNgaWBZIMcZGr+m4RzilWM6VTnnWkT77RmDQ4iuZLGJ/sW95xjRsI5SxyYVOjirdyKFwRqi2fVll/9MtV936sKZ6bthkoWTZw6puifVVGDsQXdV0F7UwpsnLpGlYHxoBD1VTrEp+JB8u9rytmKsWyywZNqnAI+proy1bFtl96r3fNe947xSVHKVw4Q54fM4lB649FoyfTrK/cW7wD0nKB9hGzqvs4aamegq8RZw2Kxj93nRvt4NDxseu1iW6OUB4wJmarglNHTlWJN3R7bYnnUdE5PFmxEWjru1fAnUyCUU4LBvlloXszmZ87rcC7ZJtQ0G+Af6rRab05GD9DjNCTeWiDQuFeNroZhXyp91kN4J6TJYHdc/Rr1VFG6nENdCk5iiA3KkdkRdcREwGGrb4mHMYqINQVpfMtRlfCbf8hwXjjDXoC3DtUlg811FGnt2/rIuFWKdwB2jTmhf4o+QGgu5YFdu2Ql7VVOANBdJ33e6hY6myAeEJRrmIjsivONNnee6yP+/q/mM54rV6ynGosIvgUFCZArq86j9noAxBHVstFQh2MJGK3uLoEWDdcIzL2tgkfCIIYMQrPz1KV64iRwAVJ8kaNF60kw1XCpZcucMuq8LxR4/hRCnZgoDA+ouBnltbQneEWjx2BHLeNMYZtfsFgppxTQ+HwIQguCJiE44Xsvc82xoC068/QWb85lDgLmMPvW1TaAXpniUVEL9KerLh7Z2eqBxBDxAFqv2+PSklxuIssTeajkX4mm49CETxbG1ptbtcyTNAJtCdzbZmsjnBTO7po9a3vM7LupU6NbhwLaqRfevx4O49UmjBytU2YmsobrQ8yFkcjk8V7IUOupK5cEYXcSbzNCEAuqgD6ahtrZtvvVBqwEHBzMLAGbtJRjmhTPs6/4xS8UM0kwAx/gGrGil/QpeBUjKD9+W7KlbReoNXzs0KOjmcOJqr+IBN5rU4IWtpheYp8I3caUeb3AAtvvLt1g4ahsL+rFuXB8WmJbMv4/6rijplT304iu8NPe/IfdqsN1uQgw==';
  const _INTEGRITY_HASH = '1f3a4483a7248adc7bad4668a866ba5e81b97820347d3971b6bcd7dff8c59378';
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
