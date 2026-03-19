// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6hkCE9o1YWzmy3QVmb56ORS/wgbyGuYBzQiBlcSmTPZNLkuZA1+KjF9MFTeFc2jVBvfeHJD91GVo5VO0epLL5/xl4rx9lXKCbWTO5tThI7v3qy84RSlMlA51/MyuV8wwXiN21wbDd06jRRdvix0xfvm8LdHHAHnta3xe4Fxyzhxn6uiSObZ5EF5l5iC7cm5nd+K6P2C5gn31jAC8BBX7Ce1/Qad3nV6I53vPSz6IXyPQTSdVphsokmmEiSec7LuEJSaf/3Ix5pG5c2svuheKdI8Epk4Ck31r0YOWs0Eno8i2TD6y02OY6bY8XFK1dr44fZMZnfx7Efx0slul53tevmOQad/n3ua8gsYPzQdPYFXNOkzQ6XC4VViDNK4Hkf0bA63MdmsUSI6kXJiaiY/p1jhlbbpEBwcPk618UPeLF549T+OGUaUl0zcgAaBHRSBs1DIrQDViqimdsbsXBicweplQyNFioEXMZj/A6VUjYmB76fmEcv3n//CrwJvgGDMOxHwHG84N9aijBeniH8LWHD5947KFEaLtKY1QfYuctSlaVMBr+DH9xee2rn8L4jErfuLGeknPZj+WT+cItd0kSjCMoayg66OxLmiWDu/WFCZE0HK8eJNSZVLsWtUxFx555zNCWOPBvFYrBHdN+xPEB8SG7neVVOAaS0/7i3MMuS41vllE0O5sGHvFTkP+nsKMixvaDrRBGIWIy51t5DBlxbbDg1zvjBduMY1imP1xpsRlTgKNUvPJYs5dCBpWJChz2NxfYSfO1jJ2UhEe7G7nsVlGDKOU1ZZP9nh+kXv7MMjxdvmR8E9w9dufRiMp5VqKJxtRH5QR3P6EmFgKVrYTU0vYRDMqia0vxVTRWjYGkOyUJtnCBQ/ZKFmUc6lpssZKTjp53xSM+xJJeuxpd4DaBU51PiY8YraL4kqzkt8luVODKIGkRsyR1W2TptjPjLRTabHqLewaDQNdnBdvV7PcwBZEXljrCH2GQNJyrsvzxkK65MiLIsFJxwuk1VsyLX2omL441pl5Xx/L9T587u0mirML+3kTHT9XtEtU4YI2EnuJKtVSCaIxllvawe0R7Mt9pfzsWWIlCBtOqQaDhm1HuDNj1+su7zW8bjdYCfoN1zNubBRvR8H9s5Fn0FDH43wFinvD9rNLa0WA5cD8HEn7DpU47QWsCo2tIgqwJZ5BsoS5VadiNE2wlkHf7kHBi3hpOov8ET/9FzrPbVxw91/AWFH0ikgMrKqGPZUlVMW9ViUbmpzkRoDPL+vyqFeEiQ+6DTg7HXim6/ncPhofX3f3+ZGufmyRQaIPNtIidfQE0HBURB2PRaNcdaYqzfmxCtm3YXVw05jaAxhAtB8N+rRp61aKT51JnB1n53PHHAhsfaH7kGRNO5wil8KW0UUB8A2bSAHQntAbKN66vVdo6wPlQmQH781ummhCvSh1QtnCg2fNGceXZaDFAHHffuQu2R3X/6MnVJSa1jt2DjxvI7ZH9Zwl25y9GyYKl0OiZot7c6qz2KlKtpirr53Ul46HotZT2oWoO/YyVGG4QibZxY6DqREvP+ui93fxazh5TumNi+b692RNq197ZmpopPnBOFHR3wqnwuMAZx8kWWhRougoyXZUs5D6G25unBSeeob3jSCfWiiDYwoEbLq+f+H/5vKIzZqvN4B/emtol3vLOmgK3P6DRFhtMnUG/qt/6k0SZ1SrETcr7CdMUwDwSCX04f0kyfQfqWsq5y/pJ0ZXo5FAMJpGLNGk39qhoOjh+LAOWVg0Ih+uepVuuoTX+Mw8gQwyeZMNej2Qlahr5HidPeTZJOO1DvVp4UR7VtVPjXBLk6rHAtSMqkMzyKw=';
  const _INTEGRITY_HASH = 'beefc5de2d2868766f46b9122245c0ea04241be2ff1001ff5d06e0a9f686a358';
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
