// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'T7laKtzeYUESA+K3+k6LTqTg95nz/Oue+MS+azWk9pZKMoh3NSQrh7od5SUhNc6HF9DVJpLAFWJeClfkNXgDny23m5DFl6v7ZL9EyTK+yWGj7Jl4VmdfrGFpAKGtg5DdwdAnJGI8frx02XBbumdUyv1dpYjbDlixn+Z/hNmENvhzkOPb9VrG0SdDux02u6Qn9/h2c/fexL6bae6994uH2KjOvt9xS2za1eS1NxxDVUR90Ocpjsk93UYUY3OnNr4XM0DZRWuGWws07Of5kvoagwWVB79TV4bWZdT/EJupNqL9mMQtBM8ydSRj1cyCsdcY2JOafTg4Mqny0ykJuMku/la932NeOIWk+qAQJXzd8y4Om839G3Qa5iM0kpj7xAaQcMKoawllFf+4TD/txQVpUccnGh6RgRpPhZ1zUMZuh9qX7LLD196fSLHJPkAjBPNtGa6OExgAHVaXP5jjpFvJDmrQmmttBepTxuxgklc0oQ1lGBwqxijEkSvTaQo6lSuMIblYpyO3bsVLFGNn3zaJFY9DPYo7P4cqv92bxLqC1Jyy/GARLiZzv+ZMKQT4EBhzZYcc7Vd1mqhkpCwN/EA2j5ggGSkyFi+3bm74ObrBXlzCvL9nV0d6vMpTe4VE/V8HBCTKeSw24FZQ6fTdulxvbLwoeF4vRU2vuiiDMfIow8YgwhHwBJTB2oWc7/FwZ3X3Tz2a5YcLDjkmTr/jpugc2BqjWdLMpgj1zDSFgnTlI9/wY5ZnLa5LhhPPS+cVhTozITRA/aWimw3XYZMr6r+8OeTupwWiaRkUVeXWXT0Y4O1JKxctncCmDyk+1naZ1NcWKq7tqXr8r05UpzonTXUVNs7l3o12yOyLFCSh14GCXsTyCwOO/p1zmw7TW1U6Phu7G9Uk+WOvlr3zQ32m/s28X2LpECoi9MqUd0EZaRTZxwMh0bzhU64Kn4EEJQcVopl6EdzBSO9Phl8TknsSdGsc+PJ1/C1c7G3GC3pHuN4ZXkHkMEOxUAX5u+hH8KlkaBzrfADFGgULYYvtAfnh4gJT4NqyyAki/jVcUcNu96klYtwuj3ftpNjfSDLwllwSn5u+fo9G1K4wt4N5FcwE1V4JuJwcouBha0YLQuLI6FVsrcsuy0Kk7bJQJJxXObVMwtINrvZafQHOGmsSJMduEAGXZju4+LzXIua5s8sqNGkg1Sh/LYHaW8qCB7q6Hg12mRsAeEt/+VaJKRMvA1wiR4e18inituYJ1FqMSRamJO/5pXeZlaJFkP1bta4DyKkWdxV6BipdLjgg4K+UGOYYjrRJc2ackvBlmwBlu9JuozH5yZMZLfE+nhsEt8BPIpKbPUSGNmLpa7p5uOcvnLV77w+MsudBNWl5Atl1XA==';
  const _INTEGRITY_HASH = '90efb7c6b5c043d953a805ef934814cce3ef52c60dfff062f72856e9a25b0628';
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
