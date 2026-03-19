// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'MHzKbcWpnXyCpOni2PD9/VmKBO5E/PjDToAFvNQkJvZSeFRJaHNj8Cp7axaKgO1EkzM5piybOVpM9LQxNzoIXOtGTs/uCksn56V5Baz2gj4oSNk56D7Wp/Ss2Nw+qmhBSdUig61K30B4JgPxCKGQnQlzJAXh1ArzFqJO/fMt+XLesZqAjfP9TQ7MwUI76MdMd9qmTj56gABHgUKKdpYH7sMNaMyOsRgOaudit4oUB61xo8TUgfRVmOO1r74EKjYpvlnod4H6l6U1EvlQwOeypDzraiyEK2H5tin79f7d686k+ZPcQL+GnYQNjCFVa9zV8THPfXkEmoziLV+Ap5tcsCVb3JAAtoH5Rou5vVO5NJlF2lXsmCwoQ1tG80Inv8RGCFP99YRzqYuSM/i1OqC7LYLEtIBxuglhc1Gz2yFmI6HlxM6R7OuoFrvUwn1vSesSti+VMiwGEeMlkv3DynE1BLP8Rv1z71ixD4jKuVwFHwPoJT2eY4FP4GgsxxrRQRPmQZeiYIfQJzAZwczxHaMeXr7CNUPriBbuOjteYZsHc49N2eRH8NgPyh1DzRqWTi0cZScGmIg6n84TxuxkyF+lPn98NPUXy5xZheCspgl56wRJ7dledHSULqbP03A9H9xiVELghm/LrxYBTC1VbBUCyE5gBhSaEvhidMTi0BnCtKTc8bfZuqRDWJOu9oF9mcP2QXdX2hEyIS/b/A/6/zUPE6shEkjZo6hC';
  const _INTEGRITY_HASH = '0d4c8d8cce97deea2c19c747dd9c45834cee3a0449e7878bd88d6a248f05a6a3';
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
