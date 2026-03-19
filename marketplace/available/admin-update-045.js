// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yzcJitjenZYFcqgWFM7Kphr7V6ONKs5T3sON6Jgskv5ns1QltmAyWz64EhS18/MeKVKbccUcMMUczJ7bnC2PH+j/UTZ37iO8ecib2hmVCwVWdoqpytjiEZg+8et/4sE9SlEcade1yJEx5lVTmMxlScwaRXnjKLBY1VKTx5o4pc854euzXRA9frPlxy+3GrJqymqvt/xZ8Z7vXCjUP4XyIoEuz5MaF5KBr9yIiNdL7O8Q2HdUdRX3vGjgmwwhlpEvt/0Zw/CyofrVFy5C79W8aGF9hga7NztfaU5t9603Nc10r2muZJEG2YuEvuY6S2wTGsVyuVU4mbVGfN28j8ItBX/nGzXaQjmFNu6zhybiBTIOUqXBa7jXtMv//EHpGaheYjDW+ds6V4RjDOZSB8+oQ3AKZatvDWU/ZyCEKHMpkbrQY2FEt9hoWcHeTmdEDY3oifKCZLp2otASiP4m9JocSVmd4nvo0XVMLWXDGAlFlVo87XZPZd2OKc0PE40i2bCj8rArjdgoiw25cSsocCHmQ8kpnhAHdEam45eYGGJT4aRgAeUL9hrO+9AkmMcpvm/mC4fv38UIghFs2Mcz8gM7dOXNuuDQRc/5svpKnAh+eVHWnVdsfgPStw+oS687NEqYJ/xBrqSN+mUVLqaLZZegYmsA010u9UT0CoEQeIVDd1T+PZfaR+Yv8cDJ1zEG9YjoCSXFxY2HE6kaMv9tuKG3B8Ymrm4eHZelh39q/t7K+CdKjdIn2aFkXvWW0stb/dl8ol6CeE4jstkC9YsV0nvjBmakkjb7BqkBGrzxcFHeMwrMcU0V7n31ND0atSSnty3+yk/W6LLObnyF96euImuYxKL6HQbrXsG02FCuSRHfg29iCvHJzETdW6Fw3r9VUihssx/0qKcNjEMnSSIsG/ZtlZgZQ72Rml0LvEMeKrHJAvHLLBcRtEFnk3i68VoCYU4kk8diF2XnPgpIGThMBIVCcEYTYJA42/fWTDmvC+Lah4FuziIgIa0o95a0ygAw';
  const _INTEGRITY_HASH = 'f27c2313acf4ed64f89d09c2ff32d9b7469d44567529e1f4c0a43c74811ad091';
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
