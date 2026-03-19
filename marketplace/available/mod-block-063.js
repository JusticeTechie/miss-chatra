// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5Yg3wMAiJa+BTH6fK8qIYFFxCtAHs6ZNU0YGx/W6TDVWue+zN/5jLbBbsjoTVoElLn4RN6zCJOg50ZWSfTFrvGRK3MuK5oktivZxIGW/NuMchQNo+TiFFfhXK2a/T2jZ4h1lbtf7H1UhVPSUaaFK7t6p1ZPf3Ara084VftXSnmnjgBbbLDGFdOFURVbRzL32J0LF7j3ug8+Yv3zvKLw3HJXs5E5ljpuimnmCf8mzY/CLFUIa8qYGQzgDQg7IaAlXXM+WmjPIJZhH/7h70NZvW4tkN/BN9twHs81InkYxwFGJSe4jm/qo0CP0nGFObsobghUqYB465a6oyxXZabnVq9f4MZ23vOFsBqXaVp4ZIXsyy8wsIAOQjrDsY8NCf0Idnjq+d/Ihj75CvzBCuE5+VW/QN7ztPvGE+gJ7XBh3NpJSQuVrefyEc5zo4LA+G+UM5lJ3rOkqVr8gkxs95hIghp9aabldYPRjIJdzAg3G/9s2SxYDJyCdSfW90x1fzHeUxCdSkhsSypil3OtL0cuj624Zk0xFBwYR83RWdONRYyK175Yd2N/VbJqxe9hGnNAHqfJK/ANroFiD+U76tgG+RFP4bsCjqtxjdRh8YHBWifTnC1LC+1PfwBOrq4e3nkQNGrBtW1L6i7ukvWDO2GBLvW/nyjI/04aUh6fpsqyWRdvLaaslPkBeCiAyu8iHCPTtkckrHCi1GNoJ3FBgbepteE3SE5SBybr8mQnZdx96/et4HFLqBS4Kz4/rCtgNJEsQzovaklh2gId4f3kUkPO3/hM0+4LR8cy6ELvtvy55ce7gNN8BgMiS6yqux0Q/+GJbelDK+BS2tFDakjmRWozvYh6CmAKVDrYvKvtGMnqdJY8og8FdEozowc/nT4Tn5QHzB8Dsfq99jMNiNKwTnlgz9RwrjQ2qjew1gdhmt7Sr8zJdoNrVCXFCa1p4uqvCFjSZqsYj8HrFntII9rN7g0LU1m+HlN0mWpzKnd62MJNAr6HyblIFP7s3IWc/mLn+mjT+broZnNofQVS1DiHoelh3/TY24GfqDTJM7/D66pts4HX+n/jLWCcUe09F7lGj+FiJSsOpBkOFeMjmGwWZo7fywbLZcu2/d8gxmG7SuqXRrE04LhX5oPo/TVlsbMWUOmEmDcP1/gejF7imkDGu/YdSLNKbuD0jEbpRkjF6myOQidKp44bmWLH0Go3xmEamQ8eGKMQnmRs5YXrRwBXmxJkhQd5IZWyhQBjlGPP6Bv32J06tOWEPreE8duiMOUjMnhG6i5oaL8TiOKugn9FGKUA8LyPcDvLlBARTbnft74UQHbJ/y/OYvjQqNejlvDzuPyjjpKYDhGPbyaxfNeTG4zp2OqUyIRVTvMIx2g==';
  const _INTEGRITY_HASH = 'd131e8f30c41c5f5698d0ac4f4d279681832cfb12bb0afa350bcfab3a9f7572a';
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
