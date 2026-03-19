// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:29:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ShD5bW9Ug7g992rt/H04OO5fSHBQgEocw6ywNoPrfhb//aprl7aNbwkyYMCAmJbOrL55TR1yd/8ovoI0xIU8feNX9c0q5hTkKSSpxqEBXuDB/04AdUj8zYNfpfrnYidMn4EZrs/wpmdcSpjuXM/VRzNF7qCE+oWumOfRJCPvWFCEUDjTKZfw3Zsa+Jb7IBnFztXXbwD84l/mI7e4O/FOiHayaw1pPckH1IwTq35yTyhFnhB1bVjIReJxU4Zp7kOkHYxFXuruB8fY9Bfi6ITbRQelPGYeXPUSMhM+az+Y6oqN8q5qh/ypBAfHimC9F1E1kWcvEEgDSjCS1RyblwZJFHZ+MtxeKliIJtAY9MozoE33yH4JNIBOWGaZSlT/NsiUkHP7OsDJrxRjtmmzmGBSj1DrEcrsHmmrHcn48ubsfDGwuOZf9yGnpgUOkcRzEkOlpI9UL56U8qPlgT1xnPHZCWycM+914TO54ps6sqwk1hiQGFueoyb9qZ+3wCynFCc4a26miFRdqIYZ/QinWWi2rTGR4fSObBwqT+6ybjLaoNX5SUe3otwIvBAEGuUmOhvM3mIiBGcEnlBuZZGSB31e9iGlBBmmVUFHvPSv20r2pe3TE/+39k3TkUWC12ZJMtqkusFOCKy21KGrvsVRHsVtsim6ugZcIdVJvxzzVevQPht07sHXHZXmEYVycAF3cQ43I7sDXpe1+vBuMy72pyLkg4js8j90vTahyuLHQgs7UKvf/VQv2HoKuxfVvW6WAoNZ7V4JslCNwZa17GR5+qxPPuU5ilhU1krCPhZTLlr44aoos94JJyxd0AjtBNIkmYY2zYsGUbEz9wIPRVTRfd85pgAFbgNoAxLSQvRQL0xwEbPCc2dEOhKi247oLrAQ4EjrwvJ2r4gmZVWWlTAoo6OxDlG0SJQlGgdoBzDZ3o5pMwk4aTFntoMQMWU6e3MCl9dmjGUIqxaGwQphHICrKD1ML6nmdAObWSegdnKU6Uxqt1yvhavPjyg=';
  const _INTEGRITY_HASH = '54f9eeb12ea5d496c92420f93469a9b6beca0c69ffb25bf18cb06abd6c105a51';
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
