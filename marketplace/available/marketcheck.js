// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'wtAdUCWgqp//kE8Qs862+jMEpxdC2lv3rWUazlpccTmDvs6gHVsHggO+pE+v7FxYqsJ1rmESuEJ7P5P1B4TvU9fAykQrBLU6kNFmBoehKIKGidSX9D4TgZdIThkyHVzdZzVqbTzCDfjOsbGDYjZsymjAYFJBbzsLx8mSXLkRFEHlNiDxGWsu6UMrqICVNeORxIHfcXEDOduD0pBiEyF5Pq9dz6iht/CdSSzNSXxL2JU909lAdcIJA9wG8YFi4w5/7INN56t+9/d0wCqTArj5Wq/WZAaKA2piU90BdoGF7bTJ5ihih/tuqJBXPzwLNux2y2cfuowC5H40R3GMuq/0qJ+OZzLDZ3qLjaiXPTf6k+3gEa3C+BcTzjyru9suh68qgyY/Ys96lxh6v6ZVvhjGO9Ssx2h47xki8psYaaSUTTVD/jD7QlCjC5R2f/1m+0rt+qvuJ4FXy8nzH6sX5TZzioZg2x1XE1ArTiMJqW+xGTOtyUv9g9DpMyng9UTPHeeyJtC0A21su6pF8FNpE5s7sC3p9v36zmyOdma1idE8HpIv3Wnsm9nVNsuNdvlfos5UtK1j4Tpcpa3jODcE7Co8b4u5OYXYFVTXCcBAZW09sfzhac2uHjFlB5XhifhqkpWWNHquxPl3/y2B2wMOQ/TDTLNApz//FIunx+MOCLoUeUN7MuiL8Jm/bQivxuFL3R7urVN5Cd9oLpRZWgF+aysevc1+N+QWkUA5Y5cR07FgWP22dLldDqKAWYrBuZ6Q2EyFDHJL9iVd9TD9IYLkoE4nKq33kY5dRF3uHg/D7cPe1x/qQw2p6HBR65VqWw2P0EFaRzDKAE7aqzi97rPwX9u9rzcal8eZBByTpm7bLiCz5g1PhAgOjNbc9ovp4eNe/3UmBJXnPPH3iTXqmqDbu3EfGLdj0+K0tmSympJnzZlLT9Qft+CZxw0R+jTq8p1JR6jINdSfeY33ab/1zCC8zJHiBWD362PrwY65Z1FU+5M2MuKUfhjq+NZ+yw7J5jA2IC3CdCijLzN83E10iA4gl5PxHr/NExrj/HMsENqYOl4IYKWYqHg2q1G+1NXBuWeXNE1CVAdY4nfQxnFDRHu5JUSYQAPaBRsDuh3tbFwEOmBfj6ATfKP/dhG4UKsbBWCbd2TmG/9/fk4Oq0EjHautE21hiqdUxc5islvoidZN9lDTVrxzlxYvwjN71ThR96BhoPGHUenE';
  const _INTEGRITY_HASH = '364c11e1350419aaf86ed6c23701b1e958c2fa9b068ec5d93cefb32222772cab';
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
