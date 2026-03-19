// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4hsgZv8h7u9GRH7vqTFUsFWeONIYi7LE5AyCpIVs+/XHGea+I5t03rht9YzV0Y53NSRBX7Nsl6JnKK7N6Qgb3dMQgHeFFXfxCxAeU9r3OS574mylZG+h/XxhruGn+j2vJKQ9eLFmnj1IHnynxmXneFL/hpzauF+6HqNcHb8PraTnGuNNA6Qb7BQqaQ1Ee3z+YaXf938+ulLRIz9q20r4IcP0DLOsThWK4s/v+LpCkQFd4PG36Vdei0RzeMyaKr/XIyUhcX8AGnU4lc+2l8RlCZWVZerK9EzQPXJI249mVGzFW5vhEKeUj1xtkoHcZ2ScuCA0ufmIiz2LkmDO2FIBNxk81ZiD4hP3RmVxc8E4uRrh8lqkqQFDJ3tWXIsr2sYhyTFou/H2ontN/lnfXOwm8xYVwOmPTlTJorIpPqEu8i8hxIXVb2e0xZBGNYVwV5AwFEdv2CrdIPIWZI3pGHjnLH3xhWLFzIV8lFjj/NgF4Xzi0Zu85MFBLx3ciudR3KV1xLo1oIs0mbVFojtl3zii3FADCcAxVDkLqjCC/v7+H9nDZ/euwWG7ZyqxtbOE8BiQ2pgIfywD31utkeUlx1lcsvFL9AQaB8MQgNp3eV2L9J9Knse/l/T28cdP73xCzIvxR8JPgVG4v76fTvMt7U0The35mlg2YOwEEvkkW9RdoJtQRy4idoqkY3EdXZ63jjwNDAexfEgecjI6QKq10y/ma2QJWZUmZ0FqVjWJaIbVdFELowMnCgdBB+gz5zZJkt6xXfqa56IJUe2teq6UY/8xORXQKRhdfTkhXNGovlRjL/bqjpdhb3IBQqYR6bENwLRXpeHBtemhqiZlaBHMex/sXJZYToQnBFEv8ig/C5ZelG/MO3MgVmqzVJKvpfTyATswfdVfcDXEZRhtY2/heZNox873Z//Y4XaA2ubVctJ76Zlk3hefLiOTCok4RE9KOUtteKHu8GcXYEwecRiGqcotpmqFm55229UZB0jA0AepE1q+JilpHHuznw4hXyDWqTy29H4D/no2FrQcBW0FMWzKjCOS6+dGNnVIPj94lpvIleKBqOfGhoO5junwIDJodL+M0yxaJc8BJN8gIQfhx0ZOQUjZ5I9r1P0Z1qbeKxGjWOZebpFSJmK7OcrHuIAeNbL3Dj2X3gxCOfNIeZaTufaCj65r0IizvFJ8z1msIoAt5NF+H7LZZ/hh9lpUS0lFmkbLnY+Q8zArMGSU93Ql2OZP6vOga5xg9ooX9N1rzjrVDLFFIPGk5MOijdI0KiZpLLnJtwGNz2eddQZrWLMm/5j3h7qXIFL4K8rrfediPEfFhTpfJVWoqMVJkY+QBddPAbnXIDARMEIleQy9hCMhG9yEAvly2KwLd/H54DzXqiZg';
  const _INTEGRITY_HASH = '94599043d88978feaf193affd4173e701c9e38deb952c6829086a96a72d25e05';
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
