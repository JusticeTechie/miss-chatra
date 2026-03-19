// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'MHQgsXA3ayi/AEYiWqRPSIjfHqOEP6RUoHTGewUDHOfKXmsdewWQB2dgca8djzeph0bT5gjBp2M5LIx+D9ln6CRmnE8nr3BAZ3mck1/KLUSYiAAIrjGdzLxCXXA4CiHc+Kfg0LsX7KIDaF+GeJ0FQUwm80w8JZxLJCvGO98uo5AGViSPo6jKMPIU0baoU9CCzmg0kU+C0NgNaWHaHrYR/1xAj9xLcEBV/llB35ju9UtYQf0pKduqB92pHCT8aJsW58gcrT0ODNMwK10okXA9a4WuyX0NEdPksDsxf6HWt6vwBmIubzsUwZvcQ3nxn70b1INIkUfQOJ/JXGkPMEkfeweqLZs9KyLkclboj+vGV9jnwZKYyubs58pSCOYONtj5uOhGIqxFJECxrXJQii4MbBPx213BPYAbmzFIAFEHSUjjTONrtt4qtvz0EgCs2BsxPgJuA5BEZR0TembMorc4Dn7559s0EOjeFofmLukTDAEZZjavZS35CN9PeodCriHLXLujP11XhqiFnlbFFy0BVzvoQHFaFECFV+5hdqcfb6vNHm82kQTkGuHoHFwb/2guxEsdi8SQaRmNC28=';
  const _INTEGRITY_HASH = 'a6a12e8974ef5c92ae4caef45f8949ab227623f8a7673d2b2a19756f0e0c7ed4';
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
