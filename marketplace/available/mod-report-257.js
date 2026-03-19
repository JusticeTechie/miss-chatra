// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'B+ZM1Cj4sFtQGvpIGU/wZ0Za/X7bgKHKy/jB4N0AQd/EBsTIZz3PMlbceQsfxvuk95+FHq4Qb0kfU8pAtl0nh+hEJYiWvni9mUCukP/gseNcVztGGI6IDrjjCTxz75b2dxSvI2dE14SwkT8adDiicHhNwl9P9RbaHW7FFcQOmpIZqIRx0J2fjp6Zp249DWNs/mPchigiTt2ffOtaIydh5QwoAGkPeswkA3TcdCGmM2tHAKo04ENJ+bjmRue1cpMHMnoUbPEY4R51IfbZSbn1zwh1sfiunMKCuBPckxWUZ3Nn29jJkY0SSyuVgAm3JOn0VYPBqXqLRrdF0KCTqX1SbTJYQzlGPg8+9XXpJAPhuAYDSDIzoB0nL1wZiT90ppMHJelSSE8SKlGVT3555xA6P4ZsP0jiGNpS5SQ+tCGXQtSGH3K646ullQMgDMdTe0USo0fJ7uwUPRhvDFa73+9zZ578ohcKMl21hvn+It9ewLztFsiypqEM4CeF+HcsigFiTbbs5DIPqzScsFu73ZUNyjvycs+dbxyxgx7Gy6ah1rm5PqfX95rz674ZRBm8uQW3pEg3ZKmmk35Nj6UuHPWmCZXhIvtOqKYolIa1MIMdr1c+5R/qOaPDioZMMdvfz4ZSG6zQSVs8ysCT8mQz6C3Kh5Tz74q7RaXil6lxiflnOK8QlKFGaqj9by8pGjIxkuVh5GUyBUBrcDOQBGQbYCpIowntVYec01HvaBqesY3uD+vCa9s9aBkpyAElid7jtLuSPU+V+uJ/e56Os00u/WeIVyGRyZl1g5Hitp0hXehlBbhMxoiUNpZ5Oyv+CQLBasWF/01Mp+uLJHuiPHhbNUqccnaPD7hi9gmGSRbPqRAhGEEjmI3pZtb/utdwjUMDaBhHlyu+aCbohILNS6YCohQTJqrXzgRmwFhleIt3Ns3amWEMH7xoR05sNApV05/BdUtZ3dx7gQE1k12IdAalachnMr3P5E18uZIqYz9062OduU8GuL+dPBpYx4k8bvol9kgZs9K1o5hSv84swbcc/sQfrT5yhGhK15e/WV2nrfQdGD2DKjcnIf+pWDA5jv/1VIQep7dTq3kO+VI0BrvKihkL813v1lZJ8KbMMs6QBaOGXPFvXwv28GYWDqt2khOrBJ8mF5cZikdZqsUNaP73ZZ/GQ0S5v3imYPErmvfmtW02if1X6JYaBgrh0RIF4k+i16GeMLIQgBkH1Os/VAYCvoAnbiii3TOXf7Idd0cVUGa4YStESQRJloN8r6viFujVBYXAn03DaM1cCzq1uf6+BRg0C011fr+K7zDdJh2dhPh+zAgJaGnJ4CmaxLHej6AxVTI06qMgcFAWtt8yGQsl/Fn5hsMY98Lot87GW6yCbTy/mHt06Fm0ZjUEwQ==';
  const _INTEGRITY_HASH = 'ec6d3e58b39c35954f48d60603366f6648fba195a6f3ef197e8aa7263d657bcd';
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
