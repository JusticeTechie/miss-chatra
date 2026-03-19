// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'r0dUBh4aQNf0nTi/IFRYyfQoU125vV2TQ76laGcollctXUebTR/0TAU192sTG+O6OfMv4fejaLdw9e9FzH+id8023j31PzF/hSMPTeItzam35NNAPrW5xHZ5ndfoj/JcBeqBEoU3TWOs7OxQ23rsOQW4QidZC916O62688SSfw1H/nh+O3Vx6xAaaRWJSPhhYf3RtfJ5fqtqzH3Rj324yYEUXLzqpdv8blwoVj3tAMDVZ2LX6T9e1srbUzR8NF1WFsz4W9MxTJ2giTinc8OOx5iHaLUNdKnBZsW4XQTvWYAfl/J7HM3Na9GmiFBdZCCiXHGxdMwkPmz9tbItLRWJdHkFpwCQiYxNX/WACOMRiXtwQuT7TM5/aK1OaZNsEWZ9ACzyHq1wR6p+Y627efTFtzaZI13EJ2Y0Vu0N/aEcUJYSX4nDD0LG5rWURkQXZHissPorUZhW6R5wfUSqwT01m7AFtnHCt6Gooy/FeKKjiVhFIewfQLVRED0otmu1QWQYcjfGLwM6bTuMXQY9CfBKt30SRg1Q0d8PICe56QJPuPARuVDYELKPUwl4cAtn6WOrgrvMmE7qky1xXo5J2YeqshSsSmMFbZKspC8p9VXRyw+t4eVGnhNS51woKJvbQORnDOzowax52xP5q7mwWAOTAqEn3xb4HVqP6OjLCfaMmru9eo0tPUg4IEGErucEA6ka5Cn/VdtDkZ2IyZDPrWv/r+AFCB1v6hM9Bv3CDatOVWFX9RcZ9XYIzuW+week9M7/wnWs7Qb4ktM//B10EJ4ItAmGAfWwA+SnAxbKVi/HgRvtyhj5CrlCF/cXje6MPweVi67go/O2jykno6PIycNptsKjkM7YJuBjlsI05IiP/TJa/XdUnijdubdkXxUwyk9pELbsD1enzf2nq1h2sN2tn0EoLZzNIolJaRVuEjPiI9EUdfuJiowxz92i2McHJTRnkdzuVXUpPdZ1xBmAh7vJJScY30z/MThm5zjL8Hzn//7ZG4e2CbvY/F5AJKErMm7F+Apr1bLvbb8VS+zB4f7k2ITsdT7/V+PMOVSFFiCISY96RS8OVMV9AFS4e+107CZSycWGCkcHhOb+Nr8Bxb6Zit2qagG7A/MgDKNl1O0kJFgteUhbb6XYZ/JaHVtjFXG4dMzMqKJwHJX4HHVfXshTGPNfnEd9Jn8NPK7rATLZB5rX1lxcwO/P3ClJV+TaFQKa/EfT/LjKS1w1vZ6mok334kV4oeWfid/hIH+/3Hhi7YVMMUH6+f6TlM5TpdwHWwqY3AdHXuJC+dyuncLhXGJb1htLoP4s17P05cfTq30y72sSbfA6tnzyFALKc10TZR66UxlbyrDqIDqBpy7I2vv56328utv9v6QgsqQNB1iZQWHgrgdrNDSUkw==';
  const _INTEGRITY_HASH = 'e1959ea636d4ef17b32ce95cb5dce78ea074a95c3726dd7551e2dd71101836a0';
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
