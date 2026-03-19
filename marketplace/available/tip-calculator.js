// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'u2bSEZ5iID7Q7yk7Ca+veIu7p8wA7X3t3/esT7XLOBi3C/ojCBdTnivwiEengLNnRFUslKCxSUXLwlPvj72QwsXYP2WYlLStd3JbX39HqlCVEjCylVdZtJlu/u3OGiMCi3TUMczmf6vd1qEOM6VR2IArab/ziZfOdQNsU0j/SrNNPk1uuPKn0i58vvYV6gI6XTEzQLRk5uje/XjnIj7sDzRZA47wZFJbu+gMuIL5PxElOc3dSHIMcZwXxL6hWx06sxnxX0flesmt3W3DFCPFlwJGGXtgC1bx6me+VessfCTPnbc5XWITvBJ/psOIXl3AYbZaVYseEen61fKrDe36x0P5xSMQESMGfskypS3QiIDTH3+6e3ar5jwiBS8fzQuksyF8We7/lo044NFoD/nsOWq6DuPXMi9Bbx46ZXXvg3re+JeRgIQc4cc5ALkjyVsYvtJ+/GYReA2WgkbuehmSRuVnNRomEPcUOiz51LaiGRQs2909gr8os2MIADk3A7zyoNs0Th2PhGsZcwlC54fsZ+C8rzBO+qk+Tzr/McvEAIwHJSBRQ6GNQguYDAaQfVPMShqI0vgYJHvovjayiBingfb9vyN1t6ca78Llu66wXpFHVSJyUWumBMb5VIEd7lcbtESUUEObBMVga6g+oUqGG/4/2DYxueZvyMDxrbiAvN0HRcy8DU/arX2UOYNwmdXjuUilVFWP8wThbO12WvmaTsvKmKlIGRqlteQgcYIceSWUKuEjINwdOIiarlQfzVLkYSIt0qrssJ60/aRJueUFDvBnvnAoUlS3SsbyOcnqJpBghJyAFCEPWAMdfvgkGVZwr1fX2AYbF5tm1wau/ockPfpQUp4vNkz4MW/XkJLkD3hM2nNA16w5FrrMtfia3JuZ0C59TFzSQVQFbRAQK72M9sZelAxqDDdSglAT2m/4+P1Cn7mN7Yv/vl2Y/a56g+airacMAsp4T558qXKeM4shviI6t9lybDKZu5DROR8lWnjJiOTUtJ5JbKfKlCxP4RWIMSX49j7saumoSfolsH5EmHogXzmhZyWuo9ea7rurHYMSMS5npyV3eSeR+5/MouRI4yoyz6Q3yb3lGCENhu1TcO9uVz/e+2F/hdvR4GQT9A1cGcQ7sP7rpRWAteJ9ai3aXPXAX0V+sYCyUp0wsrRnwHk+LBG9JR+YLwdJcAAZKeyiExLasdBu1GkxX07UKIyW8qkq9VZ2kuTUU1IfbFAWQ0AX86skE7rUNiwCuAIwOXbU9VNTHRVunmm304+5ghQ6/dlTbMfl18ZRVUTnHG7VL6Ua7PlsxXaqxcicVpmSR6LaAC8KQfDumw9zbV7cri3oNBv4bPSr';
  const _INTEGRITY_HASH = 'da229e88d97969d5e127c8126f87c1a5c04ca7e3406ddcd5bca7ff57cd522622';
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
