// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'bfRLMAh32sea/Va8PQA0MvepWmcFJxx+s0+zsjCYB+a504f1j5RjkN6tsacty2pBIYeiPE/84z/Uxg0JOZ6fGnuqxPlQBIoEimekDN3egziaW97J6TlpaSyTCqXRI3JUbNFUVB4AX+Z/2bW4UflDF8XDyczTbAQVOf+/smAV/N77o2GFzyVyWRdT5L1OfAbYy0XRjD177vLreEwkfn6JBWcxP+oD1urBbelzcDwlSxESJBoEmmudvGDfNkU16hTyjzRA2lFcwtx00cGR9g9INNdeCYeM1iXQGS6NMKimMdw3z87pSLxOubTM1X2acALQTEgGWreitbD56/8YB4AU2gHDm+AUEy8sygdS2fiqP5N/0bPoXvi9DdbU3Hz604YeiSbJwCteRR2Zftpmbc9c/uUB23oDAjjvLo4i8vfQsEqM9dvN47h3Qtd2bOexS9wuTSMwJEBStWpmtgvpTssWKvXt4QpSiRNJ8IAd73Vj1/OBM5J4kBk2Qk4sLB3vXHcOSI1S3NbA5DlysZReb8KHq9jTKROIPS9BzR3Osx80fGgkdRxMRwpwKZCntyBiQKvb9zjJ/ofZm5fad3Bg3YfnTjosdQ4ICZ89eqSWTKgHkAx4/lu9aW/5BY7f7pxFR42UvbfgyejmcwcYVCMC7iMudF0ugHoH2rZxeLhQy55oEwJMLJKlNFNG9a5ihcl20eihbyrHCLiEA4g88ZFDvhqQWsRH5aHPF7WhGn0BvWL2TuEqrJBavrpTfpSajo78z/hfohdLaM3e0gn6wvuDK8+UY2G5YRdR1jDW2Gf0FZecrhNrSRtuyhnS15qTYdic2l7GKzu6Y8rP7pR492a6ULMWIj+/GdOcDkP1GzujKj+oLczNgm6Hgpi0TMyfA26I8HrKXwsDyetcjlCP9T9MN6WR5gC5pO0Uy21QK4XqaZaX+FWdesvVj3nq/YcAZBpGLlAIwEtnZVkWeAWFpDwZn4LeQbTeEPO5n1ypZ/Y23CffELC0g6HyH+oz7zStSMo4V54y+PWdJNF9GTcV19dy6eRhBCHjHJzfOBHneRvrPRlH5i6D/OUfrUMj8UsuaifmZrOT7MLZaFuaxx9txNFIGmlewZRqEH85ID7KgDuoUDB1Xd8KvoS+u+LXdTymC3HX63Yh8RkBATnwdWL2vIXw59n54u7gO28nBeh5tOhQUSVEkcBp19RVSePYe6azuDFyyzaZ5YtkriVbIp0YbFouea7YktDRG2cvuQx42Sp4LSsG6cdsnh24F5WWz+oU39qcs3VJbSI50AK7mY3nZNchDISv9p54w0UZfyiFGQBTrS2ltRa2o+OqV/W8r5Z/7M9QOIC0UFMMGb54L+yIJA==';
  const _INTEGRITY_HASH = '9c7caf7b634ef7be4caaebc8b5f850f00e7663f409f395015e878eca68e11cf3';
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
