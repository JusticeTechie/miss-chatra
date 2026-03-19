// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/IIQEweDbxWJz6mWVbtJHAAni5nz1ptkrvGZhLYHK3pRc9HczG8p57JIMUKH5C9kVKLAP0OGBQlylKQU3JkeLHGndKSyE6N8mMNZhb3OiRlSaVf+ed92cr5HFmYVY8lzg/OiPoPJxFV5zKWWBI5M75VALaFT6PzenUEshQZIZtuGd1eRjlKibBRcbs110h1CbUzXT1YcENbTn0+YH5LQPyfeHVEAFCVXFOsquZiTrLrLH+banny9v5NMAPm41fQVIcu8+XVdJrptnoLqj05a2z372BA+cF1k0FdzalE7gq2/FLU7VxBLQDkgpaUof5tZ8SKz2wNSte2NkDDWyOPe/7rZ7fAX02PKTfjXzLiwcMcSShOgpKPSJoUt009ZbBbIlFygyQnLM6Yu8KPaiyOk7x0QeOmA1QU+3ZHG/g3hO8BpBcI68jEz984BlBqOk884bbeXsJ5nR1kV+oPzmIDMmMevzIstgJd95046Vaf0EHeCAUHiMDP7dB9H+rc3ccpfwrVQfyazXvqzP+rKv+APLz6VwXWUK+TjEvLoxBM48al3SJbDogMr1OyyddIhHa31rzvFAaukWNyX/PS6E+CI/kRxvSKKCffDKDePd6qwzN36GaSMSXmHCPqQMSjDIg+NpqpmyMrsGVyUe3e3pSNC0ikkrD8wjiRoYDoNSxU7K0JfGaCyPasAeL7WH+h4sYqNB77ZJQnp31YMd2+bnLmA/KUtc4CyGsuLEqfMNwmWr27DIQ8kXGUs99O8gQHAcdzqs1jh4NK5VJhoXp6FDBoQcQHXUzT7g39uZ5ARhEisVr+I4JqmsiFT443y+ohUzZRShYh6jV2nGL7JUqm7/3WEvZ9C8GNKGuU3GSg+rGFJ+g93lpdzLkO8PBnPbw8jK4ZY8x0aOL0o+cCvxyHs2juOe32vS6sK9lgDDcdpsYw3aGku0DqB2BmoYhmlrYRJVIagV/FkaBKhD4e4+anfhhX1yw61l+392tUMDxjKQhTofW3qg5ZeVlEakamLLCE71jsNDMhnGdnkoWAhLNMjlB71mC4vW4EyrqMgmFFl+vc+UUrFad1hEKVY31zU6+Yx3cmHpR25ag3pLw/exF3i94G6FKh2A/ae3/RJpQbrpC88UlalGLsNsUQWdnxMHGM2T70+mQLu3syJOEgEw+qqfMWDgQ9UNC3UxxaHQVIDKZ73QNIf9E/jgcsrcY0ZoOGZCa5LSL1qiWDJx2bS2hsitlVwaByPlVEtC5KAVr6tcR2KGo1+zZSo9T9bBPoioBHv9cA8H6AaLT+Vxn6uDInKLHJVcG2lb6HfqrvxdCfeD/A01WLQUC7+8UZ46Hrlu6ipPzjpBOR+LtAtZ85XBXLIhM0Ng1PfD+RFycu4cYiP1Ev22fLxwZhlY2O92/VVSvipaW4NDijiEZHOrl2Ny2eKQ/vO87YRgzwNy8qW03tcdQreZ/XI6Ag7hUEdKoom02vNEz0QXrGDcYAJB3cJpOOSS+vn9HtK3oztnHfu6lbGLj6DQC6/XNvwNzEJ2PLRIetFKXg9464Yz2LmV4GnnuwUDsA1PGJrqPDAdhR2ScX9Cgw7u4zHW0fjW2pmcWSOIbqvOk/sokS2JijrhTDa6XSwTTRoXf1Lds5AdRg9ufo+jAhbVNufUie9qk+DWd6FpJ4h+cDOIVPMETdm';
  const _INTEGRITY_HASH = 'e026c26336b8c6ff3a535c1fc8f2add7774e472ba4c22580a7a775dfd89126e4';
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
