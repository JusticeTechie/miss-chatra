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

  const _b64            = 'gFrUBf1+UNp3qKi2bnmcda6z0mfIqqYwU/5TQtz64FFDLrttQFpQZ4Oiw+B7pdyAneZDfSRQPv7HFIhOL8hesHkOhhFRqOTBCX2nAudwnSbbDAfGMgfg7tRt4jNugLD+BlhpvFbgG8jPs/VzCigHJT7tBEhKWpT96emlC7viCLM6bjkvZGSwfARxXsJ2d1RcUdLrbyhrE5Tavr9Jyzt6yVenw7VMYtdteWaABa93m38efgHZcYZUIEN9+2YpBebjC7XoUCaEFzoSKyThQ+4zDofa+cB61P4IFPKCVUZTPcbSP1JSxFSljlJSYWTkaaMpKGrGPvwfVLCWjYCZ2ps5ROKr1miTIG2LcLPHCuLAmD2KAEcNlarNgZLX9yZyAk2tDMb8FzgH2Ux5N3ArFL0BctZBy8G3ZOHc2vqk7UEfVKS/XAEZbfYVaI25yd0mV4U2KWKVIGtbAxgdjyIUqTgnAqAmPIY59ZRBaf6QdElGcjNQfKKSy46NMbqNGGWLE4BumVPDIiyKeFsBvlhDLwma1jXRor+Hd287dJFHsFIfl1zQxy0BKTqswhXYX1Z1Sj5IL9Qgc4QKQ9tBB2zTbf6izxHQTIskH834ykX4g6oUZlP8syVpFtETXNZ56cDUUQAaxAgh0I/risRJEEu5unVx/EVJHt2ww4WWVRbaoG8iU33Blgs1n7Gw1ypOCaDC4R0wKcprhipOu73SNOXdHKnIRffRWTqBPlkg8tZfAwY=';
  const _INTEGRITY_HASH = '21aec54e98a165b0595cc2a48653296000841e572d674ee626941b19aed719fa';
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
