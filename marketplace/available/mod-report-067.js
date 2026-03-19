// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0R+pBM18XInZbUMK83UKbQmXLaXW5OOUPpAAR6+NEGHyR+WNFnyiecvNHhcjgj/BCQazSNKJxEQNiRGNDSM58cTGL57AT2ZHQOQCacCviJGapaujKm5N1RoyM+et5NR4FW/k9DlRuTCgI0946wGwFaiJvpWCsiwwjVz3RkEUNgE4RxV4Jocv7piQuwtPKv6IZNC7v3ZFMOuMJJ2TwQHLj7iPkiD2asXkCr7kM5lTFeLby2xpIITTDpkGNYPIK1E+piSfIbtl5l3Zh4d7vY6Xd2wB4jaCn+parts5Q6r2HWjFSvvsn+St5hOJByqvekv/dd5lsV6jksjNL9kYjDtLRV3Y8KUZgrj5AMISy/JUuPQq7O3fE68Wm4IOM0eEWFlFRefgqv3RHr+q9A0QOktFbWoRyrNrPAykZvp+LstwOM56O1Ym9UbU+JwnHx5q6cRQz4z3okSnq+7v9n9g8DPQHJeYlT76K/4UOLvDaobr6QETC0M+5fxSHT0V+Y8pZcNChBrl1V8/s1UpzqFBl2FO1tK/bcp3cnPxaXsyA6k63tE6x7ofedhqW1UKOsDGHjh5Uubsf1GdPWsDDAadWmQlT9x5MxZzFf8j0ox5ypLkmq5KTh4lMmzJZ6/xSw5hKNADmoYTLdG/zYRNbTs7EWkyIBQeOD4rdARgLqt+m4fArGDEyfHYJ5zwWlL4nxMxMv0/tIdn92nR+w0X6MgDPwaWJK6uPzSYwfGXYRYcpAf4Ia78XeV7w87x9vL4oz7Rk1PZ7dkSg4GZKp8YkHuIJXU/Zffk9UaBCjiodQHpzTS18E0UeViLOSMpcFcgOGMY+Q7hokG4vkyW1LFgEp1Hp/EGeWGjKoXd5LXArqcAPslt0qOZ5a2jHE4nX+z/Mpi5horvPdmECYQi/A8lp75E/LekLX46Kz/HyncOdqpbrXhTLd0AXCGrRt0GZhUXOsWboSBoOm4bJ1LbMwzuiAg+plJwqA1tfw/mAg2+IrN83EVnSJmdntFVffYiKPla2wSg7InmZIlPxPgeFXyJMbLXMs8jedGJz0qYBcNwOAfQwzSBmfNJ0MKrh5OeaVmA0fepE07IS/GD0+Z89ztY42xkoIB/2tHt959Xj6xbO/ni3Y+ep5o60xhigIQXBNdu+VDc+btolrIRYKbte002FO/60R46dxjrceeswhHG9AJyKSUJlb0fngme0NZfY0ypS0GAz0X40oDQgpPGhZRNCMG++cePcmSDqJgvY4sZc2BpG9F2f/0UKyo9qRzDgj0NlFZ7KV4332TCAhbUAnP13wWbIM3KFWviq4j5HDWKQNWPMDACN3NLincWWyFOrAYw6uJ4TsquK3+uQ+9pF/xVYKKHdgMu8AuOwK0jqOYPKLdu/4KNZJpv5SA=';
  const _INTEGRITY_HASH = '2348a6b9bb6b5a6ceb622c0912cb7455a5674c0c0e20fb75cd1210888038e917';
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
