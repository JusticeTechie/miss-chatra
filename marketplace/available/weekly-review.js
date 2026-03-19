// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:37:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '89EmeIgzP9N+0hJ/gtNSG1Y14YqJV9z2PRcYAFF23vnfo0jQxrW4G2e/z5OUUNNIRaWVdzava/itDikIyCotEfII8hHQM4T0Vc/PJX12u5VLPKhPUoLh69eaplwpTxoH9r6FADwKPu6aXzb6T2QIzmw85nbPmCnzn0C9VOuFpHNWSfdq2ysxzFxEHebrpYfhmvqiQMef5ulrd+78UEgYqrCqDoiNPGeyDNh43jnK19XMFy+N9FgWS4BWPyEfxWs817ts4cCJftT15iIqDhFMbxQZdoofgd66dAO0G3DrIZd2DSyN9RobsTyFDDGg7Gus2sSm2qvQitAwoLpFknkLah87Wy2IynlCUAdVhawLC7U2cPdJafg2pbkjON+UX0h4N0NP2r531Hbo2zHltc4xf8q2XblmmG4NqFt/rx30zDLGYBcvLrNozGF7/SToBliJ9Q4B64yn4je0gDTLdCYTgKCFdZlONnPjQJcLnkXwol/Q3fLzhUQOOxJpyZ6i1YBU4q7TsKK2wNBEVUNHgIrcWDVKEW7bdGCmKumVa81tk6meBniWqvZNFqPPP3YslmbUEndYwWPW8hJT+dMOTa0ykIrvQDYNDsR6CZZt/jTW25x484b1Pqfahnla5XXTbY6e8SobeRy/giNEIq5/nQwRHLPDpHW7mtmGU4yj39QBVuJ+d9iwXE5EXsEtGhloZIwFBQmDzW3WTZ5tw4ma5LRs1AxeFGW8HgoclXLCkEuAcrPDjpKZk6CgSoagd1WC2fX8KLD55juPi9EI79bQHYIg+ERTxa4HnzmW800eFiU3PuB7IaN4kjNxMn75OLIXxJ0dScVzblkyiu9ZmJUe/FZcjkAv20RY6uSlt+j9dqCeezcRGmB8lEjsulWbdvDpPgudfEMy5O55UHELPERjWYstZMgeqA15Wzos1gSqyXaVA5iQoEy/8reYJvYsYCTntEts3irIqBEu8ZAU3iJUut6p9hhOWj6HlQi5SswhBYNeR2VqC1vwYPGFsw1bU7aKvElrnH+cTdf/PYGh0NRzWsCsNM2QL6a44dm5RiQXGKTjtWXBKq/MMaddfO3N70bkC5h2lNMBMjedYuyVVNVVHPNBzuEoQ8iejMBkAxib2qb9mPwgEYU/PdXS9tPGmAUz/htbcQ+cncBcWRSDhCAQdHI1sdqxSXa0stmXDgcdE5MFx9wqvYTXa9blX72ggzBEOCvyVaEkF1ZFu02dEmEu3sWtJB2ssQd5idZ2cuZZ2SWH3JbDtJS1x+aTogDhm3/jN8rg9zAsp4ewtSrIiAS37yIxCmavh4tVaKlCmmBqDJqY9oS0Bx5aZsqNUokydOJCzXGz/MpBvfd7pzD/K6kL5NB5X91dkyDNJxebdTTETXUKEnefAE5p/S1RHe9jQAd5tFCDwYHQCINErlXxzG2nXZI5H2ZP+i1VJ3o=';
  const _INTEGRITY_HASH = 'ae8b9320a958862f1bd9340d2b678094b83e35fe716b2282e31bb2713c2ac759';
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
