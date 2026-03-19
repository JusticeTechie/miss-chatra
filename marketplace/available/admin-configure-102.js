// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'lYuTcdIBmsF/XPnugPlCYO6ri/dZD/uNyaIoCk2VLgRvgvAKX5SspkJJQQfr6KnvPC7iUbT3bkySYgVtUPXMKTxaYM0WHyvMbZnDLv/2iPQFUt5d+zEBec7YgfN0C8Qq0XL1npIMkfZXR0FCNzZhT8qi+hfKRr2hPg+RtzUZ9rVDNkWLyh8g53Uhhkr7yUXqMYeY7SAkvIht0QJ5dVWB0U9uFwn1Z5tCJeTsWIe5LBpRM+P4lhhrzBDNufZ+iDtAlvyKiOQbjp2l7JtLBR+P2Mtyc8+hISicfk4AGG8LX6XEhBhF7StDiJxMXNxZ6UwqknSYXzUssubvJVH+XYIHyVGpqT9eK4VdkK/cJNUVe2t8KkKw8A9paGAEQM9nGSJXzAMwKvR4ywsKQI7Z9EXPUEt557pcfIpISbSFkv1ChlcxYAfXy7bNtbtmQSXfcjso6oenYMFWc8OtMohHnHafWX40c6kYh8PEYOsd3MwSyZfOr4gbwdPSTfahbTbcNLvwb2f7rCJHx/v+0rqZzg7A2QCA6IGhXJeisrp0oX2XYbJA2P+Lztp/47cojFIHvdiCCU1hSBz1oiP8T0H2ihAWMJQXGRLa+T7Z2CS1RMxMcwXYLgukPYDKJleh+KnaZKPDjWcE33gMo4HJrfo4xicxBRo8E2UlIjNTZGuG2gZxS8GLxhkq8gnp7jw9d3Rp0DJ+RmXfngap8fqZ1wTvb9RncdVWXzbDh2YCisR2rtKuhM1qKmGHvSJVtVLQrHOPH8bqnHwspu4uh06kQKIxDg2I4tyXBjVVc4RMjjpL3chuzAivC0bq3+EMeusPnbPLiqQkrrYLZsckkezjuH505BPf8fEo9I4DeSCiqZR+Edf19y3D5KSh7hVn09WSkgi1SZJ1CVJ7XPqoVNuo3w1ECX6yyZ+iugnXrp4+8vQT4dSiHS4Ep6x4Tp7BqsUgsOjNWIku1f+JxqMa3KMbUXe0o545zXCDgyjIc45LWdfGIDGPX9i04dGL6dSmfaUVu8fwkpNwg9VeCpGyEn9u7nblkzE+FwWmljbyiQ==';
  const _INTEGRITY_HASH = 'e1204399d9a6f3ff9bab7610fea7f1d02691d768c337721d1681170f823cf697';
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
