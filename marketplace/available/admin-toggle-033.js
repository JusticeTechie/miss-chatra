// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WS+KcP5dqon9cwnSf+Clf3TGKzdXSRXo1dK8EeCAGK9SyLN/RD7T1g+bgomvzXuv6u2kxCGtLeSVP+uZtYj7rCSGKHnjOXiCjMtPcTgWrlW5+/b88NLcnunx6q2Vimj5CQzyOb1tyst8acefHQHH/7h4C0JXmY23jg6AXJblq+MKzMEUNr2QgrQXjY8YTHsLkQpcYB9vqBr9NVoPKH7IY215fyHQXDRkSULmbzvmQO0smOUYuFK//bh9/b9YbBDwXROemI7e7wUCsRxCGcFmwgIhJZv3yKO42V26sTSyW/ovevPp48j19Xw8zpkUHdwaORIxt95k1UcQUN9Ge3Oe2saglTTHYgEvzQ4IUz4GyqrdNvnK2PQVPWjjqMDdGMHY/vgC35s57oIgatoE2mAgt0xkLOob5VMXFhJNu4rOCWS0qt+Wz13W9zMQ9tcKnZ5GPGHDV5cXVKY9diQq8IPnYQL8URR3hb16jGEOoXCpaj9a4qSI9cOcBhuDwQ9SB6pXBqXKSVNTrOIivQMjaVWaVibVGrKE8cXeKE6oTNuob2eDZlPMGL9QnrwaKIBFqqJqsFd0oYGZx1r/cDTWw7XGTASuWByHDy3tSvEk5QfYO6g3aWSuKvuJqcwwYX6HlrZjrJ2gJNXcKqradc5RH3CzNE5zzAmRWwCscI23j3PbQM8VE9B/prwb3W2lgiA3eheztttvteYF8zX5SbVdQSkNuq2SCACCjcGwplioHD9/iO0sKGG98xVahoyuAffwtrlpeTwrKIqIdsFwFvhJhyVgcmZIf74x9XImTtvzidJ2pv4F6VpqIPS2fyMSxpCTYJcmwfozx+azvFN/YhFZi9C7LyVfl8NW0ngMmIHvUQWVdamJQ4ftTj5pm6Cplpk4NxRCvUzekYLMauYt2h2KqoIvDj0knJCz36YHvtnliTAkCex6eMu7Mt0qYyNmCIMMFu1p8F2HGwfcx2haz/d1xn2CrFES+so4cD8MVDOfQixuyuEKwjz5bsxdlx5083Td';
  const _INTEGRITY_HASH = '57573a023bc2f5e4e28f7f6f775fedb7e9d4fdeaa29d119d1e5d4b862e692e81';
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
