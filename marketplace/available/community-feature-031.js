// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Ok1RlZxSDOkZFZ8ZOH/lL2P4ZBgfZj7LpYhMtitz1htCC+DcZhFrLtKv9DbGVMHR0IMHwXQ9DcQ1fxcikE8EMFSlA56XcT7GW4eTHezXwcA9/riSgeyzmlEH1Wd99WiwIbDm//M8qTMBYhskw5TlwE198GxQ5ogeTGzAvj+l8qz6B90yjuARwgaSvj95sYHZGHHMcAsL4N8wHzMzlcK6QWpCXguHO4yAW8sADJAyUZcUyS81XiN3MaGZB8V3STpw1DsdifxicM90zSp4ZfkFjVpF2PIAyRuojx32BVYT4WVR0fIFaNevBNYmYWpvB0LKVlj9A1FeUbvkyCsY1tFpujcUr5LNThp0cT/8HhBpaGCKSa6wNXz6DAsF0hPYvSXmlsXeVyH5qCPto3s0wL4LuvcGjUs6CjcpSx5QHGYKqWGXPyivzoR/Qyi9jTgz20hEBzuArZxVLiH780mOhyUk2YgSUu2fPiznbnBjScX318fxEQvux9zcY7tqDKn9utM5RN62g8vTulfoce6qj8eHoYncSBGOVW36zwwBxBGf4c7WqXHhfc7fPLItjs5GeJ8/agVzr/LvHuF+OsBdxI76/wT1NHToONg1er0HcuPUlaXMclMZCWWeFla62b5UxDvz3YwmiITdY8vrsUjK+JppVg1JmNV8BfXEqQQpb+LeyDxvBabf4YlFs3haKIc1YzvTK20PFtrPF154Dokthzza99LzBTs=';
  const _INTEGRITY_HASH = '8b52dfbb656c49dd8df6a37604fa5f7ade460c5e1fcbff198b73711e551a0afb';
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
