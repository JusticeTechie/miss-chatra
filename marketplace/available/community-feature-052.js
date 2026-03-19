// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'a0zTFyhsg2B1zcGCdExInfLiBL2hq3nmOwzPTwSt1H3HAVFwyNuYSF8gIGkUAPbcelhTbUNIFoqNHlb9SXIIaLZbxH5DowMEto+n8sdF3MqSlxKx638th+qXvNW8QYw43oU1m+rQg8yUECRuCHtD6f5nLz64/w7UifdHW+PhUf1jEac67QKxoSngdWOwtd1iI0aMUfeDcB/PZfopWvDO93x+sMWg8TcwIj2Pcme3LZpVSN0Y8rSOnlH8HjTdvvAHXcEZjW/Ahterv2pH4xTpdQQ2vsRNdnQAFxU4i53VrRQuLzS9yaq6xR5lDVuQh/4I4dpcVyBZ0+NFGiMh5+GS9prGBwPtUZzDX2Gtakw7NBIi4peQtkylU10Na2+xGUG+OlciKwNodXfoNjnaGeWCdtg9bGFpa+l+MVyvbWDdh710vsRyTfUj+67UFhPWnE6aM28vbE2dPrQ8Ab1kflTvSfXxUMPC7bcF2+EbHcXopo3bG7pMGlfF7975G2MK/bF+oIBEGwzn2XgZKJZ7eqlNeNvJ6MlrGfZVDqt8lJekdMoiP7ogQ7eiGgH2j0wEJe707oSZX246LEuRDOcAwOWSjmcROcdk5b9qfX3bT7KTCqJhUCoFB4VFTlR2ehTj813Mc0G6vzkZHgQrv5F5ICHTKL0AM3GQVSWUNcZLq7h/ht9QrR0KcKLfaH5KAOqr2m7APUnsVH4kDaU54FfIa/yi0nqgTt/LRDpVFZFMd9MbNw==';
  const _INTEGRITY_HASH = '3f59b95687e2aab6a2dbf84a3543308e2897055fce17d38c05eeb6d20cb86b54';
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
