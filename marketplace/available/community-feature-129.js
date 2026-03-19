// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'J6Df4l59oL65/nNE6PDyt91R4aNiomfg/+za7xdcWkNivTuRLpDBYPzW0cfPnZk6QnnpHyoCGu/j1DOeGaKrde2tEQlOI8HId5KJGtB1L1yv2Z8JYKVEYZBZAfBhIApKtpy0URjNuGbopeA9dokFZ1h139MKkNTIT31pwwlSVVCqmc8R44QzIq36uoQjuhAUzCcDRiKAQXuG9GwfiThLQk4pdLZwyedA905wF4lgA4vbjaQsOazVlHKXrA764O4XnWgs0VNfZa1sK5YVl3zOVGp/hWoZL6s3sLMUVfQuOFLorQ9hWGod1PLuQ3tQiaR7bQBaoBgnCzcEUqm5cpoj8DpvFpXeol9L/YxOT8s9Rlbqfp+dvQNXA9EsrxWdbBb1w2xB5iM5HynjIgcn8/1xlpB5+EG51lgd96k+Zyuf3UY/MkZXxkWCJ1yastuDIe0yWLBVz3Wt1ULyb/Wzl2+mcQr7im/nj6CtNOLO0LVY7tgBE0SQACmX9mFXDQz/HkWv7azYv5NbZWYAQMLLONamZntV1UvJbYyn+Xq/gm/IJJ1QTjtq5qqBvIACvNTp12AjVsuCu52RbFH8dF/keEoInpkbmJ2jvZ9Ez8m52+awKqLzcZRwlfp+ZdSM9mBdNUR4jAFORJ7VpP36uUjJGRMTz+RiLgLEK2BruS6IeU/Si2uWpMOWB0iI0LURmTz312rNRzLiOlb37Ne8n9BVkoDpiFwS1f+Gz2L3sezhvswMTJqcooGG7Sc=';
  const _INTEGRITY_HASH = 'b9a432f7cabff02cc9b183655068f099d877c8e6728937b0adb8cd176f4b0c95';
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
