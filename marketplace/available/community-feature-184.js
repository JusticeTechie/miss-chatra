// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6URJTsa7Vn3juYiUwsCDlZJ82BrHFyUCdg4urXEMzVpM7tY8+I7Lp+9PNv4sFke3pc9SR30tCfjPDwZ45I23TQ7kSeocD3Eo+n8eGivFYQehAxqma9VyGGEmiUaR3B7y7Vw+gcyqN18WTcMLXz/deF3mG/ZW368V+WvMwQu02yy6yyEOrIFBAN5fznugbaquNlp5wxhdG0Ma9A9MtG14xbxAkxQJI+otxVN4VYkFwxv/74BGmAphV0JFbSzyK2yXum3LXCb/PuDvDu3+5gsd2RyXxf0PU/f9ZmsjcCKJHd7KeOC40QPUQ5UbcPLBOOlkwYkpED/rK+xwH7Y9ozllZoqzH9B5UQ+2IKwUPtXnAeO5lcy37bezN03Z6vG3EEiFfwr7Irgms2hx+swbe+nDoY2MdR49990XMj4eOg/ILBZb2+I7AeyQrIVQ+WQLdbbDDcPyYXDNVWbHmRQ3bo51Ow0hGYV2FzcS7P9PXVYultf3YrT8r42CDCx4qZ+Y7UOJj4KT2fIW7U8qE0r/r+gBtP+IuRI2eunPRFXRg/SsWtC4db4or5CxWOaxTj8WoQANq9Iu+BIsZToPEViATK3aIah0rmzGcPHXkNSHS4mZvcGs4+NZQANpevn8/G0NUcN5CSKLM2zr4Tejf7znUE3aTaZttpnZJq3AhTocJ8bnNLzSLf9Vyr35x9nSMbbcFUyVjNT+Iv6+OLMrzWPHbQKFoRH38xFM+PelwN//Ynj6idtVOWEFUXU=';
  const _INTEGRITY_HASH = 'cf96a6f41fe67f26ff5f6305bfd31627d6b88f3b75bac39e57053b3a97014ae2';
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
