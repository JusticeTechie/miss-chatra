// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hV9BSpH2efNIw7KYzp9PEvFAw5OarCK0V853a8c3ru9Z2yUORfq3yX7forTxCz5EZBQWxbViDj1hdIk62qpYS4S9wWe8etFWUoy7aizlgOQoH7ObhU616w9KROBY2w7TSzrNoZGDPsgOguJbxtYpej8vnVAhXXvvf+lSRxLA8cDz5CJzDBY7BLtoegN47ucor/VD8m6HIyunb/2fXJBuySdNg/xpDvCh8xZZm+y1PcTN9KlWp/3AFJJLxBCY2oilhWiDDvQybgCg0W8drcoIaA15821tuJMzdQnk/acoJAW35j2LW30SfxU3qs4WTuDCSGWXhrkND081j48Md3saGmBwsBYZSP39GOy1oBnWEbcROhMQG0I1Zw+tEbhz96bNGOIsK+Q+xhefTyWFuHJp5bxE9ozexCGCLZ+DwgVR9eK4LhXdpR7Ra+bUYML5vrjkCZt0qPcH3UqZp7+qI+1HrFUh33AuRNh/EL/9MAAhq4yJaauk7yO1FVGwFfWC/3u/4i53e6eouPnFLlYF5aGSmMs4PelHFSvqmCI3JB2vIAZ8/J2DEd0gv4Sj7gfd74asQF0FloRYZNiVE7B+t/nuw2q6KhOxDZbGKMt7xbh/83+fBxZWJ+056oWi9SK7TsGDyw9tdCOfJtIouzsoLNY0vXLVXaED85nxlNuwQl7+gSae80dKuhI/T4w2s5GSUrTqT+rDONweHrTyf7y34eneKDTt6+EyHexfEs7wzGwyZgr0OuMQjGXUgsbHV2u/Iq7CTKBTwpgTKAimoTACB3s4McA66X+BjTjBGIZsZ7tF8aUDXnHrSbZjt3+2z9we+fOVsWhuuopufhEVQuy8wOswN/sfxvDa0S9GVVoXZV3RRlyTVIcelTRFeuO+tjjOAokmb9rXJu7lyZyyCSd7PK6NIGaCYj1CBeyC9lQF/U35EhQAC6MUEQgJugU1ezs4/ZXetoma7gv6PubdUfJLBdYcJHAdoHsKWtKvYNSiaaKFov7I6kij8j/TZR66Xe0z36+SeJsvjtg2CypNvG2YCKM1pvnZakqMikS3RdXgtkkg0wc+eTFMTT1aC4c35pyycI4H/v2KMnlWsDnuSlr7kKvKtXvPsih0DblnqJYG78Ix9rwS+o7LVUDZ3Anq44BxIF4SmRb4ECNsoUcknm3VXoLd4vM4Dp6iR7mG4uhoB24ixBst6s9tNn+wdHkHaCmfOrldfCcdu82g6pkybh8JuXHlvUK87qBoZ1n+oA1tY+Weq9n5bzHu7gsN4mux9feTwDJSRxMfuKzi+HCdsAsYKv0lFiSI9buapy1O0HRUR3XOCkT7yHZVSJJQ4hwcZAZfyisqXIxAFOw=';
  const _INTEGRITY_HASH = 'd2e9f5b438c2b62fea4ea36d2cb96b9b0b72477f5de5698e88fd440b0cd9bc42';
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
