// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7ViAF71zAdLGg56AuzPr5J2sRGYi9ykzY0SWYW33R/DF8++5z/PI3Eq+Rtrwb3U/ETPbm7fzhpzCk/LyW0UcWSb8bVB7pNkbNuXdGKy3aZYObI6hsoGRvst2Abq4ZuDa18PzMB76DJnR/Id/QpbaAtppkTwkMmj1D1VPnvCbAKO+ndCXRHONlUbDmoPzgGDfLQX9TVLexx4Do4CmZs6joOUTBCHUhQr6+8CGqnblDpEsfx2m1oTBythvdnFByvGQeMvPCDhJ/bjNm5K2xsSnOwT//OmcwRwkbtUWx8Xw2RR3UqL36mtX2IExNDStz+7hD60C7r11D7HmedC7CCkCHT041lacp/QROhW659AEf6LfjHhHeKr+5hPOIK5MU1K7JexDccPQDwR1LPcboZLikkOHlVID//ct7MaB8jsnO6YR4yQ4LjTWxgkFKOvVtkZUZNnKZPkpk69JfFoAnNmzp3/OBM4QKNzk3YSPU7krelMYedI6aHvNaPMiyIouMTZM0re16MfQcf7wGlsmGefuFkHru8x/qdKKFM273TN4DaLtupI+vq5cxdJEaxiX0CU3q42fYex6f8kgUX1o6spsyl8Trmr0oFmA1g4k+X7th8YZfeENJ0YMU0VBR+aAxNcd1iAKlU98jEfgjMl7kSx8BL4n4HDRSShfRP/SI3NvyzQMKtFEBrBgaWMMdQJFKqWbRLU6vGW6JoUFmJeLe+sqFU/GItLRsRbU1VYjAjJs/VU94RY6ocKh/Hx563nnnSVVa3AHyh6AcszVdwZifZzGNp92fzk5CI+BkVKhWCz0Xxn0Zxp9rQIp5PZp23rXByozgUi1ZhGHN0M9C/1UWxAqGa5op0nWVDsrMK6xuah7trQRQpyIFoBW1qVSojet8qYdVoB3cMmnM1sXE/TmlGQJHmVmBc/nOVfEupX6gCmW/WW28szgjVNq3Evojn7COdifkZAhY9Wbt6yP8TxQz02JZwxB2Q7qg7wWGXIH+BgWUXWoQGXVBR+Z1AOmEWlhCP4+7lgG7fHjvJh/bx4voAkUzkYk';
  const _INTEGRITY_HASH = 'aeb0843b9c82e06599bd4e446671a63469014d57be02a898e08baf43dfc6e5b3';
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
