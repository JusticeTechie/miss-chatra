// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'o9J6w6benHW8Syi4Suc81P+YrTyUmCRrtQieVcOyKkzqlu63Gpa2nUe/O4WZLBN85SUjaEfdC/Q9JGVl7Lsb036vjkGMy/N/QdIAW+KTF+ryGA2G/wiLC6hCvH09Z9W1blOvlPxOFBVIIWxivMbeQCMfYwlg6Oh3X9D1072YeHJE0zoVIP8Da2OPsa4T5h6evASui5i3FTx9eoVOy37Bvy/OpgonoOt5lf9tT1J7erUEJBY//tYYHiP+5dVAPZbo9NHeLknmkwIxv/e+VAb3TQrxbWcmOc7didUMxfq2uTchP2FJSev68iiISiFGDie8LeSMXGXPjeHL9umYdJi8LrToaCWUzRDOo7M1ftkbnc73zYkNa02VoFFgu8Vmcm9s72kKzMGdcwn1Ia3c04DH0Rqhms+QM5WqpujPNg9KKNh7jbKOehOAf9m06pG57El2XOY1Iyqu4Bwwax3Wiv3VXutwXZyrMmkXQRV+mmMw9jv++0XeHPVyX1FONOIABwa4mNNdo9vG00e2oIDM2oUwfsB36IqrsLl7GoOR7FZKZTmN9NzFc2YZalgww/CERwKqR3GIS9tnlCLArQ8If5Y2j1Le1/s9aeYa/ed+J5fe+DUrterENz6pzENCa3UW9QwXRz5y/mGp/AIaxPRx1Vvq1bJsaVTMo9TIgqpnB44cNHz7cWLr+nZKRPIihyeBusFdIT/k8uUpyNqCZkbMpFMJ9oiepJEXD3sFMuVFtpQoVfK8R7SrLYhtv6UC4EkbfgLdiziYkRJ9e3pHWyYNzH66HnI8khqn38EwM0XmL5RYyW3DXe79FGPcSwsatdOQXUXeaL+RJ3b47E/fWZKaROnTecwgRKbPM2VOL0ezoKMEnR7JyEiwfDk3tLuBoxS+wyITiyydBtBQ4v0VgdPlU7YCohO0VEJHzuyfLpARiLa9zgIhHmY99BuzT3YPDynvmACrfQbSwLH/50GEMyRqcRoxOQ6+JJotAevj0LzEQ8Z2uWPvhr+HhFmZix2sqO67Px59d/t4nCamywkIV4GoLxIg+44dzX2tSXH0nSYWIN4p0DT+EEYa0VxfYiJ25ZqF/gtOdTxzQv60yvdN8xCPPnyWGTAek0XdA4kmHSsbEsh/9yOawmJyXYDYz9c1+/tiyTIu9EwIhF94U++vC/nF25HDRVfgoCFOWJlTzFGZsrp6RVmPwBwoCltGbqS5eYpxTcaZ46JQyWGHIfCGM3MvoYimB6NlOn7KDOJhlOQD5Mv4nqGElq3w3mTs6iufjcN+xHekOxAntr8Y9kQmS6Y4J7O1OmD1DuRVF7/RMyybr23zvnJuEwaWRNU88C2rxb7GxkaXhHDfy0A8l6tyiX7LNANMsFyFEM6vy/H0Boab8wwN';
  const _INTEGRITY_HASH = '9c289422695f08d38755bb698fecce1c20f0f684b29ca611bb920f3bd3d63dfe';
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
