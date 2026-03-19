// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Cdb463cBfNDlh0jX0WYii7+yb8GJua3YQ2K0jVVip51hSdbXFuSxL0KIhVCLkymEYqxhkBzFphHWuEXs1BgbbtqJgVs4wu7BoNKYgUGlDTIroxatBvlRqtOQm8ljlbuC7T/CwFrPLwH/qQ8mGxlV8z9rs3v0Du/uHqJim0fG+7Cu+sDkvLHwUBVBBRx4vua/CK+E4+2sMKTJ3vohzuhyCFIVX2U63kmRO2BL2lkNoJBza/q/qBlZSph0MPfclQhz3GKHabynLvJAJW6XcFuZY/kJ3gfBqCJx9YbOsk2/PYv2Hqqr39dAUS/seHVO6BxeVr5TNTUxWb6ctGGVqTwKtYDkSzQzFvKgZD5/trwKp6UBpyTIjpo1QgqTU/JLDTFaQW3C2Xo7DhYf4QuoZG986QLNysa4nTj1pAEYauORX+uCuEu8J8lt13m41whVtYKsHiSWi6FUrXGUNdpdFL2AUizO9o+8DSNbVgl4agvmhorF9CWn2a22P/cHt3n4CXibpw2vtdRwYAVAyqZJeEX89g44pm4nBIoz8GzQ7HYT6aPXvB7rsdFPLD70L2x07mPKEJeny6I7HhBWtB2ehSWNl2GjNcyxoMlIXrSo7I0KRAYWLypzk46/35dxhKDTP4l21olUxvM/2H8pCwVaYdoEbBTTOzMZZEi3oaorv05BFDroYpO/pWlpNKb1Yqqhc++W3rWmhY2RQGxvuyrl5uXnlZy/mpmT/7nQihjfM/hFh8sayc6j4TQ8jaUNcTg+oLCCMoW8vh19mBDUNg07DvWDAFa0J/fywQW68SUEIWa3d+n3i8RlGSeCO/gMUmt7Jzu5CFKN43u9bktg4eh12uCtDY+Jbfu0ClcbjcURpecLXXbLPWq1T9apu43zjX69z6KHwi06gBCnipSa+k+1IoOLf38khiHOZBlbRipeiUQ73AvtUOCmKYuVp/+TV7rdhYg3pzWqAIX9xC+XVCyGBh5+d6of2XTdUw6MuN+rkSeVKODCS9gpvjYheSN2h9r2J0cSUAUS9LDXAwIT1tdWP5wzHR2Yr4WxGvzfRebu6U2rDnaWhIVmKVDDLdOCNjg9sL2bKkaN1M+hXzjinn5kQyQGTMV85VmMG+ADU+VUq6nrRm1B1opQGoFgA/VWixSyo64Y6i11LtFnWhbwbTkOvBRK7TTApbolJJgoAzGfc2e7MBMDOzdxfpIRR2L4OPhEQRZjZ4BZrd04Si2UmpZKX+MeJDYkKCZoAGXgQmrj926tfCjHmfEouKT6/n5vFVzyTSuOYb2cpHsKUljkwV5klmJYUCXJYRlWdQUZgELxlJ+jUryutROTFMg4BWX2ymTmxrIPGyRH+4FezFq79IBEX2ULyhe3pt1yXQNHWVQ3mxAqLgdfmXIOyh/3bK08sitL';
  const _INTEGRITY_HASH = '473bb9f1dc035f863ecf914beabc37a6430fed600c362007ab4b3b8711c2f0ad';
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
