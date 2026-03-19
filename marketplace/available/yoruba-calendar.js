// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:37:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OZb4B1TdyY7lm5lT/XTHeru/Fj+XfDjcBWR7XZ5x3bs726VGIrLihdGYhkjkZj37SNAZm0ajSuilZaleQPVxh6ODZ3SrQOdXvCTFr9RpYtYlxQjgIy6dv58YGGq9eij5ArFEykYs5tmFOIbllpGzgTUSPnVPKiPlwMt1HCF5td1IMkg6QysTTFgZVR2c1A3xYAmKQY/QNQHIgB5b9Ah4WarYIs7VGWOgwWdtxFdmOi4gkoB0VCHSdAnmP42d09+53fB2LZKTwD5G/JGmsiUqjE+ia/MU4Ep9uqL8/h+EGrFyvUzT9U1Cqh04h9qEJ0i7IMfdGxJziNLhDwhd/UecasVio6Eiz1I+Gprp2nP9gBmwy/74sJvybxcImLC+m/DrC0DRuWtEPKT/W/2F4dsd7u8i0xTVo9oVtRnjJKXCCyomzn2KDYDD35oDmgnmceit2J+oYH0Onpn1soZbTXXC7rBLQ4yi+HMgVBSgj//7KFJRIa9QUtYNt014b3bx8RMLc9PAtBl0A5066UNm8wwSd57yKQf2fM/e6GndQvM2PbZ9uqMBKNrg+VEOffxLiB2znFmHu8Xrt6jZAQBmAEZokzqohm5fUpMW8w2wnpnJKOPyBDEMrUcdNS9OZgvMUix2/I8lUp60DBFzamcDz/4i/TQ4uVJOoRUu1Tfu0KFaTXlNzJLn6QFv3T60j/JaB1UQ/DXok/r4j5V/uZ81yIKbdWG/zxj52L7F+cuw4yLITHteNBMrvK7Ix2yRkXxIJBopwy3Enju2UY6kI7mXmAg+nIO2BeCBQLiiE38yU08+f/HB03Ikfq2Z78V4huD3LcjVSc5d3qOW/nHRTQC584h2yl7VShFCZRL3UVHXvo5WplKvipFyTSXDADd1e9CqqzE9hmBuk3jE803nz/cAEoX7usFOTSuuWeZT7JwfTaE0JauxomAs94mcZCErULk7SYOCC7lzYU9PkFoy94I/1AtfRxG0noz7c5zPzTwki2V5wYYB55Pkj74CfR5qmuyhh6l9qS3ZdVa5pT8yWpnE+wxy9BgYNCr8b2Py+Ag2m50ow1UGTNiaUWYWv+OqASSCx03JA7SYOegqo/IvWrXvg4VuwAM92CYa+95dWj7qRX54CJVkf6fqQgzWcmCcSZpxTT2K7Jt3lYE9HGWSkSRB+4mF9KCHyeqNv6GySveDtTdR5vk/9INZEqp75iPgsSBNJTARBc/Zio//M0BreJf7e5DTMmSpT+dfWnpreUcO7AaOLF17GEw6uOt4jrmW4jGn3PAEdkR+gmp1FJgOZXLoV2Vv';
  const _INTEGRITY_HASH = 'a053eb0c0fb2d26d7bb66b77b0ddc972c3b7f6883ebe3587b65d54d15e41bacb';
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
