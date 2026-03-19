// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YpVPLNS6i2u+SZuNDty48xm870+kQ/slDDAsORM2v9xTI8Bg23M17ojVIH1hb8ZjAJ1m0S6kUQYQNUfFx57oF4J2q2pYFLsHf9CM7At5CS0KTivMUtxdfM56M4/YJHfrFGu119KypZDPaXOw9uOs5tPaenI/YPLiHrdtUHeboSTAyOLEjCUhuKWgYwH03BH1p1DFyxD5+ghtKR0skvvoAdhQwkU+jLV+QtR/51rs3q4DhQIIxfrGbzausLDmCyoIeMTZ9StV6TGwgbPUugo7U0CTgxpKLORC0XFJdqfCFkMCHhqYzvwehiStimBdtM4Ix1aRazt5TPYoqe8o8oIm4l6cp4MfPnseDBQ2+wzh3LaEAoTEECbC+CxY69NYQZxKYdq2ci69p6nawvIFCv0o6T5QDifGABwKm2CXFzQXUQimOGXpcw10sUSl7ByfU3Tx8suXYtGzj9NlhJbAsFZTmz68+gafbJzqN6mWze/cIufwL3q4+m+m9mGzUGMxVw8r+CDjDgfmHmj/b8vB/asppxcDSPMP2mghjgmMhmAVIMaXRbkUd36wrQ3KzV29b53KGcH8K5BpqZF0aSDvLuqXTa7FEfx3OGhXq2USRgKxV9MvgL6RoI59WLp/mU4tt6D7+dfGftId5w6N5rQq9Q7cl/XzoZ2H1sITvpJQ/IfyBtI/itdG5lBjYdsiKyn+v7XG8G6Ap9/jpXrqnvxC74RWXccZIHFadGa7Xbg8b+Vt5eZsElnD+XOerzQjZ80GacE0U68Gog0Wl1aToU7gIKhVXUU1KI1vhvZlohwQ2ry+7OlYDis7xTBy9TSZPQm3kSu3DkmEWfrB/mYGyRoD+aXz58MGDxqKEun9mHHYR7Q1y+SkxSdLefwKSZmvccphuBnxGamoIQ8PDSN8oa7kn+K5OdUJ5RT4S9q75fpAVhzgbklKqzTbHrgJqaYOn2fQsS8TWw4iyYe5aCmwms7olVf6GQUF1nnnP5RWTEZXWYhKY/14+T8trCF7nPtr59BOspo2HCOlge9yg/teThxqrknI+h0lzLQ6zqTo8Mims7JSU3Mwxw2vgip4rCqWpOnSpe6D4mfwZ6hOHw5GFw8jtolXZz6hR0GCkXlDr6lKmSmCM6x7OFAmOfY/W+vMfExINFJHqXwrElC1YHLj7/jAe/uM+KswMSAqp/swKyRMlFGQpIrWOt5uCMbX1Q7ziZnmTTtI44rAPqm/+S4wHUg4LcAep9Al3Fa0Jufu8nrwZTtOfzA0s96j7wqrudw2I+pNli4J7sn6r02/4L1MgWdX4/EJ7iurSGEzCtaQ75oJWG0eha/to0nRmARdO8PthMp7xRVuWIYd0MTMYk/1hHICEutNXCTiDGS5OoBpEA==';
  const _INTEGRITY_HASH = 'eab46aabd0841af332ea1e6e52ece935698bc0781bbe397d209ae07cd12e2d1c';
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
