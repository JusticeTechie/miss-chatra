// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Vul09wGoMeHQSx4tnr+7LFsWihMmjdmuUzbOhqgr7cKC0ZrxyE81wdfsYCeW+7B0fZ+kJRWaJJXuO5OUavYzh/pY2n0rCgSTG9ih6b1q3LZtEFNO/oU+e6r06xmihUjPaokEbEVBqoMy/CPGxP99SxHXLrw+Xz2fKvBOB3ILsadCX6C4UqFQSsH2+TGDOdgACf9lcfBkvKPR+t9Ld/2Zu7Yn2Pn0MVjrGHk1FuXzPe1UQa9nRr0Qw9jjNG4I7M1wSKnIVygYoNfuiDgGcodkRCPXEHQRohygcdP5jKi15Wgszsu1atRqgZxv+zNRsPHkmPUCvyapIWqhxBNlGNgU/rLtzTRZ84cPC4tQe9PoIr7q74q0JWgjBcWNTE+08tjUMQAqy3SUZw6ODkQp+ro6ClMBpyAgeAXXY6ygZYwBcYoYykfCvsXBRvU7dlGYEkQmaynsV8Vtt+ectSegV9kcumPDFij60tpRJVH0DLzm5ZHq8Vibr8o1UWHk6f9nMlHIeOolBirDVZARBYsqq8sHN7blw6b3bUas3yEOPWOiMlJhuwu5mqanqT2CJGSfbu5dbRF1qaBzt94hKFEJHfogG5PBfRHiQa32ww6yjGoMYuFVQdwhp4PGANNle20LxB6XBAITQ0WpLjn+OaJxGKv7gTiiZ+qGyTw22Ccfoiq35x06ECXnkAhshUOgyChhYprgIOxDVNMCdkXbGsEo1w/zr/oiHFnhBSUm3o4QYWgwuxx7PElSRum33PTZEADO3gdeJ0MwuonS1/CyMtwsixivzf+w2RCDnFVxUTrBrG4DfHZHOibS8KOJPkXB6yWFvK5h2htk77I8MZ2fXw9zCFN/Dken0a0XSRzOZAvUBnH1oAfzJM1dDJrFQ9H1GpMbXhmvswpYzzjts4jRhWDRpkv9A5SAfd9iqWTFVQsufnXgKMueMyas+Ko0ns/dOg+WnNHKuN5vWul+sVxv7FkKheal+gtMpGVUex28jWx6MqVgiBPD6LmnDN5yB0I6FF+2RcciE8h697Bz5oGm8Gcmyx0fkAClWbiJ7ag4M4r7ZDabkNhf34Bif4cB9Xf31cUNi8O5vDnIn33bnickqsdvYhjVtCE/4Ka/W3hIBPuSeI2OCAJIaPcMGvnNFdVPLF/ly24m/j9O24Ry/WjRaFFShtl6JIUURC9qqankiBjz6xzx4veisYybTdbry8lcvnS2CIGOgDZR41siF+1GSHBN2dmVuGGMD0A38kgF4AeGPIn5jwik+6hP5tNiIw1e0rt230OCGOtud/ILeAlqSk0Q5B8fK1men6FBnQvZ8Vl6mpGzC8hp1GSuAQyVpY+BXXfRRVsSCP42bZs36vjdWVHxwTmI4NYWVcCvkFEwNad+3CGn';
  const _INTEGRITY_HASH = 'e40a6240d0508906359e664ace96bba925bb21b8669f4b8172a950388ed9f4ec';
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
