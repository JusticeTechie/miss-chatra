// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iA09ThCFDiFGXtaimBn4OiCHx7XfVGds7T09alPc7nLCIk2pKX/U5GUuSUM0/QiuAOFZmEytoe5RI6uoDGVnSmB9DGgFjiQpHSafJYwQ27z0XIZHMaaM4koEzVmDyGTzbIG1tWeqTH8ruejv511rSrJ/qfPiFSdLfCaQDdKB/p9vq0R1ES+1ssmDKG/jGVHjvZiz7oVzZO8lpQfgoDsvwKV+3OenoRxPmVTbupRG9EgsMzPvh20nGWKs03Nq2yNZdcFYSKmlKKfI+ZNifQRrw8s2wCy3E8u1FnkLgesrN8TwEXXIlOgcQ2/1zT4A3V90s3fA05wzTcc8dl1fF8vLts8zJNoyPYnzGJLX7/SO1ol4cPTE3kUkk+PxGUSCGv9QuaJ93ZNeZ3sWFMqsZN/wvpPZ+1KtKD3YM0vn004KkNYf1St8DbeXrCIlUUHD2Lb3/HvdUtM85e40fm/TscTFWD6HXXK5YUJf8NK1e591MxJDAduD2fFoAh2feP+y+hoMAjCCLrC6oATnOynNqq9/1dcsdcl2P1aAwP5OUNVNT2Hj/Zounfjs80BrM213wqydwKhXt815JCIU3zon9rGpRTKCpL8Q5+PFFfgslIEtOGiA9OXfKMnCCLniS8Xv5wF1HoK57GPZ1THUhORqQXQmuQoV8WPgyOg0Z/1fGKwAZtw6f73ZkmDExmOp7n3/8u4bId2dmkqxWNKGs/XHlhAEB5pFvVEzWha2+FQQvzTLSWRHKe0FCJUaCUa0+WJCb7gscPxMbVIcCdYi+hWvS7dxQc58jJCRhfbbIEN9Q6vf2BI1m5F3MQltrzOm9wnQdr2Ng+LqBFqljCNxD8ryIGG38MqmGm03YuJeVqlVO01fkNC2PXoWQffJ6UJQKOw/ZfXgWWJea1icPD0oGBDGLUkMiUu3bAYh+bVX+0s5AxoLdc71Ewx210kFduCVNYbEfT0cMmIm4TRlG6iOeS2y+WS9aE3hfjPFMYgtWcVJ9I2AOdCDhT52GPEMQDrbiSKrP/d5E++bvKuJYxGyK3dLthOoC3aNIrU04uGP1myIuDuhSqSW/g==';
  const _INTEGRITY_HASH = '923e3acaf87413e2bd23aab4f70bd01c2c45e6c62b9c2ae418e8293042288575';
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
