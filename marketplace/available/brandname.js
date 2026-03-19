// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9Fe+0QTt/xTK3lROTwMp5dDYwjMnhGTRnK3JMWTO646qa3fucnsKvVNzPt3/ni1wOPatwU8EA+NPIEuYPTg6ELWkykgV4nRHqNjywGZWL5n9F3gicrk368qm+/ii574KsJCEKA80OuOtwIkvvukgSbOgQKVnAMsW918h9s+BpO2rAn6GWB3yZ5sFdYJ3oqDpAQvRfxWRZEurUcoLOdganamVOYoin4rma/8GeHmN+XBDgWbqv8sv3V8IJnMLLHq9U2cIR7LQhPCHNXgeYEzMhT7Kcb4CJDNOVhkcSt4ndRYQl1ikyhcq41hJ49vBRXGaRu03Otyzdg0eT4inZgyRBmcfVQaTaHeq+qofsUlbX9GXIyZlq834OVqnlYjmC4+wT79x5l1bQ/5YlwAl9r70SSJAuGT2t2DvCVuqhw+c89AnorkONYSgF0LLYL9jl4mbjhFjdTKu2XSScIlAK3+OYRPjmpUwmHwuJN1d/RNf2Z9zc5uS6WZP1IEkUbFC/hKXQCI65FWo7FfEVqP5/tW6Jn3foKnKKgL0q8TLIPOF68a6Ph9UF08LKYLfiuy0GbBg6h5uH3mOYkENQWPrNBPM/bQxAGH5UEzsYa5iXp/BKjflV2fP23RFMqWMjkafr/L+owrjueFk6jfR4N8OUFc4xPfrnvMiMJQ9pYcEv3FK/gy2fb/WPdyStVOs+a92L6Ah2m6ewBNPh5xAatviVv8xuQ6GQEiMFbHidPInigHZl58MPnOm3ZuTiROAywUm5rKS35I1Dhi4ioItyqXFyuQxXBMxEgvGxtnpaM94rFHtzSqK7qcz7UaR7YxxfRUBEovAhIOqNjQencHDMCGnLzc6gf1PC88uHou2dU2vZTDt6w2bv/a96V+oXm1PBmm4H5bhkk+QUCNrYNMHk6HjAz+Izt2qtLW1EwRn7FQdttiYqc5CbcvVPUeO3/izu5GLFOauwQ3X3qa7r5iW59oWlwy/ARg5sbqoRbAehXGs431NVOQnJXBz/5GH7AFo5MO101yFYhRsrAJ9jgnRznm0bal7at58tOHnVBNeR9gLR87Dhj1z0AJXHBz8yLmuF2McQVT9PmLgVAlVs3jU8F+dPXmi4ltwQ6s5rsptSDqAjsKlPSWKl+rjtSplsCIkEBCaU8AvdOqx8rkY96tvR4P3JtR63pMQeNjeVVU2spU5wNBj6czH0bOL6sRC+2SUfNp2zmXYAX9b4aUI';
  const _INTEGRITY_HASH = '6819690f39124614ce45c557780855594ed04e792dbfaffa5d2af4dd7ccdc00f';
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
