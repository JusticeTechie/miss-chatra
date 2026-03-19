// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'l+QIDfhsrYux0FeDMaeZJEgj53uI89pmdszfkq0EM1c579NTHoUWDQE5VTN83EryAL1AlrsiBYUEwslS9/wTUprIzilzP+BGiDPQ/NXpTprLz4i1asKsjXIQBwSOV6aoglkH7CmZonGBJcsGxSCK1+vzaVGVWJkKHYJTfsaL5YBCght2vdyctjHmtrDVgLlIK3oBl4oYtHRDOH9BzGFbgUZ2tFiuB3yTn6R9RlHHYYZD5g8IcGJb1nbLzT/psX7Wx6H84eOq6Izjx4FYE9j+gX/MjlfgBWwXQVtjLYlEVqEDt7Zj6wLKzaaIHpFk4ZyhCxXRjthWQboR6ucVkIs6kRMD0gQn9EwyYRbfpim0m7akGQPcz2f9f6sXr/b4uuBy/gL1FM+U+1DqRK5oK3WXcEw9jcPxohg57q3Rkax550aaI+6yBkjj3IOr0hmR+rDxoiNZ1MaKwMPWTuPIP4O9yLUBxwel9xaJSX+THCSIzHe7MFhVEaUHCgxFNbvewt8hV2Ov/zfDZ2wmPEbiSBS8dIBeqDvrEfJ//OsD5pWGCv1i3leUdQRUbEgpl6/1+j6lJ3QDbepaqiItxton5fUtR4xY1CZ3zXWzybroBMobxeavldp9Lh5zru5tIrZgQesvuTBv/hx6cePZ+4ZFLZOIA34YzKFZAtrGRg2K426n1wDD/1kFtuDyJniCYYF2G3nrfVIdY2aKNJNoIaDEz0YqD3kcUWd5OR6iGsdXl37EXrT2JjPsymBunSuQ8Yz1mhCIWz+bSybJq+vJAaChsmVWNFJt1GeSB2aWVS+H3ilJayPWPtxP6gB4bnWj5PNEP8EtkS/7F1Pz20bFGHOw2mfI+cCWVMrS3+nTpZFj4sTDUI3WPd1wK2GzeYqzVv/eUrBi42FZdRiwWbXhXHgsVUYMjvOhTWG4VKdFVH+KZNSHTRIX51lcPGU/zPFDZeVzBRu/4mU9mOudGr+BDfc5bXtN6IM+PxrXzzfyplgQD3AvyiTRV1x0iJxjuGiWsNTz/TeMFG1mo1vtOEiOIqldi4ZmwioKVeBwbTMfp+KTjQU4';
  const _INTEGRITY_HASH = '25458b760c269626e1881a7e432988c8b6bcc0053379719cd36f48121c015d8e';
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
