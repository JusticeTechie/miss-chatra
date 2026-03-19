// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6ohJnHOhbLUUXWN/cbCTdevC4uVqYTSIJXH5/tnTiF3zNhfQAiFXJ4+d+QwCZnDtcfxwc6rzWnWNsts+xCjJPY63YgItg75WcOeoYJRZ9Q+ydkU0TnccWtHUVSMaNLI8zia0XugS6r/kb2OPVr2yvYEcdkbXTrdMxdQ705AeBfJgPi0q2Tsl+D9gfHAy8Zwpmj/kjz2IX22L3DLQ68qVcXEHI5+o0KYXtjmKryznPLfMdq54gGWZxIBP12B5OnStsxgsy0z+gkbx0X/A3HoIEIMsVCbK1A6xYbA4c1sLki9ik4Q2iKdbw6Zr+50y/WhI/cVX5eL/f7yHGzmRb7N0GNvREKjgM518P3onFURuW7aEnPJlgsv6fwxf41LhjrmH51dzUl0hVxvdSD1RC30Y6DUgPIrbauvKomHv6wTNjfOg5qUzdU0XgEORhSY7UTblYQr+mkTFd8wE9CAMS3IKA1cFe9Xd1kDprfl4Ld1anzr8uLJRRCjPznLHz6H2L0T0ZOFSfhxZpP9kv19PpUDBwHQZdcInEJJ7O8kd8dMfuT2gAuoH3h0k7CrryoW9x+DDXAkcQneplz91mMbLN/EIXdHhAtzi8QDnbXjABsvdiJpV3+rtnGw6Uqpsq4qFxGRYfI8Q6VtCJZu43HMOas1/IsKiG3xiHzwABHhNBqvy3RW1Wcu7zLUQfjHPbaoDnPaGOxGkvzpqltrGuWyqlDMmh0mxmV4y0C/ZPdwM39DiEpTCwA==';
  const _INTEGRITY_HASH = '35ce584e986d65a9223998f5b5dc16dd2fff4f277060016f395580293bcf7404';
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
