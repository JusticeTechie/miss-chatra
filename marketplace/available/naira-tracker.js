// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4DSMoqjXe27h6VDeccFODKonROOcznL8a9ufKn5QX3Uij831E1LWcQVAlXXQfdUIMoIiCUxcBLEAHRmrhPE8WhWFNcHpJuzBE69m+5mB1GqtJDrnifb1OaCquJjPJZn1faD4dW5GxDxAihCWzAUcFna03wlLUXDbrwKMguQZamxsjHynT/NXD90b3wtTl437LulyekHleAKYLyFt4ut7wmNHmdNafbx+bRuslvA8jC1slhSvKCDS9x12Fug8LxKnxaeu3REZeqW4uhN2x4qGVFApkjaaCtH+3aQxFVjoUURr8dgIj20O+95PlgpkquErCfJtVvXFhET5RgbAjFdft8BtXjDlVuGDxKFZKVZGiOvtZueTQhgF3vZ0iQIx0GwRimo9emp14IqmpQzXKMhkozk1cCsnkJpK0dUyLD49wuCRs8gWPfHVUnl/SzI495KLa71zvU51D2Vcd6PO1nTBWuDMR7pihUBBLg2mD9Ranlj2sf3BzR5NEoQid13sTwSfAb25XTTxCfnzaFnzhO7ri2K+RADGzMiEb6yMayYh/4IACy4Dpv8Toxm4xWoNE2wmaf2ZO7a/bDV1qQ==';
  const _INTEGRITY_HASH = 'c07cbd0fb6dcee79d6aa1158692281d89e305c7a7ba1a97ef0e90c9ff285066e';
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
