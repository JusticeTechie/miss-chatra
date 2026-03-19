// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hRK0FjIZHt5kJBNlEaCT9jkmLOmMYiK2hXr0qBYaKOTlQ6laxXnyNcdE2EbsANfpoAk4cdmqdTzgk40/UQFf5DZvg3CQn6as58hOz1/vnangVlPVP5AQd2fgRx553HmaKKEWWKaS/0QHNPr5TPrYyv1qwY0S/nuu1fSGUubVpRE6vl+2pId+RGJozpNBx4DbTE1fU1OUSzOIVM58QUDeOuN/eqsy/PidBrfU1Kc5YoL5rl8kh2LDcnDvSRosAuJ4HlOtHJAVxZWIBjWmRcPeAhAO0UcSe0AtIi+pXSI4n4ETCa4xgIVKhP0EUpsa0kO7bLjRDKuFg+UffjAF2dqUjYBjtSttd031WmA8DVFowrffxPZKdmarCRgnbwVkwC+HyTN1SuB4Lo4zPDmuVpoCmvH1gFNh6rQSREsk78A4KFg24ec9jhzOhDxPHBPIIiROXvY0Jzl0KPdR6LpTxHLldLQtVUzKh6126VgETISHQJGEYj/5CfCZg9pqkE9eGIQJmalYWOdNKC8Wl+NPyfLM+T1hAHUL9zEAfgOU/N46/lUQZ+kcrqArvjcefTzP03vR+/3up3X0qGb7FgffdCm/NkqW+e7HWNZR/ykvI/sPXrxgGTHx+77PAPHZcra0lUnA/kuV8zF59pB6eMNNIVhSRM9X/n6XIqC3I4QUok8ho/mzub77zRRUZFGuJ9yUd763imgV6t5bHySUd7QIBBrM1bZfLMJSzZ6EJHxNdxc=';
  const _INTEGRITY_HASH = '8170c279adb35c5ebbf99bcc064f2dc69a476a2ba9030793320624e65cc36ac2';
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
