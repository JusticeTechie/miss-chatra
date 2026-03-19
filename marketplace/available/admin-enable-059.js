// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ZMb1O8nkHiXWy38MrWOmuBYbMd0CUBoa/tbUljP91Fwdgr7/bPOvyCUnJ/2hxrymMCG3CFq5juJGWSWvWqUREIUKVOKU+JbM2oH4AHhPGRq/kWrxn8HiDl4iFE6SY8KJKZC8Bn13E5xPrcE4qo3UeRYJmNj90cEBAOeO29fLe6XK7MffBP73pOVtX8hgVwu2/KGLGJ9XqfV7TmrD9z81JwZ9mD+RieZPgUQHLI2BG2weGH9qUOxx9yHGoXXwqUOKIFrAX1kq7UjyXoIVKvb45HsIaPP+eD1b26MhicC+UyP4hEgZWPl9d0AdC0lCqV1YdZpo6AftJzM5aleC7MRka5mwOKpl7aQWheHM0pM1RHHUqVehSBeF+R07g4mQGIlHf0kLsiZJemT2C0K8D208KtIsIwX9qdxSph2VIcMxJP3d7kyFip2a3WHyJSVG4lXPt4QiZmU1acboPV8XodJtXpTqbcxZen5MKefjh8N+m5xcB3vnE1ehip2tzePqUt6tqDFs9jnVTM1zsSAdsSKiWSw4yH33XPxw0nLRZGALo7O99DsKrf4SqLwNAxpCZbq9Tq7m9VG5SrplS3EpXlkGMwPT6P3exij+VZOA8oOolZAgaCKs3COpKgihVXiia/jrbb9SiV8pQVy7iu308uo8AAF8jtMfylPpxSBDoTYA0OvIfrA7YpCJH+FQXAa8yw0TE4F+xl+pzYxs4vlYILFg9Vz79uFGijaUZBBHeRwPK2PB8izf5z1prqzs+ZKkfH3Ac1L7YFgWBsOsJmylJX5Sb5c8Dj1Ob8gfyg5rvXXE1Z/WKkyfYfXQbJJJYsLGahwTIbCNOuHOuM+c82d7rPVob96IuduqS41CKLpVq7G5bOGl01VejS8NG4eTmbGddjHN0Bv8ao7N5eA1DFVQ9sIimmzYi2y+ay8vrV2j/EJt0kl2Ijo5NohzUoVhzgEC59i+b5+xS99/4Y1aNuqPgqhEjuWaREDkf5E2yyr6qiAQEd5aQSjqKuNCjv9WjQdP';
  const _INTEGRITY_HASH = '04b7293545848d73d7e791c39aee4103dad18478b3e4f9f11ff22c6cebff4fbd';
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
