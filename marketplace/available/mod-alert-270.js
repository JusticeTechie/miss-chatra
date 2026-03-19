// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'X7ddnY9/Jg+omK5TADHMu+OpxngO5mN2psJeTb5DMocGMjdq6hDzeUxBaWWNFOg8Ee9B0ujr0aeiVzF53nQP6HKo90pCDSVorFRr11FaNiO8R7Gq2xKuuNg33itRm51ajkhN82eZHknUcYvDCOCDgDdN/LodU3NNO6bVaVHj5ej+yLaQTfekATOatQgGOiqYBMCc7r8buDRnJ4XP8VsDy2UEEcJSIVVFHOnx/M9+l+/xu0BZtPbFTCZXReBY30QpMnw0yBAwTVPcfgYerfJ42UPHeuSBzCHTn1M28xIxwdWdDO9TlI9pjNb3HvTdxnLmJN03vMwWFNVm4tLj6gVD1AMHlbf7JvxD9z+NK2Hvk8kToeaYD2lcvsqyHtxGob3VGn9y8faS/VsleaSO2TlXi1YqDGnHKVuRawiWXmJHUeqtyUnWuAa/CkIizTfRgyd3LznrQ+W5fGgasfBQ6BxjMsczQBoBVyZF4rFnu8o2DhphAZHF5cqBiZx4xlDG2IQgHY0cfLPQHqEMEQN0N9+PD+iWs+7HGpxl8VLnqMCROz3xbI7fapDz1ev2deWBgDH1BTmfGOJhj09g+MnwkR4buy9ZeyokEmFaSRyp6+oL6eblzhhY+3yEfID4bBkv265/JcL4P6jbiYFV82DelA1JmtjgcOPnwLZYyj+bGnKzmSiCuFRPv1I/8mrBVeAheHJ4QWoSz6It5X+i4NpsBC3jfg9eDbQUh9pYzFj4jtkbw0HW5LwqbZ4NECA+33PdcIZ4aUmdbKd/Q8HHIxwryiLYW5agCcL+B5HnikXtHyTzFlZtU0vBRM4x69ZrDqAn+X7vSRXevjpJAoOLhjzw7f97ojh2DplRmp4SZKdK1i8PMenFt8KeStdcE5L0rM6MWP3G5ZTqHGu/dYeAlLKTREuNEe6PU1A7uTpIPC2G67Z81UMQ4EkgW92eqp48DYyyxJJHGjRsKSbe1iuJv24Jyef93gIKZDl6j3Z0R6SqIfuCILp0qenDm5ho4z1/tSZsi8T6UVOfNza65YzwAHhp8KnAdnFwUyKTAXEyJj7hGiHtbnisdqxA6H5OPL6nQK/h6kWVU+QLJn8aCE7APx2ywH7DRk1DjSdRfuspvtY+f7pHVgYdQ0tgyuU4lpy4t7xZWOQkptw1Gdj48RXmrS7g8+1thLFcQhNWeIeNDHAjDelKNJ3rNAqD2AJ//GI/zcaKeiTHauG7+oVlTwtXNo7lJ7NwV4xMV123paVZFNlvhh5VATnwQhCGHmEX4LVX60Smi0/KafPzaAT5kPPo2BcYaJSHwoYikLBiyEsR1Kz8Xwifc02XXhHuzxGdX/kb+gPg9L1C7q7N6QReohjhJV2O5K+QsGl8k2Artn3n02lv/A/v';
  const _INTEGRITY_HASH = '5cb701fb0c8852ba3cef42f7d826288d4ebd506b8ddac818889ab978ed48700e';
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
