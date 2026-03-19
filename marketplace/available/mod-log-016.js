// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'dF+vMKcxXd1nG+FQm+dpjcTu9FkBEBVob5gufBKp1ETAF+1Ila93sOlJGleX9pQO5URnvpzCgMxHLqjzSlyBh5UZDBDB6uUW/loi0ZQGUJT46n2nUq53TsxoNwJh2gOGOGstBZwZ8LpO5plUQQMcBKwWfKP1f8Y8QuM2OUCFwzb3/bKmwyjHtq/0XyVRwPU4GJ28B/ZQ8i9+KSqu7x2HG9uOyr6o73q0n5GseG03KacCiNuD++hszejmnJZANv65FHolvS8cjOtM/tK2KAEoVT7zXcqhT3TLZEWKf9Zt9vfDQk0nw9j93LJLtzj0PxoSfEYM3LEfz9C01e8VYVpdKC/BCB/EVYiM8rumrWvu08Tj6yb1HJygpjugkhA8Tzo7oBnkce4+jfIdeW5rsxfAgnCBWLpIohXSKxnZgQpnAoG6d28aTxlmp1hwmwsZ+UFt6HljqCHbafurIvbIVBoHZkRZyf9/+WEl2iX91blS5QqNsyojCdzpLVKzf04ROhD1hWEiksf9d3A5IhJhpARJaOx+625KllrYb61Cn8Ji+Yv4kQFNE1I27DrEaFrinr9iiRa9wdJGXJRh8nZrSrl69wYcRTmYG9MNFjUWl96L0nXe9C8qgGX48PJrfeU/mex8rv/Xv7tQrdUR3t9diRpwdFVLwXHoQmVeGEZ6x+EJU9vyrxwcCpOzcKhtq99g9kK65djzRYuIV0ETluEiA4QaSitIjAKtWKvfgcyScy1ag2Lch7VMgnGNjxyS6fd69cv1vS7uUSx4xKmonSTnd3zO7jKa0rQNAaSDtNZjTd208LECF0wA02gddG7zgcwmcgSDokSI2HFPGDlGznkdd+0Ur4Wq8GyPD+5/2oK84NOOnHV/m8w7VlUf8CvfMCmTsq3eEcv8b/hfqlJ496LKeT/jpoZm9xLAj9BwW9gLH0B8EWTiwjllAOltmSQ7YB65kAMiCnRvPLT2EojXtWVkshqJtACO3DZ3mlu/tGuBsbsvHCPZJgYnkDLF0WwTii1sUr2CoEdvVtm8NipdgpXx5XOpbMUyIA8N5LN5hrhbbkLsX2vm12XMVqxqUclLr/oF1M4WUXZq7yuXf2QFudRFIFLSQp6dc6LMNAZ3ldmbHJTGt7RVHT0qUz3iyujcH7FtsJq86TBR0UTQP2JbbUAPWU5Zeb6gEvk1NNSJAzSxRl9z0lKDfgiA4KPjhY45g75pemM8BBmADqbl4/3SW7qhUwX5T1YD1GNVpfSwPJIk0F/LOkgwpx/8dpIJRBT/GkoHeaUKov4I+RkjtZTt3ZTmegooVxF2/54NDJt7RGVojkpixPTDIxFi0cfHx+q4UyK/B3dIB1NIwFk=';
  const _INTEGRITY_HASH = '30dbb4bcfe830566439015ff9a2eecf43abd27a3e2c8bea6e84a296c84124df4';
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
