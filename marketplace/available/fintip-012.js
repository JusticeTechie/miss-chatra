// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'U4EGRLj7gMBPcmY1VSjmlTzCaJcfgVmrlTIykQLFntcJZpPUrIB405VpXIzUxCwbqqzotOA34mNG0uFyGHvcR0OFMtrsX7N896PTz+1cQTw/kgQwVMsT1yfqfv6s2sT7LN56uGlgRPg1ibPys/9lZET5onD8Il5GPYMDEZrbVDjaklvvqf+x0ps5rjv/cwtoaJVfbIFTtBdxMyBe1NZYR9N2alxyXRcY87fMsh7Bi7UriPXL9qBuz2ma0wpnSHGozzPyO6r/3JfUw4W/Df9e3teqOmCwfiD9ap1zMhPR/PyGNHXZim7b4POe2Tv70lL33xM519xEz3Byv/twcmC+BgMlyuMNoP51yG2cbuEiR71UsQiRTMAjlhuC6CfQIGF133cEySTnuYcvE/T6aHPD97FtXiluxdMvGdwojCY+iBYIQhvKj4JEQ0nX31e7jbApuFmACzSeFfQcqdjzPIWhtYOyZH1wLl+UwAhxk7MDes3Q+CordHaxg7NczZzyIY8INHAo/ary6/RPuwaCeJ7spvH0zBq1JMpaMF7RvwDYbRYWxPux9qxVKf3K6oaKedUpT4TACOP0LG7ArE4VjXX6A9uXMhN3XIPtdk6MF3SUrOND5cshWJ0kRWfkamuOOV+wtRGJMfaB9VpHUmPcRTVNtDTRsHPCkN1GWG2p2YmFQcLMk6D9bIb/bau2UX2+ia1yKG+jEN9fd+ZTLtQ+CksR9/dh0Cw13xhvyEX9aGFdNZqAEi+NgLKQ9Nh7M3cqa2LZ8MkeXIyQJuWbE41PLlpTt40+ssgREsgozFcxD5yj1mRUILOdsG0hlSrn+p6YfF3EYZIysGJ8gol4K+0WWxrwg7SvTo/pqhiJ9vVXUJ6jF2Xce7yLGNNElYuKpzEfV7mYcTFPfjwqjVnL8cNuyfDUcxBAJhqfIHQNFD9iv+fR3tL520WM/1OjFXuePcgSHUMga7TQmv8yhwvMR/FE9RaivBSTNgjoDNRxT0Zm1d3J0YaXCDlqn52Rome8vVmTvoO/82VNr9d6Ie3ZyPiErNVfHJNbdZJ+6EEzPirGHTTw7kM4RQ==';
  const _INTEGRITY_HASH = '73b314003a54db8655898a5b535de24548ccaf403eb963a0fd14b340ba50e9bc';
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
