// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '825A38mg5J/hLKpFNszDe4HMLiVMjU6qUWIFjXYYMyVEK6Z2V7pIQYuEKWGcUwWT252yJ4e+ioQ2VCw7wZ3GiK/RYHwKzhJvD7Dju6RnKc5PdJfFPc/xo4BLM74xNzWpiIZ6kFSdq1gnZF7EzThi5kgKBj8mY8Qxr+IPn86XayVJ/jqOwh++MIZ4x7uqV6e44zJgcKdPH0FxbVfYaDUoDrqBrWAOCja3a4HF6exqODKMBRUvlzHwrgl8wN9KDPcVYKJ+X6AMWeabDeXKtqmzTfuVZ/VvUOFqv4g8QIUVQfQH4ynlTPcBI99IlCzdGjGUW3faElv09rel/iZF2ug9to6e8KReqeR3kW/FeBxsP050pOLFw1E1XzhCwRnVF9PUWiKOStnfpHUNgTyyPLtme4H9Bri/oobP33qjlqeZAKcg5qaW8hQKeIsvP6nI7hEdKFa/gcnGk84wbR008vYOiwZmDVLreeHJZLv70Xcu3x4AVLMNOupqE3pKPwe1goDAFlfI8rC9Gsz0+USTgGCriluX1K4xycjZx54uiqf2uGX5uRk1q7a0ip1ZFkQiHj9lwe5v0lmzdVoxcjkpye8MUiQMDWOplhnwGYEfnxjYkdwTsaBOt/M7YdAKCQgZaJCWyFTs';
  const _INTEGRITY_HASH = '7169e51114556266a63d8a0651c676257fa83c6b30b1880a4757103b7dc261aa';
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
