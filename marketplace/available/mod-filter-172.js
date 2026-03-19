// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jsRYOhOIak4GPPzgeHbAaY2DA4CtJjE4bbmhJlQHO1woSz951vL0N8gJHhlAXqicnfYx0yWGkTfgXZUpuJRbNDlhIfe77mYB6SPKUHvEl4964VHwCVgpU5c24YlhXi4OgjaTd4k/1OUhgWhlt1OSb/fcu8TW30fdLZKt/Hs5+QybpLL8nEGVLk4oPLH9epLsvlgd4DBX0EjJP4LOEMj+KGegJWCpdEQHgMHYnGTlv0NmttuKiJZpRo85zFZxX1rMq05WJTLo04BDxNExD/JS33oNNMwuLtHZOUWKOU6MdsflPNco4ucCzV1SK5NctK8bDVS2FlrcPguO56nc2i9D8ucgRGvVxVcgYXZNjmSAHAKtsQHxgqzpCxSDGh83OZomf0b8XXkAI3wv06Auxo1KxJuBf0IDRkuJhHl7IxoHwsp0TvfIZgDnHAiy1gUx1IjOCfr6n/gfzb0mnoNBs/IyDL01Cvht+b+yVoMWfDskt6MWvqjdvDN5RJcJIADy09b/05n8oUV95lQVPUwvonj3YCvSIj+gv/rGw5w5eHlNkxzEFtACjm3dEBacE8EW6zKt5SYxqc01AmGR5reYUGCM/7m6D4YQR/VUoer2Nrj0X+DC9CQt9db7tSQlied0ekg7nDxVnO85aKrGWKwpdNBJ+tl5W8LYHOlfNaJOyrpa7vt4ACRfSCRq5u9Z28AGz4KU3r/6emFF7Y0mypIr5zxE6O/lrRjw3FNUYVd8maUxVdITOs/7JsBlTcCKbIuvm1Vv9IKFhk6XG63tbqSnQ3wazr9sDez+fIk6aZktXjAHunNL0GHFFXcKk7xklTmuitVZL1IvmJT/giV21wcut8qy01WYfwv6x/RdUIMdHbQThV52lmmZEEZ3JeTCmgmh4mL5mEi4sUjogI2Cdbswb6VlDFmzho5MApxANM97Qwj7AMKELx2vCg3nNykq4Xoizofv7zKX6IJFlOkbdQPo+c7HDsQDQeqaZIJbsbF0hNEGO1O5OU+NXHEEtZYDscdwIy6EXsS2ZstwXU4bC9QEIitoC8eU8cALUQg/nIFKcVa/0ZB07J28dSzVl50+FlFiG1b5TrraClGKGy8bedGYD3QBeA1PQ0vqOzwiAVcD/s4yRaSVz8QQHpef7OIcgtfkoRtSK2ZHeCI/lgrVQuA7E/MMJA/K844yMNyuuanDC5ri3kbwxhoKwVwk/5xFqkwF9Mv0cbBiWzMzbJ+SSKPjkT9otr9FImoyFVqPGko1RhOVOdSqiNdTLQ1cc/I/sXMsHJi1+etjIBmstTtx3R+yH3kR1lAGIf2y6VVfIV3hpzLpz7C51Gww520ZJO8RsX/VtItDUpEMd1Tkal3gJ+SGCcINY/jwJK9T0Wlxn6upCSl4kjYKzgSyrjccyg==';
  const _INTEGRITY_HASH = '545ced587a40f5809a55aded9e0ae4cfecb9fe4805e47e2ef28cd54b4a3acc04';
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
