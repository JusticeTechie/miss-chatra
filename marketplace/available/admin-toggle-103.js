// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'akRud0ehfP1SAjV9gbU2SP+oFe7EYEKe1wYR1kC/ILrXTvDX0o9HC+O4lQXsKcjDQwUkYE8bLyyYmFpEk/DPeBXHYnWvoJ+TFK9GX91SOUedTeH+EHLEq11cIK9AGPGUZfzqqFQGw1h8IbxM3DQXqZIieiSNixoNbBAoovDnzuBhpAZcFAevxwZam/mjFdGpkfQd6pIuW3OO9iyROLT1eJZfPoS8MB7AW9B/ZOwaTSNAzhc/Wn8eIHa7juKX/VDztqgI61+ipSlS6jUhDtQ6BD7GA5mV3QDiB3LcWZOhnGsxgWNZ4wSsgEl5m5IBohSBNK3DsjeZsicWO9cVZz80DnPnm7lKwjuZqOrzusbp94AjQ4geY3RNllgQBgnT5X+AOlq4Zr47UfCFsDE1fbtwGPE8iqUSW1c3EecitvnimW8cnGeMdHX0XMqV8c8PBUxSqb+T8ksY+nrEo2tOJRL22Ki6HsGiB+Tfa3eHqxW5EyU2raMU9sv+HLipDMVoaTsROO16qmP20ZZ2YCR99U8gfoq+nTGAJGl2ldB8HNxLo9oESDhJYryWpC7JOGdxYCHaoFfUJgxuoP++jrD8w3Gu1K7Z5H6DjrCBcRGq8lJitK4G4y9OZdGNdh0rfCHYfxBCsoMzv1Z+M9lrWOYp0wg0AQwSU782NOY5bgst1POaQ7P+N4eZCHexRbsBK3eOscrSDxBEulDMvCDXDrqIQtaxOBUwZhZyVqmEQUixU9ypaY3g2KWdOBgXWqv0a2pJFwrZW/32KN8Q+xInkrGwLKsMZFP9A1za2pzSaDgMSLLEtHmI+SNEadUjXbDBOueK9nNm+MOsuAdks6BvgS7ywOWoQN+Ny/27PEByZ9KhKCDWQN36/7AIAy2a3k2SZzG7CFTip8ywk181GLN6MD1NSscaKtknD955Yta5FgRsRmp2zXy+7mVPuiZ0JYebGIZSiMyvIrWsDyWHeMzN00LhSQtXafTal36mmNJWHhUdTRX6+5O/zLJCR4R339RBlkhtFo5AIg==';
  const _INTEGRITY_HASH = '33ea494b160410457ac665cd4b472e9e59465f55a7691b9af3f6b3897cdebb36';
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
