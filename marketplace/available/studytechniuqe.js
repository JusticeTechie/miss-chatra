// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9ZolIOLvHEB/RNU0OfzrwetAj0hPbhWr4uiR7FTJjLx/L9xBt3lB1LTZnBBTJ+LNVqeqCoIsX8tSO0atHLyQZJrGMtF22cRiZIdeaRlwJm9vIIaakuO3ZGD0rSMZwYMzqvYEUVQrL4/iSDJs+rlG7WVxcCRxiMarS3leaJDZ0As4tDwAnjPvui4DyqylLa4DQircZ6kibs89I4zAT61uCUa1gyCakOcw8Bi0U4D8QMU9r7vTm2C3KEbQjL/dBifGodOlGwuz+VcPCdFJrJa6VJwrZWZIt9G2NECKZi7heFC8G2W+t5gf8rfQPhCV7j3JkIWgdxOxq14dSlTlsodi0IiI+/e0qQXq1vO4MITTy8tmq94TlAEHYhQOOKg1EZTQ+gB3NmY8lgilnckOnmAHBWvaKeFW0x3INrnEy98wY3iRbMPgpeQN9wp+2KxVYTXxQzjl/IMmMGIBAa7Kb1v8iEuP4616LWWyk+IDvBmDj+zRcFAUYRQ8CG0rzqeFeAAS8pN7gicbKUMgguCC3f+D6Gn6TCAJy5XPgkjTmxiwtRrvUM8zv1POzBxelNWnlZQVnzWrPFbCN6UuwA9d5B6ZC3aBgcsaAe+DT1aiadLD0Z2mfS+V3UEwd9oFKtgqTnS2M7/N7ImXXDSNBuDhDVW9lAezGq/8k3InDo2qt74D9Hkph+NPuLqMtPuq/bKrzp8oWJEIeEx0XuxEvWaoM1sc93k9tHviaAYrnkd68iSRflCrK1qezrY2B8EySDVXA0CraVvHUG3UCmxFF0MFH2HsTtAZiJMAt8Ijr+kbFpr0jkAa6cxGTpGKQ651xzbvmvM/CE+7tNcF0bOhKCiCN/z+xqtOvbHiMKlbyj4EpTebivsiQGmw1WVTJwfrxySm+eG2gFTpmZ9ipxNcvGHSH4KiHXX9YXoRf4empeu56NhgyrxRmMJU0vJiiqWdSIHr+Vz6mmvb4Uze8/PWnWmEBBSDphByBSjy0w3SVdYbin/m2Q4vtPvkLT+Y6lb6xOtbevf9zAwWgOmBv/I5VWViwcKpyjtvAO6t+j100cV5blMsv1XkcCB0YjNBlWjWDnGSW7ryOaS2Jf2U4+jEydp4Q4BHd2Jcwo4/uijF8FwZ6xVdUH2QopGMGE2ftKbadUcxLXv75sXmEmYJ3AW0YdUAmPPgjg+4/Jp7fPiMwQZm6ONt6Ti6nnR32mMBrAzsUxTm1M34YXriCZcB1ZAyaDhY';
  const _INTEGRITY_HASH = '995a22a5107d44490dd52146a7fd85081b1318ab1569a6ac94eb5ae5c33cdfc5';
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
