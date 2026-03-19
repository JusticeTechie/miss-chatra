// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7XzJCbQA6ziAsyCvKzlBic1ogZz98LZ6wagTM/t9PlTYJvoyQv1A1iLahTM/JljhVmhwPNKHo+CFJaqKx+dhWGUaDX01DocEPFcxpZr8FEjsrlapmNVdzjM6FtZHCZlIgtYtsDGTrKymijrZRjSWK/X2oOKk5iWdm3UA9gXaVnUjzxPLuVVi3u4n4qsTOs9DQwK3um/NT82lRdPQl8pmb1IVEgLkUQ+VQNiX7QCa6a3A8uKqVM8tZJAmU26BIRGscjtCILr3MF2w9rKQzhD6Sz9gQ43jyjeArE2X72qGrLJYio+L8b9H7GkiHX3RJAjtOdIqlCe/nYfnELn4u5WctWBw2BPkOKITByhOU5GwlBx4/noOLUws0fWFHjTryQvah6sXkhQ0al6aScKsXlV4CUYH+z5SjK5fCBIiPiwWLYcAj3QkAG/8lSfY2QKozX+HruX0PFE9rkjweX7AcdythKJNIPaZXcl9/6F/bKT//bTUz+0mbgPpxPqDiG3hvqX3ueqUtETlCfhd3Ru1EAMC/sFnXgjGQcMl5fYccZ5v+xd4T4C4R7RQ6kGBvMqxpILTedqZXqX2a4i4wMSgut5AzasdEAotzioH2dly0UOFFgp8AG5tZMCTHKLf71gM1YtEHWeEdDczysV435ou0kVVRgBISrhb/npVCu94rh/q1wMFiF7tY0KrksXG73pe1psj4C+dZw9Q+vT1oZxl41Q3iXYGDJs=';
  const _INTEGRITY_HASH = '65ec91e1a26085eeb56253885fa79d795e889e30538cc8e78be0d418990cd142';
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
