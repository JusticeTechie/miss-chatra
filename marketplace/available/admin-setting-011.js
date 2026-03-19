// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0NEYYdXdTL5bKASIjs0AVmA4AYC2f02aiyxHSB7A7xXRSA71/E5WdCVOSnSx47nrYrYyTrKPYCu1rvHWHGhfpy2PnH0igZuPH0MhgNqjmapgRyEFY8deHhJTzADdrcPNmsFWlzMKUYBNHpDLvgLdwHeT5oygbF4X/PcYcUSGFx7r86hWn5onoCBELVrKrH/uEhWlarmzt5XWCPzsnooS92WvCjIjEus7H/wd/3/GEMGCAcef3ZcIp437F2j3Y6TvyT8zNV0R79W5byw4yD40q2ucwkNy7ciNjQ1CJcyhSgJh8IPSLq5U2CWqQ8SgPrxm+/mRlUBtzUwIXwgeKj+jbPRVG6oNxrJTCajYKwBr5M2pNSjCDaM07bT0LIehsYomEReaLQb2woNdo2ZQQTXjdJlRsY7evnRijMElR9+Z8c8gTlHVsPLx6RIkeWhxMkiT+6a7C3FZmLefkVKSRrtkvgpu2ueR2YxYRia+I7pz0bg4WHo5OrYrslrDkdKyghgEGUmhkGQNBqDlTz5wQXE6yV3Ww72ICkxxinYqC24VUWnuqXjCH07lTN9QtHUR1qk3Nty9ZsGF2wReybX+h6WQonuPQWD9wHhpNC2k9A/7q06FjmJCqwQ2te6CtstsNDlwN46eCfIt5JJf547UlIaoA+/tZximAGpWqBS/aYy/Stw7cssdjwqxiEIM8dMnKNu9e69m3Pztclr6wZelv/pLV1/hWig7WvI5qgaAxkrnzBTcwF1clUapRy5R5Qk1xoQ1bkxjBpcKxqGo2mHx/Nv9cmK0szj9f5Ld+EWWVGak1v6YTxrfn8xpLNnwgmQpdWcX+e1ySHdwpTBDXq6baDURarxeka+dQy7xIGYMECZpnlVL5Hss7/ti7MTVhXDqBwYBUFFZ2/j/BLyQyScXPHN7Gxl7xTqgkLEC69KME0eTKCApVlGq0651zxEcrX6cISzsv8g6tNaUXZC/b0UNjFVPXidK6NuXgw0PPUWL+wKlx6P2DSNnCCtR5NgGRL5X/VVC4l/FUw==';
  const _INTEGRITY_HASH = '2ca38b266f1f190872d2ab4f03c4a6971c2ba0287cd4855cdefd930e9373f4bc';
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
