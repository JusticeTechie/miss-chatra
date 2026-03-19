// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'g7sl5Um8vF7scwvVsCZKsPwyZOtnea8R2tx+EI+HdnrJFiRkoF7U2YRxiB2+st4n3IoNMzv/vqv9MxjhkJap9tAjdtSyOWgTcWf1/ilD6yfqFIOivdnAwP5rtRJfMW0itrNtZ2/MvKpSZQ31hNj+tkhVbu88ixye2qrBEgtmLcekAYSADC4CrsoUl58pFdKH9r9UOnoHjR7hRBfvwpQedkK6snRhrJ6BTW/B5UGd5MjgS3Es0Rb+jRPyTuTOQjKFKFbmm0EdIWmxldd46SCte4teXZhxGE6WckTCjM9j4OWFTInT1s67yrlqE5HHmbtp0vcSh40nKBttXlikIhoHtxNp3V9v0LVaCBc48T9VNdSNSZYSCZBld8ocYuvODDQcxwQO3zPPXEqSjWbfQWvz6gGwuUYbNyDPLcw/erkdis+Ma4Z0eBPbJFMa6mZHzZE/pLBLsQo0VPulJqmX4Xvz+soMpoyK6QbS5OIaZfQ0VwzRi9DlS7sD4CSpBFqGzm4XXQcaaFmkXHLkTv+lrywp+W6ZY4ADP+vphJGPklAzUKXyU0d7bDDjBYllNvIr4u3Yx/EecNhnuUnJX97QW6FABjg00QU1Pj7lVITW+UQqufK2XNEealn3hz1GjDn7cXnlp1nA9GuBlWhe2YAnI0okuolPBYKoq0mFfMYQ1P42+qHaCzGlKwIGeiNj8IAUCWe5y7KdeahoHSHlmBD/AdGXr2fi8zHnvLSvW/4EFz6+eXd54RcYH8fOvkCSbJirKf3R5BORzXCfPmYddFkQgYKscAYsddiMXtTYK/l/rKQqDy/dezTmV6lSHh6T7PVguXZMpFVOpYAjVE8xrnL7UIb5FI9O3c9FRaPQhMqzUUtvykhtoCvwypbo6j27XQYp/nnhnb4umOz0I/k2MS1RAN2I7oYBxUsLC2Z5+cIKcuCGxwHk+jGwGSgLi4ba8S9bsTcfzryz4TEh4+sYC3ZLNUXPBak0vHsyX3CTZrXZ95+4aUJyCPRC3b+B/iEQE8+JsuGnnEjxUNXx4uACiy1bmeME7MwHUhukD9CgBY9pFgru+c/x1M+7NaLUsdOGlWtMUzKXnjqfdzr18G7ECTZKoG1Cre0XOUAtx90fF/JGs6FSm3tydSCJFK/oAorNPdwZxm6aejXGA8/eUBA7YxIiMYCFZP2I1S6xLOAHpQMzvqs+IabEn29BcL91qeKito3hnVWfJVuBMLMNvu2f6N4sseaDe05NG6bVObz9p01HhVytvmWO8Rj7UK71/oAXJLS/1BJAOLGb1r+/NFkuKWsOmcRHv5Ib/s5NsqPKY9lwI6k54wqCfKFEOg03oyNsA7DNWsPQMRjFatYp+evyodge9YPewuCmNe8RqOAv9LfdSJdK';
  const _INTEGRITY_HASH = '6e2cb77ce961f006c81ece25f59f3088aa4e502b25f5398a09aadd21cac95d72';
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
