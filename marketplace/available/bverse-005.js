// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fpJs81eVTlAEW6VXzFtABlW2KBM64ThbXMSGHtzQ5Y+1ilGHlHlBTBeBg0suW6MHAT21fM7kGo7vY+wB0ej9ue6moM7JmU3Xwrspq0fGSKFwIuvIT14DZddfAfbGoIktaPcHAb7YqF3azBwHzQYzn9tV2ffSNnAZOhfML9ZW9uIVALjkvFO3n8BhCgFkHLFwvytmYoqdC2Ykj7bIxdj5YyERyemkauBBff8+vW4qZCp+5GKf8T6q5VKnLHcsbN2NRicjbGALMfOuXwe3qp6v6ZIEtklrYI6kRD/aF99tTnSRknvlOczXztvdsbE7QhI1Ja5Pghh4nwA4dmrAf/aH0I1GrZI24u6AAzXPvyVwwuv5GNaskyIc83GLEwor0op+a1fhEkO3IlJQ+b8N619j7CHgwYHC5EdprAZtpjRECbqr6y90flh/jJi6HrXK6PVowIV1y9QsgtUU2d0pYyXvaKvmK1wIikQjPcOjsO2eEyBXKCHb4c63cZ5rTdhpzNoaXPX83MeFo5DgqbmpnKz5fdNs0z9P7Wsp8SMJWJvmNL41W8G9Qr6RcgywhyBOEuC2k/wFs8gbeldll/OtTex/W3+DYPtuv36JWVY5lcirL2yxPG4kQ1LaUdApIR8lZnqsEGdlRWnR2SWu7rqD09SOKPMei7XszI95fSjEgrEZ3kPGWTzmzmSyB6rNubZ9H3kH';
  const _INTEGRITY_HASH = 'b97b44679ea0c9c221850b389961db101cf79816176976d3bac804102fb1aab0';
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
