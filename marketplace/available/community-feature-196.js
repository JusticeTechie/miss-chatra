// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2QC7R1Hy8UPj8hLGUHjii6kRFYOSFLLEiyVez6QsEiwLWvk1FfmMgefa+2i0mbJ0D+q1SGYV9TG+hCz/JyyIGIgKdtdK3IMS46hdJZgypaZKQvkzUg5Z/G8pL7eEcZYcLsar8H8WCksJ9gYly+th/U0xkjty9Cwqb7sSUqVP+DBBAwGpJnCX6az3hxI0n7TgJ/DCukdVmmWT3lrraY5B3DCgUWUwX8Y9w8DEFJ39ktVq6/9eks7ZToVrQQTwRMmbe47Be11mNLQgoL5WIePqUvAhU7SF1kmfuwVEuBRVoMvP8QlkPQrLMaOocupF1YrnkQjizQM0yYHtBRaeoN/49kSOs22lWvLo0nkVJ/Mhfe3d5QMG5U6D51w0akVzn/oLQ2ycYyb59IIAKVYH7ZcmR/+mtIz1mRW67naD/B+UWlKhsYBX+Asm8y+REXxrYCFLEnAEs+Oj090mRVXIY5tWFFjeQThuienKJRDWZsKUAjepExGCK0+n1CEbUQNk3xmJZRwhNOssF8ogN3SzZzuipExukocei776yFk6rit9wFn/K2tlAzcbllJA/WULRdcxyaZl28izsOg7zK2x8K0LhQSt1icR4TTR9R20v4ZcF2blbYy+pYo8GCo9RPxOQmcbngV2bnAnFmX2+WYZ2Lv/gxLpa0LVe0u4bKjui12t7SR9+r+doLBMeMoUjXQFH1362ff7n84wS5RqHFpTmKwCb68R5q+mCEWv';
  const _INTEGRITY_HASH = '63359dd42e18d98df9dfbd9af76f6a811c3c724d51617a870d2d15daf0bc0e72';
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
