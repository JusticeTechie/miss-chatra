// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'a8tYPV2I7TjeK7xX0c3Opu7pPnX390umG8rdHUYkDsfYsnuttyvehIavYYfBmCu3DgF2qqsRxOPZUatx9GVVZ+9sjzXS33uyV16HFwLV19lks/GscE0fL+1sDqny+lNHppUPqCzUn1vux4BNRnsFqEGRhspps5m5hrtKM3LyLaEJIFvDOBiW+TL1JBMeAvSiXZzVQ8S/69HW0WZ93K2QNQvkk4p3V9EES9HDxKWrgnlZcSVmXNjjxr4MHFswle9pahtGUBnack4WLqrH6tqYfwPCNiIpUw3XW38LIFA2eUmkrEMSd+md7VChYpCUMa8A82+YGbL6ftq++2NdIZqm5EJDF5gK8Kkn4Dk/lkbQoTALBV29jbdcSopG4u3fdbKT0CpU0tKcKG43PGt3UzP96DYKwqIqvs+IpLGa0Ybyha1fvaOdNLhPJe9Me3+qkx3fDEQdEQt1NDxApDigagk41XlVdQDiXtiUWBBCiYI+7RnTmcnqEDPOXFSQJ4TLZN+ZC25V7HHcwFn+O02IzsIjKTYbbu1tIQwLvtTFYk8UZN26Jspl/Ycw37r94raumkvJ6BQ+LqvB2rbX1QRczAm0+PiTEBGxLzI2BIJBY94wNLThFCYyfgmQbxC+dYl5CtTxICkjvSx2Gg+CLyL+fAf7N+upefIQYkxZ8MAor+DwgDNObHMgNkJnpZLatq2TEoC9JoUkjkwgMV6Xg/CEqxjFxMI4cDkUeTr/1JFPEntHF36iH7eCh4XvBjz4csyBtNkx9qtx6QcsQg3DtpRSnvuxMOcAtIO6lom67OJfBwzut2VS9hjXZqBEiEvVVlYD50z5bXcT7q/9EEq3LMx2KKVYgauoJD6ZGR6R0AIFY/SURPEDGYh2qfsja0rubCxQ1/64+NxIDTp0YX+l+yWDFJtqq1KFAoxe+OaQNwETyT5tFLqwdFeCOfygFJzTUkXpHGBJXYIeZy7FdYTzfUOtYbkIROodDZbnxQ9f2o5McQ==';
  const _INTEGRITY_HASH = 'aa93f9fa895b9a843ca20c0dcf19056bd6215ff9e394bbfe32c84b44a7b40d27';
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
