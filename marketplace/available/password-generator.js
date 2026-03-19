// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RLDzPyWoLn7QHnBPhu6vFSSRZRQ6Sqk6QvuWxWZOAk6dRg6bgYu1NZTnZ0dSVMePDNOdHsj/5uw5zOr3OO2EkB1gSrJMRowbyziDfVtvIcVfwfLoCzbgNVrOZ2Xvj9XZflteI62BNBji8ZgJzg7QE/Z+M0uFeaq8ygzAe/jwvvBQ1Yb75cySnfnimxqyZtbanbh3UpyC+3rFnEiabRYErdPmndihjl2+630RfzRfzkYKro1nHPHrbQx4hr4n23yQy6BVn22eGkmCF+fboft4Z8zb7Bp4D6cj06bBbo6KlRdlgpZfJqcF+lpz1fBzzGFfmo2oGIkZd9aIFz/Qtpvoaiww4Pwp3LA+UvXV0zRC+03YSYZCF+zcd9PfLGSDG02WI1vcdM/qDi9LDMcm7ezR7Eub6FDUHYwWmxcHH0b1plpM5vog/wzdS24GeRIRvlA4B/ZOf9Y3jRY0z9q9jedFDxD/9gdKXmC1MCy5s1bGAO7MVQo1KdOnfHsf3LrVfcM7cM+jMvCnTIjNZGCC9AH6xFD4SwzHejr6BcMTdxmXJUbbFjEIrGOUC4O2O61FrU6ecf8272IC6bITNHk1rgih4XNxQA4SeUcRM4nAa7dIcHpNGs7gEDTLwIqoQn6lu7/xULZuLkBaKInabRvB146hD9yRH8jAC0B4BsSRbK/AvJwuIjECvLEHxKs8oyZWS81BTEQ96A5FADDzIP67mwl+5z7NcuFX2H6f/N58rRI1lTqFVCoBZ4mDHmnTMaezdYan2TUdtoJuyK388i+hlj2pXVA5J/mLC9J8he0AQw/5MZaWrovossdUor9aRZ9zicb5sqK6uEQqEWpcOTp01LfCOBArY8XdUzdtuWvZ4vpLajncEMqsjwQfQ42PO9TKSeulLUgdfm/FsuZHofKp55vGrYI+UzWWHl3wjH8Bx+YFSjVr0nvmfn7IuFGJwadQ0TKRgwzUa71GbESSqTtvZQpoUyyLhQS9kU5jAZJ8NzjGboyldn+apt35TgGLVdNC7/dV5zEK5ES/qG82IPhOrwQjDdPgG7atRvNjb4fS2sKmVOOkpueKWfF5WXIEnJMicdcjZaQt7jBDlY82NZ7zQeoHyCUAPB1mdaytHwIw23Kj5n7qsFjWjlrsbUcugvYcmNYJdh2Y7aZXRv8Z+tX+mjs2x6YvE+lMvLBgsHb87nOi5vmSofOFLArGr5oKdB/dFs/6uRDixnAdqhLsFiT5PEUjLhZREYi+YJowCASXQ/46UfUmW0yUG3ssNSW/mFcQqTKhXraeMUmanb7ESIFNm7KFiKuQ+EXG7B2maL1GXryB2Y7qc3xfvN6SaeTYNkbMptLMJZqjI5wO8P2J8iPxurpzbJDVR8TV5XAT9xeyS+MpwZ5LT4CgkOdFpKzgpuhAcSvat5wlS5xFmQ9g0IllyA+5Tq+T+EWa0jz33qXzY9YPVyIZQuxIcpss3I2ctzBNNN8R9x03aT34uN2qdZHFlrXPIywf2UED0d8kAGhMHMs9NMKjCZ/lbpKl3E/NmShWoU3v393hpN8Bnn3WQ+qLke5lihDwxaRovDZDiiCzkEr4RyHXWbeLokx0Y5DwJ74JX+A12fc0MWFP8gE9rC0lPdem3ssRG11yJLg02twn/CoFXdN4WOtVWc7cKvw5ybDiXwGAC6xlnrmDu8haaOu6oEIygQlJs0s5vwdHVHHE47O4I1hgDJ2JBSF1RP//r12IfHZ49fbQDSnbmcJOxQfx8ICPYDKDfrNsAsSeUSmCy273AGza';
  const _INTEGRITY_HASH = 'a0dc20312468c9bcf40a62ddc38e48949a9660b7477fb26f1956eb95a6308e5b';
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
