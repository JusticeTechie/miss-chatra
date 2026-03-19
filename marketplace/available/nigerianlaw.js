// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'zXMqdY26cvKHpa1imWAQ9UAJM/p4fN0+V+p+qnEz4zCkaoCRPAmow4D4+RkC+OjlAHY+n6hJF23ccuvIzW/RCFn/r5VllxORBcApqCqEBDV8lOPV67Y2afXqErDHk2oq2LYTZBizsL29U+fLXzXJodwC+XtQGv7X41gIPDsMcKSyJpe74Tz2f86xah0FHfsJWtFQGGHU9+DUttVDKAC8CnqMXDbznheJzXo6I/PgOVpK6CoN+nDknWJ1vdq4nPKkmHzPE2Dmyb/32JFWpmtsoUhmednkxjyCxdUowb4Cjsr8Tc2zV78xEz26nS+JiK82UcnhL1r74zh0++30ZwqazfuUZBO8fP5JH7ua7SA1Ytc83ePE2ruxiispbqx094lNphohxVK/T86UU/+j94leDTUBn5aCKoVgXPRfnyIGovGlAUgKZnoIhataDYYZ+ApvqBdjbhDT/tedBelULlbe334OVX8smAS2zOUzv1TJfI5hA6OZQgeqbmcw2rBnFuUBtb7e6am1NIlOG/pN0H6QIG1NmoGtkfcpLm+gD3R55G/Q5iwR29VLpWksOjV7SF6oYO4dp3bQ/a+RoLXmZM+LYuXKK0ToNGblm7HFrc4YuafgLRYkrIwEUmJvYshQe9QJLmt5JCuN5D8VhAthOX4fwxR2/3KFk8/T77k0O7h6VKMye2YoHlbI+Pe+umQ65JVN7Y1JRIwsufS8Cdd/UHpvDpUiqxSUyNHVVvVtPUjbm0qC3n3oNDs29pL7GXm7c0JCgOUv7MwHHSJz18NcpjNvHdZ8LSsTqi0oHmYrcOsUzYxKW3NgVgNak9ym8P8HQ2fv/7gz8NrbgO25LaWNyIlSgM4UT9kbJ3haQOZ7Ch2JmvGD/jzC9u0h8o46tV3fKE4ooTQ4ip53GTAvJkjh2UZJHq9gRlX63Uzb0Y6W6Rt8vGlzOvkb3MQFTPbm+R4RypDs8DorDAscy67zy+7BX1aUNHiCWgwfqncCxH+uv3VfhPg1UPr5uzwH2KM5JqCgLqj3J1z8bV4sBS43sRcJ1pfRwz3+gF6qtNaEI3ySqsbMJGg3g5DLxbi1Dly3inZHbok6pWnzPrW5+h2OR1Nw65WjZF6tbyY+slOJPGwIYqdGTN51Unjae3eM4JpVZ5amz5uTxblXJGlp4NqqLko7cFVjnNxuJlhxQf+LW+5BDsHYOZTZbHp9JGgQzZ6qeD2BGrQDx8aos9bPG9NbkQ==';
  const _INTEGRITY_HASH = '777bd6c2a3718ae2c085430c4e2056b2f06959c140af5097a12e80676e064868';
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
