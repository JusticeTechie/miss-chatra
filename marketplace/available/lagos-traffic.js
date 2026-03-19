// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BSVNfqGtAYvuiJSngLbS+ySkjr4rB7K8BGeWkfJhH6MAPJzKTdPfqAdPQi1TQ1a85vfoB9viBrMwk6gRoJ32dPf5zYysAkGXkBgfJF8KCB6sMKsiYewwE8Kq7W8SGA3SU5uAbvsqNg+dUk515ck0Y/btg4L90r7gruuebxlLagkVqxt8s8XpVH+rIYLS4XpoeTZCv1HWOkSwQyn8wINq3ZPrwU1mV984EkL0rG0C5GphQnHM9Wd6iRYBGcYidrRQ+i/ZzEkjjcwJykqbMQvKPUPe1q1aQax66yCZ1ColaWbl7z/THJYKqPSQ7HDsrJU+i6uzQDWANxlBWgmsKNjAtKvqlrGiTnCNDMsHLLy3xGhUU1CFlQEmz64GHn8KFJ0jxoHQYMrq2BMFKpvrhs1ZBem8Oz2SWtPc5QvbuHNxq6LuUE49DPRB7z0h0tXiAVM18uwA3GL5suqdAcOD+66Qj2FpyIMjk7qP7uV1k1xOGO2qXTXA6az5SMtNKfYEVlJJdmtDQeeNiADWwZa/MkgQ5yiknqKb6vqpMPzlaJiTumXfnRWBFXAEO4QQHsqPhQwNh8kTJPwrlcdtOWBx+YfFw148oOVoPXZyNeg4Y9TMmz/IMX6XBd+uGXK8M/w0TfncTNvULsHHEuhTI40HW7mcL1BVtkrG0eKifry/CkPDP7Be+Oe9VKJL8Yig8PqKCTaNIeuJcFnN+xjxKO58fYrjxINBqFyVKIIXtGqAK0FyyRRE6rlv35IVp0A0+HAtq6iO4Dq9zOLZp9YyzIiVD4ztOtsSv0P0wVP7h5KTRdyuiD463HyYpQxBkKlljnhtOEaOwSiwGpWYJx6w9fk5RTNmH9D9XF9ZnsmtuMOP150syswnFM5UHSIwz8lBP0cUNr0rjtu55vVUYDAgfROPkJYG4/Ca98cHhGjGGm7/gAN8xSBVUBTZOTju5xTKcthNfyyLmTvcklauga6qPWX9O5tynSDvTUd6bzApULfgZDwIXdemntdBa745N9O18IX0mrF6LPLaMMicGG29OH2u8bUdDbheOOJXDdNRDb32oBl74TTRkwNmcGNrvzz3uOYLlPdPn7Qa8RD/FoXiCmC+6pg8ygpYzP9SeKk1tjRnz1QFkdUIV1FLKOHfpIKMev1nTpYf86peXX8PSkOr63XDt0yAPAASXtUMQn5QFarB2jMS7wN7zaYzuazi0uM80OVrZwatFGVg23o4+gfqnBK3asCYwLQ5aCaLwW4VgoGSrIcLUF5ivqj+m7uG0U1l69RRo8pwzqCEfqGYel+PJNP3Hp8jVvzzJBASRaQ9hAaZwAvF4HdPJkfgkIhd3WWgCiGSme/2JPRj3lKE0ttvz5iYbhIG0PD1A1fmvOFWorulTPaV4GLsyqQDOBFac9vHdwTEjZ/aB2He/GxDiN8ioVcjq8VtbdjjEGHI16H6GpsxC9ZInC4F3WLCILFLxhNCqRYQ3Psr6bK03ywJof8nZGB39tqldR1ywdklcj2dM1k1z27qetKO5/ubclRYW77QYmrBPocjHxsUziz5fkMaVbRl8qUgc7bbgPHQtNP4ACCui0g/UkeKUYB8RkRN6tA72GmBRs2fVGo8hqzJ4wlzSQDBHysHTXw0JenaqViEbIG82vP40E1BmOM+CSo3OAPa+5R5j111zwCHkgIM2nuDQVZ5qTmR6QNTtgzOcNwnmEr8q+I92px+g5dDZg==';
  const _INTEGRITY_HASH = 'bba1dbfb4fdaecb9fdebf232f05d70012cb410ffa0fe266bf5727498d3dfbf9d';
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
