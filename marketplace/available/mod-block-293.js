// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PPoiv6fq/aq8NhKaxxAHdGHchlAc9zuGpQknAONe79tHBZDv/Y3CTQw0Dee+tdFBkVo8JlGLoGUPTCh26yaX/Q1kj+KWwHf0taJLsPniZsqw1U/7wp6GiPn7ZLQukMZTPRjYezch4z+fxL3bYrGDNVJ69MNl3SgsHd1ZCgGhpOxcIQsinvTGbl2D74Kn64kQv8BChwaUUOHZcOlLNuWT+O+uQOcu3l9yeaI5gdA/FLBX+0fs5yNZDXK/4feM93Bi3NAhX8xoC3KoWraiYn9d7LVxUKRPLZ5n9ETE8pDC+kG4r2ABzX/CdV/185JQwacpYlxN8ADfTOJz6JoUwjC9bLWOWk/t6Snv0pajE7rLroz4bER3y+JlycgF01xivSL/nT+Aqgnic189dXuPkvEJm4pZ5UDyxy2bxlsHJqWUx+M0y4iBrI1ovSt9tUc/FVQsQxEzl2jXDKG1G8AIanJJ2IQR4rFeMrEVUQt3BzkKGqXA+wKOB8OhHc+x4oxI7gK8NFUM77vudugeOCocU4hZIdrDaEoghGqcLpry5F3Iy/I9A2Df/kNfrFN2f0Ur5lyJpxojuDNHvxJeQHhGALqlX4Hu4bvFgvotCac1lrHUxaDtdy8kpRvDgqCPaYUXMoTcl1xjFdXWZCviJQLopS5ZdgKB2eqf85Yr+dtdfy9Ean2tfpad4unCGFKzzkAzCWoTMfhtsEAhDElhIMJT/YhfAZUFIPnB9NKAudirQcaky8J8cE3H25oUHr8JhXYFcTAjLb0RI8ynPMRbLohOdLn8RSKJ4WKdY4GAvceuYbL9pr0962vfdbjrObUz+fyEvqTU9biuBUPs/46VSxBSmic1kgkhMYDCiPA2K8ocLWnUR5CwjWY0+cwXLjwanfguGjU8d6WMpN6ZU9QrycBd0oqUzDPs2ST49RctfQZwWhoz6WOkfAP/qK56K2USu8oQGWaw4gwA0s+UEsCVWRHOV9/sHQ0TQSMQ9rHln2Oc8+UVSuSZGAgSYZox7Oevy3EeGHbxyZHeYBRAyV3NOGBghU1s6G5z2KkeV2GsWAZRoV8btJNKUSnX/Nxzhpd2jzqZV4Gja/exCEo6cb12cuozKo11rHsAvQhMFyfmaeAJMG+jLdA35yqqiyflb3oAJ6inD5d+AGpR/PqtQYHuteS6SnK60EE9HXkxqjzB5ITRfD0huFjzRyjt9tTUYvDZ41gTcwl4IOB/YXBQfPo0OglkGbW/wc9rkUS7v/1C6074TjFfrjOgxUWpsjMH3utgtP9VoEEoUu6OXEFmKU9lAT2B+PLy8/bWSSmDkvbz6jEjqqFCjxlENMhcMg8p92fQKypsFXsRvu20kkVo6awi4KQJnvKJpKIhZuUc6N7GkFUlnV3U';
  const _INTEGRITY_HASH = 'd207b21ae0091b7a6cfe97387221e4aee75b79c8039a5c3fbfbb210ad441a5b2';
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
