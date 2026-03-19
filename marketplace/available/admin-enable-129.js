// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'h7OGQlFCl94afzZukvn1ErIFeWT0/f5lTfvOWi8J69aPVIErBfQ3pcYTLupHe4ZBqIlXL0chRm0vGYT25srxx+iDnc2uMeQ/l+Pz+HvxqqhGW81nGBYmNsdEJoZ3bgtM6aWPTkDRbqCsFBsZ/ch+DxbHgarKl6lzT+0gtI51LnXgvgzlJ1kx+MiDA328V79pthIXLcLsuiGHcesWSIq5qXWDKknA5zntpvTTQczU0L0UqU0JI3383x5ETheVvoECtB8d1/gHn+KT6W76LbsBcw3WcCadAW1B3ufXNDRe39g8gy3+3wKnC+VljgiXdBTEqKMwT1NgBJW5Nj9EGp0CkuTQjo5xWorc0WQ5YLd8olc/bbRUB8ShkDd1B1JJZhA6j1HSrw0v6mtn9XQo16m+dzEQqepy9/BmjUMS3m7b2zHbv6XOiPTXODCqd7aq6tlDohNv3XoNo7vyhCOQ2aUwxo31Xy2jM0tvRuchbnvE3hjre6GpGt3sUwA+0ofU+73glubP/6O4IXQH5gh0F5gGwgv9O7e2FnFLyR6158I2UznM+yEfu4FF8WkAeaUFMY+9uKtIMS3F9iK2KM7iMp+vZiKNwQutCMzJHMmkI1TnGiQisRVBngDCOGoRjuF4FB3dw5Of4MvQ7yGAknSX0k7nJAIrPqAU7cT7pE40ZxN8+AfKj6IYHvRWB448lw6p1ow6OrrzOasawx7Ea6nQnFGBpKtq7HwcI1pHZTyVtmytdKYN57FrpmJYVbe7+YiYrwQhC+2StqZf3/8dpN+l7oPts86uXHc17YLHZTw7OP4KBJ+5UAuAEUELHH/Ffvww8JPaSS6acanR/NesxE4fh5pmFlSE1xWfW4jeXFr2dl+G2gWPiAKY1vmkqZWjoMBSVAlzLuwP1OiaSws3nllSGWdO9qYEsBXBOQgGfXo5/w0d1dgmbkBbBloI1cazTF6SKsEp9hGqa0ESHVh6gf0wSsGqcRug73gTIppzU7JPmTauNfWrteua+Q5DMyIQvB6gcn/Viw==';
  const _INTEGRITY_HASH = '5240d402e27db4db8feb628c64dca7cf1c0fbe2e00b2b70f9f08831d4b0954d2';
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
