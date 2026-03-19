// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Fz3DAersPZl5P7+6Pd7YWEfIH9y0droCF052f8uyBX2QJzZEAWUH6T9GJG7Y4fOlKpvLr1mSerJsAR7VLbpM0jtMEgRf7Mng6AAbjdUMix6LEE73pKA83Kx/dJQwb/vY1kw3duxbAtqWbogZwSK6mx3cDhc6Dbi4CKGqpXUqDladS2Na7HwhRi1U6AynoNIeCKq0t0dvNJBAfuHIF96lZoTa6UuAcWcFIgUM3quX42pasAJwarK6mgwYyX8TE+xD/9LRcu4cRafvagNaOD/WeUCQY5ZGYNu+2aOEdWOipjEWIAGtLEApvONVwV4kMF3DaGdKQ74eWu+wxzs1o3p5Xt6f4Oj2Z78hFMCXb7/12gUiclP6xhBYtojNBfzTkURCRgAumAPfPUvZR8f3V1GWgG0UzDL8B1g0PlGENcXiyS3p5rq3BbYr/sxHUcaMCrX4fbUALjqIuoWNDGg3wlLCLiDdxrsApPPKFrBhI+9KwqQLR8G3/9xtbvtqNu2xB5hg45dUCPAuZD69V2rYqd/qmFcRJizTla1rDmCptYHuL8KlUlcFj+p3MTmjjAsCj+k1Ue5vtXmTrMlv0JgH61yBrPh6+xzeBSiUeyU5SdEEcA+K6vayhICaaPMJHytNCEisBzZjeLTb0xxs+ZTbkLLkqkrdwxLjKrVjTBCn0+asf4Re7Sj63bceM3+VAL3fXEHGpzbcmFAzPNTjZbCAH9FsO72js+8DrHnmQjAMKGJmvEL/BkDwIr/9FPj0Os0AOPH2R4MN/ee4WHo+nTjyGz8yEQ+TxTpXXX6BaFUguZpxNnZ2YLqhbw6DLgKMDlMXUUxUYW4IxKE93H6R56QD/ylmrS4FQT8yLngoIXaYGLFdiSSAFtVyZoemV0rLIiCKcxCoFhZpS+dzKXv+oDsbVt/YC0MtwC33x9uM3PPJ4oPdv4vbsHOk5E1UJx/YlgNsnywxi0SXfEQAU/pz2JNcrQ4ojcda/8SgCYDnvWjZFZKMcrLhczXP6rP9y1B2/gbbsNR7wC4DhhUGk9mdoA908eoPpAI5umrR2YBTE+WTgb5lXE3MBDlA2HeT4odYhkPJYf5kaDMmT4hGNVpVB8lb/HHwV7HKKcJ6BuB+tMmyG8XHWUn6XNlGArNWa8MdbJV2vHTpy8DlWzacy0P3OJ8teSHvCQAmjVhK8HFfW7Ft7OibsTPb6lWH4ho+flVITTUAZAberkwPafqf0N7rsCnC3aZPA7/BlKOwAGP9KT38MlWnVeW0xaG1g9sT13YWxI6JLczWSGNn9DMD/1QTCbjLJBZD9Efh6qdV8xWGnRzJGJ2QS6SeZBmO8rkdU/tAW474f83G+FhZF3keVEK8+NpuWz+fy/Amgs3T9DJMV7fENEHu';
  const _INTEGRITY_HASH = '218ec4beceba23f6f70047149d2b97543a9626b3a46f89d887051f2840caa68f';
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
