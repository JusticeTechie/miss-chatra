// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BfqfE+QK+qr5aGGALpxPsCxjyAJEYjBEYhDAg7h+5VrL4BpwX5Zx9cZqkkizwiPE7gvf4pLRaWdxWB1KDf57r8pe91nwSDjqvBRLsGryhUIiTUU5SjG/2RaNrwopdpBDj97M4ap8gKiySREMwY2aZhrcRnJKuxdBXbxyfBkREasAyPjjygAgP3TjsVRv6YxtzS4kNTyP0Kctn3tWv8oHKyo3YBz7Zl5GjHanVzkWLPeTYA0jjVGNyTUh/FWXllkqRfDq6Yzg9PjeHqzECysKwghkl3Pelce1VNEnKrc7CFn9I23MQvtugGBkxUjCR1830v9w35eA3fiA/vBk6Jgo8L6MpvOmERChu0uat97GJyFkCepPheiUactVeFgc+zwinAYR/gSVyTycQRTwOUGSPrWL3n3c3J+kCamDCFmrc8tDrSm3AxeND/meHi80aGmlzy7TqztZ8rMIxu70AxJh8E9NKf5PWFBZl3L8k8eKQdhJ9yMUGJC9sx6fLIe6a5VdUFySip1cCvTiHI0uUZDKA4HC+f8N8Omu6Nk352guXc4X/Zos7jVGb6C1LVOIn/hXCB52CY5ba26vTT+3m/C4r9ogBAt7UMMcltbt3KV4z/qvt4K8hdcmdYKoLCJysk5Vnl2pgC9keNjRxhcBJ22ZE+hHWPBENGg/f4JRmfAUQpHvGqtUFBEjKOvEBS7LmrnKzD72jzi/c2qYf4vnN3o9laQNzPKEGg5Awqnk8oI+cnCJbiL1XQE=';
  const _INTEGRITY_HASH = 'a7e4506a776d2f6d493aa767a9fd183b8fa3ab64f6827c5986271ebe47f0b3b5';
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
