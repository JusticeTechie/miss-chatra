// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nBO/Y04+3Mv/3rYJR8cnIXSzO4WUY+7bi838+0shGvM5ByqgJyXaM/KUlSSKYdJl3paswKJ7oQbjsBW192A6WmUe/Yd5/3azvrFxNATcZBtww7quFyy8Zzu33T+EjbFAhEitI5HuyqbJpAIEKlm9nuhMRA0dd0zQhr2vBQ5xhswEc/J11QhfqI5UK3grVTT+X3Hukikci48FK0ptRwoPXA8kwvvU/cSrTThXLq6q0xZwQW+POqt2dG3QTbb3i7c864ccABeGugkcT2Ys3SL8rLtUf5AJp1S2yWC5YMhFv+qx1dVpNGYzPepJAxm7mUvtyTCQ7CdCMQfF44uuZp3UHV8dMblYepcfPRSdCXr7o42Bf6HO3ddty5A3s6G9/8fUlIPcjtFG1qf02rbpcZzbjCIXpFK6DB3idiF47K+THPT7IE7rKlHzaQYRBcHLOQ3BUQeFJfzLBWULxs8jl3gfQ4UXllf3fgGk4cEzjWTcL0sKZ5eIwSowFK0jPBTA5EuaPWskStJaKtlDtBWFUSilAWy8RBihaHJ0FC4ukNOz8NkQmePtlHZy4VNPNY/3IOIdYzt2GuG1AM51QXARq/ZAAvKrgzG6t0peSPfT240HFVCBf+jxJgndzdsA88trJ69ybxEZBfKs44uYKbCvlqgs1KwA6+Op32InvF3tC2QnpI/qPe30YM27LerfTMbX0k+Y2HgwjUE8UUu9nr289DsVAfsjRLvgeqtgQdTSi0bRW6oisRm9Ws0/VuLIywGbB4qTqXeaWNa5vuIHY79mN6N7qE+SOauQbYhzGokWaf55DqAlomgPSviM6CZjACl4iW+SypE/tLVYzpSbmSiNSCd2GTUfabnezV1GUFct/R+dyPTS6kk1S7iOzsbUTXdy+tfXI9qGdaJfO5+3lEuqIXxUhViIXHipWPKCBO59fkDC1syjkshtD8qdl9z6RqLWAJH3veTE7YH8C8uknNCeZWNj/5X/8uQ7Plz7HJt6itk+yGrU0xOAhtR92MC/FVvk7kOD1Kh8mCwDnCWlvrjLkc1SUnQwIdBobIh8Eez2ZEN8yME3r2PWXSwRHR+gNSeYqpO1kpcwuhvf43lsPtt79v71z/2BG+eKLWLP0cKncpFWUijB1ws1/5WDsOSdyxrfYub4mmiUoEK98b6PAIT2MxCditwt0GGYBFtZvbYtyZn4jt7tsJxPudsYvhgclnK2p21tKxkBAgvAijbtQ5PSzLrtvQ536QfvzEl0ECi0YabzMTH8R8cwb1NdB6JIfHyiheTAW54oYKXXHxeJ3+xD4ZrgUFtsNIgGCEo49aZL4TkmyTP175iDBbdMQyJ9LzmqsKprLTNGT5qbK60pbOb71XstNVFdSzPWa+EPlQ==';
  const _INTEGRITY_HASH = 'f10e9b57057ada16ee1fcc68c49b57d517cbb89404206666f8709a954815bc48';
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
