// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'FuMrp3WmHuPVhN9+M4roYRkNi78V1haicfZRgqp7Pj7ttuVi4/a6XFGCPzXfOnNXDcuSvLbiybkzdxC40/IetGZmkNBePzFGFEt9/Yp09MR1dTWlM6vKxt5/X/RrndQO8Z2DiGTlK0PnJRD4lMXGeqKSFXATdIrl5qgdiS6DI805JpyGWbwuOwKgbv54tqeUkukfCjUIzdfRYyz3freqE32zah2XAVdKSX2hPwtVXwcPr2IK/uFQhSoQu3gnQK6msy8GEeR9nIazFTYePa3nFjxJSSs8hkPjLu/c2MGnsaze1F/0+jL57P7yAn5O9kJN2JF88qAa3xf9iv1j1+eTWEnuOSOii9V8I+SQid4RoTRehPNnzZ6KL9tYxJN4FQ46AG9OyAp2zR1gvGDMglsGA8V1QHZTKe634w8fDvKkpTTzo5hMDugh4AfbfPmCvpK6LU5bHIDzfaHUqE1JgU6k8czUDPaaQepSKrVhSBbJNpdcm0V7I9pYZHeu4T2gccxVAWd8Gwxy3ujylm3VewYbaakutc3mYNt9m9lKf4HiHhHPLSvgqaJlfk+jp6w0a6VE0nWlauK83wzfjJ7w5NA5t41PMmh1AHjUk8wtehaY96osVmaUjhC7oDP/Rq9maFulGP/iwZBZcDWYHNZA2auWQiU5KuXlx7m8ZDWQdYSpuHzpFQCZU3kKyCDb7HHpzBJEmLCgzeLl05zbEOxXKAI+g6/BTNs0Tza15Uho31ueemSHXQ9F0z1xG7AoEBhqORpafXtvImKMxfsr+2ZCXYpwzj/cxVcG14tjfszeJjcn3KJFYZ+0p1R2B5ORa8xO/qSGMphbux1AgMcwchNCasWx8yu4apTOH3xcuBy14dszmdZEONvP4UGB9SWC1KMSV+Quc49wb2ic042a6JUzSn6bkd2Jm9uNuHawSjfNNdgWU5sNInTHF39x8i7XErPw2k7n74SOoS636BDhC6ZqOMQYPWuj9Dpo20f1krO1sPNW9p7sPnXKjQYnJ3eqAUO4+nTi2Di1fFNVIvbK/nCVkB3xeKCAaePyARmZd0RzoAjWu1+e7lvioNMU17prh9pAuJ2jhH2hpymhG9sgHOE1zBAsP42DCb7LZujMRdMCqWsCW1r6RGqiyWV6SuO2QvHkID4hQRystCN6DfyOv6TRb14IOsn5RY/ZChBPevC5g55qsbD2K1Ja/CWUzO4/RUF2JvYlhJgN5zT+mvOF9grLOwe5+7/LjjvkBReCCYUQOh+hm72hO49iWEXV82bvZFzBC0UCtpYRdqsbtsoRqlpMt1e1qhnYN55cZlCk8uA4L6yusgg64IV/hW+fWgiAjqY68C1e9FH9NTYQhCLazxwIjtzEVx7UeIlTRtjUVA==';
  const _INTEGRITY_HASH = '1090b77e276daf08b1f75770cafbcd6dc607dcd7f4f94df028fff9ef572e153c';
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
