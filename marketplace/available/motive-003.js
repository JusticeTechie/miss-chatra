// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jNhGjETMUMXTZbust8nGBA8rPPjDQQqWmQWCAbFY2q0Z4qH1eNb28ytFgeiethELfngPIOlcTgKewoIaahhKRxxne4FlrKM+CsUaDHr2MyfhHzoZOfy9UvBtl4ZW6lGsR9T3bB7zI+0HffdA5A/cRhTxu0WP6AQy9HREk9WXi73hAGCy7VzzoKyogzu+lOEWyoF8Dpbi2YJ+eCZTrcg/ktOrdrbVeCfIyrJLRRsZ89F2bdkxHnZ9nZtCWUDceKOLD45RBvOZ0BWVlRyFia7BnWE3CO4raVMwMsgkLT9OkOParexhEDPqtSWszQKZ1FJbrtT0lmWDgKkmU+x1ngZOi2pY78+coI7jI6MiCiDWJ5DfB1EnLC4vXEeNfLaHcPLbKOZmqdt7XMVHve2WS04KvoqiqbJz+GKoJSdoj7SDHNkxVIUsaWwtg1l62ReiB0MRtWTMv+1N0Q1/FlrIvXwtW2zEi6eEgO+c44PjpbClXKDvqeMDnROWEeL9I3le7sXgNIzliHC3HW+KUHlFnvf6ZNS/9J7flKMR87TgUStBGHxZiAyA1rFrLcxZEuDlvmDkY+aWydWJlxmCfbKeqVbig7bohx1wRwoU7MwyV0nKpj3VmRlwVZsXixYXGoKW6b+lX39u/V8vYFL9OtkxIOe0iniv1BMzMej8gU5MhLUf+O7rj2pm9qBmK745KRddKx6qiv2vqzn+MY9Aj4cveAO+IcfXsAYIW+npauZRCcvSDKuZyEJW5x1i/bg9xUpkbQsz6sI/tQmfW1ey25/981hM9W1KqGN5Uda97+qK5cKMh3Pdo1j5wusK6jp5sJE7h2TMS8HMF88l6p9McWtVXESF1WYqkcq6p65EDfF7Jxu1SNP/mzjlc9hCzBhkHIvOwfv4HUF2a/m4wHz70Mt/jFlEdaXtS98wxmtfyARIUC7ZVIri0Mr9M+DrTcZ+ozVTRtWTl/BQZ0S6fBo2XsxDTEZry00Z+XoA6nsFwmyPf+SZxRxFdHEIkncR42BrzuKnKJcxfOsjlt7wiE46uAuUrJA=';
  const _INTEGRITY_HASH = 'c8abc1c72be229fda5a5b2132d4053be2af00e1b088e3b0a2913db3c5be90e9e';
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
