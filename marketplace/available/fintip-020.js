// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WXsJSpj2oLf/tMwARdItiXbms2XYQwMY6xxu+mxVqs6R2fl2pd7PjOog/4sDaI8oPmSnK58d6wo0ZDEdF/gj5P0Das2P9oCKXEGn2GgKDbyVELqhhZYwInQGw42kANW/9gzav9yo8bZMAgmpUEiXwvr7ZfXDVvR+YZpMPoXkrmfEIcxzkudg8KodAF4eLaKvx3YDKKjRxkp9HRYMCypJDYiHryWMZLzJNVYEJFRCBgxaDYyCuz6yAMK4RmJj2+iucnYB0fqRTpRY3yPJL/ZZI6zDjO+l4lNAkOo8QCBMCjGHKkRTybcRbvMWgHjoJzp+su+IvdUUHg5jN+iR1nGLY1pFMKwOHU5ozqlvyT4fjmerARv9FqYw/97dNiyOHxW20MrMrh0BEIX20ChfY8v52z9nYzGcDELy/CM9HmB+FCGj4W40gP+Is1XyonqTsmD1QKEoE2Sn9Q4cWlxxpDzN2YpIyslwZFkcd6bSPYhmfiKHb92Uxch4hQHvvxJkesbDrF1wsaOoYho5zvH9dSHKF3jJUPgEvpnZO2NEOQ+WCnesy2+kkfC3gD2NnC4yMwHlb369ypUyjtGiV9Ho+BFgXSJMP051pXLYh0fgATT4/EpVSk1TdRWxOp01qm+/G6Ky9Abnrgq+xQBKlyE3lYzEJjSVIF/wILDts7xtc7LlGkRavRTw2C+ctnq73+yxDugLo6ONv1wwrM6iMP0epgSbHNsmCPg0mlVDZGh5YpSsT/l09qtcCHUFA+Np/wLWbrpLuipD5Jqzwy5LsGkcJB8m2NGlQTVqRZwvuPdbyiI5MVk4qTKdQvpEELDQo7AHD+mxUMm0QJ+BYX2qhpUWVc/O+u6G21iixiYtfJoaWEOxiwkSP9b+wrJp1B/HUFeObP3kOzL87ZJAZSraZ54MnTErKi+G4VUximc5roEEMGh8kfJrUXCg/ITAQbBMm6yk4ox4h9H+6v98AcOK/qBdkZLC2ijjBPgm/wfHmMvp0A5TcpDd9vnEbK0Ojq6rBoBbWnv/7/RmW0kHPtrg0NFKxwXPWzx1iNdPAIxcjf519t/908Enbg==';
  const _INTEGRITY_HASH = '0ab543dff0ac648cce1faf704923c2c08731f36ca32976eed4e1cbfcb6ea580a';
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
