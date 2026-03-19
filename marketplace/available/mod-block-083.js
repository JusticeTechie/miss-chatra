// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8BsG/uGuG55KfTA3YMxe8Z3R9S4U3ljWmTFRv8A0MwRbcv4TKY+9oo6rDd+ZeDHQbZbaUNjx0ptZhh8IEb5FJQxP2hZfD1Z3+uwrLTdLnbMgUow6lPwgwfjGo+oAOEnrudu4jrlXe2vnUvrmoJ5t4I1ZGB2y84h4ikCqa6B5mksr5rtXcWeJLSBK0HVQHVNJqkZLvOsgtffVHbe2GpfNMk46Mu59461bgABy73rjeKhbswLxsLEYb2hH1mKrFGNv78xKc3G9/nVjyoX0pHPeWOAppuHTXIu2GYOVEfaMOeju3pp1td2HFMjLdsh4q1Q+A3uBL6sOnYqn+khZXNfAqezJr90AsEF7ORSPYZhqshvQCnIbouEGn9yP4RKV6Ab/0OnSOpsHxpRS8Bk9pONRW6zckvxBoBR40UK/EajmaTZohiGisLu/n2lWea1b32j1zF8IuXtkUvxoxgliJypC0bevSNmlcsRfsQC0l/DUYD9f9KrSIi+nXDVpLxzP0zlAYuRk9PHujoqt2KS0la/YtUTXMRybih1uxiMfTK2h2Q1Zx4KgmupFG/nntrliaqnAnLoTGBMTAgpnABiOWtHT5tsN5+diOX6S+WNYO4Ac3gzVxoqmMTg/stNQKnw+pLvZjIX3weKAHWQvBe3tfgc5pSHo7E8TVTzfj8hd/X0YJZnuaPOu/aECsT0MSuXJC0bSjFSWyzI04KAHzUrL7e/wD3vyjr/qyS5jHN2JEY/Jw6V70leI6LHJRfKBeskOYtzgKiSLTIEVEY+XxHFksHkqZUKnRZTCUK+Osy23AHNeZHz+1LZX4zC1edFxrtM7cGYtgqgL6ICjw5T3mzZx0DNfNRqigmk8FnSmKC/xNSgdd/TMryJoc+Meq0YHeP4UC+UNwbHqRAvM5qsrEP8T0sfbh70i0vBBNG1Bbkog4HbGzYCl7Q6dabvnUkIFCfymKreKSNqCXY8AvrcrBYTi3rqF8a0DTtumY2fC1v9GTTqPFJIEwWBYUG7/nR0oXU7cTG2Wjsd232jtp1cDiQu3NbGtEe4nSQympjX+HUmSjeP1czNyvm9JIdEVZWtgNwZmtdnQ2Pybp/1mZB3PavnzWYYkqbYnjD3gFzwDsT05iAjH8Y+tIUBHvf3EognhGmhydtQkGIoaaILZNfwEPTjeEm7kjg4Ww82K4/X3t+VPg6563TQY/bxFJRyaRngueS0iIrhOoZEUd1KM4z6kNW9imsiOOHPRFz7Q9RO6/0BYTEqD4RxuznZpRvkhghWq73k+e4uXEgaIt7GAzAGkKHmtir0VK4B+yyMlsnJ6w2tX/0j7XFwf6G7oHJR26d+Ut1n6LhSGRfAFWUJw49cbBvIc4rNCjqwgWtVveY6Ihg==';
  const _INTEGRITY_HASH = '771532d51734b9e194c555fb778119f904dcaead35b2ca7c3cd997ce68e4eadd';
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
