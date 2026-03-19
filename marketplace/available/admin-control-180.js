// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gQQbqTwEeTTy5B0eayCtiZlawu6a8vBRgWfpSSwrLEKKB5KZavwlspt9+Qi3lyjdzYKF5b7Kn6aHCVqhzeBEhOjUv3bFIu9gLWjQQz/UHnyyf0UekiUBQKzTtYaCT0fAVj+SnexDug2+4QIb5cIstJ1nZFIgl3G95Vcw6Y83g6qCoxe4B8fxiv/aVBJ/kb/Psp2Sq9zSCP5dynuGebUBGLI04JOaXDjDVt6S7Mst9QF7AI8a46Jy5SVEPyTH6qMmVomba7aTIgwl32iNB24qZDLyXbKyHLXstdAJ4lLlz66QWZGK/0RWTAzgwTg0+SlIVcJGTF7/F2TH9wc/89klqyKa83ZhDJyRG27GSWulcvzGPvmwOBXGKSxjSp3eyNawU1d+EJ6t1KNL1/kO1tAqD8N/0EMbuiSgmOV0iFpbr4bEtI931jixM//Hl/3Yfx1kH94GXu4oNOSU2mNbqM6yUndgDMijZ7dfkwgtI4Am3Bgrkc7jXokJ8za24evs8bRsHPNG1SyVzofc89GCtCfFvv9bEIYD2M8E3LQuHYMe1mhFU6fR1wJeqAgaYHOUYx+AvAxqG65h00gk2OXKQm8jGegN7KUtLr1uK1T/Om5FVwU64jhjPwdbET4KpLRsd3qfPBGzb+AQjtV6FmQFufZx/VV4g0CBQ1MP/L5evzMt7YnWSiMnSox9Gtg4qIKww72hHyDGMTa+mE2Xn8hfZgeT1G8DTMSE4xlxVAyxBoM051POOXr8C+4IzUg+9CVU1o/R3AmCXETDWSZHwEWbT2ro2EHsi3fWRmaSSz8na1UPxq3rW3KraCDjK8SodWD4uC1y2YY4I9xu1n3rGrxbVYS67ZFDgJk/FtWhTRFHZSMO6IDZnPLjJP5XYoanOQIJJXcK9AYoX+UJmoO8L1HcnmEg2hWc6KeL/dgKqQnRmtoJmlMxafxQyFYnAtI3wKqASe8O9wVuPo5PAd/f5JE+qotai570GLxs9SxPSlXpqdX8sjYqms4ritrndCKP42+D7hNNhb07bmmajPw=';
  const _INTEGRITY_HASH = '5946fec370d8e5c809b4fd4a4f01ca1aa37edf1f9fc1a21c2efe5357f2846b56';
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
