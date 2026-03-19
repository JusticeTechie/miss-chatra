// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WyaA9s8+gFK7EgdPynEBITwmI/ZmYeiteijBLWgVbjGXxZbAriEZAeTmnmxjqPC35aBscBgWYtkAkK/wSFYQyYwAVrRCAL3WXmmPA4Dw2NiGhhrWl6SjQgoX2ExCW8ubwWlMetmrTk+eXHTPPWsp2Wk+fNyOBLVHKv84J4NeskrNfVtPxwFb6ff9bY0I76O9dwekRaVhLGVXjpgXSW+h87sp9iymICfqESb6gScMOJJAskyY23KB6gTZUIMIVV1BEAJte9yR4LWOgly17kmZUFGDbwwWbwfwystBhH3y1XwqEY7cLPPVHkwwAED/muUfFQxYjuMcE7nXU6djlMjfosUOrjwT7l+l9ECxrreaIQUExcFdLcE7w+jyquUrNsf2SL8B4gdk0i5jhrWFmGI6me1DpRNmVKrPN2FmtzYEMWhgiLY9apcfisCXEyQSh5xdwWfHF8R1BePsIai9v54Zlv0DOQgP8+2SZhB/OWhYNhEpzezGILr31TtmWyUMeCOOzGZJO2HZiGBBDO3GB5rWOSY9G70dd+u2uMEn5DWHwWVdTpGxD0SXrqB+hC8naIQT7lP/CkKIu7i7bmSz2rYfDcAwJ/+Xyr+VXh/s6dovB+6dBBCoif1C7y4EMDPKpNA68/BVZf7mI3ZhW2OOP9s2lFi6QHopNMju1qwYxjhaKyXDEeo25ReYDcE8OLuWu0lJa9oaFs80eznbzv/0CWz1TGsjyE95g1rpCBCTt/dTULycfsoja7v1oRyrf0rSYQQAbkOPS//LUPy2A9r0DdXcIWRFN/bF6HJZGROypmS/tX/XvWrZUq1rT7KvZui3RY2DIzsJPAKoD5i+BVGvzC+VeMwvrxHNEdTA/XPqWY2tBy9Z4mVPf6RJGMum9eSTzWzX4+0CUrHK36tFbGhnKfSh8x+lwK0Rz4973yoCWYqwCIiYydl9XfvBSiifZZCe00k2HSZZO6eJ/os1+DwB8DYfoF6zBDjlA9KgP9g+nzEeQcRZjvV+o+UvP7uXz3a3m8TlYfw7qSeC6cQ6yFmR6bu9kHtKz0FrkjYrc70nMnbWcFzXwtXauZdm083VOtzmKKzxy+3/q7o8FjMAOSHQ0o+EMXDOrR1XGQaIB9Gl89rUubsUVEbbj/1GlSsBs4FyriOMFlE61pwgIvsTU1+vUAIg5cNjW0tdczn61fIQkNLuuO7wlS4WCJBv2MdJ8sLszLK6c8zwamo6EwGVkBJuwEy+CSBK5ODl/L6hrw/9lh2hultyWh/VMLNZnWKAQwcVfekNPMgN5dRzFV8P8p8/S+nafHGWO7mko3hpShryGhwZ3xUPKAF+6ictWInP8tpVpcaoQqp6Akb0MtXFjRm5npAkiZ+wJoQpc2SRls2q2A6o';
  const _INTEGRITY_HASH = '5a89434a7a203637f3282a05adfdaeddfa4a11149c6f11849d224000b01efb2a';
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
