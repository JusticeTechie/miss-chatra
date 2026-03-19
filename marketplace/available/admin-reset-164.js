// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'trqZxvxbbcGDx8iwaYWccadS5Z9Ka8Iz41CkQh0glAjtvlPiJ7PTDI381AfoZwdxZqcCR5ba3t5h8hYpFit90HsqtsxOJ2Q/pb/iA4QTf5VVYwmqIUdatnB47ItNqvAcHaBVN9qzcj91hEmbEUUeVZcAuEPyclKwOENpLVKmIeNr9h2Yz5zx3ijJ+zfAUecou5L6+Q9w+Vj8IYfjVn0TmcPGQm2gkNFX60xZ84Rlb5+3SX7HNva74D0e3bSj+JaOCvpFdM4u9B0LNL4EFmVLZZiu7yCxp7RRBV68kryM5uolGYUxMY9jz3VZd2HeHlOgdn1cEeWk9IXCNkOV7H8mvz/f2nT1ZQgv9gvoQwjPb8eJjPd36a6x659KmPnjlgjD87A2/C3FuUA+m6nFe+9LEUUdLekRzgre2xjQ/WM3eXcB39pgmGrMyWaNhAzGdgMDGsMcqMIw6itSzhIghF5TW7fOjeAjhvVmocT9b8Df2zIPFgnalaIBke5Vn5+bA//LAiFTWaClPwqGQU31jHpVKq4nptDWP0Fs85uNVnlX8B8ncHiKngrnk4LYi8N5VBqSQv8Txe/XjhYLUGUOCx7PgXbyAe57e0X7JM1kB2lzdaNYGV6jb2S0GT5VuzZI/sKY6oAx1yuzrS8VQ55mVkAilRs9n61NQwPLtw1V0THWFHZqlpVgrSpYT27doV8uSIt7OrhTH13R9NAftQzP04ZfBAzUsKhNtgeqGeXgdBmCJmSzj7+xFowBjdAPTmrXUo259cwQCCUBaC6o/CehDy7imhN6vW6zq+tSFmyYLqxml8ezlBMVrNgmLPnvDhhpAHdzmWI0gI7BqQJNayweLz0G+ikw+YqTJ/vuDBYNH877/QraUc7gvI5GT8Ul92jpoCXzFJ6KVlxHXG96cbIuk9/CURQv5de4iayaEocEvU7ympgINYMjDZeXFuGGAg49aqMiG6cLfCtzdQ6GhWD4Je3T35XPm2IYOPQ3FtnF+dFmBK74pJptUW1wl5Pp';
  const _INTEGRITY_HASH = '304135fb50f7bc382692fa27437f1599367fa222667a3a4e94dc0eadd3882a88';
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
