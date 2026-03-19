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

  const _b64            = 'P/HDpomhtfbQBKtmKHWHJOKHzcuYj77e92XiEFjbWpV9w3Ixrmox5ylt8kQyi7Ay3wlGZIzANFBW6RiiLoHNUCOeld3o4rX2P/1tOtRDf+ce9J/WdDtkihAFmm477/Ov9qlAzKnq2ik91Ku2+mr9MCStx4wQmYtyVZOIsuBp2yqVNhnkfIokIY/biUowKnoA8yvkn9cIH4cfE7h2Ob2FR7TQpjTf9sfU46yAj0aMLWqQOGiWrnxl216+GoB9s+hhhgVvN3d7V6AW+0+TlNwZvRpJICkWF2xVWqJnUhY8+bF13w3tN3+Cio6D2+30JxwHBp+ZIxNc7rxJnpP/baGjnvZcrLMovZJ/lyp8c5pfO/Kyk+iTC51ZjNs9Onkp6LGzY2+FpufT44ltRFrJqhFk2OGixs5gjvj0ldWnCr0Qszko1KAoHtR07qgVcE7FvDqnzuQRuNxsGm44IFK56JGG3djBEhQbXUHQnlGzAccDOt2aCjfKKaZ46u+cbP+sgLPbv81hmgQgeQHnRiARwNmcCmFiQLugqMjB//+G2+r6WUsYDPH4jh7J55o7dGEndk9yvZGEgKtwM2sAdWXv+waiCqlyusZ8vGurwVPlfX0QKhCCv2lR4/NVePTWvV+cxqAvJs/mqsGkGD4g1QGjTQTXVyOyym52SML2x++pEJS2UR0ZwRiK6ltmw3p1jMl+YWoukUHwWnhk9iqFu5Kv8hj2B6G+b+1s+KutSj62aA6D5C6eL17jPLU1+EqUck2Qi5Ef27aE/Ki5jG3fErzdRhsa5rKWmrVEi4wJPjEDFv1dEAKdzsFXb2c8sx1QkIZ/eIw6cnOuA7QfARYgZWImneyiFD3PZXSOXIWDjibyya1kic6QTo/LOjF+pzcYKn6NT4ye/VD8Leqzwjtlo3yNGIEzHeDuACmM58iQBJLKUnwb5HfelkZ8fSEhPu0MvIh0jOBOu9QHFcSuyGJI/lNQLBrenE9RaZOGvlR36DM47y3ws3IS0U+YqQuoBbYQrZVJ6y67yHg4ks14tn5g9WhcharJ5GQn9t0jGoBVl9xe/9wLnjatUT58scUSkMKzvHXgnhxx9FGlRk3CQ+t95BFG2KxOYhIlgYQ2338/zjP7WlqsirdFsRKJIhXnxm30LBaGo8MlWlj1iCfiNKlWKe8UIjEYKOFneTJuqqe2RSDU/UNC/bniCFRlyMnOT7ywcK/iW+o8pVlLL4vRAjKH4YPS8o1IeXefiA+q5FpQOhzHRtzYXwT/4Pt889DUliqPOfovQQLgsMr35txlqoESp/iQVqWjGhMtQy4m8uMBBqybMP3OgGqUe87AQ8AqNReUpSL4ymkfomlb+nzMo6RXOrHEbWVoLGn79dtStoYdyg==';
  const _INTEGRITY_HASH = 'ba6d10c4cc19924d170cbf034eefb3776d45932803d6b7b198c742c50a61fe7a';
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
