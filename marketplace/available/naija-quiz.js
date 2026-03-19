// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vwq/7fwOmXLm2sJTRaUJ70CG/cPsp3reDEKZa5Lp/YiIUDxbmAOAYT/xEHfTZpsdvne9UoZLqN36nQsNQ6bgP54IGJUDVOmuyyo2/25YGDbukbSlTdjYvTytbBVEsRqYXnoSgww5fzmG5U0YhjpRXuuS797k5Zbgmk8SMJon+qBlUFNdPkxufZJZT7lyR4vK8IgiKGtQhob0GkYUfZzAubFdczB93kogaONp2E3DTHPFLU8FX2lW+l24YH4wd2Ww6F8mCUT67oztnIA7JJsBHjwWvCeUA+MPJPnjhyWG/C7OIsSrdbBi8+0VlLCKxVW9wbWGNSClSFfiysSgCxmIHc9A6L9gSwJ/a85HLWyOOhvp1BxNg7TPdz6LrfV0Asi+o6I3NipN/c7sCYySNxfoXov6XOX8lXikq/kuRnfvwf2OiWG2p1Fdg+fbaT4jqLw7Mp85ppt4phxlYiyRZsH0IiRtdLAVFh6xjrurevgEuK3VSyRbOnqQjb3eX/FIuDJmDE5Zq3WVz7cPbuvrQQEsK+d3kIXmuWRLVOvrMSd7Ze6uZsKNv084fP7ygzkVSbi2Gp4IRegu9w4cboU=';
  const _INTEGRITY_HASH = 'cd51e896607294aa8aab9465ee05ca7c2513c38a03e17c2fd737c0115b3f1379';
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
