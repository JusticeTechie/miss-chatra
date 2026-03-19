// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yXx/Yt2oEVwapx6+jg6AIDeqDEMAGI7j7ynEWYkLdZWLgTyXjqbnHe+/rSa1hqN8pxe+w2mg9KizEFK3Yx5PL8XDc0w4YK9KE3qwYPaeGmB/dq+2NvJjne+/SuzB+NA+vR4FOwUcx6L3OspAKlIcHjmdG545+h1prOW5VtoYlsQ1Y9n7TzCTSjokz10WNJrnYIniazBEIa04XZB6JrKByz6Q3+ExeRDz6pecmMeZ8/TsyF7ZrBX4EUy25mTa35nm58t9e59fIt6ghgwMbpauvud/NTcIYTIdrPmtr9K2nLZ0Qa21vWu/kllwUFpVC5sykaZxaJ5mHchUWaikVZXkHyhZn8ARbDvjJFwpBCPowYOSIhS7JDB+hO1bIwsr9G9hrRtm72J3WxIHnA7/w474lWdQqCxNZyOZtH3wm7piCn1XUsL5KEfuQBQbPDGdlYaZlyeFkUJqHNlJEkBNNVM4dQu/dEuBG7RsxtA/J8n7hc+dvFwbNS7dGbRs9IpM+aLKIg727mr88t67djOW95TggM7YtSKQV0muLZrNXwfcyGNEJkzc1wXb84cJr3Fwp2doxL/RWuCgKshp5ybz0LMjqh6K5w3OOvA/DrWP9SsmC/t99gqIJNBslXvhtpy5P2tkQRwLDz8uIsyFV4dGZFsk0XeoSkrSoLnH5X3JmMpUeqgnRTudNWO3Tn1VnwnYo4UuZQs0VO013h27c7fiMD95qvgWa0DFDTg/fCQdW1fxpB2hE+MHoLi1jPuw8mw/v2H9j4Oapk/0AJReTz9b5mFYrosEaWej8sObai4ZIRyzRXWllZsq/zJslOCjr3ZHMEoQAx4OrtIilMhhauYJDg0fVfyGWrDtJnn38/04QbL2OudENNH1k7FpDYUQ+0940RGtOUzR8jOGlugGtNNUgFEyjr+FqPDEiRkstd1czNNMj3/fBTOGtDb/RZ+lVsS/Sn6/e0n8f3yxOcXyjREZiNHAsj1xl6ag9TkBizSw/xtrap7uopLsNGcZcBq3cX53ugsh5LzeMBIU0VO0/J6n1bA+ufQcvmfXC0gTXWm3j8UL/cgGondrspROftV63BcYWPH0ciozBPQ2WgmtTRgzYDUhqntD4Pyr/NcRHgSB8bSmQFqRtMuz99HAUYKR4EWYY24uM112+GyEk5UmeNJ1KcQsxDeixIpiaSXOtb2sfq6IPPTFrCpj1QXVORlSOp2v68f0vM75eoJ1ET7NPlaAa5ucj7Dj3dI986wYpw9moomQ14z9X9YaWDqjX7T0THBK30BBoCtduvL3udxvTTJF0tyDgHaav48g2dm/R2qw/oCKOLz4gNOSH2bV8ugbi+NkF9DB1l+APL+MhxpS05LwJQYvgW6P1DtbkOvQOP1TsIWNBbAWKV4WCJQknEW7aFjc3tEx2zN+MA6+/luLTh4gdgTT1YsVRfAQ39hHsw5Tro0hs1mXmn4CIv8FmAbdg5d26KU8zVE4cND6ajTLOKe4YyweS4luJ6XSlvsCnMx6mLARI/FVDBWdhBwShwwswhNJAlAvIEqEHJEj5cFORQB/kvlWfwwiCc2sahKZ69hlJ3y8aM1JoTvnU5AsdmOlq7OwwI6MxmoixXlwnvY7N2OvLmwuvs4bl+ksLe5kmp9fm7ZLC89eIVahZ+49DDbdSEQiLe0Jr5L1Chi0dOd7ChLOeMgoRPzSpx8EN/2+WJve2l15WxXx';
  const _INTEGRITY_HASH = 'be97133575b918de8f633525cfa4f262c564bb3ddb0e872643f3f1a7795840e6';
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
