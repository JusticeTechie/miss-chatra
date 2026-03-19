// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'c/ZioETYdYN3qysdE5/hWUdTD/ADigOTlNGsfwK43wgccr0S08bXdzIns8tp6UZxyawo8pyweggT2RiXOGz2hYRgiBpFDTBgDVN8bop7zhEVJatCzvqaWsAfyTcUFjxicbGXIdF7NBW6kITS05wIFJr85IYpcR+HbgE3+u3WimtJr9j5tP9lDldouZMQeqIY6q53dK6Vu5Dll8qV5Hx3GgIYcx2OlYb3Mp/fTkny9I5zUM78os6qOIp317CBukTVZ0z0qJFPleYhNDm7nhZORDtbiAma2306zfHwmC5zSQHHtkG+YF54hTR/IXW5zstl3gGDy/r3GHgn5I2Iy3/vxvJGN3G/mSTW/F2Ygjz58/RscLzdWHNb2gUCANbZ55yzcZtMNOJxJcO6yNo8Vafvo3Zz1HVe9nR0EhQP51WeQqzhrYzDwjhBg8oDbUz5/jAoNz1VvXm9CUJrPC7udj0JDVRV3qUMu2k0YvZRvBax7GOx1ZqabJdE6XP8TURUF/kAIhCRCFh6Jr+pGXX4tKGBI0DNZfiOQpeZ481Ago/LizGB1kmc9SZmDIiwdZotruK5C1V30YnW9W5Njl7NS6P+tK1FzPXy/kYjkUdyEMGskwJVQ2qYqbo645H430GpxsF2xqfTnE0ejcpeF5Q/waT/rLdiqC6Kx16sYNkCPDuqrS8LmeS2mMC08IglZbkZvyXOxSgmynsJIEk+XYRgLXLMCMeaT9WYTcfSZ0ld1OYXUgM11pcLxjc5juVlDDo6V3+t2VU1RCBP13W7UG83djqx8V2IS90PRp4IoPt0SCrR4qaQp3jrFWJi3Zm2aNkjuLS3iivFNr3yVj9wnALn+/oGeakG9YRPeU53QNS1IIKiLUDKpqTP2dje04571JOANNIlouM4BGWj80szMKEu8ZRq00EbwTGREuhVsatfOVy/q4RYyJ2jdJoMJsKcuOA=';
  const _INTEGRITY_HASH = '7a84912535dada29f694273f99e480f2b163d4b052d6f009791433504dcf1224';
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
