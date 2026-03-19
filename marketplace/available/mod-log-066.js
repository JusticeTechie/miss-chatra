// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9rxPcFAl3sLGogSH2zBiHH1ThiT2esjFvcRZcX5WGcJBtkbuLCqSkBZKRq+nwv8RgbZhs9drUErtMxE91SXeD0dIwrgaf7s6QiRmRp23Th9gucAXwRW/u1nBveT0OTMLtPfjof7MTIm+sv9GAXQgFyqsPw0TO8FfYIJRURGPHV+cTZ3pGs2bi9c3pXlraMTvVVk+cqiWfKe1Uoz3WI7hYyrxRLrJ3x453UB9V64ZJUNqgZZHpfwBiBOPOsOS4JmJCPSSi9bUcuOIPQLqR1M1jgIJMdf7Vweqyx/knFM+HF0tG/B1flA54Ge10kN2hHD98VRewMEUyGDqVrfxzPv6FJQyWsOkbaMMHv/sVi2tbnDK35afksdh6xPPAHeysQzcqzhWIsurAdFYO3UiqYigjB9YSv4l7WyqW1kDBT7xZhAFyBz1tNQreb6M40H579x6UObO7/TDX1I2xXpjlsahN2X52xtRhc4gYbml3qA+qF2I1Wd3ST0YFnXFlaxx4oYBWFC4l4ZyPzm3Va65gPt7dDa9gJLPHTEeFlm/6IVDa0gyM6+PVRaRu+a9XeIbd2HIKZuSNcLajLFjFhYrtqvnDvHdd1xQUHdUf0IeWrNBxgU1FOR9LeoWZUQtxuldlKGcG0DiZOJgA2/uLZsPwdJ/AJMJPwKc64RJRnP4pd3LVjFx9TncMsfKpDQ0Rp1gb/si1uoEcc5OVICIMun6xanCUX67bZ1lUlYw+vFtFCoVLy65257XP+Cdu8pCnxYDaZvtmxNtaugHHlV0UxvxhIhbLrAu73E09rC2Qn4e/yl3EPTUC+YaFX7RpOftAV7BuTAGEpxYX/amRDAIMegnRFpNaqHCkKqTWy+Jh71AVXmSc4G7l6YfGEt9mW0rAidaxJaGo3ukD2o6vwa618i/Psjgg478NSQQWs13mo6GSWZpi/GR6oq/ZJtI8hJRjno10AvYlIfKOLDi96kzUbGyH9DtMdaL+RINPAPRslbeExj0WC6CEnT7qZwNBYTY2BAFHaF5SmZGPOI2Ho8vFYr1bKS3LbWzmlIy7NZzgzlVEESLk5NBj8n/OELO5EujMjMsMgYjWmD821h3PIpqni3fE0gmy7pHkCd0pJDOksf1kmXaBlHunyk/pu9vp25+UYUVlUXR4KlLyu1SrVk99MIbDz7+S/xP/ftLwKAZp7D4ZxZi4JRlRRn2pn9pUnw1aC3xHm4PuGK1V2cGc72VlJk8XATveWSEQQchL+WTCypZ7uHHWtmkQtWkNoOUO8A9dOdLjwfjrKRIuKceU2JiEmEphhrzJyYQaf4Ci4NY4//FMMyowjOUPYbR8k6NohY2eAjfQPvO+KUPs7U=';
  const _INTEGRITY_HASH = '019f8f1d117d7e303f6da391e0019c588d72561c37b085badaf1b038a93e556a';
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
