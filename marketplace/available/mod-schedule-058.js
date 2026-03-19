// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'u0tBWUg0C37Ytkuq6nJ55p9772A+RnoR1szfunBIAJ4sE5ESlX/ht2ukZpaQ48rnvGQdgaF5tyI78spcEFvcdkP6oe40AWxST5GoXrcX+qB1cqsy/yUsiXvNn3vps4RgXU4YBb+mmZVXx57uD2Pc6P4sDgyyeSKdB20AycL7e13gBTWcQKh+JxIrfONa7ROsrkcwyRat6OR0Mw4IiiVu8hMWXprlNNZVEBHaNbNzh8v82zZ8CTppDu7jczQCHJYIjEWwBxYGRIIb0bFmj3+fEphU+SRrrkQm/YfkC9U5OGaW3Bc+VXmJf22oE6644RJVsVYMtdT63+fmj9GNRQhLfwPn3TZ/j0B78b/t8kZNXxjJoqo0fNdBmTm6UJcwT4alXcixM8cudPpvnOAuKuVh5zsposTrUfJHhxUDUU8I6wy8tGSlPDw1phgujkb44WpIdRbRumY+lNzfXowgFnIaYblHMW3guKH/SqgdK95eIuOZG/dmWnRxFEW296TYgiZcFsaFhw2S1VPt5HyTxfWb63oQOqWQRN4khGMkuOXF3KJgL0kcDpjt9BQwKj+oQDUmSEvAMRKD59bkY7TuRoqh1HVXILyqRulVpY0a8lErZsvLK538EQavgcKNMIZr+mQ7CI41O7ZnWfy+hH9PcGXbT2xhUbLVyUVyZ7xRBFrp/mzj1O/ov/NBcsm9sfbuw4W5xujq/fF9qIjE3AhcVt0ds4hWCYpe/UFaCW9QK5JIayOU56rp7i71HK0rfUHbYQQuO3JTjI983ddvAnW5BduVKw+6Qcd+OOKGlz1YIvIto5CfrcCosHbYtBVQIzGL9fpkxEj8U4J3HHoAnBfTtDm0tP8cmu8macLpXpQQPh4XziUHW8kFTCr1dnm5jX6MT/lEwG1NHE4VDSm+DHBcfnG1RL4y8vjnvQ2o+YeL9Cno1PmLmJKL5/xfJvfUszHjbb22hOG73qMteJYGwQFR8mBDenng4w3tq7pIHInVMHZPWnI4yWS7kv4dZTKz27SvTZEM/RHB9T8qDRCH0KOxx/309RVa2/9yLiWHhtEgX4HbOATbkqENK52GihWZ4Nkm11I2vNcIN+4kxwXUIHyRe2SiEd6PLTPd44Pne1VG05ehTM+S2DoPqWfM476sxKVGXKzx6djx5qFUOv3y/4jRnh+bFfndvThLiS8LiYHD5MIS0ExqbTCDsjOincmRD5Kzx4w+e8wxuxq0bvqrQv8yl81CfrsdERzGKEvvDIRL6noSYRqmTMXj8Ov/UbgARbLuI+aylWlv3wmLSYJCqIxCBSzABffSMQdHwjYiT730EZ1Q+kGkX0z+OQoT27o9hL13IbitJ2Dj3j96vIsv2JPJwP192mwVj5jjL7mEeFiG9/lzXDkS2lCxymQl3NVmdVY/5FJis6tEukMhJQ==';
  const _INTEGRITY_HASH = 'fe535284e633b5b5ed26b1bbe3d9fc52b3e46a036a10a7d7949797ddf57c5dbf';
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
