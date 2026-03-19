// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xQK2DJ6CcXoOMZbt3suSuQjEolXTKNkP9n8MJ1n/pb493iEeSzxhF+mwF/MlrqM/9qjRlW5gR4G8Yd+X+CESoH94xliMA7mEtjzQNwL0PSwl+SmQlkvVmNnQeoqyCNFAbxhO1Z++ua310J1rlCN/nboP7urXUcIXfWyr1GjVgLQgCEHvhbGdJxpvrBdoyHdYanIRPjwhhO5FH+feGvYiqHXrgbZz/PObdcnaFIOj6cyRTcFnL0KF1obZpDKaOsKOVXeolVp8H9XhTTqH1WMKZcbWbIWM0ZCcdTM6MkT3BR74c/dIf1CRU0p17zOd6e37oKWW5nxD7JnKPgGDDNbFrVl1Rq21KurDGvf8oa88mzFo7HZwFDSz3CipivxkWy5FNF4P7U5USQiN9UnexHxFyXcl9iECcmyQwbXnCyVa5Uy7QWKgiNifqseV70iKYfZytArihbIicwR1l/mmgUraHbSdvlEVBE/QTHLzEiqDK+CAQkqx++ZTliwDugfLHrjK2vRzNU9tUK6HbY5HadOibbLOyh8+MVeWbe580Ht2LEhRRWLASTXI/Z90c31b2ZAOWXTrV7VSB83/yQ0jdGBXFsSdUwY9SCO3S/mt3OtHe5hQIK0siA8UzuZQbIgzt+2E1hI79PQ0a3AFezHv/PkC3jnSqY5tHUHjMWD81Akw0vfqUXhwdTRI1qGnsLGyX2DBRJ32DPg7Ig9Qmp+oU8nHDnXUoqY5pXQJeseT016rhNwnr76M6XDJ2mohbY6CBKEPIMi1FzFIqPq2NBU+2Rj3hy/wJpO/yM5PkTJE91HT7Oniv4hgLGidPjQJ0wgRBZghUyWooGg7dZnZXXVU5q+EOva49SMn3PALZahqrmyZG0Y4sUMYcJgyOw7nJtAaw/VOpTg9VKwAamUnl/Of1aS+0ECkMgGUTPk2cEMpdgnnl9Kfft+rxJ15kuBUGxJBtrYsBHPtYs231t/Jn0l4hzM0i53Mcu7xRlkJBYbXRXHOliCc/8tBqbXFUclnCu0UAAoNL6b0bN0sWPVW66tzwmJ+/sJoOPYpCKlQDO+r0JqdpcTBNYSx4TNz8VMIpuq/cZA75btSLPb5DMAC3MBGcFG2RaSG8BxJEOUQfBnbFE1N7Azc8JjB3rOahquVyMjuClj6BkGDjzaPJOk/4+M3vpHhLubZtQ6xbtM65Sx4o+dSv03HKcnaL833xSfb2oHGxRDx519KEsiStTX36Jkwm4O7meZqZKiZUL9M0uMhxvIfVW5XNAXoQIDwit4xKb0OS/+Jgz7jR3u+hnWWJzn8c76iMaeA4x6jZG1KpfQraVWwHuXKR6qD+PEVPsNJ0X1D18B8/ImTVvxWBcCEKC0fu38FKsDqaCJmj7Mm6oTIISwVWszjDUv3CO064JFYVp//HJRjEzmuvmX8OA==';
  const _INTEGRITY_HASH = '67c35a9e7d5ae45cebbd03662d7cf297cf24c06823d0349b432e470d18cae2a4';
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
