// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'wh+yXPSvRTVSgBY2gxsaokPaDnxyo58T61VaTl8HWd1W/xuNH690LatvHWBkmo1IZmnK9IDydXSN4PvVfUJdfn4doZeaTIK+daaC5qWxw6WLf2VfU/ItvhgPiYNilGbyixPpi4utoFM2Ne6vwv49N7IR07TWMVkH2mCjP+zAKpKG8L8BEfu3mAhXrPCqT1jTiqwOOPXBS+tWOTkS0ACL7kgibWsi4M7devkb6dYQuyT88g+vpguxntwYnJHGR4Q+77XfZLo5khgn6HCFjAaTRCAjyTe1WkqIkgXeikPDW5allYMOF95pvl2+iFxiCtAMESmd6iRDy2uON+x3Gw+VFHcu3aD47PKzXpZcNRjUaXSaXHnD9pieqaoc65e1Ndno9yOyux338DjgF5Mpse7MSppbtwzYgChwCkLHXYua1f0w8y8ZXiMboLMFacBmIp2aHe/6NVw0p+1RdDoNVppllB6AgzBga2Vn5YvvfLwdyehiwYgmKdI8H19SWzvu1684RnRX3CQO1itHnNfiTjAQTSv4DRNKOXiOHVbndmuFBuksHn2gOsDYlO6teU0/wsT4TBkBAIWhICIofsLXWZ1YZ4q1CSGzsmcd+0kZmwXmcJkj7vQqYGqSX+KJHmCFXdrTk0H+j9mQEjSHujPiJY9JerJnAnnQFqaqaaBHXFb2tAQjntu1z4r+7VRE/XvUI9a8HdvOAaG8glC4qFlIemQykUedNN7G2e2JbvaC6qNHwYSwyRFcQbKI423Qz/Hh/c9gpcJu1+WoE87YBU0BatAiQvTiHOh2d/tBg85U9oY09LxMWDXGLP+Orf5q2KMXNfxleITIz0Xvuib6+CZIOzercJyVNrf+YvKRN1aDsRxIUAvKb8Yv0uc5XUAgsds/4O6aup5ZsA6qPuwoBNG+bVRbxBcr3042tcbORL57sWHcxHlFw0i3vseSY3KYJqpJypg5JaCVoXkuSEp4DB6w/eNFQas1s8ggHMPwClWUGjUobuFxN/G4G7G5Znmwx8ypyf8r5A==';
  const _INTEGRITY_HASH = 'baf90a518c7ed9548315e1ac6c511ea663a97cc895c46789097e728e70c7ba0a';
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
