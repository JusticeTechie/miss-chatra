// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vUfXzofg4elk6+Gjs+JR9j6Qq2ByK5T85wm9gQ/aRssj2W2DV4n4r6dQvLgJEGWmKVEby8tzxGCs0wIZ8aOpFukFf9VtuAy7tGvOau8SQLnUDrsONQP2jidjaJ64lTH51ZTJG84Xjx1jA1r54I0G5M9Pkk5H50TthpN43oiPWE1ck5Xm1dQKNhJxezv8dFtJwJDPiW2C3dqrXMEuD+97V7rzXn94ay8SWVQ01PCni5OWFWCSUcV4OAHa7jKDUdzH7fQgYgb7LIteMmiBQRwos7ffhYAR2SfzkyiPHTOOXl5PoKvVBh26CO38N40T2Hotkx2esw19WJo/EIJw7jpmZYfQKN49euyDMIRznMZchGwldORF/dfGbCe99LbQaa6pOAOTi6HASec9F1pd09bZAWFrFUlOmGVIr6tkq6+1ReVQ+WFDel/zxiH76dHRp5+t8funNtq6heovIfOWt35ek4S/ODQL1ngSdu2m2ASQGx7bAIvVucsaICJH3EHPiV4hO8VegffSTrpZzTl9AqwHs7ZSDezLILnru9BVbnmQqJCXSPimWYkmYeYJVI+rXQazJBsDbVXpQiqcpmiH5RgfJ59OqI2wsQsxV+yox2dadoh/lBVyADlaH3mj/+Rx3RiADF00djIBYoDig0w2V49x9mNrFHQ9u23D+jDn165zXpOkdAXOGUz0ygEib7ZGLROMI3s2LYjrHkwCJB/3DF8aKzY13TnC0dyejJK/eH90yVFAxvawPkicChcJbkLSXSdynjKVOXLZ9qC8Gustx+h8Cq6jZUTVpdwg7+vZg8IVZekAuQ5S0R9xc64/eRGyIxIYIhJXQPtERs4Q5PoGcj5/Kay/VDqXeYQlyMIDd06d+axc11tBBDnGblasH/4if5FdfYbDleJO/jvUHV5BnrHIlM8ko7yGHpicAd0i9AB925Yqa3tlzWpJfFQTazOcGySdXzzI8Ehgsequg8cnuMISeD12sSA9evJDn/tzQyq+UK15z1244mtJiucK';
  const _INTEGRITY_HASH = 'a57583433f22b46b36ec78257bd1e19dbe5db964e41ded4c2bf3c0ff603c368d';
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
