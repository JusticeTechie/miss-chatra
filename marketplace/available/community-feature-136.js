// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tpfQrpuuB7vXt6MmAWxhCCIf+h77Ir9An1mdPj6Hm+6YJC++OkKZolCgXnWaDpCXTeOQTHcUEfRRv40fEOZBYh6CzZv4GEujupLcP155JAC8MEztg622WwhaO3LWXdpdXNl1ETBQISJXowybShkss+Fie8Zi4XkncQYM4M8cv1XgBo1iEGtlVoir56r22xjwy0/sSVZU3rPaERBLVe7u4rwkt8bp7XjT6y1EUe5A80CUvpcm0P6P/X7E194qG5AxlUQ5CFsfjvQKOfU9B3dMpaJ3UiuD+ULl2/jux327QqTa3I90ww/DyfbsSyeSYXbmkBVIRC/heV4bGxseuybr+Oz4I5eZ7bduXFNrgF+lnixggBPnhBMWTwfE0EsC/CXjVczVLlQC8VGPDGb0w/VZlzzBrQdnlc6895thxVtPnAxseNpeoai2UuFAsWeSA8hwr1psB8r9ZJrTZjR+Rq7DOVHWS4o5ugt5sPy/jMb32alhQQAzScp1MMKh8smWQ3KlouHWdbdA+kKvrhooc1huiOp7s2yL4WIw1Z+KGVNdhfkXUjE32gNaHoyuRgHQsr8kE1tW7EeRJER5FlUbY8YPnPDXiJikL8bJU+m4z7BvW2FKoqumCFKP+PWhBUnlb0u+oAmd6nqdcScMbmy4jkcf3rkZExAEf0u7kHaRugmweEDGsl+wL2E+xprhB9WCusKoB7V5Riyz65xdPyLAdQkoeFjdyEZzAUOv';
  const _INTEGRITY_HASH = '060d24826ab1b77353e0f45a788cb56820bfffa933139e3b52d9953994dbf975';
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
