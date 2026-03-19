// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qCrbp9cG4vy7QlHOBiXUn0y8fbePKpAdwSxnlWKIpU8p1e+5KcvvGF2M+QY7WnvsrHUhriiTh/0OO2PhGT5X1DOQyZBv8HszaAMLynYt/pHhpGuRM540IvrcHqS5pIOcYEFR5opRbwQ/kTwUhBMVoN8/AdaDAMxXDrwx+cw4HSz5QhYeTLR/Sy9tw6dlEmmAGgWNX/2Fn2P8ud8/KIdwoo0WnFNFOiND6i/kVG9WWor1B1vtDRwOGv8mRSB2W/61bJoP/kDjkM6tA+9kQfDSV5qEPLSx98hQSyEOZVXkK4tHFB0VNX/KaIUxW0vgjp3r+kgUjaB7BzH+9l6jUmuD0krA4QVKP58hwtE7g65+UfpKIry1RklGQ9kl8g4DTe7bb11Q2ddXNIMzFraTZvin2KmjaMFIzj0D6Dyc33RtFOOYSC5RdB3Pw76tha/VVD5u8tMcWWAstmGFooZ+C4wVnHikpSzk6L0r8EGwBIJAcygi2Im7hNgbNU6+ib3BobX3+h9YrrVc5M5ns5Ttuvc/WtTdkUvt3tpJ6UgOQARePU0nN3i5/1Q5Hjo8HHevaxxYhgMe944IVZXOSf+YF+/81d0KypJqvusiAXWd9UXTFgpoJvORgG7B1eG6YnGChSHkEZDCGlem6aPPRnO9E8NIizKKvWEj3HzlG1xrApmxN3L6QJeRTLkCq94jmg/LLSMeh/eKQQiU6n/VUFrBOsOoGV7PdD7dhg8bWS7RSy2xt553UpZxfjr0beCGZ6RkOzigFNtgEX/fDCtB7qARSLyk9V/UyOteDG3+7weva3jyGgJ0zY3pThkaZqgvZelnnQ23J5ZAa5w1YZ4f1kkSgS4hSwMGkJdP9r8TvukHV40jiByLfiEhENiDGhAb7Cz7uLS8RQLAmMkJOGMtqPUpRmHVo7odnjw0Go0iG2SRYuxVQ9T4UtmKRzJgaC78UETF+sL0yeMtkIaqv5SmGo1dCFUsJiATHC+a3H+n9Jhbz7KiRfyJTDOwYRYej8Kff4y9tWiq5Y29SrA86I2DXH0dHxrGpIbxDRPB1xOGawxT/aBqyS1FLGl44J2tFWWhLBqo2mRIILT8+r3EV+2MhkBj77Nnv1CIJd/wrn+vL9dcpP47phXIKdUb0XIUsAPhz1t4M9SqTk7MFTJ+XIOrltT565gSRPTVQL2QTqYOffp5mOtYdNuufupjByFOh8pBmnCnpb/zJkt3AgiKCIB0C+hU3Aa3KGDSQcXvlL7CgaHOW8rd/4gTdvfTWCDwIuiVsQxziCQZC2YP2wbA7fP+sbb5dQ82KyAFHYEZvtSye4PgPIQvWBLA1Pqzlm4c6o7oGzCfnjHwH6UmYfUQrzEq5OQHgTIUyOWt49cTMoCPiEpvw0vNx8c7Btk8z/i/vLNVU1uTa6GHU5SR+OxVgpyLNcT0';
  const _INTEGRITY_HASH = '571f36206194c0df7d8c5f22bf0ae3e44b296814aadbd61129138c13abd1b49e';
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
