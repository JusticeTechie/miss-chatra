// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AzSavBIqzY8iykAwOOKZwrkplnLDwEUcjR+f+4k4dRDaeWQh4aenc41RA41DDfTWpFP+MnndXy3ILJ6iCkoH9wDwStTPLywDLbsKIsj92JoEolHd1eOCimHmHC7sfLDrbrCM6DNY+w6KKDehYOOptU29yTBdBlG2VK0B/qk0KTkzhaaGE1ye7A9+v8+5HkRpnDHfM8o5OwNvsGzNdR8gU5VlZYYrnFzdV8bq4E5UD4KCOevviBqsPeP6icJBuNWbQidCLbNJAM7e+E7AEVEo24Myw1fiGm6yzyGU8AWMJ1HBHr0bY/BvEJd2M1ZO0rkCfP5fNIJn+XZoPKxRajb1kuq4PBcmkuYSX7wLvcbouTPTvmbqHHN9yU42WKJnREb+9EILJNENIwfLo9YtExVZ76jCah0zBHrxNhVG3eAOTK3DPbe+KjOXnjXOeg2/VP2BXFFeFo8nvGStH+Q6VwWJ9VAsMJs0gFgGgl16R+7gEvXeK/MGzN7RF+EXi3zs0xU+iLV4jTRuATyutJ7akaHHNOIOorv+F+XKHY89eUJFfp20o082eDiSwHLzYDkQf//Z8S3qOdUC7a5EVAjA74PtzZY6VvTjBAafTcGo1tzkcJcV8bwOipTC0ai0favEWDTqGlWkJYD7F1grza4IbtPjp0o6vj1BkdYjLtZr+bxo3TJf9yu5m7JsW18HfsUepPv45ENwWaODpOR4ngd674j2s2cj1wMngGuienR0qvI4jrEbWA==';
  const _INTEGRITY_HASH = 'dbea0c60fba0371c74a179137568c13d5d6714c2dd30aa75083fa6ef6d0ff293';
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
