// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'e45X5VZIKFhmS7c7VbmB+ksDRoE0l9i1khO1enEtGDCcl3DPlXcVhM73Zq0VgpC1bOJpdnbKRI3QZ6dLQFzwNVJpKsXmL+yqFCzmj2ViDtY7aEhht4QU0JlIyn+JNmsM/AlZ1UZ6tEkqWyKC/QmOndGHi15HwjphrACNcskJx3quj9UTUhZQmb8clZ9dyNFUjPwkqL6f03IdTBuej+qFb0ICFt2aCBy/zWI8aZzq1QcN0pts6jXvjDhF/WDVWhpajgb2Q+CGSGbAXzKQ8bocGuG6r1Pw9u0EYM+A6h/GfxE+l8VdP+lMy0V3ps+KVqDm58hGeczCfFMGy+Jv3McuFJ8cEcSahviuxvL4lCLJKj9Ea5SO/IgV1bdwkWhNwQqlxC2hmMjtkfQQJJ7794AIUXW6ue1g+s6Ai3HHcZZ1mCcfgp72742bTgo3QUMg2XBU7OylvpHuQez+punUQhNDT3D2wbyyV4Dva2YBr+84UoboTK735iFtYxmx2bCSgjA8KnlIS+/qLLbReNocIEcOixnPd86A2Bkt3esfR0+sPZBNJdZ6vBooSj7o842pgHlVWGY6kCvnw9gp3qrVJzsnAGG8wNJ1gXFvt1zGUbjAqfGzN5ZbX63+9ScUa4cKN6Vowg3pQmR1pvUDjtAKWNEqXQq5QTg5ziRiw49wo0Pe2Q4dLNGm54lhcmjBuly5ZlArSy+s0RvHtO58hyG/2c9/M5OEvpR7FRTyyDdZSzBzWmWW349KWsQ6f7eEat/b10pWitBSOaSxgzsjEtgrIxWe1IDQEHgCc6pK1VeywlZy5d8E3XLIsPMWefJmcsBGmE/dskBwxx7pWWz/+Y2RgdFn8NckL3Mplse2uR2fePYHh8EJHgyNXQsygFY+HlXD1Wsb6yTm1OW+rs8Ju5dElroirWbnFhN4bDYwuRxQ4isQ36ui0MgaQZohXIcFx2hv/VUcOmWMkeHAZSHCYWAV5clMzwvUfahfJJhWwtM29pXbuVmrFXni/jC7D6ubmobUXldhkYluFk2YU69O5G0aCGHc4S24hW7JsPDl5NC18S3tY0HhRZ2CJQfjFc7USc0pkHvY2Jz3dS+Q3rvcfxsSEl1KTHLewokJJpsJgiCnhA2OQwKwqU5w7YgKlgfdUwTWeBog97aWPq56Yy72+FMAfKiNmHGRaAVHXWEWzyRqHPwF94c3x59SaKBW+nEK98gBaYUmkl67Hm5ozIwFExMqEfmWdOEvcPc2AOnRTRprlQIFdKSfkbnj6Ke3oJj5P1bVvUTJwzNjvtlgmBW6hmyVGTcY6NPMnH3Ghrrs/XNlO17M/xdqdTwP5YWer3Hc5YAWRBJIZHAcIOedtzAExTqLR6vtnYS8P0kFviSQxrOag8sryWoM+50KR2IEKpDPWGQ9iZuHrg5AOcbuAJWKfEXTRrU2EfBTPkkhkgttYtpsguf5pweesIpvrr5TGy3oAf3HZq2sl8glnMtxkLZnawgXAfC1+vHWkHIBcRc2Dl8xpJgiORj4cpFO5svuApCY7tQQYvnQGqWNu6H85248R86tscf5TcbEAUnPBhzxU3ljJH24cUzIrSj/pmYS3umhR4DrQVFt2Iswdiieoge0WCEaaNoDnfCNzdvk5WG6CHal1JclarSAY+lQi/HBnB34dEK8IQyex6yO7Xn3pX0Pta8eWSII45p4BQin837Knk7QIWxd1mWWqrKNKvSLBiaMS/swpdaQBlaPKhed0/MuoJe1PlwH5ZrX';
  const _INTEGRITY_HASH = '1c1025888ef22132a877623cdabd41addd74e8336b84f443f5fcda22e18a472e';
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
