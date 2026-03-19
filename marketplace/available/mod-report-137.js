// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Sf5cy6d+gEubzQN0Bvc8glJLz1jqgGTu/dv/o58+MgJ5lrWUlavxB9/heS2E1tMSyDSARrigusQRUvnAMOICEEz5YqjcUF3B/6RbgK6O+RjWeGY32rB1kv1oA/xQxRkwlJwXvMdXsw96Y8Cng1QT5I3CwDdJnXpzt2JstPpOweYe1PAJWkljwjhMfIMJI1vLVMykNzKeUpqm9cthgv4HEdlyKESBNPQCTMOmS7FZhZ13YfBbERBKmCJufx+MWlOW3y55/MuSCtggMMS5OoIDk81GiGUgM7rhWINPZgw10R5MxSdsj5VR9VEwvaBuTqxAmv+SZ/0qUf2U1b/QL5zBw3BYNUV54qaIQsrlmpDl8UpFPJ+Ml1CAkH4JkckBuDl5JTu6lxHfYWNkFVRQ/6IuXlkf3GOgRW0T4Zhl7BlvLgiCB4KiZOiDq+LD0LI9pE8nPTYsrTgvjpoRyCAodUlGu7gqQG/B7zuO3fm+P/IbqJa6wd5G/8gPsXzyEZijGJL3Cvxjd6GSl3Srbc5a1cMAjTEJM5hgJROIocuWHFjUQNuIyFuvGNmVYqwCPRBIxx7P5A0EsANgvbN7ZfVlKSMrgFrop11eupkxZF4JpBi1JFWxV76QrK6OSPL2wXfibXqXcwCCZi7Hh2Wnu8edhkDx92RauvTMfPxOIl1lJkaiJr3+2iapL4secq24euJrcQ+26B+laivrtqd27E6OFk/gng3RqIj+JuYONx4/a+l0tgEeb3YhyD+TCpsohMDbAoP26w2Wgsc1kwKy9ERy4+tmqWVDcLVCwvTdcPqNk4MWW3qE3zNeUOqURljyeWrfl5i9LAy+bL4wuBx0qcFO8S8FcBGxp+Y8xJNe9wP2+t1Xaofxieq6TVcKzP4uw1p67l/cDSgNk/da1167Aeql9ANmeqizjStRMlwQH/JfswfeYA8iC081MlpKlxM8fTe8S5xUd8bt+xYr++Btm6W9MTCbYs97Mkl7oB4UswXVS6xA2mOWLn88JRAAEWo6/Fzs6t6Z4vmOhCyyZ0JrFYgELHwJ5/wp7fZVAZnhYsYdB9LNf5UmW9eHjBoD7mrpeeB6c4NH7wBms0oaJx/fD8s/Qbx0HMo7aQnQf4OK6xoXRxwGSVzdYBLylTwrRpYgskB9RQjAam/LgCnUSV3TOKM4jTERpb4mik1x/t4avmy6f5DbWIw5UU+RVOUGqime5zdyuoo/oebZE8GQPHTJgUBeAGR9q8EzEvf3Op+Vb8j88jlxvGYkLrLqAzjU/R6WbSjnc8Uo3JmUmqS4on5gIwjWGFQGAUCAntbIr8M8z3BvoIfP9HdobMiC8KAuGHdueFly51KWQu7pL8Xvx8Z4iXfHs3H69akg09yySb9fkYOy28mgv1/2MGjME0bv8Q==';
  const _INTEGRITY_HASH = '4c1eb1a71e2bec4d89b19076f1e020f831fd8149c2d1e84edf9e3eb24b4f3d16';
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
