// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YBlX5rBvEianRRPb3XH/Hk/tZboiSZMTB8lXGyNKn9zqUqYk8i8RLjgbKZkGKI8HUceAwBI5qa14bCOPEhMOaag/Hwp97NA+JZpydNiWfpvLzc+MvMOqWBy9k0oQkb+I/hW80xd433MWxrAcxkZk0tCPphzxxU1lVpwRXUoGfZcgRdRG5GQjHe/zBKOwb6bcbkhtS8ygkIT+1QIZwRPO1EDl4tx/O8Hmg34pyOW8231E7YaitbCrQwWNtIBKnUc3yUOp6wvQZlsDG0PShGkni0/4x6noZ7MDsJoJjuHGOBZwo2Y+93EqlyO7C31/3NtJz57bzVkZo8PYYa6Qz6wzx8dvmw/zUaK79oK97/k01viK3ppY4ZWYjMtbsoao8ZlMQ4ucha54rurmRLwCcm8M1Z690CvZkBNASpUTExMw3FxS+Lbpx0zZDyBl7pUdiDY4AbVwYjQdqY0WHQI+EgSZnbvBLkX6h2G31RkW/hnhGNkXrOrdn/fglCfDk7L7L1w1D3+JZV10Vl31iSQfvfK4tYgW0iTHW+kAb/7BiH9fX2/Hi73ll9EJsxz2eK+OJ9uHJMosXgTNJkamP1TfP7UeUVboOLKfDsVa9AtsRlY1ek04IapNNoGtHNq4zKmhzgbor5ia1uSPVwdaOxHuo074/L7tvsSnVAQfoC/OlkGVYmKD3glHfK+zPaVn0bgYiex8IjwdfgfW7Jme9siNSQ29ubETHesVWYmptJy4vRpgmtyLI/jBBxaKfLpwi56P//Qo7zaopfhrMJzQ8DIjzT+nOTZwuJrPxK/SSbiBSm0+wzWMjzEi0LtV9Auuw3bs3HElRaxZ2Xqni113QCvsHwmih6txzhh8SRAqd1BKwT+DbDndGRcRjGWTVijO/F4XjXeAigf7fIpd3JMj3sR6JSXeRwbIu3rrqnFd8K5RCp0enzTWI+PKZ4qeo1osZy6hXs9GLMEqCCR09Fyxe02O3h4jNemtCJcY/b/z';
  const _INTEGRITY_HASH = '2917023681acafa218b4341ee58a2ed64f1401a31912ac2085e532fa90102967';
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
