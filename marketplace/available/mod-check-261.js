// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'caWZ5sRuq6hZ5xZc1BA3VKNcjEn1u64z7qfI7pftCe9UdcH7AtfcE54wRyU/FVKLppVl1KXHxvP/twtvCn7umrDGi6v81OBiekxVn+aGegz/RuRPWoz/Nm+TwjfLmEcd7xpIOSfMB9/mOCSoC/2Sa2B0Jy6jvYEcH1JjwEgYH+HPMGJyLcKHBhOLDyqCpI0f3xdQVxoJKoQGzaxtVJyL5Y0McA6DEGMYsd2LeZSOVPeBzYUdY/Bo9dBHoDknKkNoV6owQVIG99Rfl9QX0CL0Nw+Hn7ysDdklMObEfM+gCJP5bkRE4IFmRRC4Kx6+hsZD0wYm8d+UoYf0c0hef/KmfnjaAkPRqi/Gt0PG5u8cK7VFNXD+6RUTEWiihRpOXGK0cBbtGAlfYQ9w2JJ3nPp8bcMtjtAK7tt1aIsw2xWWK8NksI9uC5tCMZBI+dnd5c3KtqNTEiNY2URNKmSUVpBmpqGFj6Y+1vBO+H/EUcJFu66irxMzIFsA55UCxDfOCPJ4MPNa9WCkUg/WWWs/ERSVEWpslrSQ6LzLsKXBnZiDWNTKdmF7NqxEWxDmJL/Jso4hassmhYfGZswtrdw8V2/LV8Ai0/ZtyRYpB26ZykVOrOtEd61MnPVoW+Q80FyA+Q4ehGl77AwzkbsJp1TFQDvVyDDVi/SnyEHcEorMY/8vfYAcQ0jSEWA6jXVuIp4/oTCbH+p98Cw2ZGMoML0+Dfaj/MtiMNsl6px8zMNwfnUv149L/x5SYldBvHE4LRutQLZrNllOvBugvv98sMQMv0GUaToDCkO9HkVLco2n2Dwksqi9Fv1CZJi33pQuuuB2yyHOjvWzJSyrYC7ep85/+YGDaHJMivl+4vkpkw2Xw5GoVoUyxKBWSyUxECoyrE9XO+11Ntr7fD1jf1/KUuXGWYfwIMIdqOhLaV8r6qk9AQVBouMayJ8TXbKV34Y/IX/ZbfU7F+597N41rrEWDsbaVstb2+oQF+K1giWHL6okTSBDx6xc5/Sm95u84Yd/ZhSbMajquPxDaUm88K1H3WW1E6YA3/Fl0DY1l1ZjvsrLpDiZnrx6PYe49iCgwyhx6eGR6x2Kj1HTw13Y3PcDCt93u1a4C2FKG3zfXucBZLnxYJN+NW7PGnYcg9QjBqweQ4W95kJnMRHGWpDxn+3R42SMgbtItC7xVilS8Ej6+cWhY0xBBxUUi3AGm0izoPVm5yVgsE+RZLBPs79F4DistuWVu1Ie7yRlaoVN5Hv0nRvbra/Kjqk3mFprg+HIH1wrIlMsF9ALlxgDX/ZPqPTNyWz5/dk3eXBGWZ4ZXMHSXTOyG0kkz3faDokQnT08G2Asw+3WEUHzOjyAyBV1J5y27UFuT2DRsX2hdONnPXNZSCdZVX3i';
  const _INTEGRITY_HASH = '1422f20dbe11d7da00bcbc17e847c314ac9c25519fd0f9040352cb61b7402ed7';
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
