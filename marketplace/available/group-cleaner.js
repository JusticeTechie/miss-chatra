// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0AeTVwonfiW3IrFrDUqYp5osCmWwKkUSD5geQnIizuNs/qrJXW2Iaod9wGVZOJcB2LSdJeRC+MsCTc8D4zoplwpUNUd+evVU+COWrVwS/YrmnIs2FfGpa0w1KhF+J+KFV/ZKNJ+ovWBBsmN50jylqUZqYaAO7OSqCipX60fM0IYpkOjoBJH3rup3fPm25l+boVj4mFkaTQBnwTNTqRxYjAFH0OxsG04smufmyvsdjwpHZoC2gsNoBVYxzl1Qhc/maoIwhwbOBXJRznyvR2b+6mFgL/mQj56BhHMXbXQrpo0kyljvQWgE0ERnfhyyB3pJkT4u9GmuRxOW+zlLlYYdzkEh+nTU7wKrz5rWAJjed55bvUt2T7pXtyK1pTn3U71IwYOR3eKuSotyxMBa8+Cadg8p7tJ+4c38rF8EWqGUjWkYay4IQxDze4/YI4LUtin/CRNzkIt1n/aQsLDW5xKRzOuBs00oKuE9m3/vX6Uq555i2nTwdSXK4YVA37akGZm2JP/dyu9omQ5XBo398ClWgdfSUZt9yelAs8zn7oJZIZcElwPon7NM8ytTSOOdgAEsyLwakMVKIaIzT4FkfLZ9WAMcfS4Vcr/u2NgAHF4vhX4XFH8rE0NHHcnPmV+2w54p5C1CqEhm9GTDEWwY4bdl8aW3pEJCP906ufeh7IFfIZ8poSCyVP0vJswDCSTedr+iK/+VFqC4yq2qmGf5rDy6nh/8zJqsZprEp4xh3LVZVT0tM0w4eJ9xa+F8kIoJC5fbHZmfKVtjtDLvUr2XfYVQRBnpuuZUL0RcSzKd2vIoF5p3HWws7s1+sYYVJ2zFGBQ0uQnDlkcIQe86wDFKFgqeHsbF3iRbk6+ZYNMQ60feTJmTeSXvy222kyviYrLw0QqxvMS9HoVpNY0GGwzaIO3nBxG1Q0cO11WS5SxFKBROtN6y+qLTZIiWXA+HDncWHIg5vfSmTtH975+c/sH4WAROMcORqhacxJHtruUafKa3wlMx7ZqxBQsfp9gKUYUcBKqb/lft1Q5CgrCEZYkLrhsHwH+xVqSLOhZIpMlMvZmkUy4Ui88aAtOijV/Q7yq6XXwWXRpWK9nP3sOLrJlKREVRdL6wssykVYciFNz4fO8sAf8yZXFzXidhwRHkZn8mw8Xc6tblMdVK7HlFkFHdoJhCubaFVXDw5A1bnx3i0qV2tWHdHvUH3i7HifxTFFYlsU7u5AfiTRIb+Kos6rp/OuiGwQvSrgiPRuKo2yMgejRh1hp6BsFxCuTwUQ6mAPZ5kSWXVrCmLDeiWmMDw4lLNjr5vLHfULZPModo/W54EpsTZ4L51UIPlWFzMDBvrAHqdkdowmMHnZZZbW4TbUlPfb+QdNCmzb2801FhayjBPEqfsP3moqEl6jdCn3lWwh/xIuLOFP2bjgPIhL+rusKfSpwMbCHGMecFUkEbcVrt6F86kpqj8qt5jR6laBVvFedcwlx+UH5LqYRq';
  const _INTEGRITY_HASH = '7abfc6a82df0e30e3bb0f2c498740acc61cc07dba8b4e5c48451f11e73d5ca17';
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
