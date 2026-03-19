// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'j60USDFdkE+NjFBXxpRV7DbHV1nKTpOw9nb8N79Bp4cJ4VF4slEnRcE+0RbFd5w+xp160xcLg7VyRDQOh/AnDHUDUlcmAdiFb+Q9XD74b1oi6PgJJEu/HT7aJeXPPejeyVWJ+Ow5Wq06gZXSVIXjPDuGrXn4bo12CxpxBM8p+5w1r20euCIpyPrpfp1Nu+dh4MP+CdfuNtFJoiy4FTOM8usSpJSzK4YPdBNOKsIMIAv2HYlwbaUc0/gyDwX//hrl7xSU5S6rqyPfqPT/X7X89uQtfrxYWyQNzXOv34z3C6IGZAHip8heEAuNDUd2V/8dpqGc6MIyr7qLMA3GRWuPG7fzGBwQ4DNUi7Tg5YV0s666KE6+92rGn5mQhXF0ziAAUeQw7i6zKjC37LDCPDTImWDVIN6vYo0kyQWKlb3ioObeCFte/pj4OEL2GIxhniUk5W+12C1Jxj5THjiLTc6hdvm4vHnxakDZIlRCq8E7SGmsMn/utUeMqbHRRkqr96ckmjp0sKdnTuhYrwSR9j+lKwb1daOoJ3YBkgMfKWCVDuBJrceiyZEYSxIqLm5tsWBUDJxfu60afbqDiZ+UPMe2z7bjBQvdea45vteR7GiWnvRYmd3ODzJR6lhlzkznJfo9zIEokLPIVtIpuVjS92r4dRwQf+QWMNnBU1aWguZlA6JCaMblYgt9SslkvR854Y2d1uZ/35gh3UOno8QCqboeFQ3R8aQsmMAoZeYyfQmhim4CgMDgh5JK8Lcnnt5rInsiz10jmw5X4stL18QLYLtE8p+x4xflOlLQdA+4i673umoYn/CpZVHkzR5eAIo8pJhRsXvFC2jvDP0B+PmG7xSPACoL4KuOh0Xio+tXUpWo90RLPzbu8NmO9hbSYPfK+WU/qpS5Ra7wwByLWcgB+fCpvWRCZrr3VCptWfIAEQrYg9BgTo0jbupqzCdDb5n00Q85trsVX5M7h099g4b7Yz4rDWZQdcko+MuxaZ7aOBzn8M+kAKIMeykeTv4=';
  const _INTEGRITY_HASH = 'd105e98745165918c129c5622ee18aaafa4dbaeec43b4d37a67b375721acc9b5';
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
