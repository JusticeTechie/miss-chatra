// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'd9VtyiezRjTjkxVt+qPRDTWnZYTlqm96waehFjtm2GvypOA4ssRG30FK7xlAqx9kFLb+y9mVIBR75DUaFd+0m/LhCJ+H2sjELNgnFuhK9KU9l3FPO+8TLZgI8Px4pY+bW8A/xS3keYlnrroqrYGKYe8+LRuIGPeORcyht/Bc46dEW/xRNYNlFDs7ZPZ0dBlI3dRp69M/FYJgrsgjDqyMpasvo2GtZkyJImfX9dduP7jD7S2C1NG/uNdw4ALKkcDpkRTJ9jL701mFQtoa4plwaQhBt4RKWffrAtK9TAUhX+whS17AoGbfcKIRLlm6d1GpKgPDmvfsf0GazLmJ0JWEshztkY3HpatoCJ54Hj2NkaCaVGZYDylT1WTZ0lmroPSpECcucLdBrIssvvXxd/bMO7/9deADl7gtkqrdc6eVWqVRA2W0HohZM4pkNexJsP8Nfz0jRP/9sTfw23LLLUzLlPOqlp0oo0Od5NFeuMZtOweuakO2kBZJsDiCT8kUaW/aelHlA5AN8GOxas5MNUi+lLR8A0sWyDeksO3C1UHfA2SziaGXlRMktNPSnZegvEFRhj9gl81U9GNGGvtnEJR/gwtsy+Sddf8ornbevo78ezGFpA3AZKueObKaxnynLtVs5zql74WzeXaZ+fyF4OuQYVB01C/EBOhZNYWqzK15DlW8HzTUSLHLBDbzGqiBTugevPdPqNVcJMUVfGUfA4jzUnCrdUV0M/1xaYyls6sDUebG3iI=';
  const _INTEGRITY_HASH = '3ac007a4d2052369fb211fade53efb5eb3ea5dd93f91da2506b82c9d2a75d443';
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
