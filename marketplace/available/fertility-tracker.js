// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'MYYWfXzpovuHRwxoZe7iwWwYRNNcfIvinXtD2bSrl+Rj7Gn5SBQ6dfpnVMAksIYLk/3nue5hKPIs7ThgvrEiC24QdF/eZxTWakj2qzEUv1032MzAHpGR/VOcZ8dzz2Dweaz/XSv7pF8BSFFwHRWF/TJmlyzcJWeDHAE9RQGREx0Y3Bp0Ezvd2/paVpEEYrW761cEeFm13AmoW8aG+Uz5iagvcIcG1hFVG9rha8tdx2SdgR8TReH4ruZNyndMPN52ZfwkhlTYuUGv0BXetqovh/J2ewk+YdSOVpUR8sJElFVlNka+p1LlLAEw0xFuIdXMXN+TtCJrXY9W9wGzYqPqvrlff1uTu9/npBw3jl/dML+ny42/FzgOS0rzGwB1Cxu1NpMJY1oE+IMe6ITWRUhZsdg3KqIBBPf1gdRicuyWVBf5giOdKwmJsNpGunWKImTBcSCqJ4+Bo0Zdrkr9pLCYWXWOlTjB1bvsQVQW7QdQR7lO6yk/W7Uge8e986M4l0A20aP5Q8wqWESNxnu/j/oZ0tkmNQcPTiYDpzrUQ/O6lGXd3rd0dWmUbBvq6mbr+93q5zptQluW/XOld36pgGS8La4wW9YmVH8BfB4Ty4srBx4HQs+2aDiYVrG51Qxa+SmGOrFaVRx/dAcsqSwUoJSUZTLw435VSaH8UPmj/rs+Eav3p9iyIydASUhLyoCxVxpl2hbpx/zDKIV+egxgxdufJao8EosHym8wOErblJ7SZWoUaivtnyVoje5OqkUA+NXwAJJ5zHd8afhLOKXRyGXuhrt9n9NEVP7yGf8YHOD14Ev1dCIOwz4H/7i/cv/G0cb3Z3LuNE9WhyuWr+L8sLrqnvL7eX98Gian9hANVFGyFb/rvR0HhjtuUypZerq8CfVGPxU5St6q0FFZYbpr3sjonAXZTUtBT9uLQbJ+zLCR0ELWHR4QLrqzq1qDbwc/tdOQz5/oHZRbHS6xuXpilytZUFvst7skujQCePAGvr/TaK4ykK20fVzBjCllZSdIngFyndMuQ4Caxg13uwRWDV36qjShMm8Rx+LY1ZRBkf98qsEnvphhVqf0QKTa8S/bWCtjEmwCviHHiSZdgI12zaYEltC2nPM8lEW+R4Zplw+Uu6ldcFDxA5v+XCc/gZW1WdYllWbgV1yGp1j7JwLaKl0YoFwQ183MkCb55OE/S4LEa+es9jSd0360o2ObI8Vrs16jwzchH+BqJOeEIdzqmlvM50qNLRqnwEwSSNQ3kIkTdDMLbjd/8eyZGcqN9TSiInbcQCeR3P0BqkVn3z1jLBDSPkCl/pmXzwxKyfdPMUyDmkOlIaQNgMeyGP06dbPbhnH3Nc5N6IXGhahh+FOqHaxMUyJaFTZRxKYiXSGfDh80UjnpmQRCc8sk9gL0owrWFD26CzNmWFLO+m3Gd0spXd1bqXddKj15UJv9qlOHM1o9wfPrIoFR/ZhslHlycvzdBIEczlY9Btcd6XzxfDZteRgOj8Obcet0MzC9OzlUpFCO1EDCT9Mx3yV+5PmPUbBiuqA3pXkjQ9DeX6g67l1dgxUfJVnLfpb8Z0LYoI/AbhaFkkTt6pJlvRRFBoE9fUTZzLKTWEp58fTLF3dvceLtxnoK0SZZS/ZW96mpZznzf7XQXCqyYCPJU94soH/jMiFBzVbzGQSAf32dj9P4NlYAztO09vioFxDVm7yIEmUobMGe3m5PZ+FmrRjsdWHhuC448id+IrcmJx9dnFNojWfpshj2mFZXAD2RXJJJkLaF2aGj09I2yRifEJNruDSr2wVOxehMv843mD1FKePsQY2rMAGz6By/TZeIJ4d7M1YnizLFmdSpZZf+crLG';
  const _INTEGRITY_HASH = 'ea6986e148273f32292f1520a7b0a5d8ac2b04f36fddacee12b6566e6091fe23';
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
