// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'E2mR0mGR3wHHQWcC8nmNgmUta8InoIMOywtVR8cb36iLQXoh2CftI97Tse2oZ1mJKpCbyJzQBw0+nh8r0xefgZ/H8U+G7sbzLsEyFaxOLrFm3iK+ylIO+wxTWerjS2iVhK5vTFRYir/GuXTixfmMx0vcIHPB8oS/iIadm3DdLfGOW79fSn0n7AeOFdq8Uq5qRcwqKBoV/XfudW1qRZXoViwAEA3I01P7GS5yYf4BfiT74VsNFuvQgRBgac5LpVf2ekUx35oppJEy+pPS7CrfDMwf3i3074iMdfv5Y10IJmUZCi01riG74ED/8EfzLMYzHFDsN9LLjDTl+pqGx2j8WggUEcx2lL8lwHv/dtwGWJewzLSReC7E+8TQFXPS7O+5dI0DptA1flCYZwyt4Xp9NwVgxDrx5H1OU8A1TAxy2JUsIJdpn1toF66q1Vxmpf3G7KxI3j4xbGm+h0EqxO8LPjnXH8UlkLPkGIxTttjWBUKZoKUs+4x1l+jsfjkRXjHLc8KR+BZzEHuEDgC3ZE+ambzi9DSEYhLJUnN/2W8svJg/Tns0zfcHSuzP2JTM5aU16Kw4grENVo8dTuO4KfS7GZxtyO+OgBONyW7ynOe23jg6W5agxXYScZKl2OXoAlkktXZj0Uchf/sWOl7ZEfrGyE/02m2uV9v+ZP4iVmizBi8y7UDpIO38sEUsr0yWp71SXmsqJ68Qn3E6wPT3g8f2b7dn8yQWEdU1Xdo6kuiXwQ==';
  const _INTEGRITY_HASH = '1625b3a1dffa9d891f85b64b2f04ab72f92c0c68c7f5e2bd5dfed042dc5a6fce';
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
