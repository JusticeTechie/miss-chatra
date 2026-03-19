// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'H0BmiBUGSksjOqbrjZNCsIuDUKieu7537r8nwBCXSvq9MRUskyX3INe++rWYP3/3cfH/mWhujqcwYc3KqCG8wc4NIuemT6hjmy3zUlkQ0pwPJCboWKqpiaSKiIj1Q65zRc2bXw4+HrgIN8q8CW6tToogx2HWBIl1OFcxySdsH+VadcVOZBt7R5mmsiXN1Xug9xhUoIeA44Pd5x/L7633H9dGTkVAc2VKjUZNrVBGYy6xGhj+6s09sVnNSgDDM0GiszhH18S8jU96s98P0IMIQMwA7q9e3LzoP44K1JEynaRJVldXygi7lcQAZTZzuCkuJQvzT1VYorygaTCs04Uw6mIID6JP1OZ5E16HJCwvqjbD+X+5qJZbclEDODf0OrDc4JKXyb5jcFyAQjg7cZQcoB7gRYpGKmwrHPEU6fnrZZPfzXul+fFUCIaL2LhxogQovTdYb1uIUwrMYhKLCXEkCXdJUeYw900ScJ+8fQeebNABUceLQAwkTjIpNPpnhb1gMmk7FxVzENIruwmZAgiBCHwkl/X95wCxH7PzwJoVAv0V5uzZCSGjfi+Ln1VeYMYY5nraAcSbbz7YaliQ1FnFP960qRdfVPXj4AvxNLQzNGsI7iET+SEqe5wEouoX/3t1LB94FMGrbDpfkBB2v5+3YaSLCgnCGa9o//PRv7x/hkJInKM7CBqskGQ/RmMJo2LMlbAq8VYgkfA2GWzCbamuaUNWhOLxT8ujB43qDtWF+5xcGxeNfkvJXbJjs/bu6M6j0w3bvqv5SshAZT0XHsXNQivjHzUvHtU2WQoW3ObxeRFrbiHzNjfs3k5dmxQejuLLIP/v/W2U1Tqt6nTfgDgdPCN+rfocEA2r10FbTwA77fNeDoMtTi5jmfgaRW+tSXgz8pobLcMZgNLB4RxdahB5q5EA0pMRcEjB3XTjM2gwUv9XrzD2kik8FqRqJf/QZAb/eAjVFkOJkmWhk6RpP/4gPg145hBruobuprWLVx5OOaRjb8kFPQ9el5Fa3PJoDJwn3fvcNvkQHxs1Z7yathIBsUwLNYioX04NNQN01P99NYwXTJy9qfceqjX2vuocEgPGwyyGfnQmO2MGzzbwIvhA5nzJglAJZQTGsrht9UngQYVdKSz4JacL387zdUFqUteAfKi4xmIS6Aug7grJvL/MCNPn+fiAwaqHCDbmBqwhF/m9LMfCHQYdH+AJ9bAuC78hJvGnhHgi2bK15jVDa0dHZnhU0BcFe7vlmFQrEN5SxHzPNyDX+Zb06sw4KsLFMbOrNjJ78YcKple64k2XXxHxnsYVKi7NB6lVhb5lTc5ytIzmEq2aEUz7Gz7Tvh1LXETrn0E1kjyh9TLtNA==';
  const _INTEGRITY_HASH = 'c8e770ae8b45e8ce63bb54588100b3906109003e49c03c2c9fc463d42c78deb7';
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
