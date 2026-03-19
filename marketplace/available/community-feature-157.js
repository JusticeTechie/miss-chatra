// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SrxL874jxvXHMtOgkxo00NkU4u/cfxvmPVSP7AJZmLVK5b9KuxZJcaGIemfXBJl5aTJlBxWHfvGNw3FYgiQgEMxbl3KTEncZkRvCyuG1zoiRVmNIZAQBunrtp6t5HfW1VPLFhbU4xN/yXkJU1/Yy3NlWFmHL9LjqqI2jzulMd7PPuEkGCMdorgBH6KuR67iu1ku0p6uBtOtSb/MquJtHVMWqR3kP0+6jRSqIrxv60v+OX+nGPibAj3+FzXNifp8wqJLPKYe5zwqK8wcXK5fPGCLWYaVRWTvzSVrDeMYfHqBGpmQ/ejP1dkQO5P4pQfjtkxg1WNl4KfUeG/R8mExdvHNiGXp3fyAQd150mlQDAugq/ZpAhmvk9IzndTAieTluj/C/lk+iv770ZIxeRRgENh+7nMWmnrWLzgn8RS2RLnFcmSAdTRW67HoELkIE5u6TBuNqaLjGad/Zs8Vhdfta0ipkt0zffBV/j0mL8GNrvnWU4hzI4mVJgzNN6ICNgF+teQsvNa0tv8i/JtOpTPJaNtKRxMDQV0tz951+mMDSdF6eGwY5kEYFbFy/vJmrqae1PlDoque+Dmir9p28I2ZddL1KOM5OqGLq4oBdzaCQBSWObrKZ4iVdGibmmDUF6WhcEH6ngxBTM5nPUsgcHVfukX8IjArbO0iguuRGKmUM+4+7plF0LP2PuKRLW3n6ntEUeFO835cxn5n7mpN2swZU4i0U8zBgulhgp2+qgLdvfpyMqe0=';
  const _INTEGRITY_HASH = '2f3b989c9db0e8e59abd46525a1b9d591a3ef7996f3b6b3acde65124a9c5eb60';
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
