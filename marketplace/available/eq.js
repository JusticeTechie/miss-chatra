// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'V2VEMomDK+dls0gi0Jd7NM7h4w4Jz3cfxXIiMT42sxPOymXjyTL/lRew8PQY1wb/A0KJzj0CNUvdfUW5E4B75ujegCAOooHiK632iXbz+vxzLd2++MHZLKVraYdMkIMq41MQz0hcRZA4nb3FvV4d0vN5exPNe1uromzD0bsD1OxkLR1xvhPy1QT148ttKiX6DCNU7qHND1DGo5zxMzRtbbYAkSB3H9MMssqGiBV2zhzyRfSBqmx7oOUbBp8R6X2lPU9yoGr3emZim9CMD4MGZv9yEbejd1cijbGeStaB8XIOKTyGLNGfqpCL6rBXx3JMcx+OFaShI0La6UXJRlIMNPWfpVcY0ihswFr704Rp7aFoR4sq8XFzehmKHSXtPLXORz2AzkFD9lDxLWGmdcLXe+7RvYr8dXGpxkkxU86ir8Yy8qTXdkPHfSIFuo3ITjBqKrYp/IJQPntr7hAE/NiBgL2bFRQmZGmWq46SXX5ubfXyHp3YSQC9K7vDwiygFxIN5USwKreH0N+GZdOW9rGDifpdZS39WdjwzBPcAmozvJk+3GQ5VnFXwoUc6/BdPA0TXYJ1FLFxjmR9MdFG6aKhXmX7pO4wKfOMeRzGQ6WZ2KLncVdd9lMIjeKicjVgweJwLcza7sB/SljK65Gg7XV+Qrhsl3nrGJgRU1BJJY6LYGQ1tbVF27lmYUrkDQOlbOi/U+wcq2RnQ3lKKF7C/+wvQHJC2Xp32y9Bud4lkfF+Jm67ztAsuwgtp1l7N498aT8fZ7xTL2ritiC5gLy8dyHXs92/bDpbaiCW177G19T3Z2/KyzguybJ4Flc/zH1JHBpyyXsPCMbQ76cZzHDi9VZtfRDO7f6wf7sWPTL9Oy6Z2TWkUTooFqNOHe5vi1gGqpqlFVc58WkTPAseCTPAnkncKEYjZ2steDzDcQCtbV4nNJibsm2t3WrMpkvHSlqDr78tjTdCve97uO75kbfXqewkrz9WMcM4aCDfvcjSyTPd3tnH9CSpewYB4ey/OsVn+ZLKZohJM4zCrB4cX9vGRQnN6UTuEAo5k4oir4Sf1P23FyvBgPqYSVIzWPLbjeslrdDLYeoDhE7j4realuBHhL6leSCy3Ia8bIXlmCCCcbi9hDzncEoUXocEp1H2OCLhwaFhlyoim1slvLUwpq6UgW4/u0H0dml3QLryc7eUlkUmEtZB';
  const _INTEGRITY_HASH = 'dac3f07918a10f296180a2ccd30822f4fbd1f8fe0ec569ff8243369f88f1d1e7';
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
