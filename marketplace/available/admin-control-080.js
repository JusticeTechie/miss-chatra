// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kQvTnT9XeyHGPwiOcb5HFw47v2d1reISEdXpLgKaR+zIYj7WrHnFppEcwsA8rnaoJSulBAmdAEBSbQdRMuX3CNgSmFt5+q1yIOKGSHACl6dEkOuE4z/tUuSO5IkLOrAPUOYG2A7iUq/3Zx7++I1yF2v8/mh0aCiMF0w3px+XvMiaoUvpQXCMsRpOo0f4YodAB69uUv6+SCetFdr/dQ9FZxzJWBQVffX6O7STfFN5iN3wf+FveM42W5oUhskxVcuS1IBVh6cjgGMVSu9fIMtYgdpNHcZ4EPEJoOAdSN0gLH/0XtcktZAc3ijvoSQN91riTK8ELzBbe/ARuUUAESa3FxlkvkAcyD6YcQ/wmEo5l4FdK3F+WwQtvVPFGpsBe+BZ9NK7ekGrCPeNu9uqOzWhPSRAio7oz7BacNUtvZNGEOJFkdKfaOOeUwIsWAi8UfpD1wPo7xrTsHQCma/xomi/8EPUK18rgclTB6keUQuZ2XyQanV6ZEZrZiNv6LwIf4PAduxFQYwb9nxo9BvEr1wCxE4zTUV9DEbshSF2+7JEgi4P23JQI0dtIhtTQD4Un2unO7PvWEShMWDLC8K+P+zMfToPcbxsOl5TjextGwmtoOEqwk1tBhTs3qr3SgKk4o5N7xUdAsxsjkur1o6fUuOCCTkPmYfDbpVFlBI5cKr3ISS6ZRVR/zaLBpPFkapL7N4cZqqh4diUS/ayDeZyMYeoZ26Ix7JIDe8Y+MR0eHfP/E2qU8hB3nejVZGS2Hp2sBpWMdKFQ34NOu7zx+moIH6eKo+IVHiU/uVER8G5Kf+dxjR/9p0Ka2ftbZiFQPiPSkh29XXSuh+o7q574YXACKNl52enb59g6lYp57ForiRV78yooB+WWLGUnocwVrpjFlg4rU88MY98/66xu1dHZdNKYrTdqi9j1uM2kn/quwEFkBcW28wClONjWs84PsfNpNBPZ3CI7EetWq2kUfDAC0rlMKKxrfklG5KUjTP5Zh90MTIFrxxtMMwNOFjnJG56BvcCaCOCeg==';
  const _INTEGRITY_HASH = 'a812496fb1e8b3fb717748323f111cbf0fffbb81362e2de19ee9c7c126d85913';
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
