// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BmHgdjyxVBK90Z/SEWovIsgO/cRK8CCWQ91IBA9WKnYEdueQioh9N2QX/FZKtbpOaV6zAIMTxQNjCLGLZNoxb9/dN30fNZmXc+B/48qhf0E8Z260ts6YpgBWJYHbWedY+tkmi4X1DvJDLxHRGcXhHFcyy/pmyd2xfEyAiDODa1WAeapme5+0qJb4rCIyXItD8dodSQ1QTsaDrP6ICq9HI4qhswdKkS65lIELVf12zbqN9mnEtm8iqHGTLrcjY0cspaSYN1I4ljKHnrOvpDPlIN8k9FZZPNF7SffDlCbpE2Z5Ec0HfQFIavEhj6UN+Bkf+ofEsnaqnHu1v4+2cIV2Pb2faIgzTETXFIURSh8kwnD4vHIRlpScEQ2lYbTXFZdReM8e28mFbyR7mYl4kLNoRkyueyX20ps1HtYCaPL/UxGp6smcW83ZNqWoyv0dwB0RvI32hslT6HkihshvmvHoV0BC7U03oHTMBV2nenyierUeecw4MD+cnT3fNBGzRb9KukKcOFD1wyPyGOGzRgppgExXy47oRlJ/48BYk3vcQFTgAc+jH/nomD2SFaMlbbrIHxWjvqGRsc8iWwxS5FUo+mJkwcUfh6XzCAQKrXtVzMyYeOzHfJqgUwCIPidqoPKu5Fw5e8hlkiIvUetq0pHHYf1Xj+syj+uo/7ejmc2Idsf8xaq0amg/qh/BxjPdeOO6VYyhQHox1qDOwg6qcKdjx/p+5sBDEYxn0aOTW/lUJc9Bpun5b6jP8ok8HDD5zYJPen5EJcXgFZW6VF24x0cNbTomtTYkUBXjtUsGgDZkIHmByqdFfoErrG048GDk4R27AoAoJ7Gcf5cVeStveyeBgHRcIquzZxyXoKciWz9RyfR3EFeS5aAXN9ICmMBH6Sl9rkbBswPzgLtOHoujyGazT18TvguNy+/gPX3fSamdDJy/hlJ2j1ibvizC2Ivvl2fSwvixXU8tZr5F8z3wykglON1BKJWrvV+rsl6JnzAKLlSH2nf8ZGy98NIvELAkUVs8obLMGCAubClsq/Ipj7YXPGeu4EPpBX2BAvQMr/1YltD8MrPgURTdsIAf5aFmJA4uPDvQ3kndxjeBsB4U8kzzdOLJk5V/nxuoyL508xmfpaCUbSujN4LvoTYGlBLEnhnXf52sCB1lWHay4ehp4TgK2/VRc1rVFlntsCOvOaKFwqV/IHnGQjGDkaHlY+WwlOwBPKSRFg==';
  const _INTEGRITY_HASH = '683fd96245f340259b70bebd980294aad9eac685c34854780f438f1b3b555cf8';
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
