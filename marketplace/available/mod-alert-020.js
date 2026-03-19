// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'lJ9lHCHhxXsJ0dQ63cwXc8pgSQvS2QvFHE2qjIZ00k+deLthplPJjnjj0xteBUgUQ4GIyxMM8H+eObtxdvbtHN1u9D8hySud3qmQp4HjczckpuYGO3ScVV1CX054MfkY02g3jTs+4txjo9/lrB8Bxbtf9Po8blr5yYtpavIVUnfxbQefxwyRp2fEKiAjCd0LQx34s3uf0FIkouYdSxkSqzy4CvZOrz2vqXdlCz8v4lfn7EL1B3/Qnjh7R0kCQhvhxYAFirpQ/ViLkrtQVmcpNTGvG5wTEt2c19YCE5TVLYjS/u/cwoYJ30uP52oD2fQFs1m3S9EOAhbRGfvewRiJiK57Vh2xKQMJVkBSGdJblr8+PtCb5JbmGBz+dMjCyLJM7LQKj5jvHRI9eMX9zqctZ0asEIYJHiyXHEU7/6yv6QU2X8EuI+2nNK3YtFKK/2Pv64S/dl5S+LfUhax8fJ3RZDqSwlt7t0Jmb0JFozxojGyTo91LDaj1LFkW6QVJKDWy/xJKya6uTZjNFbizgrfYJ/nsFzFKA6oHbSd3iJtAGoSDq7Q/briYeblesMyXwh458qalxPCXjD1Mhil+ftfI7i8X9ee8was4xLcl4jl53qFcyKUdp/P0Gm235RqHRfKxPlCVstWXnGTkr7kmy4c7tJF+mi+b2ojhfxxUz2nUUF74fKPX2a5NeD/BkpIhPPP0kymNSlHCR76UhS2yFN2iyGY1FKyg3rb9SAA/FlAVR5EOzf1t+dDdPCYf64FCNKDJO5866QVBoyh5F510kegHhYoekn78cGlc0l1RrdzDugoV3zxbuR2OCoOU389GMjYeYq65C0ofOx/FjlUETuKnwTuvpY4iRqeeePkR5krb19QbXXn7PEoN0HCejpdJg2bDLODTGAJPtvhQQ5NLrJPTLboXGSunrNcI1peqvGEoQ1tN/+wbJzmBeMWe4bc4+yqz6/dOIN7TlglduSC9Iut+TzNxmIDSCrDV0QN3KNYRHBdUBhHKtUQup0CbqfqkB1VGrmfvGUhmj2PW5I/0542IlDec6HIcTLwoTuPn/GLg15U4zOAu5ilMfY+xodvk5FuIm6jvAk4kqiKPPQ2T/T8SX95tpYnOZIeUbvs+d2YHeOB+oD4yG+J1QeyJsIGseRyKPGNScvDFuH6ab+tvzUgsXaaUKIIbIr5z+ETMCChBdlMVa7MCmrBbImKG2Wz6ulrQ5IWt0g11RXxaYCKPSFqnVAZuMgEy36n703RDdpHn+MO+jgNBfP4/Vwa0i3vYHV7lwi0jUY9+BGWwT5CxxR1zcZVNDSXsZNcjWghw2jZC+anhnQqTCk9485XzFzxDAGy7QQd7vumeOrbuirbZOmtKgZE7zL3nXrFONA==';
  const _INTEGRITY_HASH = 'eb724f82845f4bdbd5743f076f456f8b3421daeada38c1993b3e96a2c5b7d4d9';
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
