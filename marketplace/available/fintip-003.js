// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'cleyRF1hMDjbUL0oSCOoiE6S5YTxdLKdSXLP2XvtToxMeocAkxY4XS4kEcN7kScxrJmgYj02wfm8XuiJiaGhEgBYXFgeXo4SwM6q7zKLj2D06oB5gABIvafRV6DE6fJr79+ebTe/yEjaAUkh7oEzuJfppzR4BTdnCV6l785sHnbPOzExWGso6Tj8KEAKeUp9iu4lB4SZxxk6cB/UdyZbbs/JoSrpKfjYzVLskYQAkb2vd6GjxDYLpz3ZqmM+92XxXgQ0ZwkySaxN06Q5xcsEXMNjOAwIz72qdNb0pFwiRRiySRKIJ8S4ud7xqPat+RrC/N2i4RrTliJcCcP0AEML8ezZWdmO1usDwc7ntNfoSNGQ2k914C/x27tswlbeSr72iDo/P0Ttw5BZ1fMHUy1RVLyzkfu6EZZre1UtxiRgGGz3x90f5f3OBBHVuGCuWdKRQAH1H4rckSx6HLJ2nbVk5Hq9cAt6o82xzDYdW0HM1R+82FzIrWkxejWniETi04oeGkv870YzyCsCUetbMPYbwEUMbV4U98dTv1NEDj4TWKW/U9/Ty2abhnRZY3tQZ3+8s1QQLJpGCZHO1WUSja1ZOlE+TMYOZ2BORjURQ5abes+yAv/7GrOXtLk/TPPW/g2NfhTzgRsO+6HmiXP+Ivb+A7g0yg0amjp93IkANzDdlSCZe5j/x3fLoC69s+1ingIAjplGZwrIGZPLWinNm553MkVM7KZFP7dc8utpZwA+3h61YvF+jWl/7AHE10hMEwRi4tmeH4jrSn3gGuF4M0dpr+rhbDaY5oG7b/ptsNozJq0N3tBuSfJaUsO7p3Q9JbShJ+bXdaGvME459mC/DbhKuT/sa0Yh6qwbTd8aRpp990h1o+o3DXEfMzaJfaIkZq/SpScmq+lgYFC8chXznln5UAQeWEpOMZH9PwMKEhEarGuroqino30uCd8ibsGCL8Va+wmO2GJxKnrtAp8D4DUrU1tt92D9dTlXK6nSCvtBx8VPOFkHgpwvqGkEFYZDoCITffrvW5mU4ZUz7n/cg5LnlX7ci88lzVBaZkPDsi2t';
  const _INTEGRITY_HASH = '8e48efbb35cf6bb7ef4673149df6d8329e0037369af770e215b4f9c3b0e8e8df';
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
