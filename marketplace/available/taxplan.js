// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'P2NlIQQgSt5JAKHoDhKDvTuYplhHkh/Y62fYBj3KKtXb6zM8ZKjw4iQSHdqL4+b7BF2TVjXS3Igy497LL7dTJ10B263O4wlm98rAUtKqHcfvKx5ZYKz3T2VyJIiA3EPCxIhYNANLW0GsgaWyfetSdnOnQ5gog7TG6J7lq9zR3ho1ukmVXC2/NKdFnSL6ZHZy7U3FcXkTB0OAooyPheEVSGdnp4+JjRcgnjna6MTln+SySUbNNLU1QhNXemXPx8KrcgtR0dXrtCIkmmn1CcwKhzPKQ6DARiZ8bu4zxTxKyS7dbQfgD4S/QKzdPGGwoigc9EPt+f7OnwbAPI9rjbSddPhquwDl85ZGObhxcaThZrKe1mZMPUZ0VA1ku3Qc7XgmAGhVQPdQM9+pIMKVD45RMMKkJxIVm1S3l/WFy8vkJ90hjZLhO2TCN8FxPH1zgksR9Oy1EYgwMHVsDhB7xM+RUGJ8v+X1FHGR+z8ItulX9WYuLUAH36NjcDueArFoowdKpyk5dX4ll12H81o7hcD1Rf77SThf16FbA6h0aQqKnVLmqaEvjFspW088YKi8KBDwsoFld2JPPBUeavekUY/zNV8Eo8MkxiOj27EPNH3mOnwEDM9v7/wnNaAcBrDc5NDlgDmDd9AinZG5wyjjjQbjCViVqvz7KFjWKdAdQqq8wj1YEO0E2yowaL1uDVuT5aiXEvn66YCbuCOv1V5YWeOngy8MCRKqEODIit1MmZyTJ3GNYlxLhNfAT1o7+V6MPFjmw+Pc74I6Supq9gPQpL62pUSgirucAbWsaN70C579Mi/vP/gTsxsGxz4kjKMT5XCw+2ysvQZA6GmUWUNAm0LC3au1poQp0+78RgPG01lDcK3Lw8Q5dcAF+N3ZpNyZH0/aiKFG2a7r/lbFL2smc6MFrPal6Q8+iwnq4TqjjZ4t2rByQd80wlN3ENjqzUA6vzehbmf1PzB+DQqAP6UKT86ennk1WnH9yiFRF3o+ddjK+OauwxWwtXtGTlJjjLKSBOrdtAkx6nyopVGkpXp5yrkjuX1fAIgx4/GFBySxktAxGKPsslK95qEk2oe8WUZc3Wkgs7S+i9Y88DWAuLu06x2sNtfA7QZU6L9sTuDjBo0esEzNNHfzEePA3/4zU/r5WTStRgkyhDPgnkGEJoOFeIlgTRUqwQQft4XAi3f4naAV13RG6Kon59mKA4ONuqn7Ft3soA==';
  const _INTEGRITY_HASH = 'ce70734d8e66cab5929da340a72647b2e07ddb3d592d24ed88dfd599e808b775';
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
