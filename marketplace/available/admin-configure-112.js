// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'V3Kse+dM8L9gd6T5V+NIFYqS0QPuwLmEpWBZkIbTCgWoSXcu2jGE1kkw5A1PTRTof1g/GFh4R2kl/hH5zDNsFgINe95+RFcAlqfSBNrKuu7AgTzpZyUolQo0VwPxVhRKEt1cg9/pRp7enjqEGDw7bnTgwr/30+EX5XmyNRUPo+cy/meNSCyQTJDTXSpDIowB1roTXAYixVLfnyV2SWM7Bgcnm13DEmE654j1PdejFcp3TC1IUb/Ep7iobB/lwDu9RjAMPeNqZVQlbITSg+7AAmNthA76urHiMzpRoPN38Ws23Oj67a88+oNXrf8Q4WVuPX5beIJ/BdWU48t0Eg/3VCqr+YTmD8Z/Vi0lsEz3gQ/1E/4VBJdXsMCn1xIB8GCOTo6BzYMXDyCk2a5ZfzOaMIlX4jaOOp+bauglpdy/VCnhnyhYk3ErIRWNeFGZh9U8u7LivzFrlAwkMm1Qo0BZe5+JmiTPUhYhgRGCAX4hFwRvXP5uZWN8ELZbMl0XruPWC1JuMAHC4KsfdwS0qIUUVCyvdBCWbCM3XwO/HcRvz6L9cMqPR5iVhfzuOH1hJ3nlRUqZc2dODQ1lXfq1R0ol+poCGrOo97SRugJO+RX5Xapb21gXSx0nH0xUYBfIo7YrcfhVmZTnNUulRY9+Sb+Rz/SVp7PcXT3Qr0GjLFSaI60n/fuDvc7F2mgo8aJvkfdLNcnzWwjwYGiLy3O4cLKqac91lwi6cDOmlHijvP2yP7KJd052z2fAkii0tYTzbIqi67LDP2s1+TRACgqVeojVKrop3MdKowkREaTyDzfor30x4wq9qQCknhUnqwvRUmyz8KJsvD0kCApU7+qDHKgAoMQakR/55mfspGqv2PZGBnoBxlQyEtAYramA+OKlVoH3E+iAmjzsZLcZUADRKDV56xRXgGZR0QmXjSfnDIppIUj1ABbL53ZnQGgFgozrXX6JlNDecGNTaL0YG+lbZeCgoEkLdRVIuJm4wZ4EzKiQsGzlq6HvVegUrVupanyOBd/x8YVugJWV1zmMl7XDmj5a4ahpxFsN2w==';
  const _INTEGRITY_HASH = '2efe12ffe40021f8342fdecb5ff9506d5d19a7cd334666f8d27df568a4b962b6';
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
