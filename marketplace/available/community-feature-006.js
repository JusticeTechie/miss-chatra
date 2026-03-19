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

  const _b64            = 'PlNDWU5EX+Pvzo/ajWmsJ8bJ8wMqAV1Hc+uSgRLWDwkHQsoYF2hTkg0R8DYLy+ReiC5tneRfD92DUH5veTk387MGbGoA8W4Pyhvnz+ClKpxJeMHCAMzj495Q+EstO+q4YNTUmrSM4IWtgk8mwdzk4QRP6iAzuKfPLkThHIwtPle2c48qCPnJiOvGWOfwvp9ugs4Tdu6I+2/hEq6er0iGamLtSulOfjqcRIhgatJK19Iow37UqMRkiFb7SZq3PkgyurdrnHQVxhfTFH2RP+3HnJHr5Hmd0XFl0GR/KmfCRILdneAkAo2A0JkAgAiEaaAhXSBJm1AjttscqFDEX2PvqMLlLKnCETnGVPLiYd68a9ZTSr01+6dRMvywYo5dRM5JL993zSanM7FV301yRTDW3YeNQFx/hXbBIK7CFPlyhx2QtG/FhgpcjDUbhkLUnm0T5QIXmwW7QIatTEdIHgLDTSxnvT1mSrS83hraNBJcBHQY9kgzog08f19SprT2S8lPfaCDJyZbEccyhKl54wgtPqsUbaYuULeQ/e7cI4gDUhymVky4JMp6gHKJk1LLTiH0nMNFQGyREuRTw/tE4cTagIqqt0ml27Som+AMd84S6yuTfCtWdCTqpVSdoOcZuU3/EjyTyFLx2KT7+2gvmMSZuszpSuVyf19kuBec1g0BGQUPfWkhjc2X+lwaRUiHTZX28fngOZeHkmq6xRV3zZG9gQ==';
  const _INTEGRITY_HASH = '93c3754c0bfc986a9f9844a453bed9d6438dace7403c8ab640ad8fae22d3581b';
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
