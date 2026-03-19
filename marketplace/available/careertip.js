// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'r5hD+nCDAUzKJk0I5bAdQ7X0Vu9F5PQvN83TG7N+7DlNyFL2fRKUpuIwI6J8yUZw+fUtSWARTtio0+hNXx4VuGptMHEIi7iQInNBucexkwPXfjLo7TaeNXUzrmucawUfA/Ouulsp4h+u0f+5zNJdCePSKlTgBI0PhS2Oa0VViXDgh+jX4YEWJQoCFgnhriVDMBw8H3AiTgYKZ7D6Sw8nl8d9BCX8yBpZC9MTVkLsUN5M0Kw0jarWI8I0NyV1AvGWyFhd0jS16FMJnJmAPKUKOb6KGtWdLrZt8eT+ffQwzWYGekRxvX6xXukjLGdiC9JULvQcjL4tym9AibVC1SmzeZYX2XvyOkOZfAXUHa8/pnjLOnycSYnE2su5vtm2/rN6skhTFZykeBF7q08C1JtQIoimI+MQNepRd6o8Wm3/8Lx8/ID/CVBEYZF+/w0eCAi1iJ+GEO4iKf2OPOTq4+peT425N+qpjbR9SLlwo+Sa2TSfGcaoZLRbF6B3FHUP8Yteu+deg6PPTv2NMOK5eXv22Zdehwp+jLMq3dkv+oQYD+OvSdvte++0GH9gA3iPEUh4c/106So4d3ycLr/i2URjhJ7FO7xFm8ybRTt4Rf7KV/Pnwtw1m+JdIZqM/bcuZoRPP6kvOX3PDQeQbjNNtMz2hIrhCJasJAQ00YT0kcD8HhC03NIOWHJb16ilwTtbziSyv/d7oeKWk7RJmbCShtPcVdOfuIpQEaXCYFCxVjFkvOaABmuDLpb9Qr3buiNR9MjHR03wlIVr1MtkEwhGBQMUNmVRFUthQIZ01sMVkLjVHJiWj/joSDo+uF5WtNLAkMNnFWUzAz4NPDeQ6+gfT9obs9uHY03aWCqSCfkiQW4gLbk+u5CEWw6pqhigIs3lH0Pylsab8zXQPHn2Kl2g+QrratCBqlUZwrLBaMqzLXX0emqZIySYKII5kYECPpRuQarInfeAh9FDxcCkawWgzAHqn/LFSIkwCCxHojH49WBcliIEWM+PmMzfAP8bgRIM7VmEjh1LoViJ6a8Z9N2ZksP39c5xPcRj2MXWRNA4/vn7AMnCY/imf7p6+xjy2+celzukOkE7f5xRNVD/lxqjBj9eGXXJYajMjIsitw9523G2rhZHnCDe322oGA04hKDSKNaunhmuqvwDxBm9vKXXeXzV5SO2Rnsq4bswkDL+KaIcdzz83fy+LAMzusT6IYGyNw8X49Aag295Epg=';
  const _INTEGRITY_HASH = '22f1d4d229cd9b7cefff1905ebf1f11c37723f2582934bfe97a6b19c48a8e943';
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
