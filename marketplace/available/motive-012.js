// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jLQ2ISebwA/1ikp/uxmU5Bx31qm8Ox+FY0WkBw8vbvc86N6SychDkzhWZxhMkozBORVb/nW7yxoKkt4oydpn8a13sRGGb9fFAEf9r+0sip/6QqZtmlIW0zvYX/RmpZIWnVUsSXIDRkIrRc5k0hp6NnGIT4vehb6gnkVKcd4UFBzh25jIwgEzykffHQbEGQbKPoyE/bDA2S+4eLqk5742oxjsggJ7LF2NiRTP7ly+HOMb4QJcd26TBUWv0GFsGlIAxRgEHDKhejK5q3WK4+YHQo9wHDgsF1IluLn8fykreiprhWdUHxr5N+9ouZYGPph/M5mq2e4y8eFVycqQ+SUbkRawC1W4EPVIjE9wVL39CF1cEm2ieU0UySJmHu13OOJgn3YtdN2DYEuTuMEWYb9g7gf1GA0VEC+nTboIbo39kkX08Lg43MSx97v3khYgKOdp8UdATgjF/d6wnTAGV4FMpor8H2vUAx8o+Bu4J3zE/LO9SPF4urA8RP9n7Y6F4wyuvP6a/UYLwF6N0HYtetgg8GZ3LS3VrG7KXGzRCalH35B3qrinmME3SZQDg6We53pSsPcDXXHqyI5E0XBcB6F9kc3KqtnlIGaHtOdZOQ2p0A6Bk44qH91esYc2lBNJOzmWSZ6PorFUhC6zqre5GRT41or+SIwuWhFMwrmOClNQb5rNN1gvYmgd194uu8fjUm/ZIY5iaqTDriwfTznm0DLrtZPvkS5yVdQWa00OECKTpyxWr/Gldp5i7s2/FoE7NeIn+uhjwWoUgEN/gOowaCW8H26l3uIY4sdOdcvWKbJHzH+PoNkXxJzpRAxmEzu5tpuYOcGFJDGPG8xM1oCka+MOx+bKgcugC0oGkeXVmxrHtV5UDAYbPY5rvHY4D4lV6+w56aXK6DsIWmrJCzbuLNgZAWhwiZ9uS5TL8JUVBdsrLsnpOb/SlavcEJByH6j4W9OnEXXfQUr9CDjzRRqm/L/l8/RP4tQUyFgzoLC7vtOn7CDZmpG4UK0eWu6IRAQaoJ3ZeLki4npGYkppH3/gfsKH062y';
  const _INTEGRITY_HASH = '620215841983efa1ee3905b7fa717084c88406b63ad8fd4a58425215a87dca8a';
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
