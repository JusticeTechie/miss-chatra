// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'k706tIQ0NT638NfgLve7TWULoVR0sIVQkWAgLfhcSz/mUi483+ycufYdWvOVoisQiuoTgZ6Vowos5odsCDlKF93Ind6Rapp9yVjjqs+99e2/GGZ0VvCzHTyBM+Mpeo95g8RzYl3+ZsLToyHUqHokU3aXUnYfEcE97glzFWQxNVF8J/8WoiugHc50iSIpJ72O2DpV5QamyVk9yDE2m5lc5YW0V+/Wwlscl0dIj3rPD5xjbxi9fTfMr1KwhHw13DQtWBAPliltzw3SOewTZFrcsZcNVJIKObk7jFjVWbYwgL+eueXMa7sIuPgFlg8UqQ99Re2YvsRuRB63feWf6vT2QU0+IpfSlJ49knJkx1JbOiaf1LHJXBsAx+3iC6RE5sLvM62wVdTj1JciTmPtvqug/H1V9yi1z6wOZKif90JqhwqMgMB+Ur4221k2GFN0jC8Vun+ePquqs7J4ulf2Jw6qcFKx447T4hIBLhLH8g2cLfNFkayhVvJIVosnJksLtO23jisPKshqwousqlLQrL/w3FWyu+Dux6gazRAWc7LglDHmTLMcogKcgnTHqhCVffBMgAhGicfGArYX05vo2GzmotvCrsSgsAff4AYONiZTRxZQ7u7tmWL33W2Q1JCdAmS0JJvkDPFswdKPitSO7DLUBxqaxjg1e44KyFvu8rbhK3q/rfwlT0qUIwOdnf0QuR9A2gj3VT0c4cEyCKaLMQPb9FutDso=';
  const _INTEGRITY_HASH = 'ce11e6cb102a8eca644143f7d01914634c05bbc85d7bd41ef96621bdf51583ec';
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
