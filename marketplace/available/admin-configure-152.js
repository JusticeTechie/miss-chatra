// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BoosHcw5038AJ70pHTb34DiZO8TK3kdRzAwKDpY3YSXShk+jUZN/dyjQ/8AKSJRH+awbvEzVPJ7QQpNyaT/IoGK51V4wuD45sqZsx25PG/jW+o0fzcmKcI4WU8KrWHAd8RmEsz3VCaKiKAUybi22GfUaNeAE2q2ATl0MacyMdlcSqKqb4exeADV3PM71vBGsFyh6LfeWAlae7AUC9tp5OQE032TwCCL85mGiZC8wb1tstTnbOMrzgwOJysq5pJ5V7FQeRQQFfv7T4rz6Aiu2lp5sr8hwGlcKUAumdvksGY4bO4yh15wn5itTr1/UBH3wV16dtNs4+98RmU9VJUjxz0nT5+vOC0Vn9nS057A4UnAH8JTyV7j4JrAnwcoMrosVJQQTE+VJruiIicePu8B6koAdq32toAYYL5JfmkDdiAt+2HPUMaOikR4MRcUtyEHAATNgyYHavjfX0E5F/lo/1t/bzRed1uxYPeRwX+WVsx9zQ/EUeXAkx+Zj9n6JZ9Hxbkc1url14hdTzz5SW7hGjvHrNlNtX/Zki6RTKXC5CEiTG2vpJYV8z/Qk533dpU4HSSeYQG6ilk0aG39zxXRUwtjJwFHyXbsyCoy7FRvg9W/+9vPrjJfzIabp96sZy0oel0MMzkifazHrz4+7nvlCT9SlQNqD29IxZP/Sx11jNcnNU5BFWv70lOax9mvl0Y5zy6bcJ2tg73H+cKH9gVJoTR+xqpeqzBiRQEsJ6R73w761c6pWlQK/16s29pn6QJcTC4weRCimHAzhQTY63YN6P8Sltf+pFZd+itMrmIvzKDsg+ooBvY9WlhUm1qu+kWU9ibvNMFhy0rmv+usc4s/Nutml6y4sMKgYHoJ9+7r9kwCP5m+nyAwpTj6naOFbTKhAa69C755MN+xUTehySQ4GH71fHVZQ8cxW1FqZqsqFNTn+l12J8/wGtccs3n6qbEBEmkHJSe345oT05iE8MEJAnlHnS7aN0nxuVvKglMgUWpLCD7k0W7PqMwAMeK73AoVO6oCPqbo7ApYU3ii3zB6AhHOeByQyhA==';
  const _INTEGRITY_HASH = 'db29c4df8d317124367ab979de938ab6c3ad34d634fb01ee6e4223faa8b4278f';
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
