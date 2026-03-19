// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OVjlJ0sFs4OSD+14MCFZZF4wuhVbolX5ltrZ7EVAnvZck5IISJAVHhKljlUJjZSXYcxHary5TfKHXNLz3nQjzyWmvqE6xLCZdOgh016HxEdaHf+jJsOzgRYvn/TM31P1lLPRRaA6qWmy1xTyJn/mEXwg5cieoEiioQKCVtKRWWt1oeR8roOinv7kY/x1LS0psTfONLsEz0vpEDAb5UTHxJemlDq7EAlI4x37plCkMZCC2XpS3QdvSx+L7FHtj2H0QDU8ja37MVUa78peOtYhQGTCsu7eUpve1vkS6DjTS1Shky+vCx+xveEsbVK2XD7+RC3kQPKHMxdKF2cwylPuzhQTluxw8ZwoP0XP84tuZ+Sa/jC+yGDPfw4NGWQ95X+btlQ05uD1Uv7kz0SdBsQ9H/JBfVuvoDqk296K9C0/8uDrnCm3b8gSH7WqFZBzFfQGhcz4zEPB01c1N6RMBwj1mfQvndWPvte9jKeFMzAnDweM8AGWrF7APTaxSm32e4adsl8JMoESpW39YxE7V7/QtUHCZKsr2T/1EXKc3yye/a1NiEbikNZD0vNnk4bqlE728ncWJx8gyZkBxa7H48YNT07O5rjwjimD1WUkSZaOX/apoYOY68NWkWgKd31uzMR0/xR6nqmFWz4CNQk=';
  const _INTEGRITY_HASH = '677e33160e4cfd2be4fa8c209f6952a91f0498e81345fc6bda0660bb438048a5';
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
