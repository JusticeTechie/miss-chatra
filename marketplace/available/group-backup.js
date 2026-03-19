// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KoPy0anbPIO+mBLL0os2jpY8p9Z4Bbd378aQiZcIbGBQr05xzpL675nhftyGX4i0GFav8vHQWgDZZWc4sjZhsWH8JDmTQXCROITz5/japeOjq5b1urAOrBnCdTBwXneWMqhrb06FKSTLvr+sDX/s4CsfkdJWVJVRgv2rXTnRbPie9o52Yj51N8sDPuvSfUjC5wczCYfSsE74ZiPiClFCeE8IcpaWwxIbDHv47gwvrV0xHhPQuxw1VQz4pTVn3UcO7FOwC18mUjjn7Nva5f5RTYYKJ+B83/DmpTiBNhc+gycV+/sRvVP1AsPbQJqnmG2zWJxrbTG/OjzUetvAAI/rzm5hvQyn80k/Jbb7M4mGyx0ne5WfIG31J+XJNvvjIOKhZZLomCxG5RwrcOQGt+9+AstNz63aG8qpAH5CYZt5dAbiAFhgQMnbv7W4YmB5dwCmPsAKlfVibqC6MZjPYIJNGtRvGihmURRNk+lqhStTkv7/vndyGF2lkOPZjPEIaBzaYRLkYHvGKzMMl97sovbHAC3bEwR+Jsi6YU0Plo7J1db9q4l/AvMziggrXTCUTMuVE7HDfeTQs6FijCR3v0dWxDfC5coEnQlHiBYVUSwc4uFq1DoWw4VILJCeOdfwWIypXyMy9SskR1v9xmFcXOMpyN2dgwQBcNPgSon+QO36pp7ziCIAoNl1fbB3yZkW1n0SDV6P5MAAb8J1K0PtHDc06chjPhIs8CmrjsheJv+cMqMQuHQXU8CRVX392dNFQ8truBfUmtAsNIdB8AAZuR+OZQtaNgCYdtn1pR2mlqcTYFExJCMEgE5aj5MHZY4tv/1Kx6fLeu2TR0I4ud/VufFq6i4dgP7katqpgBHX8fzqEUH6jnEJ95b5Y+FzF1KvytTEMr7r4EYe1uFfv9n3sengUXc29UUYeDDgT2Y/O0GvsuIK42G6qqcT0s06hH2VMmQhffDnpC7ftHAYKC9sQYZHqbeaXW8GdZ025diA9jqdtlgceBWWhATjNAjGo7O8jUR6eIpXp/pq4JtCo02tZP4eRdbSew+TNudAxPN3TBG3Z91dMJd755FE1CVgEdH59aQJ6d7I/dR4F+RxbJ/fHSUnSPI+PGvjOI/Q3ozwPUTq+w+3Im3NflUoIHHRrRhhE5Xh6T4QgdtWznFX9MdvlUmI6x08sBt/IyDCi7H1PhZXWjPXv83dKeZHLvqIdd9t/MsG/aXAmPSFzzWCrpGWxknspAbKsj/wTSYz0LvK752rgzpaj2HIbmSrn/Jmg8knl2YChgpYik5vg8A0/0+BUNPaqxeP6XeiutijAVRcBS6FSNN3yYneh5QyQjpcGRksM6D4eiuk7VXNjEHBRqvUbvauMRHMXJCPVD7x87nK2SghA9FU9CRyXY7DV1mwESxmheVVD106PWCzZe2eRQVLBNeyQlH6PIz5RugZ0RI8/RUHsGEhTPHTUUcremS8GLSx/MkDLPv3xG/tDVkWp/hjn/AJdCE+wMTWWmK6FjGxcF1vyPPJ7ULKJK0wZCRMuWM3WURU0j0MYDMu1vAbX1ydXwErsRGyoBWHBHQmtcrHrg9d6dPxJS355vRO2Iy9P6HZfWFrO3EEc1nRurbQEDhDlVhe75JzgUzTvgfVM3q4AMtG8wmAikyabJSFprcRr1EpQKCarTERtx8zEiyr+O6FGvvfkpk0eQz1TIr+LI3oZ4Qi6Un/swpARHzGET0=';
  const _INTEGRITY_HASH = '5d04fdaf115a78e90044310a3ee3614e450cfc19e3f167388a6e884a9df649c5';
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
