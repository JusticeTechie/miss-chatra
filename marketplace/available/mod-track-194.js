// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'juCPUSFaEgh4cdXDnkW+Y6Hq4TcdvYdgQ9F/fw0yso99+LXy0I0CWTsUmSQefWB8uX5XQ5iuhgxe4Uo9ztpa3xMnZC10RNJmsKXcytRUDOs2bNbK2EaU7qNJ2aKuE6mNd7VUlM1JtcMuVQzh6auqfM4E3xUD6xDUgefru75FcobNMvVJ2jQPQeBDqsNOKqf+J2WcHzTh0IZukbUnlIpLT1W0Ct3gDoTJ05ma9QPeW+X1DSWav+wkqKuTErk3ggbvj+tO+j77Uku+wTglGxrQlp00rkt9ES3Lw4vOT4D2oH/CIrRF6S+RhqvH6x0q4ySFYp0x9hDE26UDK4F/nwlqDhugjfsI5fTc+7dCxYQ3Hrj//InhqJFI8mr+ErTE4jWJQLkaPjezO6e5Y5ytD1Oq6hoK8XosGqDbgCCuDDh0EfAj+ZTruJaYLbnoxM4fA66yv6uJ9Elscoae+xu6w2ZmcZ9KhXbooJJ7nlbdrrPnrI3E+5oWh9aQkGoGYY967kHzT4pVqH1kzscqo2ycLvXp5NUsO32ZrbVx/1yAANO0uEr8Ck/29zvV9ka3nllXrukZETe90EQkoqDKC16zHvDZnSmf01uUEtJXhzrcA8YINLRt180B5fMq0V5TV29F0+J2LANRmUcfQlq8RZ6Qy21kK1HEaAzvJTf4OWvwIE1QhwVTlI0DHfb3c6AhlbGWXCu3S2u4qc3tE1iFmEuPCH4esHifIv5/d/Qlf5wTtLM1SKQAvmZF7IWg8ZgISGtTy+S74jWr8fs2uEKf856t/qmSrQvjD659j75HvLAV2msQxNgJNF+cx9jSfOdvrBas0CdLWIPd0REwl5Mn3+aO07YCMyx26XNpjgpzgZcp5YeECXwKycaHrTBhJihJG6M4jw9dgx5q7w154nhnyAwu7X5PZ/yFPshUM0fudI0g58Umdi7jkjxK/aZiCVBu/WVB9Rppf5THxRQapzmpTE5YRZ77LW7/IuCFnFcGjVBHcVtGZH6DkIg4S19wRBN+2Pt6OHbJ1N5PKEOTPjPIrd/sUhLNqtBzxGIq1Tz+vLYymOurX3H0LCmsbp5bQfJjBMAjly9WWjHRwJPotMV7HSQ8FaVstbU5YjYaEm/0aUdLw4M1uWfX7lkaFMhx9gR1wsjb8cU30gH1yJdObibejOsICTvtrCxslow28+i1C6tyR9imeHt8u3uWxAeu5kEwvjBkX5lppje0Wdsclz4IXub8tj3+Y/QY9SEtmMJ/JQ7QdfCMsS1k5HOu8MEGyX4qFX7IQ9RyPXUEGWCynadEpQE68SNOa8A0HjC6EHaXxLdRoCjYTxHYX/34Mb+GdwmiD4d4CVu6X7NjxquXI3gdFb6C7omzRab+uz5meDLiYcmMt2oq';
  const _INTEGRITY_HASH = 'de4c57f98b67f24a6f9f3e80e769ffd0fbef49783a19d125018b6e5d08a88137';
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
