// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fmsvhPiV+M2vz7JIgqjmmNuu2B34AHYsctqxIWUZBXUvCTeDzsfgi+H+6g5bIWsNwT28/ddneBCaLKq7oZFFW92YHG5aaEvbOCb989y5UpdgrMo2FAt/R6GK0oDyRSdU2dry+nDGongfqrEs14ShOJbO4r2x1DQWjrXDsnB8ZEyf0Lwju1Q0sWXRF+cAcV/dmonpyWbXGz7uRj88AsEZMkN3Fo1JmmM8BkL+cNAZ2X/0+lO2OhGEqUlfa7X6Jd5vXohAbGcd4YaW/8lsSp4Pm3YemgK3oE0qeRHzGWc/U9vLiutITAEgUF34hdI1DXoGw09a4CyyqPF3eGF244hizIgezFjiBbc1hekL3e3bWkponCAUmnrkrPxCel8Tt12hjIDBcd69CgLGqUngQMZp0QrAfa4Y5adP687Zc92bcMRScV72R5gV7W2KBr9BUuydjDsIALESs/njIoAg7NcBrJCOzIzq13WZIEwDQ00ibaunB4jxPynONAj5aBdigOrDGlL9JcDO9CYnBkLL6LGzphC/bEfQ8XjFDGXkcJ6F+S6zzo3ddXGsMsRx+1sZ+wXxbklgmP7g5bTM2/aoKoE0sh/dmCoS/FmNXM5MGIlGnMI+ku/09U23qPvzAPP0rvnNORf6Pr30BXNAYKRTiLaqJJo9zqgAtGE9lmzOT7qmKgCbhh5LC6h01u23Dfl+66OM5uAwyXzDWu5ekMehEPkOeoASHlWBiCKArsoI6K+65a2K6WfcX0bAaivBDvPEz4cZIx0jIPGwPKtEI7EXzw0PjneIXgYECa/1yjx0+0iVVvE7xOVb0LluAzIILNChYGyAtaoV5jnx7RdV/Ki6KtPSG1D3YRHEboHoi9MXz1J5VeIKoNz1s7XLgOWjZ+PIY9gBcxNfCC8TDmcmkO79aYKCm3bkI3YviuRFZ9yO/YINjkp6gAsDoTUi6GsDZDalT9CLFXRyRx5h6aBXHV7kd7Y49ds0t8WKPXMMeZlkZPPg9V5t9knx8nnSbr2BPO6EzVdwRiQZd0i7Jxo=';
  const _INTEGRITY_HASH = 'ce34133eca375a39b83df486e38267c14927d7ee65232a2bd8d6ef1c64c25d06';
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
