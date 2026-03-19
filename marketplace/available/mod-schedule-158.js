// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2HxV0EokPZtZhWEpbuluii9+U1i8cHMOF9/t/ebnEQWU4LOoo3+UiUNEeUZT6uraM4wXDKST4ZrTUDaXKOxN8DG5HO/Dlx6vmIPmsGfXW28/Ko5MkiCMgP/pZ/fHrYaRepksXm7oVG5kC8eUKuHYdRosCS8Hfvhe0dJTf7gi4zrJXz4xIkRw9W/fDtyoOsU/mmd6XkD3YfoVIYKa/zb2f1kOin9cqA54CgA7adbF0o3lFzLZdLX/xHgUs9po0gHy+6ZaoQq5/bsbuxDgR9ljU+0qY2Ep4WzsVfufdqPNGJv0xclpYEIWs47N9xmDLRtiP6b3h5j0Yy8omsLWdvAtY06VOEVMEhWNK5WzThydlx7hknE079OyWo1fDnXmd457RyT7OIPsaAHj+7vZ+AzX/9/gB/rJ/QnjI3bDxllvl4789YACGluADV1H6bTfwSFFJQdPdYhfom/31shBC2m9BuilG8VPV/cBwR6nY96nOuZbuA1beQm6yoGQ4XHIms0ceujO9Yj5TvPAGnDquewOs0lhuef+TwvEcALPH2LLAI7S7sEagFK2hSHV5e2UNOeq0QErD/g2gh9X9aPqTliBHFDIO9zAluVeCrv9K13GHsrOhDw/BRwimPuX7spIrGCkMUbCIPAELGYetMIRLXjJrCtLPDsdtITH6QUdPG9DGegHPeZWfClo5CopqtunHGpf3bqXW01Tr3cnqibCxMRglY2nM7kAHdMuOD1F+++JJqe2iYc061pmmfgVG4IfP7M9ZkvZVY98SFeUG1GVw4/OMEotfBQ3SwNojA/uOyTmLH/3M3ra/X+AGmbMscBl46+UkxjWJs+CpKrPDpz+H/GBdUaZoXYHVmP46gmcjOrmJhG19lwon3OzYE+9j2C20uyQENx06Fqb1cKg1e0aorTKm2BOQUjLJRpmvf/pIU5nX3VNwwCftQiGbEiz2RG0VlJvlMJhDeQvy4s2fQkSGG82VESAn+dI/k/yH2rgcdrOaolvF9y3AGCtkk2Ym0ax6uAgqHdcGvnH1DQlaCjjfX3R0OfGh7X50qPKSkE07qWTp2SsGCcY3faUsMkUP3MnPwOD9691K1P282HFfsSQ9yi+3Oz3jIDQxCtkNuAgsjQdG9db+AcBhRD9YNDfCyt/S4ZEORhCy4zI7ykcDJaNBfWi9IRf8Dg4MVYfFD8QaneOaIM3/ob7CJFk95kCBbKu3WqnFYLGrI0cN9ZW2VGXf2WnAUer5ya2BszhCKG2ZxRg1fI3NFvaHrTc3VlAVfgF6juv064R11QVQ2w5ALi53iaai5pIg3TBtscwGTmjjnmvGK/TgeMU1OcJpwJ0d9DPziAWty1rrStAt0h0kZRcGBBukQ8XAwoRRI3LRAcDJWNbUIPQMvTVpqSzQJ4yE0kOVlxEftN2vYXqng4rQq3R';
  const _INTEGRITY_HASH = '352b20a86a29cb4d4495f26a959e3dfd8fecbe4d995633b6e377e197cff8b7db';
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
