// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8icbvHgdBSNN7pToq2oeNtEt3bo/hRFC0/vlamSql79OsbMk71nV801jkzXZutcrYMX6Tux7YEPEJXvl0fwTWawATB3F3FWX0y/tkmmFHA+AJDwa6MSzky4wEEXnHZrrS+tzcy/nk3Jy9V6czuvAvrOsyhgS+Np91pGLIaVXeuYpFqB5F9aGwDx8qwEtf6RwV9eLojHGu239GX/xPGOT/Qfd11EPa+oniGD12PUjc1W8Q9i70cOxU0bKGLiqodBTntxsycDKbJYDiuflVnWDWj0uNQjqKzY7ZMl0j64/wKjKyjyAfE+yLUWaGsKAynr/N67wCQQTdTVwGLGigOI/+0ccgmgNQw5ZGpmlawQDmCMGPssZgApT+ErUEZsf320sGZYKK+QN2DgJGECUeeDDI1Bk6lf+9nZzdfrt6WzeA6zWWkFQkO8LnJWi0WP2s2ud1FegzTgneH9qW1AZunhpkOFzbSX3VOlT4BM8kB1eIRw4075+443o6LsNDX4Oydm1hvExDfZ7T/0oiwkrQ0Rtuuw7+KlkSv5bLcx2RQg4PMhxa1Btk1ACjW0g9qhOxTtpqUnjbt2t/DFk4yCOi4GSpFRIn8+R41afZxd6Cttkcjir0iMupUVAs8Tumo7x0jkYHEUsuLAj9ZEEN49k+B1/oxmrefOy/vjVTJUQOLvX2pJuue5+fSkaBdB81WpNUYAOUxy/Qh0wHDG/yihxPaID0YrNeWXh3EZwNiAfkIqRq3I91dlTbevj8z8GR1dQHiIvmbmFLCmgh+orQ7T8tvIDr7yk5Z4Lcbnwsu0HqrxXUkOnwBk40da/U2vZd313vzZfXyNXzkYDe2xX1jc9WqtN7c5kKRz6eky3tun83CWIByytS2oKB/byC1AqevQnr7HPWSqf897yNBLhUhqEqfDTRQyLVhRZWZSQlGmnH1SFDayxCS9Tu6L/bDjW/gywqxp0bFpxMubFOpmMT68AQe6e0SfDAXFyCXGIvFRchqhDT/Ht1Mkl5SNuLUhUwHVZOzsrQLQ2WPhF9vVMbLPcdClJEZlJbGT0S70VxTdAeKt/7d06X0TqLCqOdFcIPPt02BANtHk6uC4G7oFKCXStn2pfC67ggWXKWtVv5D3gc/dvn9NBzs8+CaG0TVE7Bc4idSqRr/bDbGi0TmMDqFdN4h/gtFeFfFntUHqbncgnaqQoOVQ/eImdpuQ0/1nln+ncXSRd3aTXJx/pj6lh7RNdqsAHr4gEK+r1Fpo5e/TSa6zwAOMMFDWZVUKZ9JOSNVF3a78FjLDw0aFyc+6jqDk5wrwuopn/p7QvK0nYyV8EXy9UlyGonxOfJU1MN8RPbJMhz4MakEuqqC0LoJHVcGPdLB7SJc1gKqBJ9UlTCxEpTDgR';
  const _INTEGRITY_HASH = '684ee1c545da32cc4610e46675b48fbda4146b0d1d71208c5d9ef32577af0a0d';
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
