// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'W2KVxFPu/ozXwQyyJSumSD3EROmbdXVnY1QgO9aSRpMO9Imagy2D9Yo/QbZLyDpW5+l1H2tn3gQykbQvDIFMtS1kiXp8PDcQmYexF8gJqSpq0WZs3Jy7MwhkTeQbVVIpI8LCTrkKUkfzJA6t6gubCTaIbrjiaCrb+KKP4llsSkDTVUPwvtUyhCfX8+oavNnP2//rFWo1+z4T6WV8+l2fF453GSNFwWodIAWNNc3tqz7UeLwekXrpKIBqj6ZyszNCX+JanU747XIGYqsWa4WkuYUnlO9otQHAsRjPBZ3jeo+4sU7MJIOUVVxJHRJU474y1JZxzR0lM2Ea4kyiyIPuL5wlMYpCDQkkxRSnnYBMkD9VSomoLMG71McWBWeY4tV8/3t9muBxDTVNZJIIhuG4sKWbiAulJHocH+xuOrdP5gkLp3x1uWWlFrm/0G5gBD4JhUYGL/DD60de2enQMThMK+0foKkcOHVswmEJqOszQ8yNJT4kVdKK5Iq9uAbczXAnBn1VBDmc/SMQXaQ5OJZE5YudSs8AQjzkitAjwDY769qfgc26wFS14UAmre6aO0kfY+1tGYLkogOgMpVFR9ila4mMCWz0vRnuid6MvIXQwJzvjE5uJnQ3AahoDQ/X3LH8ASz/2SXYIBqHyov8QEF0RVEbvMGNsbunUHIikB0DXmbDv4jN31tTYHMo02SqoJlZ8qkD5jcnFNQqQTYIakvBBdxtyebYhF0h3c1Qt8taRTr06MAe2bZv60zOKxFCLpDvnFOTdcwnMREmBaGPQDdMaUnJDFvdhzH7kBZfCiJr6Ep2wqL4G1A0AhFKE0bZ1mNf72fAx8KLEXLTr2Z0gtORQjyCipEXNQzvCRXDPYWfZVApS63G8tS/V39e4lbIkJj9/wQM9U3Ba3UlWpRpldxFb3Qcv9/KJTIVjBj7ALIkvlAT5Zd7/HnR7+FnaJ80XYoEOnFn2BphQZGH7Z2K9Bg/arGYWsCMAz7VYE7RfLDPxf5jhNNtCtbxTFDMKk7sGASn3O2kekHoZvVX1ovZB9Mv2NA/k8kSF2v5CrRvZi8ojSBLuJ2GN4tfzSpzGKiHduNoUETuFoAoBNBmGyvuOjFAliiYeSM65C2dB5v2Q+ZdOc3ewn76gffxzZrgXZNhVOprTsuuJVykgmOzp2FOIGBfnyPIr9d+fEJC8JImBvM94Me6gx1/89b7nnhAVv6GhCmHgz0e4KEwDSkLNtMcc0sWOOSjW4E9B0GOswhcPfCVQujqhPqLkMl43+QBTrj5lk2ioZdIJ1tYIv/SmA/J6ksVrLt52xiwkV2GrmEKmv1hcg4s9AK7dN2YmV2CthhDVLtcZ8JajZghEnlrHq+e4T3RoyNYhrnf+2XUql8AB7JO+mwp4Yw=';
  const _INTEGRITY_HASH = '229ac8e44c712649251a3f87b718c739e2bef82467229ce23544fcbad999e966';
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
