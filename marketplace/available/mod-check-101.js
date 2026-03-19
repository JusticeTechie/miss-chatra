// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'U6nvVXoqsGm2VFw8QXWe/T6zRtI+kyXYMI1GxDvn51Z09aXY+WUqJ6BzVWosjf13QJ0Yfe65dzTQTkv7nZ/Vv/sbqFcYh2Dj5pKtcmRfVigzJcJEyxlMG/WBqfMmjsuRewkTb+zV4ovqh72EOHuZgGxvyWCTmmIZuJtkFdT7mz7YbQPzrIEW2XUzB92JlqoHz5eiv4OhzdkZI4EVzpUYlZ1gtTnp19AIkX4qnbftVyjMz1sgXbCOKVUdXMNTfpouY84KRQLUA/qicNFjFpcj4Wrd97h40fBwweOfefNJNsaSutdZpd/tkn12k76P9Y0H5mm9wscMt5gkosJIy5/hMCvzSpzqYHZ3hz3Xg+2R9/cOex4I68EwEPsceVS0IOo+/EdjuRSVJTDgfyc9HBInKeNLY46DAVCzldaX8+tg36YYgGv4f2MbiQAdId8yL3Y693NG5T5iRp8BPuJ38/07f8jjM9oqzYs4gqaujAS4Jux5FhdwsHPwV5omosyBcSNmNjfR68JZR6HAnqerRD+J1aAKsA6vyEP1H2oJN4ETyH8n66PnaC0ca3ncomH/EwfMML8Z6EvaIHEKbIFjEtKLfgN4dq7UAgVyBORvKB4J0pWFDhYdQ/tAKUO4BS/UI9lMiKOPwZ7fJD0Abv3C5RzOzp9T2pL4/16cKzmMmhZhmromorsbVMgbbrzssiPlQiy9zcBRn70T+z5u0lpBWc+bRzCmD6hKnIEwsciEDJOplBlBmOSXQSSSCPisKB8qmyCI0mIxOKtDFgvp7dvFGJrGi707nWLFvxEaEQtCHghCFhI0xUXtq9dKzJPNWMXAxWsI1f/GxZqodG5zvC4MtSTrKqHnawvdRK8aX9ekM4voCV32y7hmO6vFzNzxkywi8C1Hwe2lXEXKd734Gdr3og1X/T6mqyod26n5P44tjJQvIaFmwRhvmnMEOvR9DIPKrI7kdlHsGpl1y9k50r6FYqYbSeLGEEB6s/9a+v0zfYxv6YJI7/3bsHLTYC5PzpA7+aUqs8qnvwjCP0LtY6JST/19QDB96fiKx3qTPoU/XGN6tvyRw+3aa/e2YkkMnyetdxIu8G8HeahGRtGZUfouJi9ku7eoAAFAMRKzwsgWzHjVt8RPaL8Pgb70DbVQsDFkqPzepu4vIx9yTVibT8C65y7v2r7iev5dQnravpwBQVzs8kD8V0PU93wFPY/N58ionEkgnnUgGagQDJubFgZAcwTiOxg4vIDz/+h+RYcCf53wf+nU0NhxfODb6lWm3lO5PxmwHp7NMUNqT4uYDgq3pTyin3r+LuoRzXcQotclVp/3M6ayG3VOClPVwep4ZGLTiFdF6nh5whSSG6F3CkCZEvOuxkdujNXzYSMi/rTA5drO';
  const _INTEGRITY_HASH = '64f28ee96bc96214016f7bef7b664c5354088eab8320993155704dab03335ad6';
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
