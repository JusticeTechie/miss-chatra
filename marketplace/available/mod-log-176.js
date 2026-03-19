// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xTjZWM11Ojx/8BnIbi1nALj27GvdCo4C/iGhfi7kXe7FY1lfFj1iQj24k9gHjf+F/Nk6SDybXTCjsh1+1L5pKH+ufZArAJvbu2kq0jhguO/e1bk1ROh3TGcCJohSz22xOcA6Qq7ySCA7tvX2xFQ5nHxd7qrRhquW9Mf6HLc3nL63sbF1UHIO04eciMs3wzXQc3MNdgjheFg50rkswt5qsCcohkQMB2FxCgFzWR/PU2jsfAWqhx8u7BgCC2OWQZUZqxDVHkfmpphfQZuR8BhQdJSNRb8UHwVx3UKN3cQcp0QNTJBs1iPAcP1GoT20mBcxmaHebdinhXxitk83rEDHFRlHhRDZgYy/RAuAMwcdrxpj4SMaUskUuhoDo7NX0mLfwWvHt9F/xJumr+yLrA5NhP3loWxgV84GW1sbgrM4ZQfdbRmC3d06UTVJJThuT3lsT5c2TZhiZvU131xGCqGGIciLn9fxyha/T6VvEXWs885TDo1gQ8PZoLzuzivCNXdRZEP8XoiigkaJZC49zZ8kLg6GO8m8TfodrKqdqrQ1ofg/hOU9uC+TbUYviw0aKwgDiJGZIx/8KStOgQvvo7L9JhLYMY4yR5gdHpYpBb9ueFAOirjRBhXh1GcQUmYhXa8GcFVy7SiKyQSXnZs3jPWwgyzN/gMitWFjJXBtorXPygSKHZdtDmMZBHgBkjOv9I7K4sJizKCruvJXGQkwUwSbXdzR5r/C6Sy5NSecFwugay+8qeYHBJXrs9jMKwaeAIRDPoMRW2xOBt18SaTpgcRaNaCU2g+y/Mshn0YmRIbiEV01mluxw3PYLx4fXzZ4fCGvBqXtHf51MyIOTmpprsk4ggrQK62jScz4odllzr8xT/kuUsq73UepWnjBhtkO/CdTMV6rIN0k+t7oGgkmRhtsq/YmN+skd3D0YiblWw0pCDg3vxWg49jhz7IQvA5n7zOXL+BJRtL/EpOzpVIO8/HmC8A9y2l/8L1ew/2T8CmcAz1meDfjLUWIl/yvjo4oc9y6wo7BtPtokB1nYvAtC8bdb/xULNGSViasamL2r0jq6XheMl3LKNAm1Zgt7wBG2gPUu9Qox7LnVbXgZkhBBBvIoqDbSgLBh0ya7Q126iCW43Zz4U/29J6QLXdjOJXexpmf6yiJLcYyi+zA920rD/J9niFz/PZcz9jmVF48UXGp2adMKKETp1ML2CGJIZ5Z88uIyBzs1J1B2ozVorEvYZr6SA+JNM4AVGm61Ak2LuVWFY9syi2aCMYZvgHjhe3HRVPrMhXsp9lF9tOPBLnM+YfNwVEtRqY0sIxY2BsyF2oMdHSOZZsTL8kdd85O3WCE60PxhwKvkbrEQ4Lf9w==';
  const _INTEGRITY_HASH = 'c5ffe9875f2bf1036687dec27206121b6df5e4dbd20a487023eb4c4851ac0a5e';
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
