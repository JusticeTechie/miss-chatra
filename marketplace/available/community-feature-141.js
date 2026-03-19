// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kGyUZz8SXw8jIKiCAY2iHQO6NNRZSy7oswaRfQg3oANvy1tbD+jq+RDI0ku/Tds7EikWyBqCgR57hoiJMreF6Hxuu9qNwgenFS+ZKx1o3QqTrp+s+yz+NBchsRjx6uxKYyb78VTqydspd/ZxqkAL2slezdYfGXY0YRXjNDW0bpjVv/FXbaIApz7B9oceTAKY5CgHvsb4zJpemyp+QSRi8ewfX3I4Gh7CegOfJp2JnPmFc/KOJ4ru5g1pjImhu0WkXWTHpz5Ga1zbRsp7+q07ufxb/rWI0d62EB/u/2u8tD+msx/ihB7gRmlO96XsnAdOiRlIe11P8bJs/JIXUmYudH/sBf69O8DQSS6eA32A89ylKQ1+lpVLrHIfxSRSnsiLCs4gMz/4JuhYWWvz/+pONGqZJNd8jsWvuKH81CtYMu7jeFuQ4rCR19IsthqXVPay54TDAL43cayBhpxva+mxcW6VQoA7T9MvxscWCj5I9nwNK9UvCPF5sPLU9z7IKHkM1wWlr/n25sNSccvvp6X4YaRtVVns2h7QnLGQj388yaGgWlkrOZvDxI2A/wKSH4qWwuTNj0thelZNxaJeIHDcq4aWNyuuodfNKBm+uGZRcF83KvSmeKHT+5odj/YWhBIir27GSTMBFFquxYjxWslsG656b+cHWCPBgYP2534twip331pIoHp52v24odML6UqRW9l9YNANFUz0FxwR/k44X8wpIbe6kO+S';
  const _INTEGRITY_HASH = '66927be275f9eb878a488cb45f7056966d26d4442db0d22fb11acc8d5f1bbb7f';
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
