// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'f1AXiIBRUPDiBeaPnd754wtvmjKFeQ3lJUBDAvADrh8GQ+yYcqtE0lI6h0+U6DlfV8Qy/jHjLDrnSleLpc71cypOZA2BLMuyIFi80HEdFe7hjm51ehLTVijo59spnQCpbDCFphip3ivmznJG48HMNUAj4QqQI+3PYwtiXK1Hw7zhGMsWIm/uTtO3hVbn4dY8tSeZaxx2t/kzDSEhTTstKxxvDmUHFQM5xU1ChLV3HvfynMr+85C0ZFoNaDWeS3IweZJ4Rl/mQu17dHYAs2pwzBjs1rrDdo7taGVuxjaSsS4nie+jRkpgXuiFJLJRx9qqyHKfI3QjhI1f92Pnx5pwXRBeFDbe7p5CfyooQdyX6xffxZPPxeJXT2wv/w1LW7Tgeyvy87tlIoT/5P6EdTKVKUl/O2Slg67vVPyYzx2bfDKtUZxqx1TRDiUhqUYEhBvAIat1lKCFrggXVxdgnAJX3Gp2Qw5LOlW9pv8XGwFtLexHwA2HxAllSYGpMMPheDPalcxLjSl0LuV9zQTSdo3LMdpIPyAlcnvhlfY5ukgAhtQqbt2vNUBsv0pL3l5xlv6qVOTIoPQSpiIRxWvZPNW6QElqxOyZjJ2RMEanrJuVMpESHFBxPk83GKZSPxErTONe45m6ZLOHqG++OOqPq7segb0+ppFTU8CWWHoIWwn5xh8Qh4Pdmxz8Ybtq4aZlMsqLqCthMAvI9et1XY/e7rQG3vV4MzQ5FgqOGuvMDbxpfT5sa+hLZXqcfcxlJzh5MxCSCmWJ6DKo8w++AwHIr51x+5I7KFUgQaQg4tFENv71QuK0iq0Mv1ATujgiZ8OsiR1vjxdUb/k+4Q5dOOJX3t8NS7XLQ8y6MgSKY+0tbWFEjyaGn3SivkmJd6DY4lmeazBdc3PgLKnzbe3IU5fNEZ2EoTRm4rRhSHFNr7ILQBoPHcgV60aX2FP48zbWZx51GB+vPPYDy/nSckb95gInRyGf0mUzLeHIY7+zX585315Cdyeau64=';
  const _INTEGRITY_HASH = 'b2841d0b14f1a5f9aeae0547e9adf214c9ac38506d8e0932426aa1c83ed6da50';
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
