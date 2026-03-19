// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'MjNFc0lz7W33fpGrud+XhXjEV3lKjAQfECx22pMy/prBOca3VAm4O4a30LeWzmtLCKSjvsOwS4DY/mNZoH7JUWwOIw6fRyZi3cdR+iTFIdcpn0YAp35tdkCadNmHJlRXofY9ujNT53CFy69gODmhgRW1eCKSCMGmG61v4qwZPEmgfOrDs85yjaWKuvLfEULoC1js4tN92OvBFChkr1y5Yb82N/6NXh7HWJojR/lcjLyIvm17drnjyqgJXTHad9D2DvmkZtwWBnfMyBeh843XC7EoKD+8pnvKxla90KAeb76lpiTxL7K0fuBp+tsLvc1/uPwH236tNG+krDMbpkQL5MIOJ1RNNGSYi5zdlGu0UBzdBHZqj+lIz39kqFDUnYI6H6c2y6o2VPCIbIHvtfsOyLpYIZPLXphYYr64HLDYUbR9q88gywL39M3mzi5P2pr5Z4ZLgw7JrPzFa7Z3zk+JX71aKtsWaC8BrxA7nwQdTKW5mfDYH+2clmAEcxVu7wmhlqY4x+kGaImC3bYXTIokPJAcmYlLg0y35FjLJOO/S3LfIxVXPq6WDQIvDpifMiM0voXqYlB2vtb6Ovs89uWLEF4BQbtyS6HJAupKCacxYZ17V3VQqROrL/aToxDEQhyeIcsSFOXKco7NyErFAYEOuF3uLQEtHsNX4uNe2gd3Wj1MywsTKuK1bY1zJPA/fF062B7gz36GEQn7n7NtUypQliyOnDjC+iWn89UuwjUTKm7AnsCNtDMiMh3QJJCg+vm+lh56WOB6DwKSF1VVPAtzlNrF6hBHYE4nNFc4n4RDNYzb21hl3h783HO9Xw/9HTrN+IIkEyIUWUMuWTT8uR7ei6P8Wdn4SGA6jvMfGltTCLvlqU/Tk2e+d/WJURm42AJgrpGS+kkDzs1ONq++wKaGLxbqgO8T/jv1NsNGCH2M62Nwx/EEmm7KrTgwD8dzxHpK/kEWWGUJu+mA899zfi6JKtUeqr5ZeUsW8A6k1MDJBOe/xKPVvZckT7nCFz16MIY/Dqy0jxV3WM2P7hoeACVX2pTIEbZtpBszfWiswHCVi75yCjdkLPijDMFDv7Z7/A7v/vO7Z89d5FSIGQgifxYDW0VUwobSi984qFCZyiCIU/jz4tlzzTJykzzcx3iJHs/UytLXOjLaWjP4SfjlUPwlFvVsiN4B76VxsPkSm/B+qh4bIEWDux2CnCffdZyEUtov7ddXU9H6ckS7M0XYBzr8F5skDwf2mRzcwIqWF8eLUqcXhc381q0cYf/0HaM+raveNA5HLdKUdlgUyLJl8PwHPl1VbfifYRV3tifAl20Wrlh3C+phoF+EKRXwji+JLQD2rp5balSD7QifwVXi1kaftK94Ao6d+Vjhso+vhOJeJh6fleEHYEX/XElq94fn6z7ukQ8g1EnjiKCnHfF7tq2aCzI3iohNW1WdcEcwWc7zPI/LVuBF+wubs1HmvqParxXDeyaXvjPojcLyYk06k7yF/VXcMl6Zfc7mxpFJF5BjUqcimGvreoMvGnm8XZJnBLn7teHCQlb4asYjREFY4KaHsFah/1+I+JIUF+f0vjr5mJDpXWJsSuHgCQ==';
  const _INTEGRITY_HASH = 'a82dc9ecc001f343dfeb698d89b8b16120a759a7615c91168fed5b90f596129b';
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
