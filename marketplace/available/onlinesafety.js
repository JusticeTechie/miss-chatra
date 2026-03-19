// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3simEIaS+4+Ql9hrVjuk+o5WjaQH9gVtolnHVOhGiBelnACdtJGnjaqHEiPoF5bV4Icf8wcYo1FpLEcvnQ6R/xXvQCZ23UXFXqDsbKTH+b0Qo1eHXZM5uRQQQjN6mGMI2chJrd4RK6Jlu1SGCHzwhofsKU4c9X/FJyZ0mUa6MXOvgilGxcnc78mfg4bhTnHacLMZt0A2sV8VUdgxUmlO/69O2EjBGjUAPR3WKp0/1RaNnbef9jmboBhv/JoJK/HEk5bGEuyoU5eRfQMUGuhL5nW0eZTTbRUAhsdiN29UDkL3r3Hnz4+S8jG1zcI5oftPlIurccbxC60kAkBTuRlV3KY8caktnJbzvX+N6b8N9rllnFygJRTVaszhzCMd/vz15Iv6ya5wQ6COqdbl7kR+3Tfl7KAuQPwJ5FU4tnmyPKfjcfXAjl7JR9beCZ6+Twvjqym3JE1yw/RayV/4zNoiA1tX7pRJ7iTRE9tjAZ+NVx0XboK6JWaFLvozoOYQ+uDpAT/V+bp/k0/g0pw3nJWANEJt4XxWp6Qr9VsyyGqL2L00rapNtRoMpjiaYOF9z4hIxR82W+jm06RupNnLPfLDLSKwLY1VmCEsQX4vfWy9laGbWjSUWuGXYEPNmdWMP2RecMjwxfHt6y+Ic7c20UYScHahJCGgb8Ij6yW53TbP+TnyeQV1zMxngqcGRoeoeT062rMN+FUWrltwvRoS9yyJ2bAP+FOQYpEr/bJBPFS06LmRl7s+hFsBZVwPfuYNjmddL5F/Gzyv9FcfaE9OBRlRGr4GdEIThsouFsRDL9c0KoxReMv08Ukl9MDTrwedAeBFsLaYVqAJZaQzKfjForAE3Ic3WteiNT6ZJXhqppOLQAy+m7H/Jf41cu8ObYXooJOON3JkC6HQtHeLL4QUem1kYKs5hBn4UEe9bAJLsAA5bWtersk8z7Tig9q/hcGzSm/+Xu6q/66nbwG2mw/SozcDmdZiUCJdM0t2oDnI8Y+ZD5GizNkfe6fN4m/LCMvHN10oMMTI+cd7idcZf6OnjChmCPubiWEk4TVNSvISEcvpCPw3Dl/vmdkB/ydHqeUXgYl8FtTJTDBpar0itRxcNZry/hI8Iy2mDl22J3EvvxWCTa4VZCKvJxKjLk9gZIr8uEVOl7r8HoGwiYi8NbyDI14raYGBfogYFKsvydscWBmIrcZ4vS4t9ZcMRLMc7dK6KZohFfkeBz/83uBm';
  const _INTEGRITY_HASH = '106ba9c2eebc06aff9b8b6dd607a09fc5c95259b3f3e293b8ab0ef6817a2d33f';
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
