// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fpQZ969opK25AYhWi6ip6W4ytocSqG/pBm7sEANnEE4bNUBUIdAagusCxkaIbTqqo7b3YqdLYR+H5jwhFm3qLsa2wN8NQDbK3dud0TmwIsL9QohMHHwz08S6S5nfZWLBKSZCUhquOTwWKcrNHAwErGZ/uZdCy8e/44RXqJPmDes0/QNDJQp3CKUrFb2rY1Q1FqnQXAbtgkhwIfxJado33QaCSzgXzjXfYRO8B+FS+iMBiLv0mAeZ9botykjYtNQ965ZoDu1lpd9XWpu8J+Klv6l0lv2vWGgENaKTpt33oghs62BA+tojRYOhz/DuIqIMTnmE3GTwHtr/T6iXpCZooG6ypwl7CLk/ACkUWU7YYrXEmGSHMjeBpW5FvlX7DJ0YskhrwQnb61xA735LEC3FKDlz9Pi6k7Jb0T0X2XGyWRyTH3poVkFiL7fdgTK7QXpIJkMWeYD5NSj3ypU1k4tBYi3kS4gZhB2jw1Di+9Q/LRbvCd7rjwhAIWsS0RkLiy13EHKy3IUiMvNSFC/lQdKVMgfsRzfvAyxPRxqCamYs0Gh5ai8aNtWNeKVGzC2QoUYriHPCA1FPO0Ui2WIwuXLgTUSwy0LVoMAkYMVTPXtaOV90za7itRTmyvoPjy7Je1j7uZqrCNs4fuR76NC55uUF0qN2VmTWrQe7/EHQMM3ljkUeHTxCMIFg/ztHL5wGdMVckXmpNpT/1QxU/SJQ41nS3gl9aoyneuFtzvFbIamOtkVrbILjG/F4/yDG3q3A8t04NeDOZhYwcqkceHNvjPAE+P4NWgqlF+az1Slut0qySi3ifhLzBc1nQsG1/KMnAQnldPiMyJ1oSvEXqgsudBuKFSZlfL07HSPFKjMf1/84KK+d1cVUd9ZJZq70E5KFqhl5/ASo9+ibI4EjJnwpJn482tDUbRhqvO3ffWu1GnCdtexeqq7gR0D+b/ffrqWfNu6toqeLk3igBgcLTHdJEzFx3gwhHhOrUTxDJBqP0uIP896oFD6e/jBt8jy81WCkIMb9oSBde2WoFXigO1JgT7QS8E3ZMzb5/SCmcRUEnDJU';
  const _INTEGRITY_HASH = 'b93837d777847293020663a88dbca6972c90e82a72b703f2843e03f5a613c921';
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
