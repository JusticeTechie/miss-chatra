// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2pz7eaUxRww7anJtOa5xF73VwNpgqJjXXNbR8yRkk0xSLZQuPIERz+QOuP9luWnBNl8aqC/UM9sDwe2KlRAFfgA0mu/eOCJZNAsCmPScIPUInpe5ce8PpJOX9gTva+vR1Zvr7yN74yQT/rkFHy8PoIyejLXEACnIJzHpzKseaDHXahUAvCVxYyyFSLRcApd3Q95Vk8uz9itYm6kYkBVZa1t8qouTPnsDYkNKn+wpIwQFkBeWpmfRkghImmjFeRZwbsQK2Idb/vccG3bcG+CUt/klmmY3H3r2tERCehnj+PvbpFh168WmS6CGFCtio0pNI8vyx0d4i0PMtU4u28cMAppTqbMMET81NRjvYeHJajb+0UjZTJ91rzncGBe2PU03g3nBhKAoUV22DPhLWg/8OqIlBMFzhwse4tvVuJj4+wpbBg8idAOjjx6gLLSBcbH1Mz3RpT+8xz2Ym1U/8Lm9RJk5MljL14xiwON5/FUqny8Pq5UfnPJAtzRZGpU2LIrM0j09q+CuRoZ6Y6WofF7pr4Dh/alpNcKTt/ETF3tDFz9h2/QoGWgcz/VpLdBfwWD9kSOr+8W68JN0t0p/HMmCwGpYBcsp+TVT4VNlyE2bQse0MWQEMuHBGu4N5+ZGsW1FQ+Y5FakgBr0sd7uTOexMLV0pju70zUP0b3Q5M0YcAZoMDinO0xca3XSPHNPl68tXHJyNd/moNc5KcPnAH9cVsllFRVXJ2m47bA==';
  const _INTEGRITY_HASH = 'f5abc32b41dd6c4330f4dbb5e9a57b47fec9f4d36c8bb753cb8f2ca28fd203e0';
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
