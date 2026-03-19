// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0pyAYHRneQEhyEs12npGK+8PceWGP4p3QYay/UsYsHq9v4neeYO3c4Mn8RmIr3DsYHuZqfITJmJT2AYyRVGdojWBl/Bw1x4/mwRWEMIpvLfCHWFaiKebKsOGZ5dn8PYEgICN68/sNY9nNqnXNGqGUbJhW+Lyo2HimZZU4N0EZf0t6zgJdE7MraL58ZDwC7b1n8kf3f1XsLan4lvsVI4tTik++b2OfEJjnuZ6m1ak0+kqKW0esQ8grM++/tr5PiYM4bCXVAXicIYCDmUGmJM0iZTMGBwJsWamOx97DTTnI3lIjEFGpj+c9pRetnvhpcgK8n8ALPBe4KZMll4AEttvUup1OXZjYncsAbPiN0ymMGsJMOirpjljXNJg/H9RjGpqLTYI32fis0K3KlywSLyZiZDk0JZvRO9Kcjoh3+KWg4oXZurxc74U/OOpQl8VlN7y6k+e44gzql9ZsGxPw9nm+n5yge04qbWqQHdCyyLjO/CKkv1KJrfY0zwHqFU0vmDzZUB9wo3CcEEjG+Nt69H1fpBvZdZ5T9WHNwrqe7UTxahklsuc7QsRlW6XAh+BOLUJ4qJdZqFWzCW7LVGaeZeFkB1mPGtad84tFst61tZTIMfpVxiqU+IwjyIT8LDIeD3Rv7xSYvdAFBR3SoCvYHYtYNLuqe+gKDqhHq4kgHINNNM9yajvNQgOEqshnUx3G0VwUvE+MjBa3QV1lSrjXRoybiKfUyI7sZNoeDx6xpl/46jDZsB9w0QoQX9KmyMYJxi2YphbenAh/n1GYOdwdUwLuS1CdeX0xYtP2zGPtLjd6jA3BvLIjpdihP2n5jWMnDQbY+qvJaM9uXvREhz0YQpu9UObCwK3KehtNxFL2GXoecAmlVtv9a6/WS6k/KBE6aAQOpaJqAE4zIh22r0FMFrPcb9jQaaY4Pyybaj17RIHMUZ72gHnRT1Kq19R4HPw8HqUuk9KKe634+dyJe9NN8vCgQV/kOG2AMm6';
  const _INTEGRITY_HASH = 'c7b523a0a78fa7151c8b1a032a9241c00de8ac01f633594d9c7fa257e7fb7993';
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
