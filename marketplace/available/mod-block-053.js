// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'g3UgpFfjiR1jXPWpNgGsQERuLZwOKVmczG9VVHYHOSv83fH0X1+2l1U1zHO5+ucOHHztnrNTuV8ApkgU7EPGsFVIHd3rwDI1tItxjOij+03se64tiTa7H3b0EL2BUrn5T+jG9hLXrgYZG5gQJORsA+cpsAFPGSURQcL9vdQiUD/8Bwm2Ba8/iK2yOfePRIYGmkT0iGFXscxU8lE0DcgXZ5xm4sLuNyE7jPLLJjUPeYDj4gY0CeE79dV8bAewkvA9x1IQtY1jCNgSzoXEixcpc5w0Gne0KzfX5RMFHdZtSd3VcQDUTqD4nKD6Rf5uOBuusWeyRNvuOTV9NSKUABOlJ+pLqM/jz/JzINWK4fhtXZA4XT4aj7sHNbX3sXv9iXJIcP1LgbKK6GdssBC/8X+gW7yrG8gi8IM2LLiYlP1k/3HB8AYLsZQ8OMNhz784+4vyZrskrygQEu+VcEDz87E1B5PeQ74EeXHTjJXzpg7nnZL2XWn5Saui0gBVn2g/6J95kYjfRRpFWAYKeCcCpaJ14O5hOX0HB9KKbtcfHnJDVEOsVX8QVE19GTXCFMrDoxXrp5PK+FlFJz3C3jQHKlAfXHs5SH3UcVKPylWNQfs38gGE7dnwLeBfXXpOOal6YLpCgQdvPI/U6SwWF4bjGc9NldMphLqd5lIxtw1BK3d1df0lzba2rUkiEQwTrOimFUoS6gsg4ZEnAxg8nBPW5waptNmvUV6mH3uQBWBj6hfHWPW3aJt/7qzQUHJEgo221v3FVgAoIuiHAnwjcAGnup0xJNiuCRSwUq8EdtnH2y9dO+F8MEIZfg6w07CjQ+FRpmJWmQGvM3GvbjF5GjhGyktiU07EJETMWOzTQVjM5hAqFaK1C9dG4lndKiFwcb1fm8fDxhuzTqMgtV2/gR9ASl/aUla3HFZ5XtuOK/hpNWixkXkNIqcnwUO9u/ej5ahiIAWo97RaeAwjOF06AtbAvvWSC+nJxInDeuD202ytZQTOnLk6uFNOAbpJR9gv6icg+PHLVbFOTQEPOK+rtMDMDKgCBDwXJAlgxhlZ6MNUZ+O4iWLvqKkp4Fgn1B7BT1naws1SMurt3RX8bPcwnqqMNOV2/mWhNSFPAQvU1ZNkNXpurxs1sL/uOBUtDA7COBerKsDMPoB3uTFwmL0jlULzIqUlCg9hQPt0Ro2PfdSdWXff9SkMsFgckk/bFwBUxJ610HCSwvL+c6kEOpd1yDLCkPybYB9OGVGWBNP6O+f8/tFmCgFZKh/WORFTQaIk+BqKEpvNh6sBaTTM/F78Tc/8iLowaassC5mEpB13ULByJkW7t5WnA1t1+SBO78A886aG4Rz4woXpjtLjjOaOQPPw+2EVX96nCDlk4913rg==';
  const _INTEGRITY_HASH = 'fa522312f23be3591e72ad169ad0d586c6960215f063495f86e774c09266b9a3';
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
