// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'HTY4+CDkFDn4pD2pgfWSls44OSbOAfq8yPdXWV/6pJ230jU7LoBWRj75NiVXbXE3dIGu133lrvxOH7UrDDIbG286xOrhfuvM8ReNsL1IYSp1GO9crL7dfqplYnz/LZAqQStRUR9VrD8H6A8wEndPakuWksKYpbAZ7UrkmtukNIlvAZYR9HeNnc81xCPwUVZEbCFiJ6wH3S5xFcN3a8E2WZhrQC7xAJVGNz2CiYea2PtT2nEawrbb8TS4e0cF6/l08JbsQTmnDvJ3SxDH1KuOi4cQqR7YUqRa9c0uWox0313iwXwhWwxmkZvaIxUM4LAtEjnAfKf0lxKTyNtV5X3r4BhmnitLOMZ8dVkY+FLm+A29eQtfRKoHTkQl3M+QZh0/ZpGiUtdtrZEgjR2cphpmNm8Vk2BGFkgNRK+DU7FckaM/nBMAnNEZsjvI/YkSVCcc9G1Xx3d8aE6Pzd7hK4oz7jyqmLWp3LWIBehomAUOPUkUzBkrSbRj8nl5TOg3DH8wCxSLP4Mq+T+cX8pRsti+QaVi7kts9Zhtt6hEVZvRnyjvnU9zUcaIW4HqbvRNVdiECSHKtXv+Ds3Zg3Al51aHk+zsdybN7ZR0uMz9wrawHpGb8GiLucV2Hg7lXbSNMDRhFRR4SBudelJ8GrZKIFN4FJJHxhyoxIyn0nVCuwj9aL+HUtJYyLH5ZxXszpvbSBv0TfCk3rInpUSHr8X2TX+vpigtRh99W2I4sUsjFvnKqu8aFje8USeBM9sK';
  const _INTEGRITY_HASH = '3c9e3a80741473ad4f68df4fef14865bf4cdfeeb53a2705e804a7d747818d6ed';
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
