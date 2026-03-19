// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gDQg64fuSF9koiKxEaiDyah2IC2UfTszVa/fxypPkeObP6+KDVlveJWwS1zxZASxCBXEF4G//wiUHMRvM+kJ+szvfsqEWY2PVY8u9lxHDSjxJ2Ftpr3fzMG3Jl8D7bRt7lNm+KmWwIgEN/YwXbmOH7UBzXPPkpsU4uerk6ldpnmi3A75n5ZRvX8+1e8xTeaZCqGGzz8S/mZ3C6T+By46iuFgb2T+ToLChM+OC9o4vpsR/Qg9/MNCS2+eGpUINQ7FMo/an26uGyzyMbBDhSGGM1ZZQq/UrXEErhhHQNd0SrElk4Jwg6hKg36Yt51hGpHUZImOMQ0iFYBjkC0qFvIafeTti2Ho5yJvo7nyTHXL+UCggvve4OGRqmbV97Mf/JZ9p71To6+fz1O5d6vzNJwNrQMVlkg5FVcE6P9ZxOD6155ViMWAQFHRdfsvt+DE9WNSjvkLM7yoJs6viboCFOArvzcMdAJ+XETvUczvBTFtaWLExTSYQBBSLH6gsR19Gv2Daf04tKiD+IIkablrfwdVROxKtsEfWsbsdRf26z8iEjAtll2ZXV5gxzoW30lDnWA5wUqaSLxXaHuqn5dRvP1DdD8i6z8dJeXGtEJTo0WZUV72+g0lKPVLxHb0PT//WhRrjTx5LEuDXn/GhFjOaFbxN1bITqEinqLPwvmzRB/cOEd/my+q4oPzVH2Lf9PytQ2p5IHiAJA81vsr8V2VynTMtb35Vg2NWGvwXWn57SoWju/0DLT2lrNepraADL0Mh51SKMUhoozVhpFvm2G6mSw5M1sTEQHE6lplItoNiWSBozQj5+6NeJS53yarbQCmZVF7KNm/YN8g2JB5Fps7Iq7EOg5RklCwfXOSEQe7eauar654vDwdnPtIBf0ylfnnRSLxPX/xI7IsXTMUKD9XWLlNUJaTmzXTOPME9tFPw9F/Njjn3yEyngrV3P8YV1xC5liKFk4eyaLxOFFOPlCj5Vj1wtaZI4UNVVkmxGfL/oFCYTvKyi6tQAsDCuAdhPHypByF2+5zpk/iO8JbNpWLOy8UD7WtIbtDVr9/qHYxKy4b9QmJy1gWcXUsBSErEziTd8g8AKtlR/lZZXJ0U8Y=';
  const _INTEGRITY_HASH = '766890aa04a77c5e2fffc57c4db4ba9e5301340f3aa7905a80f1a46800fc2b46';
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
