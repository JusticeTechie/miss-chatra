// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aJez4Q9mag9yrD/k5St+Do+1QjKFgI/CT2Th4q9aAXoLXf5sJWfyLa0np/juKe8ZqeS5eWrgvukKNh2fYoTKwKwGAsrkCTQBNDcv4LRQb3ZgbQzYIk8Ty+HoWY6ffazYF85vSWSy4VytyjGcHoBQjJt7fffL4T8EPulr17WMd/0W5Qp+/NJ3scIVYNZwal/CNz2x9277XZhNYcTZDaOMa2BsAAXvzvh1jycBW7HWgQ7GHIyx+hrHN3JoFd4PxnWJC6UUShkLbTBtt0mYEvDGtEA/HslZbjjXPq9V1cgxYRqxzaxBU1G0V/KULEmdnu2uqpKfFod6qrXnkraB/IaSMeJxRAz4+oogGHGBo4AZWxF5daxpag58H6X5BXOb/rHJqywrwEs4RNRMZVjQCkkTdnzyRehPdYpWZUw1c7JWNw98YnvmIEFxcd2q0SePicPEJpVGodUWoXdf/VrCz0nlyge4JtbX0ErmupUrzUgSSDyyypvLZdgYpzoy6Y3QkOBP9nAxGOC4qQSvlMQxFBWV4TUgd8mEcBOcW7enQY3u5peJGeRiPWt5ByDKxaDld9jDSPmgguXx/Cn6tIDMqQOMZV4QxpyPhs0ZULics63MgInMpI4MvDba52o2ndjGX0xRyNHrKPi4D027dYwgPYHs0pp7VJEP1In/V9XdNkCINgglOFZC2xRl54H/sV4uYOUCvbVpifrGdFyzpCfJbLHnJd/yqBxTPspSuFFH0Bseu3w7KryYadt7K4LtxDAizu+NhfJEzDMX16crMNkkhgU6gkVV+OJVziSdAyOFDKJH6yhFFOAtBJ1VlmIA5xQNXyZal0WBgyuZYUACYtxuLFo=';
  const _INTEGRITY_HASH = 'bcd691b18d3b8e8f793b83542aaa36c99bfb1c6f295489e4ea05d9ab2a52218e';
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
