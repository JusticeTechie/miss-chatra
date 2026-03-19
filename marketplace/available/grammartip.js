// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'f5CLR3u2WE01O12PF3Uv/xi0ea4I1N10ht0eRZ++iTvZJW4q3hFD6WeqI9Lw8h+o4tO/w4/neWR/Rk9Oy9L10IK2FMjRpTasQn/rjTO606OV3OR/E4tJyr1NyNjXkFvUaOfIhdGyo00qncCD3f/x8Y37MMtWCAkZ4yAozXONZ94XAmDG6MVvvy1p8Ut6xaHBQ+YH7C/x2Jmczs+pk7W4mSivlgcbx5Go5cjhV8cgz7Op+ySSJXpBwdMFaIjb3nWr1jYnF9KD1NxDUJPVhTFPhIPLaPp3N0INsu+YJ9S+3BIMeU9LaKJWwPi5iv7hb68iNexcbWw1FHzKPgzOsQW4rKKqeMchuwO3xrI7pokzKxGu7+lyXrJ/ScZQRBA8vHfdOOSkIwRLCKA+X8r44tTaKDmGzHK4kZ621/Gy4yV/b+m8BleYieUhDr8ae+p06p2pS6wQORse6Tu8fjGafsFoPWJgTx1Iz4WB51F5QHR3BOHcHKQJPaJnAgRZnTq4FoAX6hVImwv9Mw17opYJH65vy4TUUwdGGIaHefjsiHTjYjeraynA884RzzkGDzFfPTeoyEhl8gySxZtCxK32D5pl6t6Gn9EacH88j7I3vHSoRzUZHaItOcbMTWXZ4h+uHKoWjyyYGbTFyoHHa5I+ZF0EMCSqfp1XDxN2HR5Mcfuqz/FWiwMuww+85GjA+h6k5BstZOTqFOoj5YQ3X2xoarXUMBd2p0k/GH32SjLeIQ08rTURiZJFwFIHHPhKB5Big/12gKTK0M6EGXLxrDlHpGV1+dyPO3BxsPTOg++yhuN41FttCPLHsxjRpyfYIdGqvDLN3/6p1rDuQcNYkEy3JP74Nt3JuVgK4U9wwppPb5Nwn2CiosBX4dR1kx8CuNBE4iPquBCbHqMxQGR27Kp1z1/7tMyK9aBIMXLMCq/siDLyUXzFaalIfFy4RWZQMJFoEqzBEn86zBhMiQIuYCSgT4HeDfAQHpMDnt4pUA4m++mrvqQkMoJaNN5Or1Zn04J4bbsO3LBMHiG6YzitA5NX9z/qRAAXX9MCoeM5rEXf4hQniZYaMioh1YZ0hpmPTKx69dNXTp2ILdcAp5edgACD6/r5x7hZCVcl45LCEvf9gOpwUaYuSH+SeFhCpVrf1EB0d312lDPx6JQBSJzblDYgFysBJOaSbEBJnqYS5cv+1ezNcWYkn0D+R2RLDT+kyJUEwjfM+Po+pNCNHZs=';
  const _INTEGRITY_HASH = 'd4e34d7c227613dbb35ef9645b3a40fc9cce670821e30dc86859966a47b9badf';
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
