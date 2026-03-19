// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Zo2ijKaEH2wf0m8llnJssLGNZLAgLiwJBcOFpkogL/UiFwwszFEEW3q5owjcbsGXAZExjHm7x+Y4OI5RiucJpcAmsrHWSIUyCqH9MCRnQV81s7e/pqSRFOIxYePixXS/ABxBclEwYOIobZLngvf8NoMbVmd0XwTyK4+/4Otb+kwXeDou4bH4TwCBEMBWHJKFm/wwDMH889gdZBTS7Q5CMcDERR1w+6dP8qyIgmxByvipWevkcfFWQ557aQJ/Z9zNHyNliGfrcebklIbaK/KwNfsiPCz6YSWIMVygtZKMmb6YlhB+YbZ/KGLAyTcv4lhI6n2DN2auiio4HnKjLbvvZy1ZTsm4rLbkM7XR/IcLbrHk3znzqU7ViaFgONS2D7vRoegKufa2NgQMC46pxF6XJxPfzTTQXEhvP8uC0JBow9PtdIDd30cPVkATvZFgLU0+Xt5KiGtHrb5f/knzkfc+00+LErFuTjVYMs6gKVf2Fwcd+znF+MW8IB09CIugzfPKIWL9NEQd32y93ZfHXJBEuMO0jrOwnIcvPB0nduUqcyZmY9b44wANis+2ByQUpGQDddBFp6dU5aZskiTd0UnMNuz24RBtJz7/iQ5/4frOQKNdzXZFFrfYkA0d+ACk9s1/FwC7toeTKiiL8b/cUsj2ftn3UDBLGrt1CqFD/XAj8F1swA3hc5w98MD0p3wfu0tUV5uJvMr4G1ky4JRFvnHmcVcB5blmLl6J4ysNl/xpBIG2vsfW0Skg5h2LDigEfcYhy1p4ni8EtFPzXbg+eftJh6KVLThBqiBYo/nLNCUU8mWJ73NQnVdzU5wOZR1nrXaYgENNr245mRKe6NxOBr/QBaM8OlrsVkIIhd31VkkxjUmKAp+rkfexSMZ5aIjdw6Ull81guO73dVKh0stfXKtRHpoUE/r5e7lk2r6owUQBnl9EWfa+g88/dR6Hp53ljfw2HAze3op2yztOjgn7VcjW9o7qQXZVGzle4ZMlVkFSmOGcDBl9HhY9d2mo+yZGdQ0HuR10hMUdHp9KAHu3PwrJ52ZjRJqym0O6CYw085eVgHmtBTD3SNZ/9n3km9/oN4zaNQ77j5Nhs7SLAgfm3v7u3yCFqtXEXedfnI14LtY7tK8nv7tepuMettZTUiApG8cYv3LfAQjnreCOuO6lWmfU+uZDt5TVrQDYhSKgkqU3qeL6eTm0ExeZFiqTJKlmd7UjRJ8bhdPBufkFGXih+z1CDhhpIpFz+GlL7UeWX7SOKPLLXPIQiJha3DcbDCPpFDMlXNcgsoVYFXpMS9aEKBNG0c99epn+9f3vuhwqP3udMMAIXhziWUHUX2OFzbndf3NUQfLsXGeG8yFAPLvfpBJaqbW4mNzeFXjSeVswZVTLvc2gmPaOuZm/MWaMZATQM3wXlbU=';
  const _INTEGRITY_HASH = 'c27ff608905e0685536fcb2260b0d89f4180647444bcab279bdb6c6e23132186';
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
