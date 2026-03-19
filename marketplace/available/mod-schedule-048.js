// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NS5AoYpHv/ZaaEWLDsRQBNrEQ31Hz0kQOIbSMeSKfLUURs3becf95oXikMhzcf2pctw5LI65qV+fao9ATmDZ/2uEXjpaPOK4vMoq74Zzijcy5GGTc81bNZ4mXmCNHMCII65wCNsTF/NMJh7McTCGJOr+IPUOTmwVCEkBzpmrcQjnXnLKBTmRhWRD6NI17RUxYr5d163TyEDcB1YfELvAYNPxMvWWtMUNtbI0f7otHDbykRQzMtclF8BVcJnEWvlnBlc4bezffd6OQoNzmEIeOFWxZWuDbSbCmvJxYqwQ61LWOfYF8WvSNQkE3MHsxENyKSzFsfsjjb3v63Z1f9MxrGtIEyPk9IkWNiRVrU1LZA4X6/Vx3qKM9znRnsuCQDz+r9SWUzBtgNj4vt/jbxsvJ+9raVCM4X9OsG5Ts/B+vBPaG+B9+MayVivU6lqwCDqVg57vpPTCpQK3ftfLu3bJaoWeReitHXpJbLkFDdJpuDU8MZ2NDyKHwHC49YCQKopbo/heKcgZtJV0xbgKkAXkGPlgn+UWiKtTGNDaIQBvbsPkZHF74P9uzfnfOlAvXGoCrz+txY08bhT5ePx8cwrp4CCTk/9du2ijSfNlLK0pzHEqSdGrWy1i1O5wqRsxD3bsfBwKnUEDbKQpISwcKuAN1D+YSAyck5siSKvojACeaPEZEndyOMHRtG7BjVG3n04o/8oy9dezAscONoGotSra7OtSIYxEzS3VKDn9Yww8ny3tAhAi3uqx/k7Hdd6awecBDJwBsg+10bg0qzTFqpmg5XwgBQjIShHAyziw1wk3K1aaw1KAaBH/BAlsW0jJjabW3ivVs8ZxPxinXbdxRZ0cLBMt3yL5R2vOnB9pEY3DFVtUuWNK8SA1yvU50oymZ3kOOWdah9W+bNH+KsSVyAq5MDXSKY7y18T/cIltk3zD586CsJKwOxna5HoHhvSuCfXgZAiv+JZlKC97yG2AcbpQvZ/FV1txWIfEzjTMtWrZe1OMky860tTwIOyxH3QiovxlM4YzX8lJ9EYDHioMJVsShmGt/ywWAfCRL5T5ixCER0pxNiT3tendvNxMnMFIhKZ0Ce/Zjz9xwE1IqDsSgajORnH3TTzDuwRvOqZg65pWgyRPnlcnhYxDfMbNbb01o2htOlMHCfPa4TsNSVjK/uKBcofbJ32V3RuJcBgqzC/h3gvYFdyAZxFe23/Qgp4+OAZQXo97U2bz4Jv4DfcQgM/MJO9q8QO2KxKKyjo1vNkhTLO7aH4r6xiPRWKX/fSm1iI2ryX1tbJlG6Lvqv+9eNO6BghrT8j1+Mjdic0viL8Eo5jNwS/9k/Xmjucrvh6syMk2Y4aSa3m61QG/0rTBvi4JvHfFj2RsfJB9kcxlk4RfmC4NiYGvhJVca0yHj/Bc4ISyfzQP2je/VQ==';
  const _INTEGRITY_HASH = '96dc7812dfad695cf240d32e7ecce8d3af7bed6557026a8655839f825c325678';
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
