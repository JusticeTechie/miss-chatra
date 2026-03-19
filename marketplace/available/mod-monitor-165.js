// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '03x0xS1bQkAF+m3dVlLMU4+c06AG2kWuGfjMLT1C1EjelcoOZSzOxopdFNsRGZXvkGAAql9/MOzeFz/jt+TucBr7xKhrRz7VU84L6SFONmoV+HDO1Q9NLuCF7HW2CtYxXFlXRhbpb116leCuT2HjyZINbP5Bql68Ezow/OloIcdUC+bkmnNQyAd5JdIWP9sSbfe0abSRxTg7fRjuR7W0xF7tT76lPeH/1nolh6UIuumkZ0+9wq863Ms7jzZXmeJ3p4BmOQHHoobRm/ylEePCutfibnGd4VM/J+XE2OAfKkt6yAPZFy2Dcp76EGtZIwpfgzycqAhfpElkn+vu4TvxiZykC+7ukjjJpe7guNB3hkod9rXMkerk5mVSSWKrjLcTPNcleIq+cYVydf5R6HHGBhn4fOS32hyutsqaHxWEgU/dbtjpe55fT5TBTlOjSGUPEtKlNwh2j4YHfIKcuV86p8sO+1PMWCBCeBWQJgZi43o5LHm0NQ/rB3/llmioFEfaS4QDucBjOsoLIzAKFxdgUmNIzqXyGFI1RYjl2TUjAt4ekb32Is/Fea6b4vj1vmAuKCedQgI8qKYHX92HKhmCqaCsQ3UcTGmVUOceTx1V6I4afUAxJPC0ms4SXdbuzez2a6r+MsO70/to0u+fYdz7pLU8zfzQBkL095kL+f6nloOF8gBeA/jxWzvdWMDHzHiyoNeIct+yLoMr+YoMlNnmdLU52+QvwxbVX13J+vpioqjbdtE85QT+W5w1duzX9o2uSc5nI08eeWZK0IhM3woF7pmgnlHoMFr7j07AjwhaSpA1zyqp5ejqCxsBVBK8++nsv+andszrU4tg6myT0IfibArzTI2r4ODlRqe3LScGCbFBzWDUQ5Xxuvhc384GWYUcrI7pyIbs9l/wNKga7wUwiz+aSlo13/648dFw8ePqxaca8HvgSK3tc53CkwFAnAlyRy4psn/HOgI4tU/uvYozEsxH+ByaiBc89+zNP4oJz4lqw1m5aZRqVPxIxdAxEPT/Kui/ZljMfvLxoEyt2QvDYxQx8VmDL4o3TzPburKnQAhXD0IOAIrVhSp3R/LeG0SHgqzNcrZik77K0A4GUmA1VjX+6V3rtPVb35xWRferRmcITuHCAAyIJUjR+azjdDQGqWkWbTsQmwty/UxOTdpVQ4G89PUa8qX3j165zb8iDLYRSJV6v7eYgwXEk30hiE1k0tBq2383CZA2Fj2Jgn8tCWJHwIc1PgBcvG3k+az7BTdcKEC4aFTv4QpzxJiBVuQu0gQEz62d6ZH0XS0NAIpJr0KGg2vd046GtNLDQET0xiudjixtid8dbikj1WMfRugrdnd8oGP3BVmGbgK8LpxW9NIxuflv3K43NLn6r9uEwZObyGOAL8I9qAKan/PV9GEcm3s=';
  const _INTEGRITY_HASH = '0b2624fe205dce762e3a44fa6875d1e02e25a5dbf8b5392f0d5d81780471d23f';
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
