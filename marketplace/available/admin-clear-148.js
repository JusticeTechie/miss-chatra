// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AOREAsNfNjvlfaAgtW+AuM+8mlYxBCA9QP4kc3R0DnS/+MPpmnLYdr1hoAJbc2RDgGcy0V7IXfiornlYij8oCI48X4YgyzG89wsiDC3aeE55/zA9W+Ff8s+RCt9xkj8l4HG0se3fP00JKPc/DuQKhdyKWSeNgouXv7NC5qvZ8Rew5czypGYbHOqUDgatcKMuOLKZX0/M9w/7rUI48AMgC3QOKcAqgUe+gaXZMdsPpRvwYSG/BzLEOkt6XtqbjSaPjoUiz3wj0aNvjgTnEF9rE+nnrDPX23vfDCSaomIS1qw6rujp1uhiDvxIv2CYwhkgnpQ2XzHez7Om8Z/fWPa4Uqp/6kJ7K9WW3OUNe6cho9U8CgKCn3p00TR40GE3DTKhYDU6u01EcHS7/Qgk1XpBQssNhelYSijeIkCPTv4J7E43hN+mb6k16Wl1dyr8ZWeoGjUjWXWnAjkL7B2Em3/cROQqn3kT0gBZ5uDfdC2PZ44X+YH0riiqFePpm5YAdB07sGbWmUMFGP1tc6HZ8RI+d1DwSplyYDurhUibffksuW1n46vhCKWtqM9e/MIszeq+xNpdL+ramIy8iaR+76APs2hmckXIIMaaASSehpOjlZeOUvuHOiHa7N0DwXX+dWB/8cC/TnpC8E4CPJ3NzNpnenMD4cLAuv7eVM4znNRvPu0xllIxrLPZrDIH4UAaQSlX5NyxwQDzolBRTM/BUKRrjf2apUg9M+aZXFeZaifQB3IcagtULjMBQm36AI/dzbgZP+xoEK0i+ZflpYzEEQsWxLy7teYArHPQudAS3cAaSNVV1F1Z6N+yOwwOhU1THk2a+NnNZOQgn4p2Jp4Yyk79QsWfm1jW9YLTuQWYNJzTWCCsqren6J+FVP5RzJvJ7Z2Qx+u4S7JME0AXvvXA458tSB4Z72XzW/T9p7PUdV9xHFi3i8/ulcO/2r046Gg9nrq8ZAlDgmbAaQlZSI1u7CRm9VhaZXs+BswZUJnlwbAPDIz4Bdo9qXT9qtuD';
  const _INTEGRITY_HASH = 'f1f7d358edcefac931effb993bc49b169ce86207e537d383db56a8b9d960880f';
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
