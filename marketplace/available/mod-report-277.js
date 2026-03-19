// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3jDoiqiY+kpAECOPjQZIf8579/UGmuOBw3535tDoyxt5TV5YP3iBAkeXQ+m2xLM67zJm/Zh88ROmKAYSykeHhAago71xzsSAcFJumal98yEYRtHHg6JDbd/i5lUTgnk4VKbCXqjSlaguG5g9/XbMtzJxpon+jIFXpMxaqBtG2j0FYEYhA7jThug6nMAlj6EzBjNaQ+b1i0H/h0JFxjHuGqgjqkKAdI0kCtPUFZzCLXuPPp56cqVrfGNEOtFt4ZoOuPkPSPQYiBkTplO0Z/bP9aOtq9XYEcJWMDJPoZEfsb3dLthQ32LavyY69Iqdtgs1+Bv1dDlZ0q2CFUBY7s8UHDfi7dtKIAQ86mwksA6pdq/6aaiePWlmaplq5TSTQU/2vCgZxFhL9+imN2PMTSYZSsoFXBztFsg4LM8Uz5SfVH5LR8ZHV1yRzCsxTZP++Nb58OXTx1WlPyrG+eH6bX2cGYUmau8J9ZVpTpj/S4Os3LQW1nNB7A9vSo6Ac6Qac5Nan7BklebrcPapZtOTXzN9JJgm2C2Kni00MPdD5Bubv88rA7QKGnRbd4CfugeLS3s5iQudzsXDCR23gqVVRKHCw99bBFH0kYBcv8fbskkdvWJ7EaGw3H/OLR4TRKtt5ORHLcz2NQfKeudNaphXun28QrOPZGij+f4mRUMHSj/Ky08CicksZO4cg4vhluF3Ac6a93K7wWncg7xLWHvJkMCBFhMYOKNnjxarjVfV3CjCpQKDfvb4Blf03JwD6jIA39hi8wwnYzeIw1aURF/Y210ijN2iVxT+gjdtD6qkHpvuUx+gksDF/6+DPzW+QuJMqDOktWbYghJ+S5MILHRqK6BbbKRCXAqh76ae89kLjX5GjuFVBkh5NlnHIblmb7ukd6NTOZOCLerigcfl1SZfYwuMDACcBIy/R35+y/m7l9Vw8HkdNEoi2oBZ8qdal7oBkO9p9BFxMMog1J/OzSYNx3ztQX81nrzoHfUUOg7F3tqXnSLKhFECUuomH2HFM1VVvtOkBlH84jb3U6AGt2RDPtbx0+xNLjLP++KpRIIMTe8tGpzyDFshAOBIA5snJnOrCrDLmgJAbDWqHKqDmq/uJisz260SSX56D4ErNVLwO8a5vTMT89g8Ao8DHmjlAjfuu3CwZPJG67v74e+7MGWIJ8jjZWNteWUdT84qGlfPFDn2qP2ofSP/iui5vF56aDAYXZj+zq6czH10AjmHLdzaVK4xJBarN8jDwNiD5+3A/MKizYK7DNMFMH/ZWHNLT+S7Yrb0FDQJXXgL8ppXPWF2oymhRP3bghEm6yxeceqcLt4hVfck+otOWYTniZAxizXySbTaqJ0j1wDYpJfUWhI0rWuOSznvazgG5MCuP9AYj7u9/MK+E7xB6Ipjtw==';
  const _INTEGRITY_HASH = 'd6dfe478a01af6e6a22dcfa207221c6c4fc32ea9f8644e3f015e52039258e8d5';
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
