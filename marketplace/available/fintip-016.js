// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'p/VXkoD9QCEUJrNdSIFOIdB7GSw+CbDfzqeOXUeNsDnBvD8/3hYCbig24ioFNu0T4bSwnVQ6o8y6DkEWUvSz8fIWE7WbvFaF+a6JUnuN6eV/+ygalJUAMrf/SBzIA4nl2J9RYtuuM7No/+0Muwj72KuRDigTA4aGpLIeaiAcreGM8UWQbK1on9iuv4LJIywXG+3584snORKw1XSH1WRPa0IX3rwclT77cQDR5N2NxGCL/Ser1q/xnysl4awT/PkzOHC1asZuGhddpGrCo3WqvV+hpnBL0XLiG1vGPJtlwZmo21fVzSCvPwtLhSLklNJBXdbjOJQ6axyCTK8vd+L2DLBhQhUyLacwqtqt8m3zqsO48nznrQv8ceQKUEFOBQSoGIMD9pmzX6+KiQw0c02U2mfYxWGleP0DZONkhy6sK5I0UVefvTyUVWzLk2sjQaaMmtmd+xD2dyxbHk530pdNHeHHU35p2C1DI2LkaOTRTw1rQDTTte/c/SjeQ00q87s+9InZEwOZ7BccwfbcrJsPMMHgctkfrXFjtrnipBsFP4zjeI+deMjJKpnXcVHZWHWoRPbfxc83G4dfnjk2cdIgRN1FFVGazdfdr0mRUHHznlhuoO8m3SVUwbOPAQtJWnh/olO1c/D2B0hvB03JrLA983+iM3lt1DtNu0kG7A3l8J/2X6xZLS1eN51m4BPWLNrgd3HcG/M+wr4rYki0JGF2ZWpzHC3twEgLbdeibqoMrjXijqwXotL79V8gFicugBvNxG3iWoi8Drot3P86c3KkTTbHrFNrJGv0oYebCGvUITT7F317D3aqe/Cx8U3AR+QHpEhCl4flUSBGdFP+GKTYp65MDzwlkzY2fe6XXT+4p3XqEXiewFUFiCGvGX8nRiTWMeORh4ejTbBgJfFuEqgUkS7OOIH05WyVykIbLx9ZhVbuOs6SE65r6UCxQ+rGeEENeuWyQpBhFt/JLz3/wDpMan+lMZVu5HKCKeGq60nho000dT5GmOde4ETnPnjsWJqf37VAyamfKIkQ+vrHK3mu9HXt9Fvh5agmYVwHN0sWTa4u+A==';
  const _INTEGRITY_HASH = '310b6eb00d38f43aa8deb57601711659106754e05607705d21fe8980889cf816';
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
