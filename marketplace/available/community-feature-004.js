// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0iNFPNSUzizD52jyzxlyIi8Rybis42HPXUAZATJnBra+ncXeyJ8FH1ucoR230s1zj3tq6GP8Wa/RAHt++mLU3hP1OwuNRb4jKry/gOFZqjMAIw4GNAjPMwyPToDI89fsOizdEusP1Kj1APNWHLUUgzezhZDa9e99M2JzMXTQvY8rMh9YP/eexa+YqkeD1xRI4/UGJB7UvyMOWkY1mVZGDTuLd82T43yI0fiNJnbAUP9jxFJt1wBbZwu3BbfE1QNvz+QWZfyJG6KD9xpMQAXKwjxAAwfGbNf0LxcxwuFNYbRk3ZTxuDxu4k1N+/Ql8ghoc01fjeLBxczMh5tV5PaNGnd2JwW+aRc9kWQDQ64btCGdJt31i7blT4iHHUF52b3I1OHqyxL/f6r809oK+dgNb0mz7xGjcaaeID/Ex52GrPeeqX77iPzgZ5FrbrFO0ipi0WTv2I8yhwJdqm6YsvFhIhXzu8xlOc4sK+G0FmPEit5FDZQ10VK/hRbHeArFyVDE91Wultr1A+Tp1TTBUFvFwLExHWvnMzqRIZOTEk7bc9XU1tuyfGQ2aidANiz04K+8HQ0H9zkmKLhUTzXhF1bT1vmYiqnRU+7BzunW2iPRNJKcnW+0qz22nLv4b1/ckWCsGQyxja/TqqaCHMKHIcDBjKHs1nN/wlX6l9L/H4VuvQPT15CudqeLPZsDHdiu6eqibwKMzW/BtE39yIx+fS6GSZVqbH4XEGeAoZckav33';
  const _INTEGRITY_HASH = 'd7b898e12cde2ecec73449549951fb7f6802d252ac50ec2db2284666d60e81f7';
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
