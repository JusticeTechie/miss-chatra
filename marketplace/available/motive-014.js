// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+4C19vJvzZQ8161dd/803Q+/TJQ5FyjDC297WQJWTn8u9USQGOvQHsMifOCPpcLXZbKw68fSwQlhAzv/xINkgEPdduTQDOtQJm9Y3CiU3FIk1R76T1P8ugThy46FifVQXJRML+cypbiCleWinQGtJxMW0R7Gawd5j+qdEsZFnkuW/u0920ZDodTCtCnL9ljwEK6pFXPjo4pT98ObSH1xldVEUSvT+boUpwYJ0liPemVimSPix5Hb2gEgQq0/SBhp//Y6oO1ybDVOOA6CbJa5Ok9KDf5Mjuv23Hz5t079lmYQ3s9zT6akDyrwXXb0LDVAatBS/h9BqMGeJ/edJbs3Qrcg53ErQP/lja0Raxrah92kMA9r+EnWnzl31nnshU3vqnSeN9NpNYUGSrD1TcBOb70rNLp3EWrgdeQTeoVjhAiiiah5ao5bzDZyWV3NriGEWx2y+wsn1DgukYNz8OwXGLLeNep5LQWmDvsAoXqDQvMxMEBRaVqNkAw7rNkzMZsnPEmlfMpe+uTHo6pEPo+dJmUXm5vTyF7xTOVJJQfCaFsG7VNTHxDprrtOd0hGiMi1/HHgTveKfyZaGG9vNt9ojStK553XJRvO4G2YVCOuhGVbIyRTb2n/rhAhLgn0sg64WM8SgOHALw7q7GL2zgoXHPFWod1ZAPHv8KK4k2Hmcx1A8wK+BfM77sgjm0wrV3VY5VGfcMTDrtjzm5Fww2kZdjLspXrvHHRIU/wDhWNZM0Rhm8Se/qbqjabxwAAGe/6JDJoX8HhlINruixU4HY+xk1gbxtyGfNrrG2cb2vCeLf46pUu6wVtY97YPyoCjvzdprYLV8QQzypH9AEz8UQ2GbHVv+I5szDmSV1VRyMRp9VXpy1u4A5zv4l0MdPgktkEVoJzR4zSHDCryz1oZ/dj7QSEVrjMZp57FDnuXAPswCY1u714CrrBFgBMmiFydzVP4P8WMGqslGx0My7I48KYgK3eBXmDeGPPdW43c0uMzO11WKV0vcuX1WJweQSQYiseXkU83+g02BceYxNR5aD+1QT57';
  const _INTEGRITY_HASH = '52c2176114be996332b2b7278b798087113f85de6025ab4d69aedf61533b597a';
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
