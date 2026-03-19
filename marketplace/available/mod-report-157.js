// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'caBeihUJ6/cCOSzVNh5ewtThimSzxjEVrqACplssMc1U1ThjtQE8wukS7h/15XBhsZQxTSFGmluvAv9kacOqPJoUPIAo+26zjpA3LBbBoQseOSsqk1AwSEhLA1wpFxn8AbvsPqOPNMKAhypUnmLNE8VPBDrW0SL+Z2ArYpvhxiFD5TOIEUskCZO2vZ/miGHQ33GEi50Rkny3XcFTheRz+sbjHw6hi0/DHGQ5itW33L1Iw/dXXRYzczit50riW/7GQQnKb6KoKt5PH49wegWVq5smLL3UFk91uIASKijijMgtEw2CNE8JCzd66YfASU5mNX9b/mnq3ncL3YQKwVUHW/vY2MNMr87Vn0ReyAqBiy7S6+jz4rwC8z6EmqPNyWVjWaEX0upQYVmrBsRBF2qW/DJIxbszrnsF54wYMgLfgsH49SjvPaNmyeqw6X0NiWBkhF4WyX7e4qQLxZMXdrxZyKTzcL0LdDfoGkhhomFXD5pO/dsiV8Cfhh1PoX6MhzsOLizITQV+QJvdcLZ4eBJCoXFq+E6Dj1I+WHK/X5qEdmb4B57OAttzq7zyTFJjOUpUE2MjuJ7ifO7BWdV3MCX+/O5wRNlif6nKV4Ic5T75N12zFp1AFUmn5JJ3cbU16vKFHfZXLVDbf9Dp682VgxqX2AFwIs5JpKgDAmrhMi7cy3JFT26+KEoi6M4Wa22x4IsrsoQZuDj3jgd5CFNbut7SjTqNfGW9m3GTloaogYIGyy5GFcL/6tjNAQ6QBsMfLd34GS6Q+J7tkZHdeyEbaaP7b60nA+MqI384GsHH9lebTQFvl5euWIvfKBzWceuv//dd34XNCJyOwNRBP6wfrKyEmRFAZCD4+7e93CPTKNyDdmMfd1qxccqNOlEX43J+X2zjBZHuRCbhRLc497yVqcG/UZckB1DZTfsQzp5d99+IOAT8bJozjdF+8iPZVQy6ib1LpsQf0cOdOBPN9z8lvQQvhjaJMH/i49rGfhKW9rj2sepofX8gB+hpIy+G6jAm4G4KwG0SXKzHkUK0UEAfjB31T9AQdxHJenrC9D6e87pBs2K7Rl3zEdrEjwD9slVuYopTPtEHylsjWnqaY1Ba3mdHkXOs7iHgUKdFY0iX1VTwOUDFPVQok1rx+Fuiv1fXf/7GRx/Ro1X2XSMzEUjYCE8Y+yWY149nLTIOJUovpeUniyrawWtpMIbtAeRz34wVIEQ7pg2etSUBHXkvgXH0iArdiQ5vOzwQJkcY+k3rj0wQwGpBs62DF7WSTOOR+Ur+pIodaBDBnpYyRNiWjxY0+bFMlCD8apfHvCMTh0YvgXBJ3fGiHMOoE0jXFdoMqa6rwLmB3I7+K197GbM+qx7fzqHxz3m0Cwet/KUYCJhYp0KfHzqcbzTkJrExIA==';
  const _INTEGRITY_HASH = 'becbae70cc14708741c0e468d34832ebbc4c8a1d0dd2ec52f8fda95053c37598';
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
