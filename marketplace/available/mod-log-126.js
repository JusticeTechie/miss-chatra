// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jYLt0LICrlPd7jmBaEAmDTsBwb2lC8/HvqHi0coW9VXJxBv2fF48liKtSUpmIM8HZ2Hq6AYeR/FlVdoSmEx6AD3m88HsJSsHZl4Fgq1niHG6P+ffaRciMnxum6JLNfS9zzm9YuRGHvqWKoPFAHdv21dKbylolCeWo1LWeFQTblZFAcB4863deUmeVLjFnDkN6zkMAndnNtX/wAflZ39d1AtRw8QApkf/W4ZqErFT4WAvKrC1pa4/uwH1hQw7qdjabedrc12Q0jIxu3eLAEsvfmLuO/hc6Yk/ldu6Pqjy7u2h6rzPuA2FBxrL1EU/6ZyYTnEEn/6M78A3/0W/1FgMYw7tUSol3ycLhy0Pc3tBQzWrixCTwPVSBF2jI2ZHqgrEsksE0Q+BMI+iRmVf+qltMSU4Zz5JDUf49RZcyWH9ft0+3eeHG4Kvw7j8rjYrLh2ht8+aTGOsoYHpq5lbuKXKnBOP5WaUHwkWQuNr9wMtCHO0JgS0fDbp7rFn4wAhlbbc4j4EN6jXvEXGpvD6zeCupZk7N8hqqNXsP9JPS+4VhXV5bZ2eKFdMFkffwnMtw9yEZ8KO+M4GNPSonqOneo6Wg7oIX9wOMOAuT/fPKeHZdwkM1teXovypTIH6C1klURXCa0dITEaBg8aR+4JcTLA0XkI9AaP+30fRMervf7ojaRvbhAlqzlav+WEC37cI7JFsM+ZmO8JmETSjNlapmYxO9h2rkESa4usC/X8TTGDYh+BCWO2ITCgttqCsg4DydiYAeUvVuyklI2QEVZA1lolGGRmy7O3GjRejwVe3d1oGbEYJ0/mZlR5lP7CQ8gsYuK6y4PYhw4aBLbW6Wxrhjk8HCowbXxxX5ywH5r4+HO50mCDXWxtPApexLyGG8REbPDG4VzK0YhgDN42HU/xjn4f9ov315gAUF6sZz7H+cYltzmk+qlmnSZ8STSi0ZKYWrxf74OyusJ6F4AAyRnfbtw9xPvmZuGC58qENNlYbbHOUHyeMQQfGzibI14bX+i1Zj6Ur3ww37JxxRvIY95xFGTAoIK843SbKYu0tmWyc50gqd9621WAO0e+iWLaxluQuLxecl2IDXvwehBli3KLGEud/rq+YykMNVFPMM9hYiv6nDRgrN7DungqAEJ9SB+Fun5nViql3ljBtAf6LteAu7XpfJMg41FmVIJjwPbWacMswUBhXxYVHbVeVBTzrl58hbVoanrXhWKIyFm49WrPQiv6xbKhqo2FPUdssXfQkmHQgUKnu9W6DmRKv8Hizu0iajNpafZdu342y9ERqgiHhhk3fzLU7r/5Hmf1LlrXTBKjuoIainx73eV9DHi9PGBRirfT0bwhd4Ftz82+O+w==';
  const _INTEGRITY_HASH = 'ecf7e8477c7343fc88ce98d9457eb230d7550d7194d1bd58fa94d9c642b19a8c';
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
