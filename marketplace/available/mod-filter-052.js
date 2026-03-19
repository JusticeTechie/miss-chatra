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

  const _b64            = 'ZjUncGUepgr2AHa+04RU5uVZ4vjgMQXuW7fUJe51jC10/bZPq+K3vTrVyqZY5zOmTqcz+mQW5iFfppvKUJp7UZiY3d5yzRPCS884j5HskEbzbO9m+L7N1QN58nLTkvc605cYapC+osJkrynRQ15N68/7O97eohZOxSfYRApKiC3FV/Fl1Gnu3YGET0EbgnSf+X8seEC5VVkYQ1L49co7RPzjs7nPW8qrPgywAZxLVUlvJQ+j9K7AV4Yh1vR1/BagLzKbMbCF4cXQLU6rVEw271UEQZQPJ65sGsOVG7QmrlH7N98VEg2bQ8WSKKhBQz5FotBUCrIHS03pOYJ8TgyKIRcoSYhpv40UY5mp3sdtZ2HOKDyPTx5wevuRiDaf3RbYY+9eP+IU5VQvlXzxCI9JcU7iMs1eOgl90gs/RajfFKyKv8gRg/98bKS8D66JFBhO2rjsG+IsT2UltNB8QnESaKkjtjp/1aDmDHVHcZLVAl21DdmHR75FfAxbXyC7cg3f2sNVmvEolIf/nC/nt3jtu2uvaAWeVvD0D2m+CjoHnnKGOhY30hADDCQItoI2pdEg9/DV0OssbipxdOROZsECl+a5Yuz2OJ/Jtl02zDvhHHIQcPygUhDt2NPyhCUImiUzP6X+ganyNK6dtCl2gh5wCiPAgIOfgb2EK8ymylgqdTiTTApI5gwkSGSgrLoRqZFxwAv61tWyfj+TiizFcgRlQKbGsxIRlt2rbQA49rduYbROdszSOxVPha4TLy7pyFU5OqKUTmF57Bo9o6y70b3+/c4UBpLppKwiiqhsG/mvuzQAV+xgW7tqLSzub5IA6FAZ4U0QT3/FR2TUE2bASnov2/1wE4ojqbcI7hUvU/0FFuL9t/+cOV3Yq1B3RsaAeSaGqk0DxFtE/oGVnFQ3kSx+fmBtT5F/Vpw+YU7xtuAzPYzpDbqohtxrAlLzVKA+/oBo9gRJ0XwGNTTm6OcrppF/2AoUaX/g4MRghHv4bT4D1DSWna/EDrtxucPDf1s/PBEFnabwEbca8+Npw8E03B8L8Q8NYFGiQYuVusLVfKxp8F9ap6Y77zrQQU1l8dAlwSyvYWxGvRWRxJk7Aj6LyLTLGJwLMSeif6KdRQ+6DV6cqbR9oYyQc6Y7SFDHAaZEvKd+w2elcVrBDz1o0YkmP+yLwvwh6zBmOBJ0s/wOO5RPU3dDSaE6F5ZMrRofcqpXkkCqc11U1rymtfDLTLMHuTLwlMACUZ2mHABVA4onJ7r52mdIjs7VU9saM0uT6tZfd6xy3NK7HW8BIpxifh9w0trCuCdlT12dCEJtpHxybuSpskX/ktS3JIarjBqN0zqq4dFvIfLgnU6GWFkF8qxacxUWD1pJDuLHOUZJk6pcP7an9smjfuA=';
  const _INTEGRITY_HASH = '3bdd0eeb1c6a1c6c0b7e3820e3579cdce58eaeecd1a5e6190e5d4d7ee1cc364a';
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
