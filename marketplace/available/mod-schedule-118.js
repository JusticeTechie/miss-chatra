// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'dJgY4tZ9kKeBq8W+t/iX01wi8PeDhXcEitnoYHTqJBqQc/qzsMS7zjp7wlD4Fmy6iu5ax0yIGvm5OYs2ymTb/N74EQzx3C0q2IbumBRlKB23bJLhiI/CgT9eccs8R+T516wH2nwnCj5eyBOyS2uejNiLEZQamQzUvN8ERDBLnuyae/D6shy46DoFHPWQwsBQMrNaDgsnFHn/Ujia9QZodKddvRYlOj3Ft1IqxDgvHOPXmJRd9oVjZ1bPiUOsO0ADmoZPuBRcXq9J6WNzL3EobyS+KB7fntXY8lblA/mpNGgvUVuGCgvL4gdsTYqtEo7C15uXgpwpvMU00PvWumVFMcCg15wptvJc4OQX40/qH00WYAhHP9pt94jq4ly8cRFW2Je7wiHxao7594AKCz5JtCJ4dBlISdxUqgw23BYUJdN6q0osnYcaYWbxbnZPSWtGhTLEEfGF5inDqCe19EYTSMsdqTZDVahyLH90ZtfR5vOr//kcgSala693BY6bAOV/NksoG9HB4J7IoaTvNbbqeA3TcdE7xAvWmLtMhzNDG8eY/eWEqSXDubTwV0QZQ8ZbZO5cjdr+KCVbND+elBD4d1x4DeHJzztsgIbhpkO+L2fFtXU4p57eWV0ZsKCxlG8xQr5mau+xJCRt/rOuO1X/dAoHSLJ+qrvuJDG16S5e3ho2uCS2a7P3yqVP8ZQmf2EPKNzAYYJiL5u0iaJLs20ZE6rb1IgETvntCsVdebtg/KqYuayTpYS8oCQoxcJbiGfJI4gb28AWGywWGOwfP6CJpGvT8iflTEqLg5+5ZHO1CQo9Nh/y8Tbre2xyJumra24OFoo9NqMZ1zgI0Ypsia7aUyzCPFnLwy2e3ax7MoqzV7q+ftNB0J4XR2oH4pvtLl3Hr4EPW9uohbG6aM5ehLF6NRgeQ+bYcMEFGx7UpIPQaHqpZNmb5Srss7wgnHKanUhYe0JNh/rxf8SAMS8e+5jszGrl3zBFaxNcEe+12oV46I6G1sH3CnCJjsB8yrm022A3fkreK4FtZp7b2+FcXaYKcgqhcBiQkB0d09ucnZx/hIbY/Z+DdlFsUJIWFybgdBLnDvwjKHmLK2o35ID9702701jB488Z3XfKaxhWbPpTP623q6BiWlztZgwLtzuIGia4hgkVxzr7dDaYfPJw9oW3EeqL4GFxgJNKM05r5zTROJ7VYyLipTOqQiPa3/VlhNf1phrjz9Qzeab7KyVCUfGotGc1Fpv4sLbDy1tCkMsYBfqcfz5B4MEcE7n7XoTSvqx5k84nzD+kANfmxypTs5amQ13HA3cYaxeiK3koRhSPm5PpgsZPtdm0zs+VU2XY8fJSVu6M5nAFvcLXajxMh/oDh7nHKSyEn4Kl3k8WeH6eBEVyJsNTszBXTo4V1vWyWdo0SpdnJNv290v60QZf';
  const _INTEGRITY_HASH = 'd43f342ad4893b75238f07459fbbf15c370e4f91732cb27e1222703800859342';
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
