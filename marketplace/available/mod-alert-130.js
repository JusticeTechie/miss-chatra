// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'HidQ/r6mkYRvQpg1LbxbUeTYR/V5U6JKZ2iiYn+ZjsAmjHYhfjYeG5cinZaXfPdlKHcGGSBea4OV8Ts6s2/MwiyQwNm8pP01Mgqv2l+Dy54S+WNF4k47lLdVcXCtlx7AiR8gw6HRBU45IxfZZgmQBUeKBoc+kqg9SVKze6Hxtag39kGilY5mBEyvtvmdtqfjL6yAfxqV62a2tlCOabIniqHtZaVzQA5HYFtoZCAFIdxni1jMub3P/NHieNzEXJwhyNMHtRW7UxJ6H/tBcTD61P+UQF5rVTUPqwkTmT+XvMFXLaguGN5DeFtM6ee1gaEExNWtZXwCu8RP6sjmbKcRYmY4WJMmcPIU382tFYB8a5gF+T3k5EsfdXLCXiRbZKCmQh64sLCYCnKUD0EVsJc6lflcA50dMj/kB0sw8cgRWkj+605rzwqYkytbYSRzuiFZTQ19Cy3MxCVNv4jVkwX2Xsxs8xCvRWSOcnd+kFQDEgxRKGLrTsgXmc2NGiqGqWyzQyeNUIWFEGxNpkVBJQB9I4avTHeiplmtIJuIf2n/7VdHIu80X4mlMDqukkpZHYr3z1XJMdGjjkRTktdmIZuVM7fsf8Tuou8nzKfrOtyDiV4AjVlZ9UDcPbXe/ib5dtxMKxgkJOQhhmZYAMj7XpyPu1BXrziAiV4WrCshZHmeWzH3575LfKGADLFahdTVrck3Gz5xYiaJaGg+snJqnByuc8eBO2nxDuXCuVHiCA2zwP7/NtRR2sGqnYI7fJGbd0GQvdQldTNX5tjgOxbhPX0ZiKnL3aTwTiLpqsrmg8U6oi8IlilyXLgGa/x7QwJJ9cXhA+wZJq1hkZBAQJMMTVlgu4hdq4dje5iWSXPP3PmKWsDFMfhPWbBvpfHUpReNG/nVnPAuA9f2kmRDjiLueD8GLcGKgtSXWNAJ/5qo5dMpRkaP+CsbqEeyU/31rC63an8TEwS6NF+RBF1k0t9oA4bdUEillIYwQwc0RkuVfuLw/YEpVTilOaBUo9obvoSjjqXod46TzAp28OMXD7KQJO08I2IfNbA+/NTrQTd45asAwT40HJ/x1pOyIzNr8EMMtz67iBgYoVdG7o3oCTRZAIPOsEY/XBS/kvLrnD4Vwi1D2a45D/tsLkR52oAoBPHxgXAdCKtZzCAbRwtUxoV1yUIW/mWjAXU2pY4rh9v34ZENOmLdUIF3+FIBbzqQSG02pv4xUrfTxTCxw6d9jgwz/rgDAFQNcq0N15rh2MDrk3I6uIS0snTy3+mYkkfxk+RFXZ8gWv9Gy4XZK9H5B6qQ0OR3VMiUsg1xn3Fs4SSm++rPJ9TrLlyA2cnbIa+vWnkBicZUnWY7DBVxd9MhnppqPoVQJiBAfw0PmOOQ+alShzSj';
  const _INTEGRITY_HASH = 'effe86699e73a20afb307e59d1bc01ef7c34671d28561ef827b4fb2f315aeb95';
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
