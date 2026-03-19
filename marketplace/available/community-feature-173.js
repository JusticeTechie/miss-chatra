// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2g6eYw91NogTBcYyaFxHtQrNf0NMaVP6Fn8qp5F9Mfe+4IgDB4gNJ43PKd3MTrXSuoavhz6JGD3cSRzFFp4qxFIK7o7pbIZi5qQqf1DTJT3OaB74C0YulBPLunB5fSdjpJlQas+h+DvSIohfNZvNDc6GsgovWCQZlvqH6wQheZSMSUjtvjSQZqfIgvQU5yBJ6cjCZYnEwk0BW8Js6nKuSWQZK/g45ZE2L3Dxr1bID3YgOpku0kVP72zbAS78oyKt87FANJoygiH0xRJ58BjL3jSEAu3JTBpPswSiMf9WbXntMxWG6U+JBfdYDGgk50gcljcLRAMpYY7YMV1mXrkSDUTqHynVQow8DwhSzL6J3c4beH0nfdUAq3g4ZVmglTyZVasYphFsub41LxUhhj1+aejyr9VHMCbco6zs8z//oXlrxs7DW95UJxc6DxRgWE5gLc6mF9+f/6fmribx+09wvs9iMyb/DQNrgRscGaon9nPdDzqOLZKfPQcifmpoXslpU7Igjh9Pz+OkyelUZRX+yYk2iPa4/cQwG7DQlD/CksTyWuvq5uQtr0bucffOLFr4OSxgxM0/4GOZ1jKqaymQusTB7GOKTRtLVT9s5Da1jR5kU4vBeV2tLdlYroh1fG6w4tHl/X24j0XoXHSh60qXcFzKbYEqkwuGYxpNjPHpItjrKhCVAPGZg6HcqolUbFswlJJ2Fnz7Tuqv945Qfv36Alx2YhyOJYfXYVAX/fc=';
  const _INTEGRITY_HASH = 'd90965d6dc62d1cea8da647cde37c433b55b21de3e6c2f79cb53c13639291aed';
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
