// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xSMsQ50v7oBcdIFC3ToXRL+a9vTChwOfC+z58NxYiALeLBY9Rd6LB4O1QeSZwhO7piWRMGEm61lsChccxBEINGzARwKRLfIkePmSGw8Q4GP1FCosgNyUauUoBpcauFpivjvcClMJM+qmFt6ZSCcFFpcQBJJkWMK4whmE8zzoXj8Tnjdvzt80Lw/+27UHEdnOzdjRM3UeZKgl51/EytG9aKFzSZ6RjBVKDQueLQF96VVOpFNmf3ZSGcC0p0JY3LomUE/l9WFY7pNU6FyQGdFaNOYHP9nPqjSEZd7206cljZYNu/c9MCFVW69EWpVoEjjdVBwaYltcEg9TeaMOfPk3Yn8d6QlJPd9NCgb48m4/CuPsZuWleSCRFQDDxZ5mV5LbZnUjDSVKFfNFM+zXlRtVpAqT0Z/jovihcLukV6smmVXUVWpAKM453Qb4iHjQcGQLnWKlUvbquNX7It7iUdkvlRu9f/1Ag2WWkhVi++jd+8Yp/8BQq5ern6Jf+XzKnaqLBEc0V4Z7MLBGXd7Mu3hcZYZ9uK24dLSfxr0GXp/gUMS5JTqiXqMquOjiINMnmiFZSIOvcRMLbapbAxmFfOulE4RDw64rBNNQK2KcLu15giVZ0NeqbKf97PKkVuNm1fc4V+ESQdeNkkstJ9a5oNO6kyOoQNwIVH2e7vkxi16NYD0IsynrTBQ6fpQnqvi8ddjn9t1L7glgmJ2Tfut31TdwHBDRMVBddQ0MddnPrI38UOxNb7hVBUp+Xof6';
  const _INTEGRITY_HASH = 'ad1ad52c84e48f6a4c7263b8d6a50a4aefd26d5e870f3b621d743c0294e77be2';
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
