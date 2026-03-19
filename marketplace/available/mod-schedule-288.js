// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'oEZ+/4bn+9yK6/pTN+0bVLHmQ0mf768k0ztmFITKW139vmoJHl0Yx2l+x9GFTO8dLiRWdWpZJIk9tx1d+N3rVQ38x5s9mqkZT4bgdppDNZwcXqK/IVkpLDHxAKxdo+ksOF84FL/8Ip+NRRHuAHpqwptdRPByxMp+DML9cPx5hnM1AkazHMce2OdcqHBk3+SkUSeDG2zK6DW0IyQwDDxSWWTm+7qw6pBe5s+CrzkJH4mbqBZF2uecinADhiNtzoMI3zoW0xZzKgpuecqgFJ1ChRamxS6wUKo+Z062Ued1N+rcorXUWIxylipy01CleOH+TgxSuhTyG24X2zpsa5kXvI9vCzGEg2e5tqyycKWg2v91hrRQBe3KFmV6gSMHZ2UFNPbp8UKrMsr2HT6PIwLtxY3nKKL5LwWKh5YngudGhELD9CM/MfImcRHFA0NRJbx4nDkBYv8oUwdB3/kHVuEUlH33uN4Xi3YmkB/QNcNIosv9B2whFqkQD+UpJwxHXTDWHv4/O5mdP7DrlNmZUh/1T3RndMiNv7eDAfZKHv1pI0yDeDvVT6SWpJqLsxtWXzotFwvqiiZDlpn4cATn2QbJgxj/talmphjGGRHl9qcncrA5i5QvZnZt1o0uIVPHMs3SVJjBqN6IVLLM83nbJNuC6DdVYDv5sHfmDcQ161npCC4RD9Dr7vwvvukjXMT8+IlHlKY0/LqG/LR28JRwiwKz7LsDj9A5SZ0s7gbPUwdPZamcv+eVzu0VZN6hL4m/eClu6O1KuGHrzbJynVcsDsVIqRMVr6et8Kzl8KkmXM7srTB6oM7K3ofqre0vOPVs/+Nyhwg9lKBEGkp+wkHyUi2qr28kH1je2WJB0NmS3gNmwgXzLOc4dw8zPklZivXxKnhbv/ljqH3Z1bn1isD3NleoNA72Awwwd0iJCPjfnN5jih89Gm+7He1KeQZX5o+OTUQWiCRuANTkbEV+MMYDYdnUgjq18upRpe0LpswEl96YPMddTz4MUDlar+fwFbJrfkEt69vVBSxBMvk6aFLxBp0iR5M9KO6Sx5mK+ZMX1V5E+zhgYCKzZAe65Cy4OfAQoAMzJTUIQr11mvfSnQIFQZhyHF0nqnXYn0s1TOMVs5tHwcSET/MiT9LwhEmHP1IH/AqweU/Gn1+qob8oelaNMcASyjZ4ZZI006ACt31/iMh8X8WzkCgOhjqwi7kxLAx7ANGJnyvvmdNpQyGuwdsmA9Bs3NHzQKg5eTObXR5AfZq4pHFfnjKwYY+YYpxQPU20l/ZWTBYZ1xBmgFDEOkGyHK8NpYIugUzxT1EvBNK8GjnRry7txF1yXdvCRDIMMpMOaphrHiTmnIs7InXqoYbgPWoT2Z+HQ4k8F+TvRe0oENWOep4lLQ899UM7oyn6KXfJlqjcUhhg8fAKt4O9eoG5';
  const _INTEGRITY_HASH = '077d9a51f74a12f1385b995509a41c735697238d030900a5b6cf7d21ef9b877e';
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
