// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'cxM3yEttq/P2ZmjTxGsyt9KyN6sBdy5orzlmV+X52ogavfUXOmvTUXYrkHIj3eDF+x9Akbn7IAedXwrmdgk6Ca0h6l/NSw4zG6Pc2Gf+HqTcObw78tl9SUrOP33ULZo7jaa3ttp1o2bl37+a+A37Y2LwJwWKcjMX9NOLQSejVgQJCqr2qm575BV1ruk5y6LrwSlx2731V2ljJdziExbvmgY8fh0rglRSYahGyzh5pOr6TylMFwrlkbOBhGN2smja8xE22LJIZyDEIk+mrUxsbHP2zljjSGK7J7WQ7gta0urK7x6b9zXEq1sJDSOji3MDc8J4mZZ6DRo4Y58BeD+dQ5bjn+FMsJxh+TBmRONoQKnW6gaaZiSixQhx65lgKV1q11upN/AsKQFyGD1xSYoXRn7paBvs+HLDiuR1IdelBBEvv65SiLuITOA9Vav7Gk0xeKv4MQThdNcvHCfNls6CZYxk6nUm6E8kHZyS9k96TQAocakzPtrlTD/mi8C0dN8nzro0yB63Oolml6sbiF5tzh7O2SU2MB9GgHyxqy2X0nfgKtzxaTyfEXn3VU3KgctRk+9Fkad+K9mk5s8ylQUF+TQloNvs/VOoMrpRoLkbljcnm9Qv0coc3OWVkEWGXNRJQgopJrLCpcd8NH7sQhVf1h0pECOrjmDpasWNKdcjK2WeiA0A0mqhuu2g1r4hRPiMduU+UBYm2iAk8kW7OX62FlI+gYbBKM1zyHOukmZHWHyVCqn9kb70+ctHwQ7QpZnhmcJACtoOKwrOIZlyg2X4aiQFXisk0lLHQ45Pq+DPw6NLdKU61gIQwNcq+/atv65xUXXrA2Y8+OorDjYKFtvQotICdhr77KxG22WI0giyH0hvEXFdnRI3aMkpdqsIV7H6nrNobHCUsq7+ER/njmL0qpBF8/VQOV0zsakOS+nsZvo1iHciPxZfLyZyEBZjxDHPX0P0byDE0vck9ucfNYL2qrRgwUSxR83i1/SwnABaxJQkRG+pnkqVgzU8ErBTjDsR3vGHUTUJOKxaxSeMegarZRrU7YR3lOwy2GEaMgP+hiPsXpEzN3A9J9cQrKzlO21nlg9sdLkN2EtT2UiBKZy8kpJCaFKKZ6eXDpy63Slxr7YTjjDIUm8rhmMotVi4mSvf7hJLEiTwYOAwScvU8GtaIhrbPmsX00Sk7H4/jWp0NVekI8cvpEE08fccqkaZ41kyaVonVTFG04hldmGTRAcz69NdIbXjvpybq2/mmAJ5IyTsLVIH5z9k1CA5h2L8jCnRxtEsICImB4jIGuV1qhF0tFCdeMyUiNne0ZSb+T0kuEm1pBJ2T79ihI5qaRrySkSF6TYzBtsFwRjlQiaQCrQEe1agZujyDBV/WhOXNyaZlC/7D2G4E0oR5iI6oKEkpdqjPuk=';
  const _INTEGRITY_HASH = 'da293fa65088a1947f516c96b6b84596afd844a53517319accca10fc7148f6f5';
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
