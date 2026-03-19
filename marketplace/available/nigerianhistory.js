// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ICewEjehZu72aA8TaXA7oZzgmluM6tdL/ieaTjhufXKbA+Nug5lMaQ0qUMD4BFx6CTFI/eXCSDo8Is++GfsngeJPOni6ReiGcPyfGkt0CBVVGTVC/l8buRsePBe6hX1PZ6dDd71Gs62y6lg8QD3pjTZ/R08EdfPZcTNyXJp0FAAMZIkNVTu0TAvSoTSpSvVoRuTvRIVcxyGzVpE0jbB5R88fQJokNK2s5dJ+p4Ij7B5IinwqU/OrTCbSYbpJz1zClTS9i73gKT8fqKyg84u1W1PH9/wtZsCNysr6hPD0T2aXJmjyEk6BMe8UiqJVrzEt5tmOEwqs71BVchTK2ZeyrnxFmVuPK2nl7MWEZH0oFzg14b0E3mNogXOUoRQqB6ttDvwHBjcf2wQQlCfMf4IAP2WDibGFrSyx12JATshP+zYVDVb2mHgOFLYg//g5JAysA356KAz8e+avqxtssuWskKK4rXjpQB4SjcKdB9KiV02jOS9QujeqA76Yi7mba72u1tRWzakZaI90QtEY1PErd4Ea4hugetEzL0wkeJiGJJgkFivQ9dAauSGM0MyXKZOy+j/uZDiLL/Hez0LmAf8zsfGq5U4Ps65hNal/RTk1jMTvG+1Ha8wM9iFWXx76VnlbCKYuai1s5emdF3K/3eDJAC5z19jPoxaPVdNXEcv7Jq6JNOr4NSwBGHlMyse3xkmOVxzLrfGwat4dRa8w9c+1AMIOh0tkRxpC8EPzBa73yh2HDBAEUqZI/lTbUiVh3wG1xonKhP1Sihp33DbRmC83iQ215hYbRV8a/Tu5K8FMlyj4KUXEEj3LmNrTE3OrOZiVIA53zf0RXMNyDIXhHS3L6d0XgOzF837DaMfapqvA74+iru3eh0efuWvuN5R58IhGeCXAiGbji2sBLfAa42bljXna7oQar8vDUnkUDlRzP7SlW4Eo+4Sj1O7MTAC0O22Z2k6TunggMeJXkM62ZJg81pDh6P4cLJRmpB9v+xJnXFYLh7HPj341K2oCUNEIz6XU9F8aS1xWVUVyt3guCwwdrthwy56Xhs5iBN4khMX+6vfCMP/kT5eYioi3k8+/iCDJyLa3xSCIMKxAuGMmYa1WG9FyQDMg3B12x0DF0pWJZ2XJm77HU2iNQoczT/9NX6eY9EJNfCXflkQ7ERe2b4BvBrVLXq5/Q6R9endHh/xxOREL6496NSyht62YA5BSoL5EbTPi3whO5WHDyOZBwuhemg==';
  const _INTEGRITY_HASH = 'e2730ac4bb964e8a5425246df2d4e6abcf51d118384f2244081f2bfa96ec99e7';
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
