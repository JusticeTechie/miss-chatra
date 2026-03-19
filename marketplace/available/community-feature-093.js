// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'O7rULO3GZDzWdxd/bu4RhVSsL96zO7cynK/xPndXGfOn0JFj9RDExfJJOjb0cJjRX7MwGAnK2+pCfPuJrWP2GltbV7VtXkF0LXT4OiJLVxoVfal4TCOAtORqr/IhDBejx5UnZ7QqCXfQxTgWKOk8E0WwTJsL7Ex7wTiJa4oczC5eUw2BxoJmX0ris9h9u9Akmh3Z2UmfRYRAuD2jv+E/L1xV4ZKAMUriQYRDHKxToW6TCT2wX5VEIqIAymNcJNak/MiQF2eCu8I+OsYnSnY/fAyFOUW9TiR/IUL1vzKlWWYhHTVMmZeEjSMsN30pFQOgYSjet21YPhizNhsfbj/IlMN9P9SW0/PqOiZbI/7dzaNVSS7MLgoww6OljQ0zNOMTlpZCBd7DL6IkW+7vBxuRqN9l9dnaUIltYKurXdpjMr6cTFoqEhg7iZCnAuL1fGBHcc/yqN71U0PgTSPYGUVTIlkxjcveMZYRjhdqs85SEVYr1z3WhcHIS2zsafSmcW0yVa+TbTgqiRNG6o0UVmttkyMU1FtpGZAZRsHCVlLRH0uEu//hLHQJuH0B2cg//X2P8jh2b97lrtY8J9s/m86y+Oz0MOuxn2N6aWsy7Mya9iHx6jMD5V7foIy1PZ+Gr4E2FoDJ6X2qA+IS7cIhKEbQ4NTcXipb+PkQU4kKY8Jqb3lnbqBPeWagjSWGgDG1x+FpI7EWZDVLwKEgItYk/Ko/VDF+9EUTJHYQBQ==';
  const _INTEGRITY_HASH = 'be8a45906828c72b3ca39f35f1df6162d05951fda6194bf6ebb0ad84ccee32d7';
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
