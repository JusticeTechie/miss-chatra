// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'br0qsprvp2m/HWJzPICw62O79NUPXDsdrFBmUYrIqmaMIG8rBiXBdg82jGySq/3VSYP/Nj/hTBCDJiZohGwgfALRA+KGVPqUenyDMObyUPxM2nTS1VLHjyqmLxTpB+E6IvLlGmSkHX1fBSlL7ZIo5cKseTdbRrkdcBAi5FfeB3hi9RvYFaXhWlYIi8TQkdhFhxsbjzn97T3RlNKk5+jvnq67Z2Q3Y+Q/9kTWZQgdJQy1q2e/vxwYrd2mSYpKLG60586FDoO6jZX8xclRdM8iwS1SwD3MSZAjMHkfR6Crf601JnFNMtATHKLBq6I7JgEgArolqeRlz6ecJlIN/PQvbG85CkLm9Z27EjfX8Ujm08IXXAWApFz5RzQXZqc/+AT3Qcffw1zxa2Awj/9tbAq5IQOhtVXz2GHb5z89ZQ+JkSk5scmXN0YQQ4xtm4sBj0vtY/MRDiEv0tALZRyVGf28s2FAoc+sj9ARukKZL3QOxrldAnxY3AShE2PynuMe2ny2BraXQHv7vT//VAqiWMHPni3jZouAj7eadZbdFktsJFAUHvVWe1osqkBDgoENvgD35TO13/Ri9P2q+jfI2kmJaTLCMtIdOE5njng2k2SpWZJDWUc62HXOKuRjuiYdINrV+OBHYyYd6nezNqWqFXp8StilAwjRUgF5uAIsaxcbiKKm5nP8sD5TD4kd9F3qk0w+4uBOgBRK+HTbNgACdJcXK8O6ATSNyOh7MKdp1G4QelELO8IcPlDckiUK+QroodjezErfCi7D0WinEpuFeYHf9b5y849cIxfIeWOARjne8IYQ1ML1sP86NqS0qA7USFayOnCWNOODmhxHW5mVpLXZiU7GXN6mdjv8Lhnp7sn1B/rDWQRYpjJmQ2TZzByTziR1t0jISm8Zl/35cfID/nO/ftuWIiRms+z/Sluq+Q44vmFxCEMDVzGmjjkHAaPuEAPS93eVly60Xj8P0VPaWzNGBv5UwlUo0gnScd9Ov9Mk7fLJ+BNUfURIIOkwgzXKIJ9WxBcJHgAgJBTdbYTjCIjP4UQs7+8cQ00GEe8S/BL2m0rQDccrQjYVY245AU+vWryvkzRPBdZMojGujvUQTiqOG+BsmBFe2DLyN4s+4kmrKE9fPxXbXiLkNKw98SCjT7DBRt/KarGCp5C2geXXs3+srSaqZquiSoRg+SKAFuSAZWN0YFctxv3KYC0TayzT062Awn83maiEFEnLAq/hww==';
  const _INTEGRITY_HASH = 'e1b05e34d951d5aacd623bf7a17d22fcee587a6885bb022dafc8a89cee1f5af3';
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
