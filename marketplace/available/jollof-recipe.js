// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WHBw2Z5ax3TYGBiJD7XZZM6ysMZIaRAge3QfjqgzCimblMjk5zBNn1DU09VX6DE8fI2Y2hGQ22ZO5ko4dMjfbfgbDXjcZ9Z0tHrkXPPgD/aJEcDrFp/Va55CD9b+JW0huYGc1rAasega7Bstu4GyD4OjQTfZZm4xDGV0C/aqiqsoZMEkEe/p6nc/GIAwMGGCQjFlL4Ne+yO8iqYL31rCphMxOSN+dkJCdXSnnvyfFS9m49ZmHey7XJf1g9SXlYx6pxsCNcUr1xowHDWVxoo3K+wmgF9wKE4jRblPpnFeI03KkNlz2S3BD+8hSpyBkThTfcatdP4yMxoET10xVh7kG5hyWXZ7+wuvNdcrl4VVsl5TRhEl796eiIeUubiXLOE3vRe1iQr6kZpfZscrx7p/npddWhvYTNS637qMZHfO+fDZwMsZldHTxXuoTOKZUUG+YEO9GgDrqYRPMxKC7WzQdMzEUzxAFQ6oDS3pvuWwiOO2piDtZAAVymqV8OCc8cnddJB2y0WQ5QMAzOjEkeRMAdM7rXgdH8KHC6C1Z0j0N3Y0SUYAnyqNNPM9xVbLMkvXvggTGja8JOxU3vtNvYrpna7ngw==';
  const _INTEGRITY_HASH = 'a2fe46fc1116bb2858a32a3c5a6c79707f58761eed053095988e36c3311741fd';
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
