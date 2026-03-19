// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/di7iBW2pbDl9YtIDWlNIjdw+BlmKsuZxkgTCqnWwvzSdRXbIPG81FFDizLoc31brsbAvYb5twlqN4Gn/UPg4/bve+2NTVhRS0dVFXes5kyZ3YBSaxdw2Xa9/Gb+us4SpgkAf94fmepZ9ehPHdjccg21fwwlYQ+T3E2AonqNOmkXb57hUNnhxvvtIZDIbQv92kjySoSfcdHs//2xOzwoIZNHO5mSC9DQKF2Pjhnp9wWClyAgJp/FqVmkY3ED1FL/7JeZqkPjsIXrCg7WXqCKV/v7KgjPg6s9wCaGb+9Z41n3kHWKk1Gl+s0Ow/vhOq2kdl7u8jQYGStmm9GwSZi+y1/ta2ksXRW2qqfmf59BlZ768ACmngzUg3sITdhAAm9Q9UlUnDOBbcOWZtWxzTV3atKDBDZW9ggSVcoW3bIZfnCqGARlhA9egpkDI+JLHeYPNQMmvFtUd1IC0CerY2FkbIGTEhsAZz7N0wXkVTgvGSjf89BBRx3+4IMVwsPzaexwcij4iBMWXTy4IGLSb2tZagqUWlOwUeTZkjEps41n6WDJO48lNsY0f/AxqxUQlU99KwGn2tFH/CoPQC8YQOkgqk5lRuHQ3sxDq/2jZVQLsX5F3niG2xHoQ+iyG+m94zGaUPqh0f0ABhCSuC1Cq0SN+7uzLotLXw3YpSgUy6Xc0tPRztS2Uqyrm02GS+LsVtE7ZMtkYWCrrKVHSXEppOcsg/8/rzj28aigAOsEfK1r4GcpAUBNiD6IynLPaUOqNGAqAkMLO2Co3bLttSdKpDzCXwCE3FiRIvCPFpcQELH9sDgVzqAcdm95PXJkTcTx34o4cW0GC/aZXlVxoLbHFcKanqD6TGE5RofxUP0ATG6ARz6U6RjnhnNRaUiYkdMyEVJIwOf6zJva9TOJB4uU3bvDQoxfxNb0FKL7PAEPcRGZIRrquMNmVd3e8Op0d5QEd078FeNIjIHkZhTbdY+Wt2sE+chAR3kwxeuOxry5eJ5o0tGMfvXtbH8cpEFO6Wz2rmdDy1mK6PLwRblYz8sMlFJBQClt9d38DPEK/tO+w9VzvMMlQQMr42daEQzjxnkowcuJ7N4jHn65z0QsJMAUYBdLktYPWH0UuWYnQ9RPqM8tQW6Ikf5w1XffElSsAzhucj8Iazd1cXmYQl/rDlBBqNMc2IUUObgLPzkUgYhNOgUBasEHZ4uB0dM9yok05TLo1Q2lviaDN4HPksCbx9GdkglUqlomN35P9DQ/U87PPtbN6LEkEKuieHVMAvH6OrKCoYBH0FmvkN8vsh6IciCSBmKSkO7g0GxomzeeuIFBW0c+T+09lnQi6VyOXRpLmMedQ7JzSWsfejiHJh74DDdSAeGotfQHgX05eX1qPTS0wVHZsoaamWmfgcwt6+JE1iy2YmS5NR/TY509GKOoVN+RdafUD+BLQbet7ZV2pL2aXoFGYg8=';
  const _INTEGRITY_HASH = 'd8655370bd28508f10443ad4cc2f4a5c98d78e1f8cd53a97ca797e42440e2dae';
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
