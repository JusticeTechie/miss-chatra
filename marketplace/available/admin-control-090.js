// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'P5wnHDl7lifVXIy7FxT2aEO3a09ATQpE6eFc4lwIaPqmNBXMvb6xLZQrxaZBbJcv0UsjVWLGzZzYun6tWgTrP4Yt6n2LPNe392O4EUO8HK+By19JWD0eXaMvoj5uFqkLGuG1zrFv7eBWIhsDnwwv4PTU+EfMjFV2hRxNrIpH7VbkxZrCxwTbgGhUjGvZybobDA4IVw0AFoG3DwLx31yWAouToIFwlfSDiYMTytLVqSm7rrEUgPSXW2tnvH+Uq4FPVkaH78R/GYkyvw1MLvUiePVJNkPu8CS5E8IVMq1AZgHC3VrkYZt4uCHrRLZ8dgmqCdPvL6x5271GWbOKJqubtrQPAHXRkOfo/+7RtxyP+p+efdsZvcwGJokfZ4ACmS8HIG2uYcM4o1WY3JZBjqTKSdsobiTWLTk8Iyz7FYiradvvFUMA39f3hhsqGtrKO5rljLsiLSzB7+dl8WytIFEckPgoUdkpdrw132Ar0jQIxrIvCXeszH3dcSTsx9vXMDR3RbIeTxraVxyfEK3NyJZ6zKZE+/jVucHgi6HCJlpECTZ9B8ud60joX4kUFoOYf723Z0bD2nHESc8vKZ1dAHuPAxhmTCyoMvGozyHmYJoeFI0w0eNTSHyP3Yn2hrc0eUFFobNh1aJQ3h9I0Qle+zSL/HsANHT5bwq/6dYdGxGJ8BQoHsi2PDqYFIqFa0YeCMSkR4HErdxtsy2Fn+3mA3aWkCJQrdxVWycoWPVrb81jliP1C+4ds8vXiOuImTWfc+MULpcPi3bSr5FjLUyCtWO0PsHThJG5ssQYUXTZM7ehw/zYPHOfgneLWLkEg6jwPrvbfTdr0BYEob7cNW0TCkYOvqLk4QNevKinzQwNNzTXk1EQGW05PnqBN6YhRjBrXxul5gsnWyf75uTgPAExqNQ9K509efOcwOcb+rfjJQiM6hMEmlzeuwxoutA/RWeJ7FoEoFqPATDsg5tHOwk7a+uXl4b36w0pYAAJQKysrSFfwio1fgzdaM4G8mnS1dPvAFcTcm+VSA==';
  const _INTEGRITY_HASH = 'ad228af1744e959c487d80ad7b65c1f3eed6cdebf9071c76a73426b4adbb6d65';
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
