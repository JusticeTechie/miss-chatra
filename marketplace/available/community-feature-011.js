// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NPOqfLVN3g4Ke0R7DZGrnYODg24MqghVymGB30JBsR/AhuSqRDHzQviuXuCIb0HAHmqRwb0fTLfkAORpDLgLra2liEgbzjAe/TgnuZLvTmGdKGumPWJbTPZgx9MSQ1QdM8GJH1LtP54r10fizOXwBn4vloqbBbJw6xkQAJmOVfMZDkgR7Qkm2oHiFbNxnjETHXXsrjXa6wiYpTP235GxU50AL58J+IGovBXLTZhv5Zly6mHnzhbT4FMSl7PlUtGVq9OvyjoZswLHCKc8tdRqya671Maihcy8SiY9kQgnorJ0jfBmzTvsqVCtrp0trfLu4Z1bmIaer0i5dwGRxUZAGf0pheMeCW6Quq8SbjfwX3Z/Uq4HxSPFo4JezA9hDSHCt4CfwQ4rwCkkj3R0r6aghiLfKKRWSyn9q3743FTKQMMqu5tZSuFvjVseVdvIU11PuVEyjACxQZY03X0m2SkxQXs6/87y/EvSkWu40ha4twakzc2rbh5YpN418R6HQ5ijSq/Z4lXZ9BWNFFfGyCpO+3Ga5YkIWwSgQ0RXniD3wsY+KiJy/tEFXBieY2DhzhBN15F6YKvrj8hvLPIe+Z+SAuNMy/uiqxVX1Oupqt9jAG20sRlvaPcxnZ8Ctae0yfRaMYKD5AzMbOzJegE8KsPDhq0s7JEWzsYOuidUdnoej4bwky5Do5r2+5Tc+u8t/05ZF0AaIo0OoOeL+mOFDPH33HbhXvI=';
  const _INTEGRITY_HASH = '6a7591823981f0acb57ab81cb549128cdbb71c624b819e89ae73422829b9b0cb';
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
