// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Zo2NDlitVLe1bmSAEiTGYmTp1ebyswLQ2yW9vOdMeNLWLpl2c9WEKitaxaCQRDSqXfuwC1KbrV9R9CXg7fKuZXGJxYddB3xIucQqjzl6auL4A6ksc5i2gFttWwiogvVouuviQEK/O8vNZscXZ5YiIuUcTx7CG1ukjfseGzoPMOYGsUo17bog0O0GY0+AVcPSuCbQZRKqLSMGt5Kw39CYP+7UOJogVt8PuE+YMrmeKljzb2SDtsj440gv0cbsP7yW8Csf5M33mGL+fHd4jubPG60IeItNEMAJULdyl6uYnSPzC9cb/fneQ0tZ/UR1nHHMRJhoPE6uiBDplXAANqiOgILJNLnbHEi/w1fidPIRxT8UndpBW4bKADNqEoSJS/kvs73E5I8040oCNOAaUQm3XWWkgdY4IPhqgQTCM1ViCZ8+0gkL/um3mislJrwQgegdHlkGCAL35t3LSuDrRs/hVrA5G02rZMBCZ2b9sqQ61ClPO/BRYkVV0UuL9x6MJ8ZBc6+kll7zuwGMfaf5fuVApWQC4qjOIhFcygnVkgPtdlTm8zFPIn9jipWIfihvK/yfXB5X8mAoRO2lVHnHYk7SJCzrF51USSrRGCY6YHBPWi25G7i1uCr6oscbR5OK59mzyAMbeZfvBEBHE7OZK6eSZPNpCxtnxqKcq/nO1nYoGN/0MFq5TF6cM7HElnJRUi9aDGAQ4vse36xrCyzarqVldYc4dSd9IrEOuWUPDrLz/n1PByaP0VRnH3Gl';
  const _INTEGRITY_HASH = '551c3c030ab30987e1528b195acf2e61e5efe6cde8c8894aab995dd011dacaef';
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
