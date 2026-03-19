// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'F+v+jrUQ/hBbKh8xrKqa+jMTNEFioOijpgKyQty1EcBTm4FArtX1LS0Bq+aKxwnJNE2Riw1uuTMJbQwOKgJdA77lwJ474lFZVQIXbhvSSl9dibydboiyau/qWDGuEe+ls6bq4YoFa/c3q1oAnscc4dwslreogEPnbaB3sixtbxRzGXA9MiTsUOOgRRE9+oajBHkk0Q+CgoooPyMLEkmsFCr5ZOR5nB/hrvhkSawUy4LEKOdQBPI9l/NDRTVGwt7+d7gLPy//gzkQuCbUDoqZxtG/D0sbmW2ebaSwlPnsBF9L6cCL6OScaCuK/g0YhjLP0/RVOsvNabH7I+79mpF0qCGwT28PfbjLgiRKADny/8JIcKDQlGiT7DDuOb491YHsHDc0X5nXK1ggWcLead2ttC+aG2f6bt/F0vTE8HsC8snXtFC/U07YBJEUAxmEzZ2pp+/tqcX7+PHSTNTmfaJb5uhcmn2T1lqlWg7ZEv4WRN9ZR7Bql/5D/W82QTX1BZjZPOWagxoqRNVvdgSTsOlzBF9LpTcYiyfumPBua+IV3STNj1mI0LaJTp+at9ljcxsNei990rEeFKdcm7OaQor+jdnwKSWHm8Hla5+vVFtsLh0606ojUxUKcLMixJ2qp6oLyX0Ii6A0CP6AgOkX+40Un7QMfw5iInREyRceDgcirFgs+7ByXQsznmJA6sNFsvbudME/DHky5Y2VpdBcYIkCdmNzFQwl37McjP0zokiPCWX/fJnqBPLZuJ9GZYwpwbXLuRY0+7OEzB4/MuK2jNB6dRhk1kaPVLwPF5bzliBMW6Dt5bgMFxVSSp3kxrPq7t/FEucJrx8Hbh7P2WQ9xA4rP6T/6on1CnCAcL+EtQ8KvPGOMUwwHLtLcNhOqdj4FthRuC4BP9nWAS9jEZ3WFEu0QNWU+V1xbzFDHLxhz+wmtecyW2nFcKzrsJrPua4zOkRilEnb89LO830qzL1X6Jtr0enkGmn2Llv/0O6IJEJW6b8PdLx8sjgipdqgJBa83bm2JTPXwK/o7YPh5Q6E49Pvd4NaFR3nLaV+Gjzt5AzL6J8oKfCoir3lD5NythOHhZciyirHThD6792mGpjpnfexmgnPjxfwA83HcpSkIMDpEio3oiww/3xBh8Hj7ZbxBijUD60Gx1IC93ohtKu/W5Oy+vz0gWNhiY8UKg6PR5MSLGt/AO/9qUo4Wrn9pIyuV1wLhhcz5mz18Q==';
  const _INTEGRITY_HASH = '149f20d8bde6bf14f2e8ea8bbd132d03849fe7343285d61e46b4a23323ce2518';
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
