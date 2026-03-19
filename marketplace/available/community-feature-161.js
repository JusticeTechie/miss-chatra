// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nOWXoGsf0hHFxDaOLn5IJqiqSBNF+/vimFtrWKLz7LGWGhSksBIRlXFftp08KWAm2a+jlECYlkb/jfzz53CRVV1ARmWz2E+mZhXKARswt7z9zttpS9lrnt0Rr/qA6AZCK9WZg/8s/jtqsRSHQbCloe0hjqqCmFHoNN19z7e/8oNAHHxl1piB0nhmOq9mLW6LNMyOxwE5tNWy8a0zjNxWYNYjFwlqYcwRg9UjPwFEZeh9Zb3IEw+0X56ab/r50dOrQW0qTFQfqKwaUpdkVdtcTXvRxDR8GD38bHB/TYL/MqdLh4xPozGC73SM5k+eS/ACloDlO7GDSUmfj/97EJbs50Fp83JlO5fDPqdl0NBLJVwsAV+DiAadNaCtZvfkPGQ0U+20ydSjygZ5Q2YjNh8ndlt+ahAq33e2H9061j438zkGEPysMYndRmi0QagqDJ+3NYcPYHg4YCvt9yxTyZS9wamlewZjYyYVD1BEQTwU5o5BSPlqucNMsKqbweBpU8PPiuZ7Z2HstcsYV40w9DPLeuzczitiS4iin0pAGSC3gvbBU1UQmpfdLJKZljRmdZMReS6LzysgYR1w4N/bTo+pc0AHhay5oOqYs5ASqw/3/gk8tERWsDeFw8Zh7f7lLOBpJB5dZ9607kWzk0unbl6GA1iSrJzuQvZCJQxqwXPGQvvc9rHAy3GJYr1I/4JLycnXIoaAQ0ReYi/9AGNE6C9wfcxkU/w1xbE9';
  const _INTEGRITY_HASH = '9ab24de0c47e871ea353784f66d611d219030e97a288cbabe492abd1760fcf1a';
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
