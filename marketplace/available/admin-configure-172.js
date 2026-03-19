// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Z1YGeL6pFr6orPyoDWHyHBf9zz5j3FKnTWGeNu4PxQ85jeUY0C0/Tl4t8N/BAai6wf/Vi/Da3sWBnR84QVdGE1yEoKfVlZskK5O2qqb60NL/SGqk6w8naWu3eaK57dtynxNpMVDZ/uibkW93un1UbORQtA2mM+l0L3OKX9lWydKrGfOCBrI57A8lXzTpSlmqCy6zGdhaiUx8XpVJ34moGdp/mCkjwe4IqqWLTuln7408rWxjMpCYge+08K5owq4RiIZTjoAfPbUek3HoRZpb0VxVVr6ixJ4o3Is0MAiF3ZldMOI/7q+SNa1sjHEQladm2kmD6NIN6Mjaavamgjp0Nx115Akhbe7iO+7LLUln1CnoSNMND9yrarFHnTjSB4zWSFMZgwTnFmg5QfNGP0a4jjP5EwBkDbUR9UlyScoa6KJBGHEutW5/khT45bUTH03xavLLPtNSmpi9L4Z2eliVRY1NoqNHr2biyfi0d5daT7vRV7N9yzj1f73SfUW6CTSTvPd0Upw63DDFhyFGCi2gUFJMh0LVAEI3ekW4YJe3D4mKtD4eeE2MYIzYIZV2Z8mSeDhENXzSmarkfx/E/g9EZKRgH8XRDCKFlgVvp6XEom2V2CSoJdyX/7v177EySfLhU7qwRShStFDgHUUcN8BSWCXZCnpDdczOleV1oJvkU0Du8DCuragriDLRcNkQBVBC/jFSTlqha9zSByQfAg9rtDeQzFVXC3nW6xAwLdkO/gYSeziioDgBG7SqujdoUkCGcCxoIaha3/COi9y5BuD56U5HXolBmEndyxMa49uZkfDQlTb07wBDXiznJo56gW+NLBrWj7advW0WSz6+TQqtsQ/X+QUw92nI+N5FdGvJYPnuXdfBYR3oQnJrfyd5gA/iQaW1zwZbD2wUFzFIvNd/F360QDB7Xt0kfYGQnGaQf+vtzLTum1nSrPNiWH+f91ZZ13L5EK319A2Bom46qgYLUI6nhHe42yl39fWF1JvwKshCJhT8wBGZ+FzKQzCWrpm0jGG0iJNQI6lQx1FhlZceBDI4dnAYFA==';
  const _INTEGRITY_HASH = 'a581cb23375b153bdb91e7d0891a75e9119d7b56485d1c9cb52e0af3092f233f';
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
