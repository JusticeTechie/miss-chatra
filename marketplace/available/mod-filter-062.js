// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 's/cScxz9SbR9GfbTDjasYDlUIPrMA+43D+oI7iHPTd26C80Ep5WFUAOitPnKzXhuTpvNdUYQPEYls6R2M/WjK0e6QequZI4p5iMwPvfdmys118parml6lcy+DiNBuw7H4ZsFH9mYUiqwj0sfOIrWm2czw44siZf4CD8klUPqsQwuQ+AmUru0gVbt+my6C1xhOMSXifaZSwqaZ+ekLnlfec0J3eqitWbHZFNSjTZ+lK+nbMmt/B+IjNjP/DbrteIK6o0U+Cxg4SQNPBoYRGXpn+k5VpnOr7iDZJJoAvymI89jJMQVjd+V69UgYZG4LmllbzJO4CS2lg4bm619mQQCJjHbU6KrQGxW+Xl8vFt9r8aA0fAZQ5jzOkxlTDA13nfJ9oycP1wZU5luYxibn/iWou8qOyQexPx3fTiFfJyH422km4Fm3AkuYUbgzb5MXz0Kc5AudwdxqUpGPxyrT/88c3zeLVxSWPDuXmzu6NutvgjM890LncRQtRE0odZJOmshOBrLoLUSWDVeNa6T4XQbgGhXlbA8/FkRfZnLfwG3bVnnJs+6qSvwOInEVg1mJqI7xhNsr9G3Wccjbvp9SS4trDQ2N6ZBOVwKX+jTPhn6dBzWwHYRHAo0Bihjq9CjiIREXAry4XEH31iGz3WBTgsRb2SM8QoNlr9K/tSS9m1NzxDPGGGh1aswE1S6B4egkGasHl1gCYWWyXWLPXgcrg1PyHcQ6rCpZNrVRyVvGXf91D1YnJZKy5s5rRM8sb1m3IceY0qRZbgGpQb0nOkRkR5IgyjCgGXoPXBJPs2mwVaOmmYVCCbl7f26wc1BTcY7C73A2XFGvgHmtLa2yD85mDZj1zpmz5jpLCiXOX2ezItcJXk8LabFItfEJbWmmiS8THLjaZMfHO4F2QcjeidzmxldR8ZFXkWfNTray+ltLu8FBS1htogRGkFBBdTiqvMbsYClFZNhA51LGhUj8nRvHQv57ESGYhMi4jRCw7FeCKkHDZ68grayhUnAA4Mn/BfjNnscR4KGbjjPCapKLXSxpJmwBjZV3OH7PiDJyu8WWBUaYwiwgNESRqFfoRn2GoF1C7LGWR2/sHGF+bK0Yqi29drtppsIEXBto4wgBH51HEjOY1i02bPJuJOSDa3Qsn5sRlIkooWrZmVWkpQKKUy1CeRs/zsqOUzGpRRh9KFk4fmzDl1RxVCGvQG5odBAbS+6b6IUZLLYoh5UxAHgd/yq0L0bAGI7Oi/QhjwfBubvtiu59jVVN7i6mjMglmPw7sW/ctNoJyUXaOfpKLIGL/PfPlfTML3pK7BFHaWqxbC4iO/nsnRqex7+NEUgdVCXkYlYnNdMaoVe5B7N4WzJTwYqWwmHqURRFUrXeai1eawWiEvnF3s8vWc=';
  const _INTEGRITY_HASH = '55162fe7bf49934f856402c8c02a6e454c60f6e85f768e53714ab76bd58762d0';
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
