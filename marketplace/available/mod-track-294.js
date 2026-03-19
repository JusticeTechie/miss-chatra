// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xX3ZadnYNziL4LREBhsW9tF+ucmV4lDy0S6BCBAnqFJUQxKExdOazuJxluOSaFjAnsVhyGsIOQTfb7vId5noHS1kqfPY6IlhAk9l0rutujiKizRjey8I1W+t7O0snz39nuo7uOeFYLExLV/RpoNjV47uXaRy6BcDAsQnHpbJI86uey21TkprF+G5mnnGv453/aLcL480XBDeileLrbzQvXLZ+jpqNsrfDHoYb0YyO/D36Pfc8o89qkKsG1jBL2dFeslQlQhirfl0OEu6oH84kWAqeukjFihAKKooV8gihDpyD91/0wj/baqeeKOUsxu0Rki0rR82cwY46X3gPqW8F8c5PkWkmLYqvpq5X0GM6JfmU8+gVbfDbJ98ALRTAHu8h+f3NxNS0ow+ILJM88sAnkPq7IETqJUSZAhSFcO3ksxv+tZGPxlmhjEH/xQA6iL+0c5iR41LosZRfOvSHFLC7BypuR/t+vP/RGyxdSHC1U/LHRfTQ5Tfmoid8JeEoliXdkSXWnBfiFoYX6/lWEwXlXxJAI8SWBQvY8AeTuWE/d9HB6PPkxMhemnogOGxuKd0OLDsqHZ5CD6uQlE5aC3JQixeB9YU9/BmB0htyFtqvE0aLu6HyyIgMEwBGVMDDGlHb+EBDcWMJUP7viRMqw0xYkgeAreaktQqQuT0cZncwiX4BEZRuI+Mo1XmRuobW9awj2P4M0GdBku6VyTdFFLtR/iAga4a+uFysq5Rc4+tIKtf8DXB17oLpptbMzgnyJmJ2kWTcNmS9W/Uf3hDhVsQ94qij06FJnVcCVCckxNN+ULx+Uq0f2LXkt1V+kATp033PbU6KQe5jtYVpGeesyTP2VPFtKLfQkTDDDIblrWv49qyLZkoPiPg6bOGnyveT9tFwoQKb3hs9F1xpSb53DS2A115ejOH2U7PXoqp94//gUnavtfNfthdS+xHd9LEXF8asaiBhYWbArS6Y2lLzUgZWLXZACejzUu3pzGN/IzPUz8L7vd8rAdy3GDOkEEEum/N9ta9gTDWshfVj110DkhkXhKY7FD1HdYpW88ckNq5BlBJtZiZyqTBRX9iUJlHGFTwtmTXqE5HwnO5wLuUXqZZuAesuFw8+JkCUkW0yHJhtaml7juAJ8qqHjvUXjGjHxP6LDFO0rxvI7vIIILoVb6IIynvxQRc5OwB6JWOmxrdfR2Xw+xRcavWxYP4MtBpyd+e3X8sCORmA4rIg87K0drIboR4C5FNjexVOCBvTdVdmprjIrL6wErCoVEUFpzba176095FCRhBwwAYfM7KBn7bOuqvYxaFsY4xBoFW6oDDe6gP1j6kid8p+QXzmh86yPnzQafWO/B5XKMQbw9PApdwDpUi31XEsGQ0ILL17Spp';
  const _INTEGRITY_HASH = '4501ab35297153ed3f36a6a3dda711409259825033b9bc134571a2c4b89a5972';
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
