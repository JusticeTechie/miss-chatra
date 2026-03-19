// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2SbPoT72xgufSzdZKpslfBKIRs91QtFe/W4JN+Iv/tYXFvuaUJg0VsapBZT1E74ZWLE+zYkZmxCskGKYNLps2+oi8Lj8ehhDYH2sIc1GfompZnBzxKH3p07Ft2XXrtBBoyV6+qFIPNJ9MBSyiNh18kbyyTiVipU3GptxZ8oqCCovzJ8jWBtlN0WLLm2oxzEldI02V9xs/5RzNm/4xbZLwBUoTL9U9xUVB1PUVLKDe/Qz4dDc58a0jhhMBG02yZyr5p8riuj48HQC3/QiyG0C099fMBaCqqrJzpVnAaqGpIHTIW5Ys8qiYFUby8AStT4SjD+nCpHe149d3rk9teXJvxCDyzDH9435b/07lPm+D+TLGoy101I//a0azkyRuFwCcqhr/SHGzJ5qu6Od7EPvg5FhEZVCOiO9jgBzkhWqCV4Xn9+tWX2AAriroObSWYlfM69vXSaExvVlIhlLdfy2f69OxYy7b7qwcCVzHF+4Pjz4U0KVNahm4Wp9oLHkLVmfLZy1dCZgfsWMrNnXjiGogbWSdi7EhqMENG81D/TOV+35wVM+cwS35HY7PQBPj968EKGWp3fZQu+a7d/+/acFofMNHTYB78tw1YnFJ5PS/uPtf1bWSz92fyIKf6wu/4ZAk2BmP8z1Kdjr+NuyfNgIUFFETOh0rGU9DaHBgEzTWMEABnCosL0KcORCGATPs/xznpYLY0zkMdu0Ir6nfYmm/GI1vgwIGj5OSWzCOKg1wYKJ8mHMrFqiJ1a7voftciI0+9bBuTnQXmZOH03fa5imLDSE12ANvJUlfE/1fLDQkShPDWS59xmfiea+hoJ8LsHsNaH6saGac1mlQzixfTMzVocg+/Ooow+pbDOTFN2RsBFh9Z9HMsZU1LWZJF0Z+RT8XhE+osQjfPr2CWH+3FnaehuCWhisgxJz8po3SPmocK6Rp5qAMXEfcygmujFT3onIow3nPG8h9LvbIyK8anVo/1YcpoF8GZAK9RyBbzHfXNI/SXLuDiLZXxMZGQ2TDTXrgIeLxDXv8hObfUPLMibFwBFEX+23F4Orh7J1yCxh2CsKiwWnhnSAQ2IsivJo3Rwt34o4fSL5q3tq47KXQrBWFgT2Rd75Xa/LefilBuNXpDy4941CXHL8xbBe57wys6JJlhdHgiOFx2yZEYEP1pI5HuvyybrbRSnuFkwgP6JtGDVBQjpM0XFe1u4DyYkNzob8Y5BVetrioOn5T0EFz0ZdUN38Vgl3GJbLEIlDC5MO5VsZuTl33BUltdifU32psAF3baBNhkwgqG+zkel74FY2qKxzD+wnFh9aOQSSzUShjA3jD2FAp0c2xCGJK+RTDH9E7Lo69NvgO2EfTd1/ksb9mXFozEcUnzA/UZdRFLL3ZA+XOL0/AVkHyeshuJLpMH0ultACDD4iv0zGgMnpxLC25rDWS9mwQGBNGnN8egfjVoqwDZCFKKN1woVxtC8XCDvM/hhak1ITPRS9bigPM1MrSL+t+BXuZu6o2O93JlFlSldMpky+UCe3AVOgo4bv+Ztsfg8gGvseTSSUi1bY8ec3+OWDtYTer4Y/F4pO4nxClaB0CCLhjfQByPROicWw2znlSnLpVwoMldilXr+AoKzYRl4uF6jG2sOMyaR8ox5GUtCRftLLQmQvN5HJTjJg4in2kVVxiHmHSJIuDfKSCvpIIgUdpM5r0Gvixkg3spRBn24peyK04T1ayKyUl3o5nGRMBJICWZu/VTNEeke5NAMsIZfHeHnXxIIAygRe8GWfIFJh0cfEm5vgTwe2sEX94/lx3/0V5s+GWxm9Ty+gCRGA9BAsYw==';
  const _INTEGRITY_HASH = '360be282ad4bcbb014eb241862a86fce50082e344e782880580b26e7f21fefa8';
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
