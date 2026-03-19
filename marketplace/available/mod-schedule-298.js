// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Q+sqxBaTnuLKa6nrq/w/7PaleMpkXymDeKMemtGV7obH5xPc4exUus0h+Q7CnHTTai3Kd7DNH+v48Wdcjnmlo7zOQCFMHytuY+uQXBxFnHRnTkcf3ThFlNli1uS8aWEBmpw5I5GHzlisiFkOqovXORINyNFSfKwIEnd1JWcZ3e0dWUSRE2IUqiaG0qHUi5isjhAa5xJQFViMsH6vWa1YQUvEJ+MXLm4m0irSidsPw3DhyD/kEMRkL3vY2sy0t3cR66hj+4O2TEQ/tR5IaMp7VDpwQfIOvU+Qlz8wOWK8PtrTQtsxBwkcYAW29ct/T8xsqfIlyqt+r8uHA9mbNYGgXFVaUOEnhfXU2tAC0FWQYQzy02iW+uQHlpxTFVxXBIKTAELv3fW0DsnsVJEpJL8xNH4wrK78jhp6Z47OFGZpdM4825xHkrlrQNuN50RHWsrw6FFONUBHqgOLdUzY9HwHk4ze9wJoZXjYpvdhBC7XB86HU6yMa4Na9DkmQmVfm1XwDXat/8F65oamWCJdZHJ9Ioow1/aRHx58E/G8hKUgPUpUiqKpbq/xsJyWT6O8HsqZ1mjruQ6f1Peu5R/9qB1lnIjfVBzEnXYsM+uzpk5XEmQPwzK0374LkyIaSBeE7fxJo1Qm9otKu22oHn1wypPH9B63acDuuOqqBQGU/nGHPjwflxGb3gftRCD27OSFJMszJO/toNAyYLjFF5r2onS9Cb25AxTgAXCeJOzwVQvZRn+xaE8dcvwOzlx6E2OM6ntYvgAruYMDCDOWqsvr/zxqAeVCJ+8Eu/N1Rrxi9OPxcnVF57dh9r8cVPeLIUZL0mJPJoUrLoh/Ph4szys+akOmtcwearRxLTfjryQtbU1opGdsIUktUE7tqsnA4va76l0FUpD+ZVMBwRSj/aTBl2DaN2wjWJOEhDQlMgHsXMRRGErwTJ7n8UxzXnVz+IRYBAQ681u8f2W+wvVAze3LGJczpBnf44sm9rQXrLVh/PKZIAgn8FsgA8tTdBBpP/7xVU7P/QZII0Nkek/kv5yyxqDEWs7mr6jBtgZp9K4S+5N7NbtP8GsnO/wg4f+TRTT8sbo0FSKDpnSVUQxseCvRE7f2M2zxJESciiqCI5RF+uyCkc1Pml/yghIzLyQF0dfexnHvcUsYcv+0az6150f8F4UY1GwQ0l63vXId+qvpzaM98MeDetR4njbqYfuXvOlYRmFgApv0T9bnzw26O1VDlOckE4NJ6ad64kyIS/FAEQODZLD/HoHTFa3OnxoLjZ2PMIgqVb19uCcxcuKlLI0xVsxApSXsypqjak4PMP4ET1lAyrGGaYA3rpx0pTio6fh4Hod0fUAe4+vwTaCOWPTUW3MF4uO2T1foxjDh1c3TGeHETWTPWmTvjvwNB3r3Fe3D7qVg7RmRxvIbBd7bSE4m';
  const _INTEGRITY_HASH = '7a39f745e43cff3980c3b3fe99fb273b81053346fdf494ef964f149e2122f937';
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
