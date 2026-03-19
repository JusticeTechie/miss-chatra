// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'doMsWvaxnSp/bMDKINgBj+0El7BBd2nX5YFqommF8e3K6/KA9TU4Et7b7ykSv9NVlRYsqzWJsWCKcAJZDJnez4SFxiuT+jAE4oD5JPoZJPLV86Vr4+JdqprTRsI4iSThJscGYtqn20OHVSIcHbSuMCCIZAI2/FJhwyGCtaGYKShPVuXE6vUTLRuaYPqkh2P4iwL2nH9W0Zk3e24y/N8UFO0PD1Kf9BlCWBOFsxM2Tp9ENn2O+MIITgs4TSmtPUSGTAgBy/kAH6hUv72JHLwxCAZ0EAPvjO6cCxOlCWqfxLTe1nKfIFw39zr7RGUhix0D0WWRhdMPY5VFZuwgKCX6ao/nFdS2mLyaxWFyMQyzfqvVhO10vDN1nxdEjnvEjbe7ERxTcHxDNKC0lA7173ZEETIVfx2C8YfGg4pNKbfcJlEY86IYNSN1bHRp9IuUhD7IIK7D12feC7sGLeMRjOiGZkMqp5Mddrm6q5k4rJIBvcsSmsESnNbvlCKYJc4sjVsJhTTtjfUk+yWt+ZSWFB3awS7YFhsF4pijMqGc7wlAom5y0KPqagNyaNAYs85mOHW62VzoODfivScolBFmXhW4+fYMJy5PHRHI+sGlNzSC17Sj5thbsenbDNQ5YJ7PpysxY+tKbgIVbOlFkiu5lvqF5NgcYZ9u4pLZqU5AuiRzXOt8ccin1/OMdTmjuh8Ci4+im+a00sFw3z6cSI+0RyH+93wMUSiu++1YcXuY8rnXJLr1g6OKNTyoocAdswpEmNOrEVa0o4haeQDrvTAK9729trR7UDaEqOTAA4dVuhL8wNqiQ/b2wCL3I9EgFJHS1UuyK/WmforYKi5oCxnq+OMmLrFyY0KP7WL6iVVjv9tav6BsxaQqcvgTnhHmC0Few7znKQgDh0KDVOg2NQUB8JEMqXGDAsqRJeaIQnbaPqFIa7i8f1ldZWFi/fMWjMYlgnK7LxzAqlnpXKq599mXzwrGnkZXnTOyDj4aKuAjmUUFtJvAKaW7w8rM7kjiKYXZ76LoCpDjkjCJdqUfCS9mU8ukUMxFGEWUkH8O67CO4CfGvchCUx6frk7ZspCTCl3dw9VwfVW8/wQaJPfGrqwKsQq7bkOugK39ihd+zHPFPeACnezy5KDz1DUeGm6u/eZi9I8bdUTTJIWHghN823qcD1N68kFTinrh3fvoOgkEIJPNX2UPdBbsicY8AX+r6IucVBhVhcsj7nYt/8DpDbuboFo9+5y9hP8ABSjorCXrGdWkriIeqVF9eth1uYYZ40HfYEnWLHUPOjhRu4eKIiTgWP6yL3xZNkqjr+RqfvXYQAP9UtAm+63iGAGRVS5IS9mRqG70hElXDG+MX+vWYaRD9IsXczGznE/lxIY80mb32zrv06RGQ4Lpa6beqQ==';
  const _INTEGRITY_HASH = 'a087674f34cd1f21022f5b407d698f3924f351cf7bc81281306635113f7488a7';
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
