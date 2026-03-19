// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Ip0Ghuf12IBlKzLfh8bYmuhHqgWlUPSm1KmsLoCUtwFGrvKJ974JmqqMaWc3dz7sCd+53fHabwZKpcxnLF0/l5jmaIa7u4w0gPMH6ZM5BKXhkGHa5F2mV2WiBqGTfKOdQu71lyG2FB9IiK0wpLQ1/3Q+m44Wa3wrcfUSq7JiPEEiMSJoF8kTg+1+juWurfpPb7bo3abZKylsOsSv2eKkKK5YP5h0JIHY55iHLJEIrIi+xywZcYR2aZsvM2iqw/7jbXtPoKLVl6/m8okgc8mbPLZSRdYQwsEMkm/rm25exRZHxaBzHZMKK7IEdfuQFHOA1IdMvBh93umdVcdQgcBOoCg/piuQl5uOWpK2LKF/QU/fA2A4rvmqyLL4vFcDZ2luXgfXWHNuqg6dnyBYxBBNloznrIHRpb1GdnPbvB7zC0pdek0gUdM+EDtl79uKF0FrthvyKX1vj1/q/RhuYx6trTBvP+xs9tGVHXAD2QLUCqGySo/tws9pMTnLhwjXe3a9HrJe+XyAFcwHJu5TofV0SImE+7ayVZJ+rkBlE1vy0wQKjbzHV1Aquam2z03xKv72C8HJzI7dGOScQjAx7aDJ4aLc+yY2EhFXw0z9xjlsZR6zOH2yjimBw44AEQiYMt/oYrOG3gAzokuhySoSC84oUi+axn+5lQVeJcJtGW1wYGJQeh2VrnbpMzXJlcCnjPwpfbWCvks2tiFRGsMsr28uwwXpZXJIeKKR+T04ekgWKbfWirZ/lzR2XRavKS5OI0sg1xXWwCJfzpoSX/zC44LZ4LuhDVsrfptQpDt2JG4t6lXpKUfMBCXQA2sKxQGjSRymnkaGtx8aQBPyCRQ8OD/ol7nxVk8T+o8psRp/d3XqC9nXvHHd0M/E65gjNWxbCBUBKTkp7I/SStPv2h9mvhIxBl1Bzzvh6u1mA+69/mw4a+f2W0EUQfnKOJXgLn/EkxM2+L/J9ayuRS2XGP4/9O+Gf2x9JyNpYZIbCPP985B5mmzKPYY=';
  const _INTEGRITY_HASH = '4ab68c81279e0a886684db37e5d52b04d42bc0c295eed8ab2ef7cfd69901aa14';
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
