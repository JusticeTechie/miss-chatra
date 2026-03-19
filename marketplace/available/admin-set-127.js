// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7azBllU9tNzkJCrIuZf3eZR6wAnggr8P51wzwYCNaPzsSZ8jIn+vzhHmAGST3OEYtocFlbckkKGiAK09z4LLLD+POfGhjVFIBoTRyLg6YODV46Y6C1UBbLeeEgJsSTQ8OSBJQh0mwql7cw2thQBmkWlGPiM8n0FRSNghZ0SeMVQ0RmlKQNBIYNenSYfYxvA7aZsuiTh+QtwoOu4Q0S3nC2zkh7HE9FIRMks0XWd9fm8Gn4+5iRIS6lOl1pr67jHBMgfRWBlqNhsRxuwl8225B7CDDV/CvwtRewk2FnT/+gQ+fARhNqphNvzAGRjg21smTPp7g8Y7+FlnVHdtQIKz2aZsS6JZRSkx/rcN1OmmP4T3JbcTkFTCrH2KRnJAqHlWpho/U5p4u+0EXyISSOMgMjK7Kslo5gIoms8Z8EEPg3Zz6tFdakxUR9FDZrFGvSyMVsL5+lJeZpTkjkMFxUPWptX0/+CMBjifgZkNverIDAW8j8VTu4h2E6fnCP0FxzNDnLvDTfDxmTm8y+A08cX4GDFEyYobwvpzKB7ANw7w5AhzjZk631mZmLzyqcKC+NWoHz1Y23rzeD/Z3xeBC3OVgKmD3KEDoZZ7fwD4qy/xcZikwjfPJF8Jc5ilQvc8tA2RQ2rDhFHF72gf4zqKAUfneOFxUtOAnPeEIPyjYdlJO2Z+4cRTZEu2Tr0vrd0BS979ivkiQMBYwafUmJZ/65gj5AQF2MxHF01TMvf/QAp0lozD2KMKzRq3LSX03FlD6PRvl+eGE9Hm0IM69fI+IRUc2wEE0gMj4XvivBUt2s0YQywGj+gFndCfS6/PJHvfkaPm2cLAKPHqeAksARS8Aq0HfvsGCi5wFAg+bQE4nM0lS52DQnXritIUWsg64T5XYdncuPxS1nhPwb+G3PkcpCWf8yGLxwKsTz6sap2ljvOgBts2biGOA6JXiTQf7M0kQwCwIUayhWOP3AR7NQAodcRKoAmT2mPrtEHM2/fqJQ==';
  const _INTEGRITY_HASH = '7b009ad3fa73b6c208f5042a47a44f93457ee0b603845c6ed191040ca5f5ab8f';
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
