// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tQJiZonbmtWQSzliugzNRMTWPBvZMpXnk7nc4h00k617oJU1t46nlvHlUKyoaYt0e2pPczT6nEMszoPfCvnqJ+bEx6cM+z9XlYbJ3FXa1TyMf6bJIamcJLYxR1djnwd/fzRhImv1jmSgjuqZvkcYSGR2kBUBAa1ww0g4XxQAX6WijGCItKZl0w2i5HRBgRkgr+naoc5IewJAHv1EjopN5vutN1fJ2pmMCLmuPq6KR28GndCuNoxCinWuD4CyTaY7NcVboRq4nvJTVHCY4RN5wz4cZDBMTZNLY9F+5zFq0ZECKYdxnpvMxzD7vsxVOTPdoqmXoClcUyVzpUNVpcAcVu3g5FPztOG2kAokIjMLZuy5IDEPGRNAs9dT91fAspLSaiVCVFaGK7ZFjBp0wYBM+Slnw8+ibZDSyldZVm6YvMIx37oNTqYSJeuw63ucY92GPm/qMWqGP4ay3UZh1OSwHn8qePfPktdfvSv1jIwXgSBY9qyFu5r28fC4LayOrFLb13V7gPS7EaPeQWP7gjJddG3wPSV73/RrqlrlwRs1EyvMp3P2f6h8W2LjuU9jx73usgLjQqropuvq6mrV9N5GJ7SqW5NZPlsdeZ8HdkgXhWat2hhw70SI474NuL0+5mRdOmXk5mSWMfZ5kcmFwAiVaYFQF6iN+B9AgN6hrQLI+YcX8JB5rkZpqW04FvielVcJnm7PshdcUwCkrmNDG/S0aUGAuv6gITAaDlt+MtlICpVXhsIKCoylYUlFOHBqpeY7A3JL05eW/XCjl6Rc7sVO4FwUwcJzUPk2XOo9iQ6ajlBs+bMaes6KjcNsTh/yGofOBK4AAa91N+tHV/19OjLoJmB8HMhrrGhh+SPNZ0lCket5zsnl9uBFfqY7u6R7UYuwA3Q0rfrO9Tf7pS3UVW8weaWgCaQ0QF4UuxPsn6E5Mi35pMvg3y7NhVpYWFqlpRwcpVL4dPNLLKnURKvevld863BiN3csb3blPCmBFAbChvsZBqrl2KaEnudlnaa6wF7CLW1Y36VTBUhPi/6p4mPNzadMTUdGfjQWVDZLibpz+QVW4Po17hk62TSbsgunyKUzQc1+rfDYEzfDJEs=';
  const _INTEGRITY_HASH = '5408cfc86f98f6ab7423e96861e67d2f2ac04b82bb00004ebb21e5f2592e65b3';
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
