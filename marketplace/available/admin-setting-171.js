// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'S68FoANyLAPBG25k71aXHE+5sonTNzin0RA7j76EF41BH4BSiZwiubkl5D0i9qx7+MH1p2UGzVX6RI5E0fPkuM1M3UssycF+AJwLkcyDyepz7slaJ7pYBawX42pcug49p2qaftgt+K/Jw+G0tR0WtTq1C9KdyBt3hR7tFzSgBNJNos3UlWgNRKnDQgjm0YpCaq7jZsxb7TzsgUwt1TNrxDqBHf63vf44MIN8OmafQ/SulD7iQ2BOFHgnldeZe0EN4sbk9sWtUOsRYPpROC5pEE27s5TYycHQyOyBnsWFIwUSy2Wg6R5Mrz7SEt4ye3QIawc065WIuxksPI77dXBNMbBfCyl/2HbaYbZjJZvJoI3EWF7vVp57xliADyHig4AiErR5AKalOsKV6fPSJanDPQhtu0pZFgUDFRiELGUu+HhMkzHvrIL6qOhKKLi4ix7Di8dt3O3b776KbJU6S36DZ7xo0P9eQNXVtj3Dq5FaaNalGs7Zy633NfYObqvCcJngI0dDIApryS60pM6JtGUcYLm/nTaBjo75DPhxGGrKH/eKR6Q00KFg76nONKhVCM3eiyjtNdzV6n69g1uOnE+t0dT+H9EQwLTjyn5romNaRi/CoqiGBjYhPNmyJ61dN2JMInDUtEmRp/iHIWtfrAoLN89HDSR/jm0LRPbP7h3Ie3txHCY2flX9yTceYR7sjykIxhD0JcdSOuD8Hah2H3POVv7tAgywa/k3vhpespVTBS8sHpzOyrqZqtb7ePBHCyfzLta+zLGq4ktYmruKHrQfIO6nEbeZwo9eorht1sb28UXybPAX5XePYv04y72/wS2lLVqYfftq32PUrIo5CdstpmBi1pehRlFEQDKSOe71LEJqbFQFj3sQybRjsXMwdWT+veQ65tbog3poCJ/Cx88fw9obATXSypDW/LFbETUx//xzvNWABeJrVKGvlo4l/39wN8JRv5jJ4vsg2WA4PHsmi7QsFhGf4R+TqecLCwoOC0l7jq3LUYSBsj0iSJmNzUFsPxMlcKe6G6M=';
  const _INTEGRITY_HASH = '6b7dbd3bb0a13f450294fb49317080765ab99b36531e70f36c76c47b674b1493';
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
