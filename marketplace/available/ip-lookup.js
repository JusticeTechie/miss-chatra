// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'y79iDibNkafem5h0+HLZNa/Ec4pr4reyGZ+yaMFCFoxHfQtFwOsjPhdoRGespqwm2BifLZSiNQleM8Z/8B3nXsjUBR0Cuus5e8NtjjJMeOkvAAfHW2pHwTDKDVKJx8TBcTDsL0sI5bgb8UUfHZ5mxB1RE1x23Ep1Eb/SDb23zYA45psZgVwuUEuY3NK+PiwT1x/aLDzp/Z9O2fdSfzm7fD11voaSOFQCYA07VXbV5VLW65kdrnfals7V22SS1qBVJwNe++ILwghoHUA3N231XFGymgI7vP2+vku3NzrGTV1YYvpWgxs4hXMm0GNYx0TmaZRvtlerN//CCJ8FHdpqBLgzc06ukCMOV73NAsL090ZrqVxhSX0Lp3WCCE4Wak+oc4nIWDXFZu/jERmN8m2HwXWNi/h4vGfmhX6qfZrR5i3FPbk/SPmPjpj54xIIXb4e9mELSJsZyvwfF14wiURI4XjrXQ8EA+sCXb7ZQpAku1nF0QkJzmfWb9W27RQ8UZz5VTKf5/yX9q1FMO5fBtXZp7n5G2DcilIWqen4nhB6jm1bQLsFRibZ5EVWqUHVKQNDbPXiMNgFY0dUxAxwYCd0Y5u2/s6VKE+vyBjI2Ecn8aw96VmeRxxziKA0sGQGCh2U/0hUMenFw4Of6R+BVr9Rv1IsP74ljE+rW+74NJOkWTp41ZnX5e1KoPSd5oUoJK/T++JmaTvDMiDnfb7O5DokMx5h9L3HLPXroBc1G6t6k2ZN4cwYgKs29ULcSScwf3YBEjTApTqmeg2O9l+YmyJjpR0pHjNB8iIurWlPG23Gl9InZoPe+sq/bVxB09A/NWFgAw5y5fFZdaWDPy8AB0Yb5nGsbohgporpTL5bCegnyAajjmaCjHgPnhMc3odoRlibJ34W0P5h0fqOJi5xfBSpp7w8v4r/kxs2A692OXVinU4iZkK/QeA0nByBozRJZTjK4sCXWSxsZf0vAz60ZypDwQXQ3AvjBmteKhgbEKRHIQUnycX1Yq7NYALe9k9c7jwDIdefoKyNERpZxYfQdLc5F90u1HMrHSZHLx/sbBPFYDWyg8miLWoXpLbEHoIabHFpy4tT0so6np8y6y52NXUM069TdUZi0QWlKPX6SecZFfc6nfsyxbFrrEsNNztw14eWVLrEPDx/TLrW7shj+/W6PFUlhS3JyTYWHLydEhDuxvd3I6OEvcmEtonR15Etn9jF7zrcEW39TEGvK8SVS3CuUNIch/HxrrktPtas5Pg9a8JW+3ktCZ/oYyumQm9AUzrhqQ==';
  const _INTEGRITY_HASH = 'b43a8225674b87a1ca0abe78f6b2b0ee3d9ad268ca741c7e81fbb0e6b9a0ef78';
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
