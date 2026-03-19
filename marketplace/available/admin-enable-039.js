// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'EpkP3iQ0RlAH5yz/5qEhiF6Y1AYUAx9T3g21m8EkXgr0rzfG/49UUbAjTl/+YJOcolra34VeyZZ2x+5B43aYK2WRV4bkAW3jg4Bsl1tO+6MPWUy0+wqaDRLFJnk3CtB9jGSNc/q47iD+Hyasl4b0RS/SmA3iVwL8GGLb6/q0i96BhoJs1JKHEuKz359HendWe9jGAl+YyKTkl0BTs/l2IycXBdIQUQwRM+Bv/cEDd1pu+sZx4a82MQqHkg4DIAx3njuPeTZmxVVwy2Ew7DL7deoAm9NWtXiASRhdPcAMgcsrMpyXdvPrHQSGK0V1zzE3LZjYcIOBnmSf0iFTmFK0KZVf49ZEr19TpBJkuBV26WcMeUjcmrjzVa5mT4eTCgJ61P39AxIyCx4gikI83+P8SFQVAR7ybGCqshdoEKt3jUDtR4iC8xPulOJPC3sv7f2j4FymOVWIxvVEB1msex21X8Xv3O/PaiSfGphcZpSSjGCwNldnXl2ZsoM/SOHMu6ch9Ug4pljUtkXuoBeZmdia1jiVDCPz4+/mvacyNvIA5L9aCD9iAc/4xH9FMWEMK/CA6b5pXklxzCXmhsiT/JjO2aP4jM6382fLREr0rQtnFfAJwiEKnUwbfw/PoG5WZuwUAhynMYEttfBsGYBGPLNh75MdA2DjM7DRor8/ZuH1FAMPc4nqd7T3Evqc5XywRnTmwBR01dp89uXWxHEVEZR2YyNlvhWtcChw8Xi+H9AqPWVpdrnzmp0GTKUhUbE5GrlorOVfX0Cu/PKNp007ASJAqaAxmBDA7IQeYbV2CLMmmieDTPQUVGFH1V0WBqh5oo4b6+3BauNqfkiEO6Uf88keW63LonLeH7aeT5vRcSQai0DQfyf4SS4DRz7J5UQutUU4z+uAqpacrsKNmHPluI7NrQ8t2ZYMMMPZRHa4DiLKPPCJlFHK9Is85lMZgnRkY1lfe5g8dYUgURU3QOVliO5LYqNl76g2rgQOSj3yAuG9cTN6ltfhPPvTk/ZAM/+N';
  const _INTEGRITY_HASH = '21469ae4cfc1e04489cc072c2af1b87fe8127bf479a34c3a1641b8a4f6747939';
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
