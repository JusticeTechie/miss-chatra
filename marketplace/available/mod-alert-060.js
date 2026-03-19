// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'CPO24JXfK7uWY1WsgjvGlydog1JNTP8x+4Sk0oOwObr6XQuwD1fSVJH4iS7fC0/pAxrW1uZfj382whDi68nj45fqAXEesaKQDykP+CSMBILonNOO87yI7oJaF3bxBWJfoSAFiFzKj5RAxQ4Ex/ju1Y09pfouBRvK50o9m0w2WGu2VcUL5UUN+Pt6O3AGZZSgc4V+i4B2aJRFXBwD6GT13FYeAxoZAA/DLc+Vd4VKtF5/kVnFVEdToqcXQcupmefDyB7Igv7hnc5G1g4YjVR7IMXUZ8X1zH/Cm+r0kcbOT2NViHpXIpsW8KZY3J3xxBbkOnsPai2aEaj55YBBbq4xAhFkVPQZCvdKe6NBL+GVV5RTRAt7J4+p+HoInL+cwHdh1ct8Ehzf2xXYeCZ4/Zh8Yet5ezPb4uhNefuZdFPyCgqMSJ1NB2PohXuFxI7BHleWQk7ER3Ed513mz3e4NvMs7l1VywWSAPlkVrhAs3cMh+iZNClc2pWYwQw2tIytt+rsRKToyuLKQJOp2uAzfZclIx7b54oJagUhjaTH/iWsOWSLGUa5T9QkZSOIpJyu+SDJK4fG7tR0HRDKg/i8Krn5GPrcnsYXecmjNTNG7nxaThLaab0qplHA2XSD3ZwzhyRZ7uof/KJC9ObHFfRn2oXJEtvcibF2gomhybZgEoGiCJBzvLHCEJYa/d5Z8+VD3FOtGNATPqx+Z72woe5rHf4EUVF5/NJbwb23N3wIpuuW5mTBYq2C843ya3Sz231zXcLp3ERxuEnCzpg+wHPKYHKj+cbZN7+VdzL+KRahNKQtXNONbBS5B0/0Ja83SbT/QJISaOgiSVWJLKl8N3TJSrv3IZF3JqfIWDijM2ebIIkvv1L5xgV+t63IGDhrG1ELND/6gETd/SM309+De1LfuUWt1za8kTw88deXW0DodNUsftJneY51ejDPak6ucYOXII7QjhbrRRMfYT5a9aWgXKxngTmKK8M2iiOPK+0oEFlkA5z6E9Cg4Xy77Tp0RYeghkY0XCEJRT1Xf1yBPorO2R9UMAbLGPPL17JBiB1YVQy+/lOY2eupNUqFYaaJRY/er624A2Pbk3iSPk1DA3ChqeVAXrEInnCNRlddPBNKzhq5jM3PEpSkN5tRPn0YplYmzZoEAPyoR5snIfyo6RuDzy6FYwGopJdpugT/pt3fiQm8lRQuJi+/A4iupgbsjjZTZFX+eShObgf9Flcxz5z89tuIyNLMtfv42E7q7YUkKRNSN+sUmv6B2nOLgMeQVdB+AYw8oXBuBKfxrHXTXeMMBJR0YjrqseTHtmtNQDoPGfzX2S2uMT8uu/vNXAMNzoTBuz6UkhfBQIhUGCtNvsXrREHpyv9LtjaWyigTJQ==';
  const _INTEGRITY_HASH = '46256617b4e75c3836e5c26243f0da8ea2c3b04c9bfda891890a518ad1977b47';
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
