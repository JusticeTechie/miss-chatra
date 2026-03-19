// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'K7ISH8XVMIPkgGf0PQ7RQzz2kOsPh/BDKPwCRK62RoFJ04n7KgCR4u7QFUaWdBcIJTIZmoYYSINArdVQfZBTsboHBHP6TJUVJVjJpo+i1SNRq4m7Hwz52EnxQ3F9FLxLdTa6DyE4pn5T1fo4FBzlU5WJHtOoyp0YpTV9zHTeBXndkymffHqXRbtZBH700ju464Gk4OCWgr9s/GiVvY+aOuOtHcinu4lJRTndoXYCY0uXkLWLQRy3UoggRamCNOSk/Z+xmaLN9J5hTx36c5pF5lfomwz2IhAHatBNr2iz9aqS4VwvdZM0heUTdd7C7o18QiLRaVcqLne2UiXO6anEoiEROWXFQIIwZpIucQEz04oFW6+kf1y+mg5w11ZJMj1z1wfJs4ewqsC2kALyM57HnbdTqZesITKoOmEIHgOAqB4DOxMjMptdv8QG8GDY2ejBp786w8QhJTQjI9j481lpNa/RXpRIQEo4v8HJ0xVhCAnOk2qk906Nwtl737E0jDEE0FzRLzpDXqemkTHncktNYCch1zKIs3aG+PO39n9I7BkndJxO00PNWJcQHDiQJhkTcKpeAJ3gQugDj2ttS6xUfh1hbv/M0JFvLm7hyXiyLE5fZBAf40go/H4M71b+T+YE11aXFkWvN1Aq4xddjPtSXz2y2c/coxq/PYX8Lcvdu0jKEuIIZzOr902rqYElMs1lDtVeYEgPCmr8cCzydapxwK7/hyQUjRyN';
  const _INTEGRITY_HASH = '6a02c9cb3729af0aee9820afe1ff1f29a7987a28a5b8e5451455d759aaf1fdc8';
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
