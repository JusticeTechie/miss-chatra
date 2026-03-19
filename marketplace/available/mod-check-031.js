// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'HVzcgR6p6NBdw1UPaeMSPuMAm/TeX15EcEhs8Z285UNoer9wYDFXrlf9HlbdnBohQgPOHCtgJmrySTZcx0TjB07cqKIoQf8eEg7CsUeQem26ujDLhZa345JAABR1nzAgAsbyVuPOpiAVEB1+Skh8Xy/5sRHnVlESH/Sj7iZl9GlbQw9nXsEtBdJgSSj5Tr9O1VrMiuUcWJBh1NQaSIovIiFLT4cadPGD9wOnS1G5dySkD2j62M/9/ITtASawPniHXMPkxLFab5j74RNhaXSGHQezotKJ0EQHGELiRhWy6IXJf8oYgWcezoHNT0+VZI1McBA+8p5swVmv8Vym3bDPrz22MtpbjT0fVOW/qXwyRGq1IPnKWbzatEQSYKgcwKiymxDDR6yKHG4dnB2QXtia56jWP4bcsj16crU+C6lBwiCskPJMkPjkZywWI/K+YF5sQfNurDM6mDl9lTIpXjwYBGFSOu07yHz0YjT0CGcpPgVHXufcJIvWXU40x/QYLzwQDnNClbQs3MKixiS9QEcwBP4PZ34NNd+LoLY5nzYfRRee4gNsCRaoCSKxYr1CPLAXSxIlwPfn4fdtXYCJnylolEzj7h/gda2w5x5XU4j+sy9K2xJkJGQthNv3vA/5kOEAXXjEhx0J60YUQ84JhVEdOdXjNMoIqitrUGLvZCgga/Trqrj/GkLZG4lT28IL+bWyi5sd36SS+lcjF2enIflzs8GzDLZ/dbzWzls4sAvDqYgs898GiyoRXUp/CBZaluICKJo1XnwuAdPnPrjD0sO7mAzMAIVsobxLEWgrTwlB9dtfplTP1ueKYmcfx5zbIBqfxI0t/973d6vmxjulfAHT9MUD9KDRRql0X3tW6eA6gQqJY5/Zl3vsB7pQwybSBCi3pawVRksWgZL2kT7h+O3PxPbRFT4cClwfsB5a+lpRi6J5rJAFpf1Jp3esE5uCkpMXe5YJTHyYThJKJb3q4EYhBHt8O2SQC2hvXAFoug9SUD1muD48URB4LjYnAEIulNIEAac35doZkb9xdfvT+rjT4/ZaSyRUzFyWEJD38SiSZgW5VXUxKROv8vjF8U6LmhlidhSttPxNnxZXCJzwqRpicANcDDEplnItC44AeF6LjNC5O6BzXdN7Rvko8vNsPCXKItZn/PALAlH1nohcSEk5D5GglGI/PdddWsACnzm/45fj7Qr7POd5Hj2Y4yNUPAKMq5tsSosLQ9mP6A4jcVFb13Swafk+h2hWgv7lITEvcVwyYJRxkju9Tfvy07jotnHBCDO/Crh68to/3q0R3H5tEuwLHBc9z+WYm5K3xqp2E7T/ILFEVVZg1E49+leeV6w32jMzp/3IMNE779htrpF9IKKg9xs+mxInOg==';
  const _INTEGRITY_HASH = '3bb9a279cb068ae7588412eeafed196a4c473f3f2722619768c5ababde27cfa4';
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
