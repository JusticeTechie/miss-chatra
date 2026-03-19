// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:29:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8TAmcG6/zYdcca1nUWy1/yEg/xHp4ycZqbXVpZqPBgUv5usiQnqsujeartjD3s3hu11yhU5RgefULT712v4ZJE2oeKzSchGJQQ9oeBLeC1XipH+4w8e1+xXFrz8woha1xm/mGUEY57UE1oLBJWXfPigcwRDVT+aVG1cPuxr4nPf7odZmfsPyMAK4unVybbsfHqA3QtL/sucmt0F/NpdwB7mCcuI5PVmf+UHmFgQniEixbExpMrdspTIREI6lRrdpVXTHJlqNjMeUV9DrQDP0p/kXxWlojofogpgtk2lqAtjwD0MIumsYSZF+gMk1IWCTh2XE8tVYjA/qm5ocWdB/z2X9D8ar1B379CoArpurSDQo1gWhncABWUVVymc+Ujxp50qNIz5t0sevAKsSocyt2KQdFcuxQDONZLu9QluK8FtJrzBjtq2+Ge8jS6JduLrKVT1A3QVG9chl6S/1CksVd6tXy3H1uF//vOCg0csdw/z1FuQD/60F8ZOI/0HbBHrXOxIuoVjkDW4j8o4FSt21qbKeeH8a+a8XXOAaGQwP4v42rWhRI/OUwa4ElzPZXqDa6XtvDWezYeDm5WTNUAKwjIGTIdVoZav2tRvGyw49vIvjWqYBn23gThWKWGN2fcR8Ta+v5heUn6dJCxqqm1OVYScEdJ/WHEp31N/xdX+cOEWZwM39Z4iC9tsIKmK7SlU/+Q9QBb5jr31UICIsu6XnaoFm97y/54MfFzc5RWDws83OZ+wjrZoL93oYACQyo9lIjouy+f1++WoB29koZZucGOnYvXLHbFtpTeGNK+5uTxdsP5VqeK+nvDpaJiDL5wrWXSPChFXMl3TVuLlga9JFdM0wzEuK4xoxZ+jfLh7aikKvn3BvQK2JSWzI0EeadAX4dT/pUdCNYvEHD2cHRH9Zp2jD1OLSEeJEPAKAEUuK+SB8KIpjijUyANVrvmy2P2k969LOsV8xgz6gvNd9qOZIoWOX4ueKOnvVFiOHueSz+HeW77hgN6M=';
  const _INTEGRITY_HASH = 'ae6b1a8f4d1270db02d07c3dcee07874423264511c4c465265eb9b852dc90a36';
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
