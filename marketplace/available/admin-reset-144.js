// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'VDe4oC+ulym+MEtutWnwELgA1nlhgsFkcT3tVq2bx9xFwudlXRhW1a5sLkvCbsgKqnVLrLMvKuSr528g1Del291UqjDJ3b2Mkq0eN+muA59cKew+IF7c+Ek0B7KVR0yzc4Nhxg52//szgQGJ+VCqGKf8/Z4o0o+7i5WiM9c4pblQ9xNoov7XUk4/Pbk0LVcpDHu9/0PN+8s+NLdwu36Bks3GCnG5l6uksdh6gHkYRsgvakhQB7aX9ObIbv9MSbbUVUbNAiSP3IypgDSv3ZXbyMLvLGkOMtlVSdvXj786dtOzMALlX0oBQTGVRwePtddG60xIuiip6CrWkaWckw2Oo3jcR31hRkbqsHWpPTzxJqB3CGTjGY4318EEpPpitqOf19PDtzx1AVo2tp1NN4eshtEwco9PoCztOJgdnfQvEvyolOe3H6tAeJzU4X63kuBCOmhj62ViPIDYfGysi2ZMWmVNw86doHzQeJh2FWW6FtLWHdrLPRYMj82/bui4JcSZ48VdHxCa5bzddrxDdGdGyli8c3geEY+shNsahk7vBKuM2gvjIGoY6P2HRT+w8jpXCIzFjealFJWJK0EpqQOBzYFBv0yxLWWomAUgcVJtlACnimiQV2AtrtzIA7iqvZaihbdPZ8IHBsaBeeSMJW4ZgLrM46+4XCKNrYs0GdJ4PfFmmcxRAHsUSXbmCuUycIzvaizBNr/EfEZdv+e+zwvsjJ6UodSvjlpKGbJhTXLrMKkKX/NoFVtrVKYTMDp1yJ4zoQrqr9FtPZztfiUKixHutTqneo/qw+KtqWJzJFuh1meJNhmB7o8IAaP2uEwdz/0Ukw8EsWbCelfaXkmO65UrL47vwDtcclw2hc1TE4/89yK4erTDyi3ej2pfv+MD0EDO7FFYUkMt30YvYfgjUPSV0knjI7Fqq5/vyvircWoR73i3h2dUgnbyxfEVWPXVTw1Oq0xWyE84QVT6gmIWyPDc0t3Zf6q/wqJ3+2MtFe4JQ/oINuhEqCq2mzzP';
  const _INTEGRITY_HASH = '491c835e0e1972fdef522ba200c5e6beba0818b9de1f89e6027df9c409d32885';
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
