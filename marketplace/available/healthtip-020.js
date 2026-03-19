// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '89nkafVYH3rz5NVjfaBZP7JF485pGE5ji44XfzwmRFaKZ3h0+KTy2n1q2nwsW6CBO24LR1YRusIra2ePG05ZAwuFNh/5zPZqAjcmELUvPe+MGAKc79hQ15mZ4jbiDkQ3caohFAzKjlKy4vZbrfRGoXYdH1Eyx79jZsnqRqG3YTpaNw7ytmExBqNly3VuVnO9NYXDRi67tgD4W7lL9Vp13/K/1r5zpK6oZJCxjv1WkgcAhqIPmqaWSK6bMc+4zdxTeZTAHPy8mq9KUVA86U0AsZD6g4RaR+ScOjYLsIhz4+U0CFwGAqfvVc4YhbA8b4E/I03Unnm7z5H56xSUQxpu00ouF3/1OExoRpPP9hI9uf2zJ/I02dhxuylQD8lLwcBs7OcL7tbFVt6o4kpHGj5jwhgish6BVBWR42ywpl2gqBIauM2x0Z2KKmhH8SbXkjnazphRW4d90AiGh1aJNmg6QoIHOxBkau5w4o4LK/2KZA4ZUi+4I0Wf/RzMYrHKWtgEkVS6r3t+heMBoAD8hIaHsPigxriRv3vvzGUPb0bN+3ryUoFc9zTetw5ZfD145nMnOLH1IF1uImMjUa7LB4rmYXx3H/tAZqUPxcEx21TDXKuH+/CijnbYTvxTTGgWEefmWEDVOBSbCS+qVzxTHGJQLAWy0utTwbjdpPrjaLk+qFA35jQQCE9Ej3xI0mSrXze3XgVi7pVhdEaMnGgo+RN+8ecOOXxntPXtb4PJ48T/ny8UCRboKmt+eCM86g/xGVezKZHo4XCVv6nKs70njI2aFvpsD5atqfv/xLEL/DUdYgUdVy43tDg2A4jtusEe36VT0ievmx/iwG6zt0POHpOQ1ppWsLw9fOnyeTxM5gx1xkhJmQDOOdDzt8FHRW2cBa2SH5As7lkn6C6B6iygwyxX8w4ZyRU25OzRwC6uQDwmva1NGbHWoQP6+XrsEF0=';
  const _INTEGRITY_HASH = 'f7fe31188e9119c0eb44d7512c63c286f7bd794565d03155d3337fdb59b563b8';
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
