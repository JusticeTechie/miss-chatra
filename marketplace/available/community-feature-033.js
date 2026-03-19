// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sB0hJ7UoxPdM89ww+aALJm5XW9ozDIw+GgNuqeNP0nwwVcFL4LxtcCz9GXO2LgtZD4kFTVlzGuRLAJji95h1LV+H3xhP1/oIGm5iZ5Khu+E1TJmo5QK7+H5Yqd2jpxcYhzrBqP7Y/TVOQBORM7ozuD+ifwtwQz3KDUjrOV0wFuHXAlqN9vJO9xL38ugnOyFzs1g80sw/JcKxZd374oU4GKX5fR6OHD+lPo07uzDmBlVIIF6sdeSn1k3XYMsLSShK2yHWbnwYdwEfeGldx4ostaEnXD1471nTACAtY22mBedsO9IHlxpwU3xygq1URbHe0HJt/ZuFx6lDtR1fNE9R34BENz2n5XA+iIvIZ2Tt2o1wp9UdbdhYf6msz9FcC9yR9Wtt6aVb/Kjlg6/Ex9IJFs0llocg02PNmZCaJm21ezhF5wubfSOAjCHxEVb/ImLyMki/32Sk8CiflOo2Q7Amh1EvW/3zHEzxqn8tBBtcrX19exi7mQYcIRlXWtayxSx3RGgEcXIqud0WjKGxTChX7h84LkyhBw9YOBw6pDq4d1687OoxAOxdiuaectRoP/iTRftea5UeA7JfSurgivsMV9i0k66p1nvFPu2QYN3YEJZxjUZD+HwkaivFMcJY49dyWxt7SwbtGEQtPQ0314gca0weQKs4mfawG3F647davjl5+TSrAweEjJiTB227x2Z9Idd4kGyRA4MwCaK8vfPCOx/jpxOc0enw2Q==';
  const _INTEGRITY_HASH = '7f54125e14cb46542f4affa3e760b23d32282f8c9f37c694e1a64579eeeb95c2';
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
