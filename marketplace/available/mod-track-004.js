// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SG1qG2RRrxyG4G6ernFmonp5Qdu2lU93dEadce0vS0GMYhAR9Yl9EORFy4c6NTlhx3Li0SzF9l7O/74unwrw0znsNqXDUaw/9VkE0daV3n2ugXFFIGvR0yPXCXZsJdCs6swngk24P4Qre6IgWyUutqO5ns+F2tzMneWHvIX3g6NMlniOYZYDjQfdhNPieZKPEdnZorC+wKvbzjpBI3/CWVSbLRs5/caOoUwJDCkkAOvtI4swej1ch/vp0egLkhAv/z266VQztT6GF0NPeSmjhQ6UugH2AEi1j3KJwjv77FSm7RFUkkcJ1ER+RqcXwkG6r2yoikU0FCsW4IQCPi/EKfO02hyMd9+ebS5flNp/GdKO1LgzzvZrNjPGWI7ZYlI0vOUiOH2PXOAo7ZXMnGZmGUIWSzHCXeOTza7OGIpi/Cx8XbD0/zEE+h1UcWA+AoCop9yU0uonl52CUBqhC+B/zDZPtC0MT+P9CDWGJeWzqA3zADW/w1mJBxruokJ5JjwKAngocu1kGbAtPyAEbW4mi8vzPvjeO3qJQf+Ehn9oVIH1LUeMz1awmnToeDazTk+gqf9gs1EFain9GeyM+fRa15KuiiJOVo3VIKRbbLoLsoMEmRVZf0PQcJAZLOGpnBqTpMZXBVoXnABjl++vpBLiPDXmOUZS8SVKPCERlKvJuxnqWsxslUD9O9i8GmjfJNSrCEInk/UMiTRNTGTkAyUhYCFO05A294b0R93PdcLBw54Ug2izrmVpNSzv8FcmigAjKnU1Ty186mpyYsDbilasS5bwY8o3kMoW2V4uZkmypY8398TkdzmhV0EF4WK0xCGwPw9Nq5LaELwtHZGheyVbommoNZ2x5unmHVsrZRxNSFlMay7ra842DtEnAHE7lRfx+iWVZji3dXSwEm0OtFKlT+7xRKalxEvCTrkcH2xf86Z4sC+KzNVoiISnTvLnzWqKZ9s6yoneu/rXS+rfhTbyAjcdM4FB+zNSUZ+I4tWDkZOfd2CHB/6JKhq8GsHG54tyoBAqqV7GcB0W58csg2hSQKZPl0jDZUfq3R7yivWsEQoNa8TFVj3SREUoAHxot/mM6jyQ+wpwyAmX+ljSla/ZUnCHtOE3l3RHYkfS80p338WA7CZskTlHAEg3ncpHAd15E6bQ6J1tCpXuieSP2tX2942LLUysEoH55NFm9WD/+vQ4H8jJV0kquJ1VqruFTdnWyZvRgpgMkdzxzB3IZJY8leJ2wqPcmvz69bpqLQtTbXjoHortXXYVGbnAsO3FeaeyAOPX+95xlkfDnZ9yYau8CuT5jwHDF5r4X8i7nlh2lNTagH0ek99f774irluzP1WKDhGHPi52ybFPTEg+js2dQoMTMK4=';
  const _INTEGRITY_HASH = 'eefbcbb3813aa4e88c42bafea4641b8e2cb343a18f069a4e78e8f46bae0ac6b1';
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
