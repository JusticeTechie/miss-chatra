// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5djR/udaZcoGzAwWtLM0Ps/h5utymQlOpCgSd5mgk2ZKVPwpIqfT8l01Sn6MLstfIUhWRHCJWE3dvpAjBibuF1TVs92YX+Y+X1HBbo7gCppOQWG3l7rnxEasbFdIgQ5xaLFUeO+SidKAV33YCHMjyHUeUfW/cgoK4+ykyw98IHgd4VeOxqsWIBDjsa09dmMWfnKzLcE4StEu6VdW4mHxYniA11uJLlzhTq6zFXpSmoRPJSn9yWxTgqx6aL8pRiaatOLiQBd6uClJD51Zi+A90Bu0FQyVNUjBC1qNvkqdoZWSw7t/X0T2hNObe98oUTRqYwXglxdZr/sY0Tle6kfN7yeqrduV8bF1GfBgjjkOvIDyA3BU632yWrgfpGz4DuKdh5ZgPlxCkVS05yWYlCvpdRUOsduzQsf1i0ctgZFZZqHfsL4vR+YHeLP2/dZGU13IQoGzrwctan/s+N+uJd4q0QPB8E3k9IR90/Ahld4E1HUpxJCcRVw4nOWfBqc4Qx32tbGXe2wgvfTmreQw0MNblS8aqQuQ0TbEuHLxlr9Lrf7o49nmIudzv9HEXcbIhBjGmOoQklzM5Hcisek//2vYA1bx+rd229tcNgwTKE/WNNol1d+y244qCOCWDVwQRrW1r4FDHkRZXeUyeNb470prGXUX72SwbHvAbTcaWuKm9oHbNnxbskkzObxeMNsCUoUdsGD5ypCGYA/1o79EYELSESHqp/By1EfrUUeiBCXQmK+EJPxYcq4/eIcUYsNZO9CJIUUjH/90gsv1hlmp6zdltU0HiNZapNT1FG89nnpKwusIwrYds2L4RQbDGxGpjq/2ml/tQefHeNth2K08M8pHChepSrZ60Vz4RO9B5PbsRy2lvtiTqOOo9W6l50xuCTCatz2cbnxhIE/dbgOU25tiL90RY2GNttv/44Wn9WV+NFR00/lCP+6Ll5wQiNxaNW94wG5dHDFqIQB4SiSyIgqvM7TIcy/gZAI9B4zFZ4pfcIJuX+tidgMNtF/oS65q43vCVfee1+Ey1uhvn3mfrmJPd0Vepge+TUNKvs/p2A0PoT42lWswvcR4WZJC3utD5RAeA7F+R1CzlawDeanJuS9N1wWbjTFvpZdcOIBe33VZx5slsiMYD+a79ZSrITcNmHt5B7w+q/rhA4f8x9jCv28qIogM/1LHoxNcs8Hq15YG/XoVrzpvQd0zXqX2d4SeZea6Mgh/9tm3SxDVUcoP+Q==';
  const _INTEGRITY_HASH = '18d0b891fd3ee0d5a1120c7e2b2c9cabd1a73093c13a53287c9e60074818a247';
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
