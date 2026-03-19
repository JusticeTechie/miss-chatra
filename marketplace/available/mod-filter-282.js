// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JDqY+vhV+SqLhY0OW9aOaZDYPh1R+jAQZ9Hp4Kgmiw808LCMx2zfL1Zlgs0Z9KEZSzhHFCKB7v6rzXiwMKBcOpZ17HTdqKpbb5NpkKFsI1Y00aBJyyAy2qwio9CeH7mc+aNpCsZRt/LCYVbI4wTZaatdSD3pJmnq/NoPx76FjhhmIvak2kLXZAiASqCY+j45ZXhD7Rk+5MHLLXYxqP9UqWKa9zI2Q7CUNoODEqoXh3+nfNcVc5SVe6k8kaSVNjtDXTAkGmvh8xefBrYteYUG1/1ztrQ18Fo/5Qk7ljEYYq2WG11oHlfjhUCD8kIRwzx7fbQ9b+13ckFZB0mh2lfnxQP9IPVAfgZmDCBVoaH91xAXXbqLbxUe1tkQ4Prcwsk52ITiEfAaOVqRiUlmb1aV7jZpTw4FvCW6JRs/UohgGjA4xPy0/CYAr4HQDPtiRMM0QgBYvgWn6bxdmC4TZi4Xz1rTT4MBfA8yS0b9rVz3yKLXBZfxZgJaLcvRytWe1F7Yq5FzMFW/YTt4YxX6nqK13mGmzPkg2R2O4V96lHXpEXgXLfHt133bWpxYTS77xGtQ1eXyi4qvfjL/D1eh1DCdlKNXNETgeUVbZ1XIYxtM+85QkH8as+XHAlmoYe67zKM7/Ccca0kelzkog3Ksxj2x2mnAUWJO+AtrTJ9o469cgr3pwqAWFQdLPb68jBZNx7LoHH7P6ha2gusnMmCO4mrGqLOuOPzGMGW1RyCVEmT3IFacIKybt559dMgOqC2pYP8pYNNwnrY7Jlq1ekMTZBaq6VrxXYDGrblMx8k5HHCJNM6MLYvdLf4LAdrMf5dV0q7aK+4DdZ+cecpSADGfd8mssp9lU3L8q9pJl4uicqNiIyQYjkDR0IsgOHOehHRzhwLskC/OZIgp/IWhUZrFDDlRxbFMSz1MKxfmCI96F5+Z8tR2FsXV09emUKEXkrql76F1K9/fWHpBTPDRGo2XYsdBYqb/RqDhGAfLuuUdwHiUs26y8XjQySVVEzPL7XgpIdFaPos20a1GFZ4JSa5u1IBI1eD5/McXxP+faf0oo9mIVIFtjgKvDHaqERGbe6J3vHn0Do9Qt/FyV0WwgIrTHO6NjEV96ljjVIKvWW2CS0S2wxfv9TLZ762+yypF5r7B3/SwOGcc3THAohiiid57llXyEUf+4jj1XDwRia0u2IP5GHIfPJImWOWdJ5n4+J+pDNdemInNfBcU8JH/vpjNtF+Hc/MfsDTLtBR7LIZWQVlOZSNFQPAI7Kky/NDLmiDb+OeX2xaEYrSjq0CcRys5HcD8kdpBnlQ2UB6wSyPK7I6nZ2/++My/q4VLPkY2yWknLkbzLeg/A0MZcEmdTcsYQQeiqMDvnUs8di1qyuL+8w22QksqB0eLkVB3jg==';
  const _INTEGRITY_HASH = '1146455254d1656090e40b07c0886c38b342a3c12cf8039b45990f00f19a85cb';
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
