// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7e+58dNCdKTpBYYRAgRAiKp30hR5nqEClzgBm6uHy1fBBUNYF/EilHURpGpSmQJLJx9AjzEhIMu059CZb4C4t14DgByxOAnvoRII/sHZXk2+MyFaxZE6aNwJxnlrZ3E7DNtAGbyiFMnJwKlrglKR0gpio4z9Uso/kBl5aiz3m6NTo9QHe1EgWygSQ+NFUaE4ar6CUTXV9GkjvIYbg56Gg6XW3EaXO7RxHm3D4BBizWiYJbtpPOAuQtjs/OEmldD9Prv8lI9kSMET+zZ4WGXsWMz4pYx/AS+LLB6m8O9WVSz1iEt5UyvtQtxAXAwDZg/+WziNMuF3V3hc/7dBk6V/5j4GAqtb+E/Tgn9/GCjwZX31FRrmFeQZY04T65NexnpEww7GS1bdU+/4H/duMhU4jBlGlCAH6JexbnVt6QA4ixri9FP/2hcOpwfILIln/WevDp8/Cfikwa7guOCSJirGFeojO3chxD/s09nQrqvd1tJ/tq20nSTPaexAIMIeDElkAlxZ9L17XzaZwBF7fL60kKL+k1Ef0RFhhcL80Q/Y9zu4M4Jh/lWWW7Kq57BGYz5J6U1HYRenbNf8nNFjnhoI/SYkgEhtWUD/GYrsdutkicooAgbtUFQKN7GPJKszXNHYAAC0db6dJI+I0s7PfwZ6CF+ETCGsdp4RqEyDFAHIjd0JdpdetVEZSs8S44uNYSOQAccvFuDLPLHVql/fN/+dUOiOBkgBjPWHbQ==';
  const _INTEGRITY_HASH = 'd81e5225414a1b4b4d30ee156c3d28b9b8e02f87d29073d5fc93e34738d9e223';
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
