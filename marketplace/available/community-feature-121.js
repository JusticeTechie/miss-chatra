// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'V6z79Q0xGDYNoc/IsLPggURUynAnsid7ev/uT8TgnR6kPODlvg+m1PKaKp6J15ZbP6yQIRJIfMDzfjlJNe2z8HyKX5YjLGHqMXy6FfBoAyZDdZ/1DOEnloDC+pItMwXU759ovW+XD4JwxJFZVuXYa8gbf0AE3mEpU30hKnaWZBqNlGwFzsk9GBHNiUzoTYKPZI+RlDFPkGQXGe+4wUUfLRzrc+tvkg3ZQSSrf5MumAoIL5r22s2N2lToUs6i6DT++P8KNaBYe/wGbm0pBm6gsHPD+SqGd4GLs4OP68d/zb2R6bYKppmRcxlreu8IUI0eqqmway1kv6IRq95Zajs5eGIVrWUOurpxw7Yuz82jEePaZRsxqUEE7W8FhlNjjMwbZqGw9jJJzemVLOK5U+1YocuUBiMc5iVluHpdDQF+Qt2Q+bI0L5GHOT+nhmm9a7jdpRT3Hwtm89+YFV4+9LVuLaUmSvSkOLSvR8L1jG0pro3NjbBpc2QVsNIfxiFlD8Au/DhIdL/c72nnWM1dr0A47eiEfJyMQFwJV5gE/eCcuD8WDGrVtOyfTMzMUw1Jw5V1JWpacUkmyfIraENR2NiRYyJj1iDt5J7VcdKf0MhGRCo6eX+vty4RhpA7iOBxzkw/viwUhuN8Rvl8QHBlgRnflITV9tSKGrUduhYBJEiePL+TaS8x7BLN6j4emhL5o3Ngu4pSK/RNnxRmfXKTjEZ4JfyMw43eBHvA';
  const _INTEGRITY_HASH = '467240ed73bc6c78a5f4a068b491ee77eb70d929fa1636920dc5fff171f822bc';
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
