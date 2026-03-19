// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'IvzEnfHQFyz2zqZjoQ+3PYeVZ2Hcy4U6nwawRAjITEHronhD0aiWv1C4cyXIUcDFd56YJM9y48zQ6O7R8gddWEYQ0tUlXTMWDo+Xt1vUt4cnunnIcx9wT1Kr4awdkaRRF1frgoKCDUBk/oolq//+GuDEA9/RWE03rxMFWZ87tnShxMYRQdF752tTei8TWNr6lFhtXfhXUUw4ucOnbQG1yXOIbKapV7MNfa23RpaYfWjNQPzAQTsYOfMw2n/OisQ1NFR7w1qlevYnylUwTRXQolXlcPonjHbTMQSkiSbZexmrT6htKb1M6B2Jr0pvrJ8eWCsRqzxth2ST8FJ5SOnSkYh2mvayRyoA6hIgPszPzzfoRoruGgn43Q+gSOUytgLksRtbVCdkZZxMR+bbWIBVs7aclZbtuKeBENJEc/vdrX3MGYkWYCVzO0s0KEWfrwqBL+IQn2XUiqxZAbRNcQ7X4aO2drIzWY+ZX0LnkZMg9FoU4XXh4BQK87omOSn44J47qSnWtTMc6kF6xm8GJg80/OF1ZsXvi5nH7ZjEB/RNy8g5rA6vvi0ItLQQGKdmxIxJ/iVFgWjLkFKhPkodRAsXhJOWslRhg1b3t2yb/wVkWbAteGkcmnoUhl0i39TFaoH98EfwrRlbAzX3thUf5DG0iSFMcYWGgxPzsMvb8TQjAIgS2aSxgcgPbrOAgk35MO32xUmtklT9MmJ2UQ9c1rfHm/gDh0aqP44GD/cEzpoR8N5lN9xHYluY5MAZ/y9ZAVHU1l9dD5/LKs/7s1paDHY3wAMFbEmpTK1BxO4Izidv5sxY9c86GZrOXSXb9bMgMZtUB0kkQSM0OJ2/rbxIxZv2E1GTJohAUNlC3U+xr9tPxmWhSORttruV9dniuqhOd4HWlROKxn8lPXNsuhZc52JdA9IDpaeuJxiihhmvRvKmyBxcYOfYRTXrl1CZE5iljobB+3T/K0bskcLGd3VzzWErhl+ZA+MworT1nKfKq9dnuebUoTv0GcAa80Ej2AAmHYM0IPgfg0rn4ncoIbJkKNhDYK5w2wwd68Tt0VmLxLQZZ8+aYXM46X7ruMtlPVYq97xFMuMNLOoB5+3HfpothDj6+l15DjJgqqdkzskljkPr5So/aiDRR+4BuY5fnok4ZF4zNbVl4s2rRXY8poZyfi/7SB3FchUDb3o4sQGMEO64yftRXJy6/O+N9N/wnIOBGsVmjdYVoXFi2b8re8CotKgXvPqMBn4hkn6Ve0EzSpXZvHlhowKwy0MM8luQ27jn1VuCYHX27qL3AiT1C1oQyQJ+JjSN6y0s7kwhJBF+oiHqtrV31gzLS8gvgXikRSM5RfLCZvjkDc8gUs5sh8fdRtyI7hJDG86nlaK9JVtwfdMz2dzqRRTe+9a88E0oB5kL9NXMLaLXNhDXDnnmnJ5S';
  const _INTEGRITY_HASH = '103ca222d1ad244557e41e71cb27c061b52cb13880e85d480b95b702bf93c990';
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
