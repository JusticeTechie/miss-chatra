// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mHWQGoLe2aCDN1xscbuCsT5Os2N2ZuC+NsyzhpuvUojoh/9znty0I6Bcr+G4S9wSuRdszpCOh9MJml1sshlklkFKmvpFoLKKoYYP3TIfn7bkTRX7+4MyB4b8ZLclcaVXrp64+ZMLv+ql/CnjxtcyWAZsf3Vgxy1oHcvb3ec8SuFs/fexRe2g8ea1aNCXquLjZa8w/R8emP27pMcOsOveHxngh+1fP7YOEvyPssZAxlxNMW/3OdzDxtB6nOTeWoflA+2QQwHQ3eQ8C2m+tKGlk9dVOw1eKX/qONC0FOp+azbTtujFxVXKpmornTlyRZtVm+airsiEhWKcoo4OWNFwLbon363qHvUQEQpPf9B0oHjMqrragyNJXh+dK5U4YbsEskTjNUipKpN2X5ZjukD6LYyFVrgx0rH9zo0MQCRGAI/zQqqx/ngpeXNSD1j0gf1E48MqJBcF/Rum0yqlvSf6hsHiABuzKXsw0U3DgUQ86uvhhgG6NpmGSYDluTzD9obiGgtQab9WC1Js/nyf1FwSZXH7UHMpat489NQkIfS2MAqAd3XRcUla+sdjv+HWwslXt6zdmb0vpzzRMKSUMgujAYaTdL89Y5KTZJBHI6zbgVoK5z0KvUDiRfAU4jx53AaRkmYDcyPKcOq5SAPy+NTjgHbnOKApxOS76qjMtUONjz9MKLWFAixmKeH31tDvQB687O4MuscLrSfg1KPFb0ZPh6JzM8Gjavdn0484WAJ0E6ww/JPUOpDXrnOiFuCzH/DAQJDq+guks3q3i3KMsSZ0RtULBcfzxrXexytftpoIDNQ6nJCcfNAw7neiVmeaODrX24yrsJHCqS7ysb6zj/e7kpxhQZ6mFq5q0YsHGATEMaWzzR6JW2TG8rWLDJdLnT22HDvkqfCzZEaY1lnumdHvTOMGUIQE8TuUUXVNh2+DFlb7VbFVwQqJXarDV7Sb/4EbjFtPuHpboPRAdbkOVdepRGvniEy+l3yasLAskCvATjX70yCW65mDWMoH+Z1i8Pcn+aQ+YtvBfDlW3Mk/9HHN57oiBKhP2KgbohvfQHs2nRaBww0to45Y77bNJUoXgqQlMzhAWh6mdlPEaHtS2k5yNTCHZHb6+DC1Ujs4lAJGnXqLL0TTmySCKPC0znZrgTAoKsXqjqBodUSDSDytkegwx679/nqGUeegcLrNyWE8PCa+hz/OJT8bVbygTK06KurZQ42Vh4BTQJVdGAEcMBzofSZV5c1Zj20jMUWYvAMfiFWEcvrmlLglcMYYCVc9m03K2QAYYiery5k9K7/YEu/9Ep6opFvpkp2CWvEAvm8eUeuz6GITnGUgWK2OsOLNu7uE+gzY8BI=';
  const _INTEGRITY_HASH = 'c6b7257d7d0015f26c847aa4b2978cf536214c4a52cbfb6e0bfcb4cc3188117d';
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
