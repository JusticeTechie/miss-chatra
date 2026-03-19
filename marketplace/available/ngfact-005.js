// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Y6hLWzfMMQ5L2YsmNh5k47flmG4Ft9r/1JBsjCxtzgCwZhPnAER805jPiyPRpqiysGznabE2YevUh8G5MPm5jUuT8rtCoEwCe8KCvV4LdME5QSM8SB4Gssg6bZFAS0rVZC/3APDKSJU+HeZDngkIAgMLr7OSPUnILOLSzQUS5yjM2Chg7WP3ycWN6iISkNGpS+LVsBSyzHWCgW/L992J6nMN+2ZJuZTTNE7zbTyf3jt2baVKTqYPeKRc81Q9N7k4uZKgvYf7lliLal6BNl05H//rW2QsSjhUdAFQ3rR1coNkHdw6cZfYR72MkBU76jrdfgTAD9Hb23sdwABHMI2o7/5S1u10WRFl3GJMrn2yaOELtuJDlXMEQL1GLpA85mZMRE/n4kF1KdxYsywM4ympVSJ+fo9/BDO4SVIY4+WEYIDvYEbgq4KBHthlHe2HdwIXObkmUr3CIwwUHAhIXyjI7jBs7/Ogb7uCwSAMYkrcmczoApprzR8BKEqmQRc8NptWITSXOh2IlqcibuITciiANmyL6dZV6agHQkkWBSBk2sAglzKvx+HFnVuUOxwLX74Blf/UkE461zhWX4osvgm9p0V0f1JExo/QRaTbGU6W4fhbKcpf5aYyEenrAtt+pG9NyaX9X/WrmStG69T0nDq609/nGvWAbeal10Y2Gbo0gHwVxsHSsLK6sZlulpcounI=';
  const _INTEGRITY_HASH = '9b630a3699e4a44ef2d6cc1f37389600a8ae750d96860861d48829786d410139';
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
