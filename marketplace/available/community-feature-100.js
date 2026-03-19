// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'uvb1uFQkcNs4yMx6rOJZOaJEY+MmoiwkTxbNuxmesQH3K1/0PmiW1cufFeA3k4RIwHdCkI3u7VwSfDQrRSVUo6nK0uHShF+IcL8Q1L6mmjs7gsK7VkXMNlMvgKWcqayW5Xx9zUljNvzCPCkBJogUgOYv6UN7WQs+2BQf/YCP47RVFpJ+xwGh4F+28nBwgJ283ePm8hOLIvODOhaLnAmnjjcm0yRCGKqfj7dVN0ij/bztDB0As8382JT1u0Ct8IvvqgDC2LnVpUg/mYw2WSBnIumDonx1dUC2Bz4KzBmUw2URewISHmTK3RZVmguPYXhIA49w4pwcViBUoANg457fO3cs4+/VkkS41ZP9RpY2FrtCKWsGipwg5x2bpg/PKUIha00oL6M0+Pky/hiRGAhRc+yX9NYmqGf/k9/lJmpOGnQ5U04JZFP9ydyi7wTa2b/6lgPqC32JGbhZtRHjVfHAtMlw43dT1/BMk2NOXLyu5ViEF1WjpZfYYdlmu3TFKS8xR9Mur9U+W+tzfC+MFCNnGU9/JChahOFBIRdfBGNNKqE1uSArmwZH15TLR2ltM25Ugl6vgV3b+o3MhDqUYcuQUcdjOGkA7WNoxFvO9d5zeXYCZG3ZhdOJzat90nPUwyaAKGt+V3XY2gKpa6umqq9kppy3tl8NQwagKtluwfKhDqc4cxksHXgfSo4Bf7087wehV0Sdrkp1lDWa3XClRlCF02oZjly4EP/7WkdNWI51tpDzOn/mZsaT3660';
  const _INTEGRITY_HASH = 'afed9fe89fda406960c9a84010123b54d6d78d32af6a586f0a566061ab4d8519';
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
