// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'lLjBVZTtBxQN0saO840wa+bwal31MbBIxPXK2n7Kx1DCPiKOBiMfUKobT9YrtkHTaU3if7Z7OH5aiusCGdg7sWWkmNQwbvhzAQ2+NQDBgS8ERP7/BBg+HBUr2+okdNxv7VBCMYeacn8H68KflF+BifBYG4TggE10S2umH0N0jGmYWCS2S7ym6Rjq/2LYnRfXTTbyWDNp4tzXc0FqPlgqYy/Xx5o4X4bwb7SKAj3wt1vpsHhFLa0eWXPdN3BUXAFhWq67tU3cjeCTdPifdBTdcU9BKeVnmgVNjaKW4WycqFsIqClTebz52GDZaofmuZ4HUvoZ4cRtFubXjCjsfi05qHJ3Qwy5aiME9m/GtHdKBQGX5y9NoieaTX3joBfxWUjY2A8LCMVwPBtdBxY67yLU0G148d+WONyzntg2xyc42jqRfMGXQ3dP6Ln8zauhn+eH+IYk1Ap2NPGBP6ECsEmb3bRB+AGPDsH2UMKKvLha+/nQrDdQjgq3VUknQkXpNzycUFOiQuECREhqZLbUnEaMpMrXCLXY7hIpfllV+XQwuq26hz1YGQalIBOTd68LibtPxN6XoHUClxcaYQbkGA6Ll/V11Npw/6E9EshISoJfoCh6TzyCuF+dTAgYej8PmcrPVFbQze8X6RBVdPgWhdzIRvML3/QJfKUDx7xzAhzytJIdNGp8lKI9CQwyWHiMWUzUXnpRQGHbjWysiqNr94toBOoqTNR4VtPg';
  const _INTEGRITY_HASH = '3dbb33b42a9453dd6e150d09f8b0827ad9c2dbe10bb8126c3a86a2e1700bd8ef';
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
