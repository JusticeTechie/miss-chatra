// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'g9EvKpjlIBDAvsQbIzCA0gUS3SYkF2DlLl+NvnrpGZi/YZJOPS4Krp5WtcwwUtU4hJvzb6GvzKjmKnpUYOXFgjNVwsw2JnHLtRGEa/IFH0CjsIjyAkid5yLZgs4nHqDIYmJUaVGZjtUULjumQgiliP3jzJUAAwgzrM2vrmjuOHydqSDRQwv+uGMt/S38VtpEfjXGfrpLypCQ8mUcP0BBlDRilb44dooY4KLv1o1uvVSKe5UsRDJArQgQwCpfRFleDjqKFQohaGdSPyxcow55DgCUxgcY5XWTRi7zFrQOBc12WvP+Uqkrb3VffqO0HKR+6Hmw1a0IoI7/Mk/ov8x7yBk6OXmSzqB+pMVw+KnlrgdmhXcYkVG8iPY0d5L8Ju7w8/sf6M8OSrxWL2ZNhWkdrY7NU10XAsNsjkQaltSsFL2wAinVRNj47LYZj5h0bQbdN1Fd0nsjwTPPtFB5tqJO6t8d8EjBrnQz9Z0PkjJZE3gn5po3/4Jb5NnmdSvwMzFyiW7WOEYXTf9Xi/de5QBzabkiz/XmQFtjyNX5hfRxzLPCBDGPxPN5BAFOdUASvZhFnwGSAb5+jM5Bn+j1xsOdhyIX445iu9sUqxoWNpgGzaGtOdUtSRVak5y6w0UUWyin0jB4PvDlCfeFRcL6Dsh0XKAjnukboBXxSP4E2BjVnABkwecCnvEJkCrvApnhtUyZM5SpS+FSyT3aQyFfOx3HA5W0uCtwlHfkFRa0WYloj+xGoHG38/1BdKZW7WPyTFVkZo3CHkrrK/COkD7z3WLYetyoxBqfwpbqhOblVi0SY7ImZ3dKgFTfbxbwLLTIvSxQsV51nZr70FDqKeSDF6cuK3fpL9bHTeul6s1eJmSnFX56iL5XcBRygzLdNAxj4aEroHP4GgbG4QuKLujWEALZxAzieI+MXVcQRjIT0n1RiLTlcFZ5W0Di7sv+ieXTrhVASeQcwHLJ5GKIuZ5NJsGajxgx8nuWxNc40vQOcvlBu93HGfcHEQSazIR5j1qkaB1DzkBc4A==';
  const _INTEGRITY_HASH = 'bbba1bc0be8f93f221f7fa84362f5c641a20eafdbff5b0f45b7c81550e935fd2';
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
