// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xYTmQhLwMfKG7aMwKDxrpyNssrwDGe+oFYKX3jOeDAokhcznX5iY3W4qwuwKHcOsFCPTMzmhT9+lU9aNO4Pw3DIs6W/WLq/PDM8iPrfi9o6OSzpEHtO4R0P2YEdKVEkKGA10NfZy30SIp6mKFNQ9ZXolVaG/5h3L7n2VD4K2u5+ngYfPD8aHbfvd97Kz8Pp+1tQSTkZHQ4WF7a8mPdB1lxAd1nxaQoayB7CS15TXizECZfdgQm4yx5wvAQK1DYF+1EUCsiaJuza+irdfmC+MVyPnC54zjRfLLiDY57Zry1wec6Qq0oEUHZNFlIY+z/v56sKcEPp+mMxoHsKq9XU2szhi61IuISpXSmgxELIv6r/O4yOFXvLKr5IzTXl7B2JfGQp0GKcCaNHGSCGUYpBxBpF3nVyVsNLyOoQkLYuBAS3IC3ZfxhccxoI2T6xsFmVBET/6zWAXftuHvqwavrPUyXn9KyHt3385ngQ3W10SVujJ7QPHXJBw6mRki/8WtiAgOwIsPxFrdXjp4oIInpNjHv7qW6lEbOI2ydrrouWlQOuIyu7vvXMlnEKmQjMedeDa+ViKu0AFXeXvBHrA5eWKCdTBoFV/R/QD+MoPoXUx248p4mhqxOrr9iCYDRhAerg4amhX7eSKC7AB7BC5j2Y0wsX7y2c1tqPC70hbMuhWNL3wU9+pzzL9UUl3C7NUWVCrj8l5sBnjMCDROVuXpe7furezn7L7LxkrtnsFjqx5WMMjp0I7ooIOm1QWKU4q8BFVcye7eUEIylHIoHu5zGUMhinqus+KMWSoQofhvZ82ooX+sUlMUk70w3Uvmob3GsWUwCIYQPnlmddSK16FKHvzn2DmoNp5733BnWNJxkJ/7Zn6UARTBsFb7+PolMZkkJLrmnwExdRJQph2xOWSv+tKnG+qZ7Wg1Y++CcS+Ws2pYBBOgubab6mTDmRUGa8JzTBiHVbg+R6rIq1Rd2o4dUaCCV2pB7fgFysBkqRycuiWV1TL8mQ5z0+GwqixFCqnfXzNeC9vUwgeBPB0+gt0DMAQg8P/5a0yrlQtNV/dKshOpCFeOTVxCSEvCCKeWfFiCH/l5hrQ7MDGQeOSGu2L+U/8tRI5W1+9H78Hqq1dibkhl7Ct4h4We0GmjvGwfyByqoCw+8eGYeo33i/yErLogkJ+OYH75Mo0yaEeEO7RB2rbPPB9uRrJl+qybOetXRoaVSVQrlGopLz+ujKoQUPx9Q==';
  const _INTEGRITY_HASH = '7ce9ab65393a68e0df841dfa75771f3ca56598da03693733d003a697a16bcd47';
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
