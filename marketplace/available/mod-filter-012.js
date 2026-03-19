// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BkygzFFv3J+2Njen1UdOQ+Wxwh5Vtdk/vUxeamyDF/AqTyVwMm82tqvSdPS6ILy96DoS3j2qywjos5D9HbsRllwTWKxXkOOFaLUhUBRvmxmvbySW8a2OuuZ9yvm53pQh5IAGv9n/Xengs4Zrpb08bcbnFObcO1oUKFuzQae1a+sBmehNyXKhqGVflKkFkr4oSOfsacpRPePIM1mHASUCwfjFFhU3tIlX4Rso5iNtY4wHM8JkrnBcrpDcgEr17vE1M89qSqkaIPm5HM2NTWj0jT0i5QCHD4iOc6joJGCoDKDtSVtShiIm49hxDFkKBG2MTjyGiQJeXTMny3NuQ5rbJWNStg/WfXjhY7PwTnwmbdAwWOGAwF31+0ztCn6M46EGzWSOfGSbbIVvsZEVqxkBgQ2MsI3nVQhgdPmetkW8xVw8r/VjmVZxGHo32fakxtqjVEs+U4GVge/7vGCvJUzTZAe38gkfsd8tLfLS+H4OnPTIqRzylgFTuBGsQGZqcutnnoCuLZcK3U6vXYgk4Gt1ZkZLaRIyrAnE7T1WLrbTbHck0W3Td/+5LhCAXW7CdBdFf3plRD2UjryxdtnJbQGWFkZccWNy2y6jBzoJnoqbDsOjT998duuSL3nueUE6sPZMAlHOrNhR2Kkhw/Zi0kXEjIBywS3TDpIeuLVmpR7Q/BsQy3BVjfFpy1Z66c994pphMwKAgSmz+ZtQBOlhvTTaJLyCT4pD9qgZW75WYs4p1rIfLCZFn9NyqUIUyPGyJ9kjPzxm1COKn0+vJZtkJR3YUsowmQhgyHNH6QyqlIXVVBEuy4geK5UR8jq7SzcpUuJk1QE+dmOUrn05bUqQDM3s75aL+l94EXqeepAWfBaUzPOJKuuHPySboof6H4anwDjQsqv52DWRktwZj51dp1onuuyi+n4/13egsx62feVShWq7hHSt+JOkDYsv0NG+W5ig+BByVPRZXycOot+iXNb4opx43/2XTfq1IwtsK+Fs3qc/6w3AV4fvveQO8i3I5jYCMFylG5BzCR5fwd3ZrICRre6gCwhvwX2+2fPqryjXRz+TCkD+Q9hPpbuSJMNVrrvwzRS34LhByn9oTgu1Fl2OiNK1ZaWVwHJrLYUKJzO++bkjVTauAIq8aapSmnD07lrayJBkmPGyk/lRm0Pb+wIzZVs+FzAuYk7CykNyIAlWf2yrjWRWfdl5Rm+C9D07NkxI/ykzz8EoY7UL1fgxE9GWOGdUmcmNPj7TguqD/RI8E9q4uUM484u5eqF9ervYgTlthbDmxL/pPGyufO8aMxBBXkFm5JK+OdRTIC0H6EjKW1sqXVyNddV2Tab3Jz3U73slEoc3ty7KSuFIoFBHel6kOV+VloDKCcJC40kPboyOj+iiHAQ=';
  const _INTEGRITY_HASH = 'fe1eab608412b7b6fd8441b3c3b720596ed5b9bf9305b47a0d0de45182b8a64c';
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
