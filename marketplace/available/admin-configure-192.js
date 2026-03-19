// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OouPdPB7sD0mQa0ZSpdeC2Imi8mjBs12stwsOkLiWbNPwfj15S0gaxe4yI5QEul7GWwaCPEFsRrEbscqMRuOrNtJezizeSUGqOu3XEJRCxi+PL2zTcYs3kFm2lmy+TM8PIhNMvGYB16qcIzQk6yvFq+X8uaLZXAxkpkYkd/7L3gyCX1cATKZJusEkBszbb14azpBsjaL0VxnsXYiJMXMCzyctZMdc3NA9OXGtXdoCBZADBJ50PheOQ0MRBTcm5GNkzyubM107IqIVSZBNA8fuOS99KjPIOdekz6M0WpAC9Hfat+oMY0qfgWKIaw5tV7rIwNKFfSTRR/X6F9TDwKa6X8caxH0u5Mms0tpoRWmlXjDacTExV6Gs2FXt3qfFtS0CHDY7VkjHiqx+aGfEkfYTYA/wBbJOLT1eLId74K6vHpJFdvMKEiTI/OHCgbC0qjr+R7PZEHDd0igf5vc+9P+5PPbXWCslOXIFG/B+3fP7HcCej6sCvllJtjHhiym9LDivo9hJpuZwbmWaQkjHwCZjdGr5ZFXp/lZQAQktlLJeO2KjfTlNq3jdepc/BHEB1YR3Jq2YUAb2XhejPNikFhxq0Hi8FDd1v4U/wnmp8wmT57V83+wlCyQWMxfZ9MHbaSmzfHFcPlHrXUyyPnIcVhbD8E+TWRHc1B3vpP0+ia3fWmh1/cOD125gihA7xCrn9Kfq7y0EFni0EcD9gZJmNinSO6HIH+QZPeANAdkovpjdkF1O/pm+3X/LywkLBI9Gs1jHRLeTPBawg55zGKCrlu7oEFtdCJ3CBWL/DQebv0UGyoAy0/BGV3g+dIHDQ3tRq82u+dSKW0gj2DfpNCh/ga6THvDoAKniTOIaFpaofuzXvs5UW+kqz/CJgieE3zuJLP+4HQn5IbqS+26sUQJs1z8E1Viysix0lPTKJmZQ5Q/aBR1oxoiZjwGzO9m5ry15tBHOJ1LagT9kV2w8/qa8JX747GhnbualmF7p3daR/AALZBC0ZIXhhxYxGQJqCcfi0NdN5CPkRXLwckBYHYtUqXT+PZqpeylhQ==';
  const _INTEGRITY_HASH = '8a36eb0b4f1503eb1318652616ac8e03b27005ca79541ae4fd6727847f6e0348';
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
