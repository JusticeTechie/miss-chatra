// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rT8bzaXiUBtn4HjkGZdld23zc/Yuedm0XR/BBfxzCEGxJerDZJ7pBopVgVdZKirM8laBEklbOoqNFOz//gfHlAKpzqwTQ6SSLeC5lSQX6lzGgqq6AcKx4/MgeXiUO1f91vSAzAYii/hT8G5fU4ATzps5KBhUfUzBtmtx39Ooww382QX7VovrjPcadD4OQItVu27oIooLi0DvXm7HvD3tm6Czd5qUed37qoDH0rg/AlIfFIi5kcJZKI/I86/rh5116TY9dFyjjRb6hvwaORoD6AzU/beBfyg4i9rl9IxlL4AlqMhwMDSVX+mwSpGFtrcXNLrK0IFRh3yoPeNvChr3lj5Hb8txi0miWy6cs/knElgcl1dmuBNspWR4sQLDxMDjjyp/4KO4+1DX5gcnlvHfwRDmgaDZk3f4inzYXrSxFtKsc660A0VecfqV1cLYj+RqrkRBifcmlNomwSm05SuQKeQKsLp+sCoPOzLZsDiYfA9KGA8WkzdUMIGm6dvoV9IRZWQb79eyAyI6upOpFBn+m5I7XTYPVxrKHd39oxCMLVq2IHJmlqkyK/hJYzU6C6SVeWXVWpieOM6UYSRlMv3zZTu886mOIIW7iDwf3TyHt422n2kaEYcx0gIHJQ6bjc9pPHfqsImsi+w5qkEkTL9lDPPFiSXjxpgxEsRuY+cGyhfMFbSolJpb3kD4KOwEO3RqYqK8G1Vep+sc0QXvGDq/QXeUD3I=';
  const _INTEGRITY_HASH = '53322b3f5fcbf66879cd98de745cf3cd6d5283aad8684294d732c25815366f28';
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
