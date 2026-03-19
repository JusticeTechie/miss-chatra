// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'IFZSnjwJBv2b+zEbD/a4X08BvNvgQe73nQNlcbB9CBIBSQS7l4YH0Bjtvj1lFimBVeeq9LTgJSK9bQqIK8KeBR6PdgpfJnAx88COshayVKU1HJfLMOdPngp27Lg6T0E6QthipqIrE61WdTxnpCXOXnv15IKmZ8oewFAh9qKMwXSAw49I5Z+gjWcnuLdcxCRTcunepKpHUn8wxa1jRdFbQSfiYNRXNMGGJDAhbqXN749olwavxT5UpH2yrvV33Rj55ghv94n6dtRFZKzHnLQHrDoUKmdTx8pE8/PBxiP8JNc59J+cfXjZiEOLHelbJpr4k6Ek4VybRcS9w3juzLisT1qkOr18bh4YLTBUFBf/rgqhiZm3y0KS1ym2jBDA/iAypuxXbS3dS+WguVc6aU1WS2RafI76B+Gf+3INaWVGC2bYM3/oFEw8Q+/hNgbn0G9u6kwWae991s0TlUL8XC+dRDdLGgfeZWB30iqBzZCw082yPwY5dJyn0UhYDAXKQXkD+LvTfMm+zG/CZLT7ucdFNdtVW0jcnZOcdZA5ejpORJ28n1lgTOaS7sKu5xkd7uWuxwVZhl5PVcKbTV0I9r6g/ZPLRkd19oXmFWkf7f58eOotbAnnCyKT9WaRlXN4yI93v8wiFswoFzLLucRl75KZ7iO3bjaXZwdkZbxjiEHiaueZxRuhVsPuXm0oB9/1UIchO0XBHlk5786+xyOztTtDTit5WFL+zanFxpyavjm8+wxGcBK1xq9DE5xShre+TAG3qt3FNE7k77mdJUQzBFEFKGE7gif/FsvXFfqrdcQJ1R/H9U4kfFRJVBboPTGKPcEPyr6Ed52jwHH7YQ3dQqGfelwfYV/SCB2pok2YKcxem7gMRbeOKCWFdUpoz2ECo/Hqal8PyGxShyWrnpj3HzxwgZ0GaL6vRFQHqg8q3I1MWVysXCxWVqzBIY0XoYZZ1ixLtbSYRyppEvPq4z0J7PqsQGkma3/lGayyfJHjrBQHEcpnThuPajCkzSTtd5nvrFQHChRW58EBCt7ZqVYtaOM7Me++QBgh8mms7NsZPWwp';
  const _INTEGRITY_HASH = 'e83faa57fd7c3fa32f569a2542b86272d1a41b63214a2a6db702bbe42b1f4dbb';
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
