// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kQElVoO4NHCOgFwNduu554xA5MkeF6461npeEC8iMzZnhoNLX9nc2JF3Xvec50jocZ8e6zgdZ7FrQ/qvkVkMCyfd7M7dWqVVyABjinGv7J0+TRwEGi/9X5vbmsyqqUOGZZxTnNDW4CtEnb1YRsuP9VagioKQj1dwLUNaGmiU2+YMlmLml5+BH9aYR3M8H63tf9uw+g+/fScICHL1d71t/6X/O0OuwGa3bVg3HX1bJsqps38KWrYklC0YOTfWiP2qxt9DXXe81HjQwrZBKuzuBN5VEvLfBin4Aa16w0L910w8Hcs1GoA4iuRW/4VJjBxF9h/8OEJFIEIi8LHrmAWeCOC74N0OqWbiQQ6eOOLqtWzq6a8ncJUaWxJvb7wlW2dBwA1+2rlPq6ZK6BWSQjJR1VFa9Ys5dc9iYpgbRFD67ptw+HkAtPLrJ8vX+MX+evEGxkx1AQupeR2/Iokd7PS3uE7axBBFC+t+TIZ7GmBriij6CVkAu4zAsHgrlbzkDMd5Jk1VuZ1vhVr471lfHtOjtJSrxXtigXb+HaRFJxsqNQH7DfhbTT8tySuYmGDZB8A6K6rz7jH911FMpUdZLhjYUl5mlJOvKVebE1sxxo//ohIPNB6r2FiPg+FTa0sxehdg1tm0XwfPqlVC/Eqs3SIUwu2+tVVYLXcFGFXWMqV5xBG3DMiBiPjtFw387oKr3irUppuyBk5B8+poSi7Eoz+4S7Qezw/Uh1U3wv/Q00+VGMEp/yIjGIsBQ3KFAAyeflo2vweqnmzMAgDvTXFy1D7O4yw/yftTajmPcJUfHzRiM0isyuuxfaOkjPdVKKzXN78+aVuTrrLJlISI2PNUl+uaoKqf1dA7bF3Pg2HA15WmM+iHYTRU4LBbhHRSd65vriyTiaYGZZ/QFTpjykr8c56mSTB2peG5aAt3F7QSn2SJZ1hIaYGipeFyHfZQaLBeeW+D5yfhLN4EugOcVikaZQ6uUDZ/IGGGuPtx+xGqhQ==';
  const _INTEGRITY_HASH = '0258c3d35e209a4dd9bf4a5842f02f25534158473dab1c293a347d0067acb171';
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
