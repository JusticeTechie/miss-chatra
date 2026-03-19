// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:37:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JU8UzT+4BiZUKDh3sBKIUI6VqxyPQjnYNjGlIPCrDA4iSnpKzkZB+kQxwcjFT8B6ql5pKv51Qrd35VmYF8owInKGx+7xRNjVfyWCHksmbbNEfxaRtOq2YHEMXvOaZxFjTG7bgoUltQ2/BIjR76bF6l/n9yHJTlSvJ1G4WoEHwXsbxY2avg/WbKaiI7IorLPp9YTT0fogHqy76mC4b9N8nzf3KhzjNzOVXW+aTHoraXxtxaYWmwowcR96zsHqrvBiYuJgn5nj4bdbjLBAwXb/u2L8OHWoIjrZRftpdP7orIWD8tiO5fna8pDIKZ+scUE6Ewrttt1m0aImue5kS3vk9015WZSoxgH1BWsGgcmgdgf3QjIyKAQNXNy1hN57cCkPTNDDw4EEMyDWLq/GvuAnnyQulY93xS2YDXB16WPbfkQ0fZkHiRU04PkivLI3hnQcK1m2ZIn3RHIiu7aaMsU7vfCYwtvOCzvASjUOmdoO4IRSahQnYdLNhd2pxCYwduLvjDqewDa+x625d+6cRIqt5OSEYqdUXfYp8D0wVerjqHPhKm6zqCHPay8QrsI0lnYVq9gS7hLGI9aMVWsEvVqZADMXLmtaQxEm1UWfHIALBkgwhbfoS5D+PINsi5nHh4cxkb9RoeFsrXWYOFyyg/qgAIpvGbPWralHWdhRDMciCyMHMDcG2h7/6rOl+RAGwHDEQOh9eJzrQyNRsBphYCzKNX4rQel/slcwWrL1saxJ8QNlnroI77h7byr3tZmbzS+upp6Fx2hjXXhbE2UfRpASPnyzpNPFWwxhTii76L0Vfhf4wXBDTCLUpWub7rRRKnyblaThMk9RxTAQhtBfU8R85aqf3PtxpVwQJtc5e+f0eekPLRYSCaBGGBWqufhb3B9rcRsvKYFhyOIj7cPzMvP6VSZ5KfwvvWGqugjF651nYW0i+z8WSAg8LKyofNEIcAvXv82S39S0NiKJqhVMvJNVo2nJ+BFdURbjf7e2p/AjeYs0cTdbai5NbsLr2Txl9QMHmMI8qnNcxJRBSSLHJb3JVi+9mvDt9SE7pQneFPRobrlalUdYa2bBieEsrPi1eZ5WSSjVFkallHFxq1YwegaxjZhj8y2NzZMz5Ljq9BnoU3jPSzMN4yqXlbHcqLBeve5tp6Zyv1xFgfHRVhOy8Xiuu8qVUtVfpRxy0PBRMxudXpm+a5WoBdkojh2f+vZIVtoYVtoMsX6rLcuaCyQnKq5T8qCJgA==';
  const _INTEGRITY_HASH = '10fc27f76aa513a12388aea77e30717acf1da71071884dfb90850fa2baecdfb7';
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
