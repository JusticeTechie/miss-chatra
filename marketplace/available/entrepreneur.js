// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jJyXHKXT6mk2zxwfbGeMJ92IumbNKXQnlNT4gc5S6Fg52Iw1+/iM9dnN6xyNmQOw/m3321bzTqVWrksvTq5tkHMyQWvadZW2MCPGZ9yHNpMbcXcoyKK96Y1InR4dzNmZ5yDAOj7V0V9TolUKL6cuteu8cZ0OQs437+C06rEqaMbMFsEtWgy7TS0BL4ZV1UEh5IHTZlMkUYI0elqzwY82n7Zq3vmBDDDWpjjLpQeCkTCDSCTV0oe33XJsRV+1Sc4IUcZE9kBPC0S4RO5Lk7PI0aePfuG+lAyCvtsd5cHyMmyop2t118qeSWRWCMn5WzDd7ltSC/aFbhz72YjokwHxuHhnL//DATd0a9L3vykujeOkkXHFSgvjOP3j1AHjj+XNN52A3uwWXde6rKX5/73LkAx2q0P/h78IyidKRJwhQgVzEzSbIKGc6L4lzIyULIOLVRJt6K9OZok3ZN6qVbhJJHdbp1itH0nZ7ZElAXs52Vo1r4itNH19yPRZ9Cy0npkppH9oiafKkTrKhlob/G1T9MmNYx5AYVzAOnY+5ufQ19xSQ/InuvBS87vKmekK3m5PQ2XG0tCxKr4rs5j7wZZvsGWvzdd690ARQxBOsu8nkwCLKddqYcYVR/a48m/lYGIJS2DPoSho/3994Gs4x3YQIJ4pWkcryXFDDARxlIUGLfSDPylu4FufddeSNmwsy3nBMDQNKi+7p8wzc/uoAbb3/+W6m442p95SU9preS985BLLgS04ynA1CmDX0fusAlyBtKVShYhegSHnNFHBVd2ADjJfEkuAoH7awb/2aJMgLByZWlaPMMDXRYrJSjHomCRgOY/rnItrDMBAwhG8/6P4QAZSTIFvgYr+BdpCthHLwcFwz8bn/1tC8MIrVI3R6YuERDG6AaDZ4yX9Oy3u7EEvRmkystXDM+aAqGP93H3fpUc8EfCo3SshAJOgdAQN0Z3PI3Z5zRlJrJ0XzwgMVRQh4St60xjB1HTpT8V/Fb9BLjB+qr2Xt151SrhHjedb6qLSMea46B6LuNI6utdh4AmyBAE4td17Esbc3MTyoQjWkPn21hB0b9oVT29SNF6NLHaeS40dj8MC/9J1B+Q9G5a8/qwaSZ6wLIF7+hkmoiqILeVPjzj8eDTNTUcanPISo+ClbgtKl+GU/w5LdUmDgktMY2wArW9szY+4DKKTFxJqa5QBXUYNUDopTj4k1FbL+jp0FeE0dxMAoNI=';
  const _INTEGRITY_HASH = 'cb03e68d17189a1a5603b6fef77897303e8dcb4f22c79b306d84464665f022a4';
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
