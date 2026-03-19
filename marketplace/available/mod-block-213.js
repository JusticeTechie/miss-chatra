// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8/MA6g+tMakzELkm7y9eC8StO41RkGhc/cJ3p74cIKnXiHGFmcUbX+yHIRKJIEvdloHYiC7MgS2tOXa9VKxzZv8TMmafgrmZFeuCmQL3lzIlMDLyHbGmdRoTgK0G6qIKJacgZbah4khAu/phkOBnH4M2vdUFzQkWsXqFpieJYpdzjaMGzmipaFd8ixLlsNN1s++y5efvJb4uwlD0DrwTP1FwebnsRllA3XkOLOnVR0S4hk5LSB+tcQMCHkmioTfDOs8Nhz137WMmvA0OLFYPveO6fl29RJfK/CaeP1hHGX03IC7VqvJIrXsO9Ahk3k2rQ+p2EIL9dRmAR7SVbsh/7UAIOQO32kp/61xcQXQx3J+djsz1+wX2ie9kKGMzhAoms3MS9X0VUmluVWydVanxRotvtPYm8J0+oJ9hjKPIj/PJS7UDKHaXYBxaBfV3lf0ujeegsDQhF7wy48OGO+dns4S+JM4e7Yv+TkPNUMcXnz4vQUeeTRsq5T2j3+5TzQkCszKumUr9PX5ABZvsN1AggZZ1wm0eeqR2aPKy78gs/CoAZXcX2x88s0lC1sBGk/sQDNL55zih6UI30PlOIF84smqiCxKjI5ArrhkQC88YdcJj2s0PqqahdDQmoXsOjRe4FSA1VGwfIxT1kForylO1/bWtgzH3WnbuflMP7N4UGl9cJ1vauP8GlJh2maPG3nnQ6s61tsOzeN83D00B6af97jB/viXs3OvWyzGFVkgCorzOlJDIW5Z1/lzVnmuaus6o71pqKq1A/lwjfi5GbKxMsZ5F2LQMRHaClHJh/Oodghp1BMw6i3Xx9xHZ+AVHf5USb7PU+lnQu04UcEcoX/LvWV2VxfOp9N5ALDZGbPVZZqrcWO66YXHaCGA772gL4bimln+qVrHng+nMY811ADKk5u2aGshIID9ZQN0SMsyxfbbe9teh9QZGJJT5h93MCEWiiVCc4okIRlrCEKkVnFQd1vzbMpyI98dJzD3uKTkdXO6cVSCMKuSlVVCZ5HMsTnCpQZ1JFJwlW/2bc/clCZRZ+uHkwaGXahQThIMpJGAz6OUOUQ/+MqZ+9Ug0GUCXHqROsYrAw1LV79ff1I/k8sigyTEKV5GLIFfmOsu1OLehL7idBWfhgZm9eZWV/T8LU/XZn1piKfXEMxkZ+tKAKmDKrM7SPyfCrHKJRl05l+OXFop5zOXLUKNnH0sWSm+90SIRUayRm3lG33Jd2vuvVND0mIlduqpz3r73xk3ot4jeqFE5au5S9VszLtuxe3jXACYOwF6ogSa23W7Yzu8dbSO4JN5/v4PfQ8Z2o/SMOk1+3ak0ll4JoaRcbuGmjjE30UWHimrgkJvybOwp3GciF/hXYuPJ9uSCVq8R6HiNDX0o';
  const _INTEGRITY_HASH = 'daf4332d92250ca0f39342ccc26d768f3da7a2260672086454c8a765ba0b0b1a';
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
