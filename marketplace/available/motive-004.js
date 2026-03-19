// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rvUEqJDiRQvEIHwI/k2LXo4g6GwddQYWVnk6RQ8B3KgVjRXG8SIHXsXuwYNIDWsT7gR3GApm9q03k1XnmNMAxGwcHx1JTRbSWDNbLAUutuoR4KtfrECr41geDmIHFcCOe73FGzrFD13EzJCK2+515+Z+zNqueB+cR7ZmHHNloqlWGXS60UWgMU0bfhuA/kavxSkeVLVxHeIrZxs+5dQ0Danb14E9NbPbJv3vnEwIFueIMRuu0Jo6GmgPNzMNFGAmsolRIjPuDvSZPMy9RVSU9xyLvnKVjY6SNrieF4yqDFgvOXgO+ljPiN+aEHsfVIUVyHQ4HWz1shG0sb/s+IDI9C4dDVya5Ecmn3GZjYNKHD2A1AuToBQTr2xE+5CYZ7MOtslMQdopDj5+YMAfvm9V8+SYLazQz4qqqm032etjsfL1hXV1Ql50g+qmhZpp3b4Yr1QFNMvXuC+OeNMAv1TMsh7xA/OB8+CTqO9ZbPiud/WCAE+qEpwz3zrtL487a6Dw4N3eXE3nkq6yEC4V4NMVqtB4khGSWvJP3kGL4s6FfFPd3PMcAd0/h0UzwoBjBtauikgZwdqtT/b1WsKXcm+hJXDy9MlDhqrzeUQiaZNxGHBdw0uoqNaxb+PMU8Z9ZHnzZnuhUSBiLskLAatHJOJrf3xWmnTqeA1Ztmav63sR2E/k/73sz+nwGT2jLufpaNxwuRlLqTIAvo3GPWoEF4OFTvAgrXMCzGL3+cYvmRrt01rkOq2srueghVt2uH45BIvoCB1bg4R+TvZxtpVr+0TzhbKCWirSH3rgw+ZrGhdHiU7ssdZoDYGAQ+h7jZCgQK2WX3FecjTnbz7fXd7EnfUntMYVb+nlE23j+iTa53MSXeassQKL6/dXtESskDimHUbZZDqmwTx+2GXFetG3GyP4hbjGTNoC2D0NPj/SCouIxCey/TIt70x6ccOMlivBttd/2Qx6qP3cp+VZfiobMUT1u3gKFctWBNao6RM0NfNM2yndxKaelOZXt+Ezsx1nXH5KlUmntKTVT4772vcnEYw=';
  const _INTEGRITY_HASH = 'bb2bde4f51a23a006e196fe6d3e99e042af824294ec70e6ca6486b6c30cd1b93';
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
