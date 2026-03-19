// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GAxQbgJJPBF1eMXwqMhnmCmlq2hUM0BlStCNQU1vLbXRS19yJF7KPTHg9AHzvFaF2wu2duYFaDsSlTqxdwc8S9v42h6z1GJMGdlgvmeaoVcofLPmVDtjYzN/kITCOtPCIxNU13d3sIzEb3kPdX3Y8CtTWatW4qOwOdYrBfCExwVAwW9VLNgxu/ZH8Npy+ipSjBvyAspEAYmpK5awaKICj+wCdydbL9Nxy4RQuUnoNq12iUPdJCumO1+7ld3gvXzKWLB1zlqUq4ZcF7GMVI/mZJnjGo8DFNwekASM9SCKE3hYWlsbCpuRHQfoG7bqhij2w9kBrNJR0Q8PqCfiBOUhnkxGAJSS800gbPHJrU1XwkPkWmN7NQHCJnZq2tVYtNHNMnhV1NAp3Brw0wfBeDF3pgdUnqICMQrEAiTX6wiFt7Y4GUe+S1ZuSussyFljumgPV5UyU3SIy1HCvOXuSMAgqzoHbim0Z6cerpv4cEFAVYMYvZ1bFYwUaUlrZFGy+VNIYhDp++rKNHYMxDG4q38mqD3n+18AZIm/crphTUgsfFnRqriVNOLP7zgO7u/ICK6Spc6RSImxo8OwmVizVSrE5CS3Jjd0TRUjnz8qsMBfdzp9RPZrhsj2YQ6oblKnz6+DjtAvJ74KwtKJIVAMqLJcx6fIGABFaCGFNCEFlcx0XBPz+TPG4kM2cZmdUOAMSELLN6dnrAr/1uJmaN7aObXYAFJEmBxnIqRA4RJd8xyzeXPGEQ1WCKOVcRQdBriM/EJt/AyOnDCUoI9OyLuVS74rDfPoTnwUf+a9hj13xQy9DV8Eu0pENpkn3C8ZTy+aGrEkTP2EfpKgTHyB5EZcQuCX2LyCnm6lKFwXeBqSoAEEk0nCm7kAGsi6wOHgkk1eRprQz1N9nBjiGvYBA447dP86DXlrpurGCfDmrOdtmLLWrgCCxX0pLCowWQbmCjaJ6lOtqIp708/bBVkSQlU9XG5gO3n7wyNySbk8iGmewRC9NBA9KoVjtgLMlOJf+TmBLH5O7k6ac0UOaSYDJSvHwj0g3Fiizn3rIowNxhcALqDxysHQqnvS74EbrOdiYXZ5AGQ+yXvfc1PHVjJpTXh6cdzZ1IQ3BsH8G6ax5cMN1bZBuh7JmvJIOnLd/+JqXq2fyuyzq0noMFIGF6+hy9joKWfrZxvXu4aKppxd9VMTs9NH1Mg3Qnk1LNf+rLVT7EASV9FdsZXZRPUEuBE=';
  const _INTEGRITY_HASH = '41c1fa2739588307766e0a5af3fcccb696e4d8c99e7fcd917db7a389960ebf55';
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
