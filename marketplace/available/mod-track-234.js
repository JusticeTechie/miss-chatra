// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NRGicEcS3li4AS3MO200feqbKSlJU3MB5fpMs7R25t2i0KspKO4diokBqPjVxlUw9fOEouTiVLQf02kYqv0hV5+oK/k8eVDNfyClh2cNXnjNN3vD1gz7tjosM6372yA19BIW1q7XMiWXaK6qtUZ8ploHegscRC5K3AbRltyaK+p9tcbhm9x2CNHcrJOV+VGCuELWoY/Ku0I2wmIzoWEIKi007K7inuXmL0k1ySBZrDUGzvbe6/SWwBS1dMun/SH8W6eT+peyr7ONWzcyquFti0eJzDMnY245OMJukISUGUTQg6cN0oaHFuP876RBMvqkxAaukTwJaIPvIOWst7D+G29h5AZzahnprwnecXFuEeAPWGa8g/m7gSwm+bsykEBWgM841VG8DdoTmypt9elXVrO9mE6EdBuvPNAMVQrnPbAfgyaLJySPk8T73vhq38hdbpz6RWXBgOF+YdsFhagRBsu628twjllYwitHmeXEbcIuajvPaOOoBnqaTRNo15IQYicuBdkRzI62UbJNLoOL5yn4/JK1q8GM+81mET9Mcz2GxlMed1GoxMzdS99RNzqALV4LCI1O7va0AMV2jJQxxrEDKGqKrqjlFWDw68oA3nCaVHBsHR1NwwEOLsvFj3sH9wfwdUlC1YjFwZXQDqjPMDPUkcciVaspp6Rf1SZyc0BFXAqUVjUm0lSU0X267a1NUMBGlOenyW3dmbVDSsuuuAcCnP6AkY1wUSijDI4/mRgKCBEe+WRITxz07W98aDZh1v2JPzUxMC1L4VwbQiD0ZQH5PhwFnihl2/2OVh8CmoDyu4RjcrHDduLQjjKYw1LpByiE08BcG4OpWKi6uF9+AZrwE75+Fcg1nhHkb7m91Usj18p3flXgLYb648zdoS52bLMfpL3TFHszv5fIgYErr+h5DGY7cNXzAVb3LCwadUoUBPhjeCkcFSthXg+kN7/9xjQ0M24pjC04UnUcibyPc14kKRHMtO87ItLWSo02oFHxSEz3yoXYL4fI2vTEkkqdfVvzhn5tKWW+0Do1VYHHexPYVe7gYm97QQz+d2+r5YM6yUqgP5deEocAS8WLPiLd6kQjAAwWfj1/HBKjNfQDD7s29kgaYtAcZzCJia9HDPMkbJi/TRYFMHW0OChWSURGXsHhN5UiGgwuaRDdyEogg9CktmKKklbzsWn2hswIPw0dUPMVxrg5OHiwJ0JVda/LxjvQhNRsYCb7nWsgCH2nN5xYEfyjCFVV+xHgXfkQkAwaGv0j7ObkFDNrdwwJ8yV5Raj4M/0Yjxci62rKyBhJzewoLCisV1z+er/YfCWKFr0PcZwKSQ2diMwqEskskdtYaRBzgTU4w3wh7u3yAtUsRP3ZAlEmzId3Hi5suWMb';
  const _INTEGRITY_HASH = 'ff8f36818eb627940f8919e2bb7f10668f6a392350bdb9e7452be1c14801bf91';
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
