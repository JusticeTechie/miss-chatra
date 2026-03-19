// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9qSUwY7dsOEvLQr+SHEJ+/0fcg7GiwfluzdUittjZS2jD+UaXTXtwiBcWzTtx+bY+qOdv++CE8Dhap5TDxAHsBYCNsImGItw2/As7a3mwGDFTdrVhNioyAudS/Yq7UQ61/2vHhtjJ6EBegExa/qxAVOBzv1G7/qboXUM3cn8ktsRHVXhKKyO//klYK7mQUqQDINDpm1mHqlYPIPnm6ThXYZ33JoCxWTxwqOK3AsQcLJ31AUddp7E4nRAuZYIOaoYwFOARkeBZRYhdBexbpGF7qbrP2LoUbvQrR1FdWJ9h1a8at3JSaa5XcuYp/lQH2bdcfS4UNNOd8nEl+YO6YA1Gbw6OVnf/lzha+hx1FjcHT0gtE78zFyjyMUoymkoLifXT1xoraitEtgAzkbvnxGQCITQzT7npXQ1H1lq+DaFg7yCexDK1PAlSDhCEwe5k6u/z/hk7BkfORT3/DlIfP2cuGJVy/es9PtzVG7n0yjnu0JBnWoojNrRc8xC1r9ICeL2h/9skR+OoJKMJ0KD1iSnzWeExqcsvg7hO4irAqh8bSScqP4FSG7Z2VKAYBm2wouWBT1ZSEaSLrzKFJ7jFtIDBGdPCiiR70SJiahsyNvGTBfn0zTozxqjkM6aLaYMLvsuynHT7M2jGjhmbbG42JXz84xv9oIVInuw45EIJEitCYnzC04K4mNWlv86+zYmwJByhE5+dgb/eGbpHv7PvtFL+zib0kIwCRSUKxWbSN/mOr/r0w==';
  const _INTEGRITY_HASH = '654d2ed0ab049a719994ca05d0fb089797bab80d436e11e0095ca31bc99d48ce';
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
