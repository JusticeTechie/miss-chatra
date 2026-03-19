// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rPBc15dDo1Xd8pODPgGbPsLqqWmOd+VGtqcIm7hhoibNa9dUAxKqlgIiFiA0qnZUUvKAB4wOQFMkuRhqINh5t/zbiixTVbqcflspPgyDZhHVvqQ+DRTQ1oaD3kns0pRo531217h+DL+19nQkGQgV47wRcgHsVbds6i18bzsNxBSrFBERd+98eQ9AJkg2lZSDlhR7R6qvl+GTs2US93zh4EEhz6CIs1TN4T058R7vx0EvEhekkDmR9lOZvk83NYxAWgtI7+UFLz7ZOMbyHCzkDWE08HpGGA70vO8N3xVubNloeOWJOeu0r9PlYt5gRzNIWOVuPd3HS7cmg5jZSS1feBsdQcp20RNdstrBUZRehDSz48xkLXNklY0q/HU2TAbOJ3OGV6dDTnOCT37csCrlI8cBTPRA73eRNMry3rfX6TQUqgHfwDtJzCPoau3iZeGTIrj+7Fq5L5sU/JvqKc8MQkbk97PHH2SWLmXJKf+aGESCKuisC1sIQmgVv+KYsUgQiB64f0P67GB0g6oy8KhntzYP90nV/GnnRZg8vxMOviWerYrAd8f5mtDkn2yKcWxh1n47FXRrIkuMKIXKA9cYqVTzQnRzt4kHS8V+ZQ28tBHprtBAZOIcFdgpOafQ96/iNAFYzDStthnlDxOxSSKdmhQXoNf4J7fk0Y9a2XhWFxFemyPBskpaYuZ89jN/tfwX9NGX+JFJj+GHrD8C3EBrHsvrsodQzCJx14bGxRx/Ug==';
  const _INTEGRITY_HASH = '02768f6245e1062bf5e563c6146a27b479c737e119641c5123e6cf982820ae33';
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
