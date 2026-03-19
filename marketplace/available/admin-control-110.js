// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/mNXPvpILNL6P2HyMFwjgClFs7x/vfNG3R8FeXnjPBa8oS3mzoJpIYlxheHiEt3ygf19dyb4KObKp704Zq+m+XQwKc7Fp41lyomeu/QmmZK/+0woKqt6ciiTkuUIDLfXbUFW4WPrDsem7nzMiJPnrYgDEjpRXgr5MkWrIs3w9rEPddS0razS54UcuWkvS1tpITSGjDun0zPUtbrFjycLKYYSRrffWz6NqHjlsRRNsV9E2PErn/gUf9xApZb2ubHfqSb1Ki/FvYpMjrCcLxSkeB4ScnfM2arH7EEULT8dY4n5ydPwi/NYpR0IY9pewh4sCiKqWq6BrXBLg/i8wQnvBHiftqZ2d1ZF6xwjv6+UVZhzAnwQ/1IRbgln1ZdO2Zo0Obr3Y4+Zj4WU8TIbilnv4x7d9UF90lvTdaYMDRfxXODDdydam7BVUFWSbeWn5JQPzQKvpxbyk4tEibphItKz/BIv6omahCBK9tMdwZZAe/13Q08l6N9mF3ijVUJEZ3wFOz7E+O2VYyXBs03qav0CNvBYas+P4YoUZaluZamuDFPYpYA7U2eoIOmjtta968RBJBG8rG8e1SbGHa6VvKYA/i1TJp4XIRaCaOnYGHvvwkv4hr+XBjUrGCwAKA99qi09EegXlEFgS1ERsdvE4Eu8X5wYHeh/7UQNdDGXT0gnCxayNw/eAvrjmjCOwkTrQBN4zGN3bIS7D6zUJphrOUawfkjp9pjEIcWoWpEPzco+TqWF9zxsDI4vjwn+CytkqrUq7uxVi8hUtBeBc/a65Vx6M30H/Gb7vxGkWXWM79c1hRtYamwhuKhwUkIWMcky1hWnixP3jkQxLCBSAQsc/qapnhgsRBUDA3yGIk7MQIwIp0L8Sm1a+iF102G8CTmEGoIKaQXSZqX1RgGP2ikDn9PobcgtZIL94G7gEw6pSCV6Kl+2sHWWb+sQeppUoqevVR6SySvO5gNMWsDWp/cfzgJ+u3Qb1TFPsZGjLAYQC+8V2sgB4OUitouDuD3YR2Bgk60Zvdl8sF+8pfA=';
  const _INTEGRITY_HASH = '65c5f3be8c2fe61ae8597cb829664dd933ce598c77be0193f235283a82162547';
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
