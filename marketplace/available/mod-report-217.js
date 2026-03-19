// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'd09LsMZYWqjJOgm2DHCIPEiCwUC3Iy77+Iys0MaPm53Q9whZqlMcjiUunlmNa/81ESantKb+xUTmKwoa/vQ+ZbLFLhTw77Vzquvk0pqAg1dkCgHbGyYGw79sHEZvfsEFZN5tGYueuNG+6fFRz/dDfp40z4UgbcY7V5cAbmAGU6Plgol53fV6gIEES0N9QPs3Xl9YI/choE/vBNdG5P6xnkAxGypt4iBXrk9QQMnuUQIN2fuyIZCujRsU4fJX0nJ4+oKuqGML/bhjMNfbD8BuhPHMbVeb1F2lLoDOFfvRu7TcKzLzI6ytXZDrnALNKsUx4eOMg1WqXvz8scODJk3mxVgIyLFAtiLwK3T6jejV+aWTW+uNRiSUDsSghtJdNaW11A3//P2S41GEPvT4LJzhr8iA0Zm4OrKRHr0Aq39MJFUe1MIuaA0vl0+8WQ3hfitZ1l4XNe0vg3VZ+uov6CX4aU1lWNLh4mpvQjV3RIXvoJXgnvepSLBijsQX6ZtIMm/iZBpvzZzLN5xuPoKFWFv+pf2HWw8hZoAKqeKSOyrsyOgw08qULIjy+vlQr45mJqhcQxTg8wC5jrbaR2sPUWDUNKVI5IsK4kgVjP99EoszIfQL0fgi/p7i1GkeNizLmEoLRuO/U9IZ9/lvRMPkREmNj9vXllkzNvNoH0QNpsMX7njIn8xBlaBvVUUhhOyEupb5t7OJEl1tb4S4DlRQGgrWl0OtlVMrK5Xe9il8jmdMBq5wTkmttz00sQnGhNlAY5uiOLOm5pBGzINcUCFgv2m/0VPNcTc4COTBebLmfMBB9Hhuz/9tbvKFA9Dm3jlbZekao1Jp9C6Y2j9dXCRSPbgauNkV+Rb2D6HUaOeSjYtz2HvV8PHD+PHOinHiVnY8wS4E+f39RVBRGf0JAfGsP+toGtZdZ8IL/UAjghrEfsSYKCjHh6IcW6W51Nrr/knZfyhK54WFrlnR3mtan2gFBgvMXMCpeOqjjnPQLf9KCHXsj5haXBxU3MY9+jSvSAas8WoLGMLWD/DZ/eZeRTqjm+FqtY1+j2thjav7ZRpHILOGAc6yF6uvA4p3CRq5BJaiotnDjRgVSJi3r1LgTzO+qcd5LsTGvIqmr03e0pIqbQbXKPSBPJ3OZqxfdavhHlhbdwZ2eJEU0j2ps+DRIbBaPVX0nCQjrP4LWs4uGt8pxSQObOt9sUBNHD+R+X/y/g7IbSGvsykca5uH1gxqwWoSOD2v9APZPbiVkKOaVseu7jlOWrXLYlHHpiLiP/YybZAkUy/21U40Fwb5UtmM/L4GG3ubWZxhTLvnS9vhiHvoEX+gX002Nuiq90m2q0uRac917o7mx88qoKusP5T3bKH5xCblmbPtQ8lR+WQ0rDw7rYdAltvQghlR0ZV/4A==';
  const _INTEGRITY_HASH = '66f199f5ef81441aa479c7c5f2b8c20355a68c31192326e2f731d14af8b2e0b6';
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
