// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0C52r1TaRftaEwaBJ7O5gjtqgVulqjtc2PQtPTXCogQYu9YVCKWHUlz/1FmW6rSd4dhaZlvzkMxm6GPJE4zWv6af70ey3j5qzUhawP5f4AK4W7tWjJJ/oXop8bkQR80PAVI5ZUcUapp4S59iZhP2HHq07iFjrCjFiiSJM5es3Du+ZP8YRgajs+/APshTjuevspBAYwPNjeNp8IgXRV2/L5zL/LaZbo+3tUnNpkao6nuFrNL7DkIS0IBZ/Hxzjk708X/anLDoWsbR6bQ87vg6HSJFZiK3tdXqgCX5cHlYaYJHgRuWv2OlI2tHqnbSmHd4AnMQ28O54qTaxeAZx/M+CsO6xCDxO8snmh0Eo+ojnLwD9tXgaIRQkOhiPIXO7PQkzCTLYQWrM2TmFhNkEuO64PhTJ+Emlxl47yevay4mdpDbl7/sioMLVd5jgO8Qp7fDsTuDVbnVNF74ymvBSuE90buhK6QAAO9eKtq0WjAAdffYbd9R13CVnuRBPYwduhMsaY9/Y/cTprlZ1e6Cqx26+YbWIKaGcE/aDJO/7iDvZ1ju5+RX2QU7765q6g0wwOQ3JiAYTO3v9g8Bk+2foy8zIUDlauVUmP3oPR1GOZZT7EbPVPxgMudhC0V0TV4ATfjV9+lp1E6K4l/Jjd2wPrU2fpY+B850Zsb0E7RJ1W1mYmc3/qTv7ruY1LAs4zg14rTqVYi/89OaKkMcIFBALJUjs+IK2RO3acQuN/BYKLpIzHEPcvLr8FIbi5Lviw5HfztoICqdgyPg8XWgsUj5hUTxkDWzFdqPa30szC0134KD12dHpBEMDm3zTer3FvkfKnr6xAUW+Jsq08osefHStbdep+ivKyW648oGTngLVVkYg3gQWYKwAp6iNSI5mIAEeEDd7DT9rQI/ql0tvcwgREnTa7u/BRSoC1pUfNomgQWqh3TMcBtIuTdyHYvUl0Bj+WKkxXHMDzFhsiUpTixnu3Uubteqh+Lrd/mvT4eVcrhwGyYUxxlRv+GwL1jWG40s9qihPrvSFjdTq/xkqzdka3emIhJKigCSX5oA8aXPirqczW8oF2c0MJNIl17tapL0Wy/D74LzHP4mGbxkekoRnp3dWIWoCLMTAob0RHHd3OY9xSydQUFJM6ZMQWtGc+PK/YhFpaugrmIdmKdaelz/CUOzFCrW+WZUchjcKUKJy82XXGCEuxhivDcN5o7TM3v7dK3lpLedaFEXVw==';
  const _INTEGRITY_HASH = '466bda8b4b7d84b8789aaa9351da2816385836e6973cb3fd8bc361b8cd786188';
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
