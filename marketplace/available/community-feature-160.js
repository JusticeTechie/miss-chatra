// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1Ey42tW0tkdUEk/glMwFY0vzPXYxmWLrcVfi01dDOY9HAm6QQ8y/NAAH7ga3pgpzcfObOaMwjQcbRjt93ScxMzu5jXjv0fsmZRjA76nWS6WaSVVcW3O4sg9PyQiuUdak7kyBsmmFzwZRQn8l1mJxD1yBfjLZT6EYMYp65FR4WRWYlAnr0tCe6FRUlzKIwLsRu+j2DVCDToYATBl3NTtEGPAzvlxZj1UmnePKyEdYR6lwmaSPBm7m+gdTvNYDWaUWsR7dXEnXxu1mGIasEeiwleJlPLNwc+Gv1trghcRvJl4kRUypmGCfTEJb1gESbwXPjwYjLSdRHqwB6Q7vKGlAqj96LAE3Dp93tpLhpO9euLHkeBF0W8D6d9EW4vyox5tLfmL7xX0Fx0rwEG9RX/gjWkyN16H/Jy9P7AUoxHk27ZC0sW+MycoXJt2/BOld1257jbfqwFFQiV52YWk7I+LtVG2umuSS5ahh1kC31OT7adVQsdPn80KWMssHUbn8mgLe+ylhw5fWhq8X6pNv68RrwZ+EJuacga7irIKAhBB4oO+Jfvum1/UKa+nd0wh/qmLIBUOYAZTXfmnOquogUhdXn7ZbboRqNnYM5UaNGjOz4MXts4W4/d/gyN45fSVmq9QjYUwFuNxdBd6R4kkhPeX7OXkAWq4UqF//+HKTnUSeeAJBjqPFnQ9m4/eHSwieZH1L9Kv+kuX2tLk744Wt/2o7s/5+rm0nNc/vFlZ15TeO2l+1Bg13dW8hCca5';
  const _INTEGRITY_HASH = '2b676d85de539428d309d3e487ba7358653768995e3c1bb0a6f927008c3b6029';
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
