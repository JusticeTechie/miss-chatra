// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'K3wd6TA4/icoIZLc155wBdGx8jH52Xb8yqhjhuamcRbX9sBOZSzmpo4NcHN9CSvl0pqrcbBwR2Kq8Cn0RL5hVlY7WjhOeGQzx+8BzlIkHVe8eHLb/x/AqHnJhKHYxLqRORPcVNwGitmxmIC7RxVFpDDW4W9Tb2Lc+/vOWK8M9aBRPjFA9qmPD+70DUNuY4zsPowOboxJTfG65Gs08TacGpK5mRebJKrRx493ELOabzFlX1yb3Vs0M1l87xSzwfgsVpOYwJhV3bEo1HIAsYEgGA35bDAIYQJGI+D42qErcWfYBhmKJBDxAc03hHpuqiEg+SqMdx8OAMIePVtEzc2H+P1ojKQOVimSZLp6+SbKH21jbFi4y9aP0Qg+6DD8YSy7mICthi7Np4flQeX3jDDh7oVMoKKUUlT/JWfGLvw8Gi0CELHz9FEybJlHx5C1vN0Zq627Zz/guJ0f87A7EHdAhDWIJfw2VbQZQgG9w+3DxKRhlATNNs6qCBGKXQlHraMcbJJdgXr67TIKdUUqmMKwYflsLABN7TEkI0C4TDzZXNk4uht/VIvBNz1wpHds8zbPhCQfxfn6G/ftC5HOadCKHzBQ1ZYfvG/eT11dlkbo/EY6G1W/0UDgcJxqicjW2YWqQUhnAUpkfa707aiJIPsGexGe6aQBkxs9flOaDhRbManH6YkH+dRtGkQDMxCKHTgyEfZ4xD18Pe10vFaLvggrgucsV0Mq+88PiQJFxNEollrtaOa+ZdLJvktpEK1hrDPQH+Sgw32rCpiz8bLqj+U+bmPXT6CjC+U0joiIexTHWGjysWmj+pSodG6ipDd9fQXqx1utkvRHiVfJux6eiKGxT85srvfHSkHrqMxtPupO5Gdee+huwx3BUUbplf8OhGjbL9E5WFCi4H5TrJwTzI8CRehNVR0wqOFZEH/neRrpiuQ+/BW/0FdXNUqOMg9mN0+G0N9HlgH1RmXmqApMcytYFtDQ4mB7Ut5We3bV0WSN5S57muIxsQ9mGtjzfQF8sx3Mx9eoMYjzKucNpsPVcdv3Q/DbD+SZh47RIz2HmINxijitj7Xkr9P8PwMzJPU+wm9/JedvAQnKvO1Z6AU9fMK6GZ7Fd79RVKoUEeiXEm4zmy8C5N2zz+mO8BPbMrjjRWfcP1Hux5nWfHY29Z5X4fshaxmCp3dUsgIQjeILNC2DLUf4VW/ZWSAT/91JukZ17gVLOmdWeyjS6z3tMruEPWHWZNd72CVJU1pT7vc2Rd5F/bNeQftaouR5HN5uRKBexXHpYcqoUusSQUG3+b4B/QhwI3x61Ez++WbzZQvjzpVV7zsx82nlKCdtjAtDa8EP280LhBZAd/jcLxKLFiAYCBvawR46sqCXpqIyLediyGrOwX7S6NHbY1wTYtYKMAhZonoEgjpBoqrbb1SaoMitE4Myn3FAIzf4jsK8SNPq3ysgKPAbLo1QghuKcEhML44dj9Ej/M8A6AbPzSKxLJdMkkbCqhJf3FqrC7JvudIt6vOYO+esvdyNLAJG2/3FO39i7hJedjEmfjtePzz5O7p48MJ9SOSuH+hiAQtE2XJmCP0lZ3KVssGdMstAkNY0+IRqhSs3RZmJXMKFm6FqSdj2VcBy+8RaS40PrKy7IyD44GJBcEBg2lY5kGzdyueJOTdLJfJA8WrpnpUpyFZkHRrYXJC+fso59TvflryY72TVbCWma13htHyMLp/k2YMvnVX3j8E8EpJSXWLLpC8QQ+Wa1+W9GVspWUYHk0cIkp1p840PoIsz/lwmr0LL8Qn48EDQVvynXc6svWg=';
  const _INTEGRITY_HASH = '8b40bc3dc45b438cd1e76aec6c0a0411c1ae9a65b97e2f46a31949670c876d1c';
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
