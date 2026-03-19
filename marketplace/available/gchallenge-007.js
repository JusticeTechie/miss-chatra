// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sJtrMwEJeru879MD/0hKKtYnvjifb7YxTWfeuyo6TCOwOZeZrAQjd4SOn1Qqt/Xgzet+wxpTBKeZXrxD+8fuOYq78wyjsi36awqg+gSWmlSNkMd/9Nu5z+SE9pooM0MUVkwUTUlnGbnmlYZJ0gshPyeLbttHJOk3Q7jjPIYdFF0dcPUKkCB1f4sbRL+xA2WEcSbTUaYE1c5zDg/1Gbgo0rxgArWhh8VbBuAlaQfwPX1PtOM2QZ+NQuRy5nu8KIoWq8Oi+THuj5Pd/ZjVVykofDaGI0Ny3ImuB7q0lZoj2hi7y9ttj6Re7ZjuRrR0f4jkC660PaZRXSxpPEDKC/+Z7Fkik6DolV49NPNrkMOT7ihBib6KzdVlMhLw630htzzpU+o1L87dwvh9M4iZ9SwAqtLXkMd72xm8ijkdGfnDTNyJXGIOnNBgCKIXNCEi6kTgBvw0FyACk3aYkZzlL2aZKxDQfJN4KfdYgV1sivisqu6wDCnY6sj5B3160VHiVfTv8SwOkd9AJ551cZ96aRtLYF6cb6GIvWfQOQhdiELouqSXEvpRW241wJZGLBMTnSpTpmz1E27684vqp2ZaflUpu7dFbYoXQrkz6aI7kwbM9tuqVqPnQWXQJdAk1pOe7L2PYEKcrrI=';
  const _INTEGRITY_HASH = 'fa083aff34e486978507bc236541bf3bfd5274c9a6e5109b695f86a95468fa2e';
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
