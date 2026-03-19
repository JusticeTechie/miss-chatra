// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yuZKPImnWLmrz3duVfIdTAcVDiYEbH24eD/mooMcP3Mn4tIEkcC7nfEM0TqrFTBql9AfyUyiT2trNJv1OxuvGxlMKh3rSKPyTcd0m7EcMIWh9VNjU/jothFZI3XhIOp3ESXiCg4aAztLWXXjzCaJs0fnBCOFYA7cCrSjGwHGvIzZQb/jDuECch1j9BztYE/Z9Kn3DEjlY5HiE4s/eMgacYjPsiph9g14Bvt9b9wRBmrAxg5VDu+3wol0dRY+V41bu/jXpEi5ic24EvG8HoDigOmPTDautv1fRUiVEDMyAGRl3EfHLVU3bLIgua9g7Iq+tZ6LNseOSoLzBuqwl2t8EC/blGk6Vj2AVmZo8yb9lm/h5gyhC0eeRTJWb7oK3I2mkyOXJZiDpXPk5+YyYlTHvuaXTb5WbrW6BhZ3ES1waWS3dj4YDyHC2EcVxzbSenAEguop5WrBi9GPQrtbhNafLr3Zu0OBO0B8VvSsV3I88Wuf3CcAJ3/Z4FqJQbtX9TzdLdsAp+9tOXLx/cfHV6oA3WsCYfTmTYd/ryPGh5/gePQ6RncUzlmr0wUPxiDf3SlJzv48sm5zkmTuvm+Egkr8YvHQyqls9PVud4dGlQyny4JVPCRE85eqyEmEyPN066SPie1cHkNNK/yMvpLkyODYVD1dDPevwP77DzrC29bVHE2MX5NTmFl6JgrC4GizKapxWUw6j43jFI7OODFetoEMbHx749WUvfTwndlf/YltLWoGSr/Yx+Q5ohEOxnPiQ93JKHaI/+yyKvgXvtc9IdBSAuP3Nvp6vZ/X/vc8fzQcj3g5f6S9tAc8htWBEqi+IZl714sjycXyKoXQYE+0hEpnvX+kq8jY5OkNx2z5JToATQoobErj2CnzsS/LI+qgieS6Yvp/G2bQQ5q3PUbcTw2gDcnWtwSz3cyiT42V0cz7eRnNugq9vh0Aq9acFEJ1I3/wvPckvq4hKs1roo9lQ2a5a+tmp354aIpc16PB0N/SlyNryVlavpM0bCGE7DFqRjohqgt22pbkE7zWk0aOmb5kgHKA/vW5FX8vJkU1OqDISwrqoJDmN5iuTufK+0mfQozj69Ash40S4I+EFHLhGaaUclhJPVihiX3YmnsSvf8BYT93jTtZF9wjVZBGhp5urmhyMfKroRkyA+rQW/oRGxGR8vglbxMXZFmJ9qrGBekvMjHin3qSLISHa1NA9yMknec9nUc=';
  const _INTEGRITY_HASH = '348a1a51725fa8c69efa50156ce0e96449edf75371a829a78026238a2e1e8589';
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
