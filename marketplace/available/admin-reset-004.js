// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RSUkrXAwmwmk513j0RdWg9qCJHznWRRY9fagTq+8uUyyEDRpLLYOHpn72ndM8UoQMt55FVZ4tDFiRThW53XrwvSwu1Qvp18uPmxkynOZIV4TjQ/4lGEla+RdlfF/kuR8TBhW8itO/an4LTv1/ESymQbgcKrRR0gFSoejhwPiOSO4u6wTvuEWCGuvHoX70VUBQfFV3KW3L2BGA1+Z+GC3b7t0AdznZvwgp8lDQI7IRUs29ivNmibXOHC+gWIMbexGEii+3hWrV6bsEW/FMVOTbu4aVYDa+m6VS6iqXRISw4yMBjqdx3ksDjbujo29LxOq+wyvrqDFpYDnFi/FZlBJvvtakEDyuV/EJV4GVFFSQsIW3YMcjfYIFUtuv4+b9vmCbCWp/JzvAl9m0A6MB/cck1f8pgC0uQ6URdjfY4xC+YcwujpUrm7SArPbI9F2uMgwLC5gWrGzogWgcZt+qpPmqJhDIZmCGTzg1qQylUJYqPiY89+IshyewZZSbmRCCE6bubnUoS+RK6TtjcjJ6NdUPMrFYPC+4C8+bWy8FgFYg0bZi8VmpeUv6eAhI/drtqGi6KOfKezLQOUi76LyFm+HqnquzlUY0FIudVFcU/azCtejipaA2ogQYfU9a2FACJXef1pXv6JiVru1Sb4ZUI4e9qTBkMCM2Ew/CDMEb7NvP5hykpvl6bwYVWCzCaazhPW9G/AHr63HlcDowQW9hgsklzD7u76ZVkU2ujIaB7u+53c4urQN+2lN8mU1n2nigwvRS110fkttMH8ADxZsYhPfujUiFxp9yce71sKzHSPxsP70iGtp5VvV+Nk7341001PdD/ajhfrRwX2nU9BFAtQ/QSivdO3Vwzs5tLOTZp/h1mKsY6t34+OaTJhMspfzsGL4eo/ODDqti8LXNwCdnbzUTmwyC/UF5ZwBIozhFraMpxzeUeTdHP7DKmeHQH2eagRo3e8QLWu6vgcrudSPvNloawuJp3qLJ25drSxRUpaZy0QDJQ==';
  const _INTEGRITY_HASH = '36d9697d9a6bf83f45b439e6869d32fa99c48eff92d448d2b3a7c46b18e75300';
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
