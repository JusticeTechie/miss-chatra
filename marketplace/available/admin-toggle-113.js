// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'E0SlIH6Ot6UkUNshTgXH3ukZm7q2k+Os4DtiQJU9RqIoOKwdtSui6s6CxA76FGnUs9jFnmats28UaBWjBLt5TUIeiK5BiHczhhTnoBS5OFX1W5jUjqEs+glh5Uus0yIwLepoYlZuRm7rfdLdMjVN/nWSbV6FWO2F3uJgTgU4ucKn+Tm2oFC3fQJNZxLoOmiD83VRfhmxAAQpn3lQr4bWgxkvWDCoRbIW/yWZl9wOSfdb/RHndJrUYe8JzRMkMzrz9W24h0Jd2fbeRn17ATOUTQJatdATYyL0Ag1okeAgqUILCsQJ6AkHioEZv1kf/UnPUMXZ8RRo+DWFiIPvxZVQHcq4qepcOC3xYflHbdSMIueguMS7JtkvQ4wvThJkb+Jms9uaa/x7XHBloRHrbVPgrToA9rXgNVHWGEEGv76wpN35CVAEYckofp0kCzdwenD28NDP5VV/w2QMRcKQimKkT9TZ9hFQndkRSv96A3Py5q+ZT7+Nu27K95vKLiy/74JJnDUlxlZabSJtK1fiZOv8l/fiHc7S2Xs1ECJZNIidcnFkgCymuqAPNCtHzJYcRcaNoSYpl+mr+RsdjZaYIp7dJ7bpQqWnrtS+d8BNXIwBxKebtJ8MAk9g/cl0sSi1zYeboSTbExQIj2rpNRlq8XTq3nyzUb+HrUzUy4ttTq9uvlEhYFMn6NxsGummXuftqbA28jK+0XATHJHWLG7rcpO7ae2MsK2VKiK3iN0FQJHMfe7GiWfvUPzRwkpIj3zGsuhVlj0SAogLLOGV0LOjGhtJcr9T8W97Mm07rlSyWNJMuAEUvFDhx0des+B8o2FarzPTXSIHBOqKe2SS01vkwcCTUX9Cwc6qxUQmHYmx1tPDtX3zk1Q0sNLYBoUKQqB4okwA6QsEkvAw0GHot+gOyJNaW5Y1GuQt7Ytz2EYj6ggiQ/B4J0qUY5uOdYE6B8e+NLPtdpHjf1F0KuKZ7RP4MytVi6yjrl5OYaZ7vZmvya40tJ1c8Osl7FjrMAw9LR+iz28sdQ==';
  const _INTEGRITY_HASH = 'd6eb77ed80d03f93b34e391b1af98ca72222f1009675ad535201080043540354';
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
