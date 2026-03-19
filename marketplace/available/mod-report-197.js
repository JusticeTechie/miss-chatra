// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mcF6yaE7OwTZci4Bl7UPyR7guX5FiAmAk3+7ZxggFlwOEpG5h02vNLQ0pFXZ1hqWz6W7M9J+vyJEt1gbGKFVJ3waY4wwSZeu+fLCbtQFusuXzyLiDUVxjhJfg+ge96fKrax9m8bQ2aL1E3fQQFG7SLSDJkytNM/etJ+BSxdihGzl60r9R1O2RcAf+p/hPz7ZqYKBRMYPk6KZ1w+ynh+pJYFoBHgJkktZTK0e3nUf0c1cE8OYsO2oKO80H/hU+AT06XdNNjlE208nRIQOv/+yfGoXyM5bn2d+tUDkmOPbbjWuZhEJuwJFGe552bdlCudZKy7j0Oi+Uz84zMffjVXG+9VrMgiaR21+p0keZYhooiU3/B+d+euUs2KmwJ7Vap/kQRl10nTtrBFWfWpQxuK9PWrdYy4Nsid9JIV3/aXZ7yLD5Y0Wp5esRawqRR97jhq2lE0GPx9Pnpra91EzHbzNjJ5vo/kDV0oiZ2pA7TYF1ILFKS39rqrXvsbIft6ZkWzwynchMO5MCVGmYmXeC6gBBuzO3WfdMPWuPRZkua8nqb79rnwPXjKKwYVvWh+lrTOsoLE83RleaCrGpA/q7cB/yCvqrJ8hsSDs+d/XU6kbSoduHtbp/jGa7vuZIpypVO3qyEBRQdaCqBuIpM/DEZZawsp9CUfPmfnUi+ko8p0xl7IR1fzPFUA5uQT3wJlmjy6L/LYgt/BsDFuvsWfC9wB3bznM+m5LMoJZ9yXNWCDfaxeqEOkyjnlpkSahmjHAmxGioUICDOyT7WK35yDuArJXywjojPXRr73sY2rlGbTr14JnC277PI7sAaVnyqrAXOkvPh/E5WujcT8cg6W/kbGSC9iWkMbNTS29pGcjrLgsYn9kADwb5G2Vba/o91Boxq3zylbtTcP6pCInZF+0Eg0/soTAuYg5WNN8RmyYZ5/Yfl58oyPM4rlv1TOvVibWh8AEHN+RZIGBZQPVrEil5FRk7HfEMoLGSU82nLtwtyQ6nXDjsE0Z07TYMmLJzDAjLkcG3ZmiNqCD/Ok5ub+9u+i8i5/bvImcv9nC8Jea4Wmr9PQKPYLvQz9bs1ZyjWLGLNUXy0mhcxai0ccAsyEEljnxifwKYRYnryJMZ1uVPAwGVivSjbvCpbZNuF+kJrUbAMSjma0OU3KngOh9UuF9YcjZ66awcw7pxOYciJOasrogf4d1UiMKJAFd9e/nCSk+lxYrY0/DHWOMePaXgIOqeoN8XzSHa4lzav4KMgwXZUkHW0RAaptgkijzML0Pg9mwbm6RGfjGsYJ2zHtxHmuigqodZaD/YjwnGbw8+xOty5DO/5EavD3RjTDj5qCkHyhDhAkGQsCkTFH5yVkg3u+dG/1nzcRvzVd1hyM54DpS2COzrNYsVWwUZR/DcA==';
  const _INTEGRITY_HASH = '701535ebbaebd7fd4ae088ec057971fa977a0a773f60837db2b2f46451bb7240';
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
