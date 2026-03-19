// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'v+MAHoX8RP9eMYgt7ZVn+CwQraFTjRub+hJV7F5G9+Z3G4j5GrvUrusAhjJDtnpvtv4FhCtmrefHd5oM9eNrG4ZhNDXgQCMbgs1E2D9iuG8d4rVqkYjetb/FfAMMi6xgIaYttckhAwFDiFsjv8pa9hkvWJDySQEDUjZ2eSQXDaq8dzAi+VzM6GaBKur2LmwwOu9gD6IQ9kT1Ofl65P+oVbfCNScUUXh1fNMou022VarQOR70Q+voxhbWdHWzMaoes2OZFmFCszEZQUQEUqz71v9DAfCrCTt2TJNbiJGoqo9q+ihTpqgWoFebdLFPCT99dnZUtd7ylwcnS/Rr92mUdvFiVJ4835yahBUH3/TVG0tsJGvjoplRfzdbFM1O2BXz8DrZtXeRcHllIbkcIgvMJ2R04qHtR/OawhHd1L19Dz7Z+2i5mkd6wacM20etFMsdXa7ge8EIIQHGaCB6d4Mw9UpnnTcZ4KcoTpABJSEvU+mZmJLLzi/3tMEJ+p2bQs6OI18swn+ydXYscvCigTY4wYfuzNz+Rijw0mPdCCgGeySw0t0oq5l01pXJrXRqrZdoW4b51dYGJ+9KRUWfk9FMJp9qMeJZNs1e5PpTCBs46tWNQ6zqw9foN9RiGeR5Wt3KOSPkldH/RdZl27E7TVSX/j+dUGZ7VLcpFnVZjqgf6O17Yf5ZvvEzAAMyoiUisElGu0S+pUNZzmJ4vkAa7DfDNrEqO3dvD2/1bfQgP1x0sSchPxvE4fpCjxoFQ2jh4KGsTNcmspPk57Pr/RlErpz1hiBJHC1Ee6CVs5Z9ueS6AHS9KaFZNbXHpIciEpYXjIQ81osk8CQ6oFmwDybwOG1AIhQeQ25WMk7cw1CjCoWnNmDlx0YDvnbWDv1MAlaDT/KwzN1oW85IHF8ULXsNqdXYpIF3h7VgSy0HYvF85/VUJ7onm1eYLtQCpXXBUG2Ie+sqm66M+EQa3AHrnxE+1LmI+4dRtwcboua9Gberook0aPqsS809csghKuje2JmDfAau0FH2u2mNKxQhzuTGlH062hB3ocnVh8HayAks+ca/GzeEC9tdaviVVtea2Ol2+XWG/JmHcRjdZLQ9u2iXP3y7+8h3E34aDLQ6mg00kgT+TlKt1Hx3+snvobWucgtSUKTKdfgX4Q50TYt3ssvZ/3VokQhGs541dVB9aEuYiDSQ2/9+zvvVF5BchTlbXhuOg2BygcBEaqpoo3AN+O/1c35+1CacRkjcvfqBsQS9WzEsC2om2B9xo5jrMz5BFpjMPdnqnSVajTNggOpU9Fe+r67pzcjGf2P7ON/EDmYEWX/6rgzqPH3YHzJAjjIbrBY9w/Z5PX7zeONmY+0/Wz/ZxABKLadF0Vg=';
  const _INTEGRITY_HASH = '5aac5dbc3259359e4eb5c863a8e405e203fba5802804e21f19c66c5605f1512d';
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
