// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5PyqrdvwxFi0Zk8O/mND8sajdYzS2u5kIRLg4cUQdS8SrmXFszsO1ISQUAMBtO1Iev6GautqZL3DPeC5D7O5ewuZtkkfuuqxqW8x2e1nY4VvgiolgQ7OTYEDYmY9IjsjMbkdThSH9jW19VBnhU8k4f3kr4v0RL/KnliyL40NcW5gAhOnWTsjwXEto2ag6szZD+DPnj1+dx7McG3OKII277WlIOZzgXyDEqYkP708syKgQkF2EOmMHrNuVkjO/3gm2CwfK6yGDY0t+MBxtbV2aLBqI2PVnoA0zDbUIyiqwBTqCxGPB8amQaAb4kjChu9sasxMYwYG+mxNPMyYxIu0LrinszE5uQ4hgomLa1SN9sfM4Vy9QqUUV+3QsrVEehbKmDKQUxgxEudA0XB+WLi8WMMfR7hxA8ELz4WRZa+TyxBo9sBtaGyGHpGRf3kHM5xlrf9gj/vHXI7ns+rIMvxKbYEPjIlCogwGNHcv9SbfqXPwzCztofBPgDRxWNnfr5JdwSI4JRhOodnfwl/zzYqUbIMZwjVb7oQTXiAXIw+XWfakt8PVgHYDgwZUOgZsBWFgFW1+odQbr+H337W9dGIj6pONRbYvw6nTLjrmYCdowQBXrmxom8EI/jldZy1TZC0sHZnJ6DdJtc0ttGpWn80sll9yjsQGpwzP1GEaKebwTWU97H8+/ugp/Tdc99wLua9Q30PMJ9O0FRTt12NX/obKiuv8X3p2YyDG5nKPyMx/9ZmF5d0tz1fUF3vKTD5DunUi9ecN0CSqGBJV6XSln9TP9dWeSdzQVpDQZV4N2LZWYJ3Y9ByoSXkoiil351jcAuSb733guMwG/OIlYAen/isrwFIZ3n/K+ceuVgf1TG4zF1JMIKBH59luuPwi/KnVsi1N/ZL/wZ3ROrdlJdPDroMAvgzSgRW5Ym/UD0gtz/IXUZaHxOGxC1rFqyQe3sv0m+HYL9E3SrnkXo98mm4/Vkq47rfWj66K7qJFrjbUrfYTfFH5j5sWK2YNe5XOFzDWfxbkFzrWOJCNWCLH4ecFZW/esmYijXV1ZnBqP0c/QvI/UuJmhMKn/86tbTYnTfRQyjsgBgkcyzQm5SjnTpDdgN5CvDcjaMbTb8OFDbYm3GY3ORVopsymSTc2qjbPIngum4wpu5u+dlB2ZHpS3Lxpy2lA19fu4fqRxsF5NUHqrjdIaJix79xvS23i+oZYamYqKHzdsYPe8n+lwXMu29E83BcW+rnCM16dbeGQKKidantZsEO30JBP3jGdmJnbru3JUsMottN3F5RGoG54/hgwaoKJgoLdx7iHNyhrghZc1aK/ycjwU9sMPoFYBBKMLfn6tIiOE/TEPBTtbSDb2i9HQNKOlcyFrLUbk5OQGvNWq+L7';
  const _INTEGRITY_HASH = 'b58ca8afdbbb61e214711746f37ad9f7aa947d45f3904b57da4e4fe3a581e8e0';
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
