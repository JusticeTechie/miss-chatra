// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WFeYEsUr6Z5Mo7ictbf3nh+fxhMoOZA3RsPden1WZc4/bIZCU0RM3stUIg8wCtdA9eySW5/MMatAvfC8S1RqXA48xTYwGkTfa1XGFxkBqN7o5KK8Bw0xJkE0kXUoMpK5QgOuIsvH1gnyG4yMl8gocVmRxRcOktp7ThXObcouxH03bAmS/PjLI8vQ5QidbWek3jCSQqF1d5arLNuySAoHfrQ35BjL2DWMXw8jXnPjZmpiUAEKueFMeJBtfj/tP8fda+7VhskRC7uoHYY4Q+jaLDUzAa4N4avHf09bNoGfAg1sMZ+nrlO/2S8R2VVmwiCfleLkJzGTtHyImE5bDisSfDelF9V4KiXjRWD4601eEOchbWfNbpVczUCkYcE9+Bnz9sXeW9z7xOvv3qKUUdw3iM43fwcEXa0DCIndtPR+EsAc3Mn+0wbBCFXl9CSSH8xuOBHtyJveEvzFB+PPfIwKdkR/cpcrcLVVQOTkXiDn17RmjBNYpfyzZbVM33yz3E+BnGkvf/MBfGidZU0hXvfNVgejXSsnJwmXd7KrFAG7BCvaTpsYsK5WpeYHoeB8GNrKgOCbBh8j0vtw+ab9LdIIuXM/XyYuSrr+dEVJvN9jiaNEK5GXrNm/wNnB1QFbeLrMpnExnizkWDg9VbjktiBAg4x/AUxVc5WkzG1mbR7n82Ha/nAHyq58/yGtqyciUk7IUGHiDBU+xek4hZk=';
  const _INTEGRITY_HASH = '3a54d8a4cad19582a9cb6190a77405384da2868ccc629a4b67fd1e0d5cd14673';
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
