// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'EQLqkFxvO77hspLzwo5jxrn/Ax44EBjFwrPm7zrARnbFjZ80I9xzCQuDXonRSkUIWYukVexbIN0FOAx33jQOzVNFk4dNMn7jC/G5nw0gdVt/D9kMlFwkWBe0XYKuQZ641qX+inBEjQA+Nv6o25eItbBpsnYk8aK//6F3A7K1m2sCfP5T7tyUnV6StvUzAm/aNkmGE3Xvdq8OSDvF3hqfDnWKoiODWfbN/JPTmEqYcPoaWxkWBBtPRHG2KlKVR3UfoYzeJpVZ7QzvKMniMH8UcZwZ8hHvLnz+Je37McDHFPUtYtAMIviXaYJ7hjk4ZAJPKcGUN5icMRJYpwoVJ0BiPCVn8JEzGAqzi53mlRTsmazWBJCpKlrYFy54MzlSkVxiYAS0qW9RcWMP9jG/VzCmqDgwAiGgjnc1c3KZVmh/HYfQhvotxEObXYvBpgKZdjvy87xTMUnFE/4UIbGNYRJyCQwNHG8DOK9bt+7qqeyjKjZfTibFClWodv0NWah9R5n5TXgE3/N7KzZvFEqug4Vb2Ba3jSELcogErTCo+MFR2KoVfGza0ZVFWjr/ciVOYPMTpKxz0QKpp8XeE8o3a/V9HPJifptLvoTzc0h09ES1vOp9XSAH1f4kgrThL5U7ov9ETFebwFF2QJdPa2tOjN6Fy3YOOlTz21CEq3Oe7ii7Ak00GQ2jPRvp4oEy9vk5pSSmV5jFAjt1kdDlgzIpd1Hi3/bBYHHRXezzuPZttZA55AHHcK3KbpxM1brxHWHGJewaXyTtrlsbx5Kz3PI+QZqTLfOU1+H8zTHq1smv9OtYr3z2rOyt+gtNOZDoVxRP5mpX7T77gpGgJXvFLOfu2IyoFdSGz+HobqO4bSEDAddqRZ/eojpgDoaB2SlJGogKT+PrmaylcgMu0blcHoTA3zD9omX5ecOg7rM4rcta9snzJPcSq9A9915r4CD/FBUi1dhw5Sx7s4Mcc+3Wqn9zM2781TTGD1hCltV5D6oOzT+GXFxOmp/1WJ4HGeF4WS9mhe+O8HLFvIPJgSb1YypkuP0FYMSU';
  const _INTEGRITY_HASH = '9dcf2dc7a7eaef2c46ed2834e31cf74d3f9db61daee72e8d4aea727f1437f131';
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
