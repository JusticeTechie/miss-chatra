// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Nl/GvdjIA0XhffuBOZ/PJUoAhH54EFAxFSX23nB+vEny9JnUnJ6cl/lJKd3w9kbpuun5Hfphw+ItVyo/dz6lnbVJ8rytti3zSiisNtbB3bD9TQShU1YF3173OHcpOBekaSzaTyrBS+T9e/zt8Mq0n4V0f719E9lbARGh8s4bKGf/ztZMIRkxamljEgBvLuAtV5Dsn1shtEwnTICox/yCE1yJnObsZwrgS4vtyupkUzsmbmMAeSaw4czawU72/YGwwO7f8sv0F5Y/Zj8s1TYoS+yuye6g2XfYSb+wjqJvLAifZwRvbGTkVdizfTx3DKcl8vNqny3fPitFX7tVsqeNuyZwIHYmedpgzsNbPsg42P6DomDpoe3gKCP/AEZAh8ge7KWQfWcPH3vr1Cfs4sNjzeOkeCeG91L9amN6+Iuf0CoKimXnJHLJiPJE0o5PWBwJNUIQLwLyka1tnpEzaUBqOjUf/yxgBnXR4O3wS4ld4mqdbZ+P9Ak6FAgS6BZNMO4uq7PtqwPH34/qN+ac3E8grNEKPJChRM/+7jaiZl6YHTYAs4U76tp3yGaSa4eS8+kb2Vm7t1f6tNFQjp23cZB/Bvw0uD8rnXdfxQpJAKKpCw5kq5F5iJt4ioo6lgZ3N1TX7nLolbEZLLWG5myL8R+HL+I2nm9i/r0vZ2/ZtJI5AgLhjCYG8FOsQZdxcQBQuvvzfbjpZgJJh54yYvz0/z7+ro5muf1oPS6hpfqYcnkLKIORkcU/I0Ik5NdlHgQ45QYsUaA5NPgLTS+nQrZUjFZhzKY4Zj1VS64V8+64s81X2iUYGoILzXL17IOhgIk9LCodu23hx6UpCsrLN2gYHX+iu9tAvq5HaYkjTqocK6Pv+2wK28GlsnefAz12RRKX+I1iGMrE5aCr1EzQApAxqnsKmvWw0x9oU4gjvj3KTIShtuX6m1QrwBkt8x9eid7Pe/36l3Nk8oDDl3Xkip29XTP/z0L7r4AF0r4gKofMME8eGLW2C4K44oQBW6kng2z1ra+lKxWw291so4slHFicDsreHJhzGpSXd0q1G/tV4yvxDzmdIo9RAYl/71i/zwjfFVPopL6V2crGzhh3oO/mLujeN0LtV8mEczcGM7J3rI52pBOO0PyLVR/Llhc8p5SL/3i3vdzCdDOjHI+WG8XkQQQJZ4CMaQdT+Ts/vCrroOvOTPGPtjr5yjx3bY6trRxv2GOEFMlq+hsZFux7mzMWlaDNcVJ2clZFAVKPUMRyeIxq3BrYwWvgFyuqBOTJD5Mx8qEeE5gBb+ud9bhVcPQWpnNUAFn/0Z8E6Fh4mzhVuSGhHze2x3xXQ1zbAAvSPqFMNropjjBusgcb/jq7srxsO/GxRSpLGZKg6EPrJCx8QNCSSqV5xQq4BjgSPw==';
  const _INTEGRITY_HASH = 'fdc8c2932b1b4f33599c630d93633108bcaa60b3adfd57e379de13a8bf8d542c';
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
