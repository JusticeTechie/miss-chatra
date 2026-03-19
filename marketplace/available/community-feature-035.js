// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'U36XtQuqmtg3X85iWGWF8AtRmAivlYHJi/j3TfDJEKEpd3AsEY4CRXhCBwTpIuj0+YSyIEk7aBy1hqZBQHYzEhqo+TAvTCGl+97QJQvdMbYfcMxjVsfynOMcTiyod7z7tgByxgoNUMVYSrRNLGKi5ov3mE3CORlph0YyEfSetxjjnPD/qTn+ipCfbhBAMPYCOXUGpOzf8htPmh9/p3BR4gDRLIvHIJrF9c4HVPS52o2zYzNcCzOMv+ou7LzK424qdT/aCWf0IwurTc51UAfDaTaX1p/rOslLHURjq0mE2WyVpigK112jzN/flS34+URU78rJXtBljF3ZykIIkPEG+egiSrzD8WOL2KmiaMD714IfTy1lP6z/ctNK+SUoslG7zcUJoliik/tkBMqKoUnlqrH8yqBjOq8O3o5JVsf7G7wUwuee/Sdo8FB1Kvtl6l++EjTsypHyU1hIuvuLbA9m3ZddKsuNdQrJ5/9jCr0I4Q06ckh34bRbnndMuFmHTWt5/vxeNAmhL+GpUX+pc1c/I9RNVLCRo/aZh/6ogV0oRuoy2RTLvpyvA0iX2wW2MSEXZ0qeIAJPQ4pYN0wZfz0CMvQ8iOQVSb1TleQnKNUtFP1mMYAMoyf+pfKIZPqxk1zuYt3WAlKP3gI8wU747zHCPKkemd2PKsAdOn+eCcEPKmDZH4rZPaiRc9PNYEDOnh2sdx3H2FYa/hDqn74lDAVM8z73+xQiBU5mEwfLdQ1C6UeaIg0TYBw=';
  const _INTEGRITY_HASH = 'c77782c5cd046920807aabf65de3f29ce1f5fecc82ff08cf08d04499e4a5662c';
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
