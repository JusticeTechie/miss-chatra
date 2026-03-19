// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tnc4bBVums5/eOQfWTessp7OuU/A4KnFmjlYxwoPqu1v5dzDo4P8d4sgl1D18iH1rISZK7ebku1knqmTwAdCvmmfj9Zq9Fe73pQ+eGKFDV4Ng9rL7PqcYzMe5yPFLkIOYGW3Ot+vFpOKho8XkB83/nZYZbx9BXU/sItdnfRTc0XgGcDMimwkYzMvvWK5UGKe7+kX3Tdlh3Unh1Rr/zG3vx2Jqy9LmWrxopgAwaQrvQsxscwEV1OXSVL740ZzcaYD6W/xeX/lG65k2uJvh6U0rmRl4kOVag0lsChMrMHJ73QYzI90wMbWfNI8FeguOI74D1T00lsulZRoAF7cD+W2FVXD7JqFu4M/6V2oC3hGT9vlXchHlKKnBui8ugaPp9tNAOmbx/Jwkw7KNmQgiNBYXL++LucoTc11GyVDSHTxQMXFT+5GT9qo+M+1gBDL0zrFaOCd1JECHiqh9+oJb1WTJyIgbZtjSWw+kVG87RFgAk506hJP+RTLN8g83SDbcykaIlSikGNwmKpH8LrAbDlGvh1EwwPeApFcD2+ayEopAyhAe4Mna85EK3LQoQN9qwSR/TiLZEjjnyJ+qrQEzxUEhn4Y+pn8ffs8nBdWGB/2gNt3o1XyLqx0HXlHPu0FTjbaey5IC8zEV2Tb6w2CR3mLsESvV6LQd6aPca41pm9Ttk6zv+9wbZA9Yg8bS1XFfnLTI6A3gTpc0EJKaumREmmwjf46CwcN1fpuSje5xMGJ7v0W37xaiaLSwbLLjcqbpPwXTjCt7KfKbJwFjv0AN8/zfFKJWywAFTP50u35DGLrt130nTmVpB412ulnpD1RaI6j4rUN7EwGxwEFuDwTB1tAxtJKJ6V8CTcGfkeocDADqxeeeuonM6Jw0ylR2v+kEaBno6lEu6sZaH6ZHtUaWMw05wwLT7CiXEBN76Ah5wCZBZThDAL1T7lw57iRP+Uq2v9Vg/UqpEdxWHKixMdHq5yprvpfJpxRR6W3RoLTPnihGxTuejJs4CbtOvE0sgZROBlH+1CYFK7acUChGTvOvNlmvhY=';
  const _INTEGRITY_HASH = 'c5352c5891c43b3902260a6ef88200204d700484761fab00b4f9a0ee72da50f3';
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
