// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'diTzH3IIB/aIZsn2hnj/mYLbjFS8BWBuHQBDAbB7sH+Zz8PrIzd4TZ5Rp/Nqkom4f42MLbGZ7dYrD40+ya61ujSyN4JonaC4k63ap96GFOXRRP4ndvMW2pnHYo0B+D41HuDplpmlC3VSfHo7oFLYiOSyDaYZXmanyGjhrgMOG06gfvZJAKGzhZerWgBsb+JQ78oNC1ClrngllNAsIoSyAr7B7HAKEOKz4/s/UJtSP/jRifYaFt5lWKm9KZu6WxW0iX0Ni8coGaAOIIJAT47nt0nNc9K3DU3paH5iLCus6cI/YEKRe7XiemHxDu569mbqY49IV7Yrp9Rpd/Er/lajLFneBJNgi6BHJcAh09XsYnuoLAMzRgKDLivclt/f0MA3h6ZxmMXWgZbOa3ZRQBFaeeszbTOC6Na9tcnVB+BFcq1SPWx6E46NuU8Q0907TzvUL/bh/w2075STf7sCLRD7qWYtjDbHb09R0jSuod2d1zmZvo3yUz5FRvpkQVVSRi/8gvLmPaovdoqVHBxHV58bCCvlVRhBKKV25qvgh9jwGZ9vSZWP6SERQFXQMHMvnDsjyBJO5gj5q9dxukaVrBTu/mdhtLU0RF+ooYw1YfpnJxdgZNiTwmm1eNVNwi4Asrc58OJ1WDzlwGo2zaiLnPYTcmiwdukfQS7K8tJI8BgfaHxGq6qJAABOWgt/Lam6em1BCPQLUlDSTZE3LY2R7Qt+DWVJgT88EATCDvnaTbB4LsGDKwwcQRdp7xBdiKBTi04k/HnCiNvUXkbg2jOfGGEdaXRGFWWJX5R5vw1B7YyC0/8UH5Wjtt2v7Cmjk2NQ43BPwiA1kqv5B3uP0CzxrOriXOyGenT7ILZOu9RHpr0wJyuCelfqBb0u9HVyqzDtyH8cg4RV5q0wCPAqfbFRtaDpAkQUxnzTXC4R9bforTcfjxyVAM3frFBMWVLKzuiL7uoohIuOoziaPkT6cOgs7/Jd09oJellPrRTUzuIZqBV5XA/edvtDsSEeORpThOdZN/+8Tpgjzxpccv5f0nLsLNZr8t+09cO3QOArWfwrvEe63TLLBkt4mUOBcENjQO85zyE1ZCVXfV1dRPxzx0tgw6xMxn4BEnYSC5UQskAEh5aXZj8GrUIvm9L53o1n8fv9MCOw14bxYBt4anCwboLrIZQ8SKcXJDiCqfnCSF3LPOyufMfLzAIT4fkNJabV8fD0RnoTu6+exP8S0iZ8ObQFC5F6jMdPVbCo78BmKFG04wglWTwTcx7tC84s9aYgiHjO/1/G7gbMJGORh+RZuTMR/ALuxynvgVQoQxNPvEblOQ6do0DXk6SYF9y+XQigVaUJ1VRPqrRmn2FIEPsmveSI+m4V+/UtYApLCD7VCBcObKiD';
  const _INTEGRITY_HASH = '1cdb0ee860f861e53749f8c2dfd479c5d95e5efbfe8ed92fa5931fbefe467389';
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
