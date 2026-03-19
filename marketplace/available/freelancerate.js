// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2VvHlOph/G01q9YNeDnMGh4M4hUGd/Rl07Ck0UHawVfn+zdG6qiyMPmbNAdNVFu1OY/thJS06Br2eu3IrOvU8XwOAEZdFh73tN/JHjkgJgwvIjnxo7GdSTz9Ua9VJxz2oL9IykDcusaZAUenYnh5Zd6LhesrQYQW6oBUoUrCc9woRtEY85Bk56MTXlf7Ya2r6AeXfGEfwCIT1p6Oh1PsuJ/jjfmTBuA01toNrQkoI1gQoX5EX/8Tss8igjJR+yxkNIqMSdgC51oKtM5JFuHLjFy+O4bkSCvA2xBiPWt0fJ5ZsmbrIMJN13UDchAP6JUSzL7leyeYUGoDfa2zqbq28PUhIEXikeiDPBs2tybsewLcMkl/TuWK99QPyVmUuscqG7vK5auNRjg7KmlZj8ufmofqiUTYZtE4eMFm4H/OSYycG36zzgrxdcX8h+4Edlb8oPy6KGKfyEZC255RoeBqepqkdc9rmES+nHKerJMZMGq3k+94wj5VmSLpvH7w60U+xVmS2VlYxKQY2Nm1MHAGqsn4IKnGZPhVSt4eUHrH4m/hKL1hdzslRfTjSskwBQMojh5xea+i3DpDZ+ACq6TDrxj2RQ9QB/fOBkyXc6SWPnmxaQQPQXLgepWjaYiLmIM+klV+8o1KwnPuaD1MhrMZsgF+v0u1n8+nGUf7jcr129GvfvXsMYfr8ZDURuf2ygAT3QVm7riiML1xRoYTVwe6LSEb9wk1zlhZUn1k/N/t9oCLMT9bWYWwRK3jJduMbjv1NpJVZ+kUUBvfrGegGBsBWaGjEB7QCHmZFesMDsE986nWvvAJ+4AoUKN/ScEaEACIwZ0AbxMoR9khskyzrEXA2b+mxGWDPpfIVnyb9SO8JXiud7ohQ06G78jiBpuomEwEqZJt+DhnT7bsgvzXuYzZcprZkEGzNmpyD1Ok4UbnvBnHZD/3DH/HI80YkeMGvmQeKkSP6lxV/TamzFwAsj3F2Fc+yhhzoZ0OgZo2eWmo2kEG3Z9MqOAYb9l0kyETmHWcvipCI9+zOfgFUfLhE1yNbzRjfxcK+GIJ7YbV7F6VfpUlfD2raIPiP80ScVLMG2UycARdUKeLW6mJS4Cw4Fj+FhXFgYl4iBNS6aIyPNc22P10T3EWEBYz4xBaJIlHlSDw7UoT2rRvaOXaqexzKGFtkj7jZMA9WUWvehJOvPlyHga4amKBnaRYyIsduZwyrMkt9fK/MKBlVwo=';
  const _INTEGRITY_HASH = '54b9ce49caa654653066c7c0a06383baf3660de325375d0a2565feacb51c7bcf';
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
