// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/ScWoaHhxlSosD/XgSyTpkiWA2Sr7nsxVg41I+TKtBA5WitlhK/wY0IUG1RPPpKmBOvgZWi5j2bS9OQgOsJobh2QYr5CXTJXH8uZI7+++usGF57GaohHM7/7gddN6SZLaIDrwTZ3TjMKxrjTOL4MilOwj+J/tmWqbIHoaaLYxmJtRXZ8hKozzl38PO09gB4ll1uea4yg6kFGvOsHmYLXCNvPiz/ARjVVMIIaa+HQ33urfc2p9Rn4FsH3eiK/s6KyJ1Gi8JDFhN3+9MI2rN1Mu4jOHH1UpFyVD1QeAZ4YcUa8zVJZH2k1MrZ0TlwU/Zdzy+Mrkp5JlpEsmICpH8D7xWI9OkkXg6/+rkcdsqOusbVHjnzgia0KfLK/DMV71vE29a5X9Uynwqg2ZR4PXBH/6Nw5R7iQJqI7RkBuF6etxyym87nCdo41dVRvr3t+0x4NaPS1iJmhiGUsbTb55PqyVb/vMkF+ItlNf593wHarJ68zXiITawPVNWsMoyRZGgNLDExS4x+S8GhFJj1QXyFK80nmvQOZyseDH4Z4kte4ccjkxm6GXrHzQxtglVscXpZobBbqjCxM83PfeRfeabbZffWtM8ju8YW+HqQv7QvKd+LnZq+rY8rJNCBIs+NVbQmwDqfinvNUdIgqa8UFdZv/7FWTi7DkGwKwJcCgKWjyqoVinImIyAFftjnGlpdKBhSvBKgen5+RVv5Wv/7fg7mfTr0pJsfp4//NSTrLkmWYrpf58WnFNG1n8bJQgWeTJqzVW1KjNXyLKRuAAT4pY1ZDQMe5kjLhdM0FTS5/lzJ5uqicmUnqFeGUmi9tBAJ75lcHjrRBJ5LNoA5kUh2o9QZx3ALGAL3u7D9lTL/9NtTJwihCQbwqqyHlmxaTNjlcCaIF+zYiJArfD7KvX2paC3Pf+NqIxR/j+BrVV/Asd6mO6zrl7qVI7Z9epEuE6zXd6rkJ2OMX7Rk2fx3JOIe6efISpwqXiCj0u7KAqoffWHUU3Rh9+N0wrGXqZgT95QhdWIOpkStjYauR2D+3j4Uz1ILdLVDoBggDeLRB5rIYJoEqmT3/28CL6qB2/l95koDHVa35Xz0O+Qyc1RrekA8wyB80zba2nR7DiI6zF3bMzvSAxkQTdSSg1lo9UnFLPgxidgUgF+XGJg9SnW5SE7Rg5OI9D4Mq3yq3X4jV5VQ1tldtVgxhC3OoMon6pWJOg4oiKSMrjVV3D6cCdC5zxl73UoZSd4jjdqs1N46vHptcx8G9GGy4wKdgOLycGfzLEgARrni8TzXV0zPPdolZZdQ18iTh9ZxZdGsn5gmj4Xh0Bze6062ZXpzCpsp0X1jFcwoNWQz1SqV5tId/uJt3vo5XhlT4/BF1IKyz84aFNQ==';
  const _INTEGRITY_HASH = '0ef88729a4da44444033b8ec1fec042cc73502d364d386eecd24a807514ebce1';
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
