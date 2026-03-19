// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'eMJMaVRoq3Ey/T8x39KE/OxdG/L7GgdAre6BiopgjbStnnpNvtlnOAobSQ7N6d5ROGCZs/7yNdTOWO0rsL2jG7z6xiIMJyXTJuNLrWvrukUjqA3dMPWwNkaC1r+Nrn6TPBcVWkV/6DJJeHTvh/2ncfgqFuZ8/215wIOF609QG7MpDgOFBhEG7iR09wA2BFZQ8elRGE2vG6lxkGnbR/I02FpyE4289J35boPdyAtBrhhF8hXknA916rDq3bCaykd0DQd6N37Fjpf4bj1xNFarPgW8b2MXBbuA8/sg0tuXpE46/8fhW+739BzSmnTmm90KmyvQl2iZitNY1qD1T8aJFMxcPL/ZUJiLdazo1+CYVGWBmcjatwXB71XzwSD70vwTwZcs4Mo0Dyz/177w6oqyT4B3cUid0nGpXvuXpFNaScNCbss1oVTt0XOIX5gr/y1KtBufRrvIv/bioWN8w5bqM1elDj8jDcKCLWs7gBrDjCDcB9pRDepr2wiYSsKBOGMWKibGk2XHrJLqnuV+23tLl2DcjTa374ynhjsTiCyzuaaz4Wfhr8Q86w+NJHZcKF179boe9fA0ffqah+mcWSfjggdNvFuFGGhDI771FtJ7cSrp0DyFOa+KEq4t5IOsiAk0CYH7V28VLV4dAG04tpvn5pbGqzqpLBk+vzVDHxcOSXVpb62zYDhYsiaJ2+WneDe6uOLQCTk5tzIWEDi6Tg1XLukKp8E3/c4Ztu9JAKYs8D7WLcUQynZK6csTia0pDwhmHPsDCYqY9itJYIQr/NRW0ggiFuompjM4mXHBMu4Dyw81t7DlMeIQ76BIhQbadATRDRMI0HOikhyBYgvdlEw81lHdPqvtF/veJeDaQZHcWWqaOZ5lWmv9OqptaQ+W+SlcQgmNV/5Hbr0u/xRxOUmS4GDPUSX1yAN7Uwutg+90QUm1XT4UzoQES/Tg4Z360XLpuxbD6EVr1/tTX7JjtPFEOX2OIukr1ofCec1p4Fd+xfzbnFylUIAQ+VRdv9e8X0tQDw==';
  const _INTEGRITY_HASH = 'cde7dcc76cf6b173d4b550f9d4355cf4e27253b232745ffed31221bcc1f2b8df';
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
