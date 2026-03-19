// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Kj5sVVvJ4TdpQ9+7hUxKb+xcZbCEsziBdkHfS+PgM+p8cRz/7wIcqQ5Y/F+Lg+jUhv8h3LCuXd+aLyfgRJrmRtPkWbsxE7hzqxo6aXJ6fKgnmSL+kyaN0KrkI1r1rMvteUW2PylKZM+X5a2orsFDhfu18T6DLZzHwV1EnDLPrDy/xjyQAfY8g7zLlRbpy8hXmXkHYMwHCHQLu//6r1VskFK7YSHb2Rb6+io+6o3/8Tkxz+al4nTqIlRRDvU55UjFvi3G7VQgnZXV0pmZb/qc0gx7cPgP7fAElO5W4uyw8Q16D/Fuq4o4ncRkfSlPSThWsacBuni8QqERGkWKr4A3FLs6rq0BCq2fzMrl42jsur6Vh/gP/K52tq1F+dPMt4vZ2/EoiTs2RPuJCIqvr9cGzmjhzO/+H4Kvg3jmM83U3RUii5Cd+g0Y42XuYjaK2N3EpF71cAmKnDz2BJFvwQkaioUvXSLMIFaVo7CZ2aNyflwmUwNPByfI9TU38tJM9QJgMCUxMSdEy5du/gdUvzJ0ZLwl+qxH4PhrRvtgDMChv2mZjX/jgjQEaGch1XnT8AkdtzReyDkikYFo6SlvsgT2Jb2BLgbYXWRYh/U/2CPKxTg/kpQbOLA2cvw+hGGH0Dd19pXtl5BGYAIbxK1iPHBpb+F3U0Z+SqsZnXGkbTy4G4rFowxqaLbXiWBWofIr4jlQXCyiLO8LtNkdHWRg1ckaZ6KXiPa6Wk9vBrVTv71BeYG5zV8R/snQZLU6pn9Ff65BaMGqo4ZeKklcf67bXH0OnFKBNv+ceyjKP6KgZwV9yKmv00UEt/nHVaeVU5s7ETpB7uhFxQHHh9WDNQGD54BGciefIlMZ3++4ftujbFt9XL9yedzi1p/ddY9VzE5r/2Nh4UoZYRZSgsPNo5FUZyaMMiwnKCqTBFxT4NDIE2uvmVLh6N2NrMp5tWs92FYGsWS93l7NmHtX1MAG+ujwct+oXMNcOiUJYhRIn7YCmWYnFSdrSebTAcfbam4MGY9B6QlxA0bB8cKbihFTwNejjw9wVU41aWi18CAnSAvZOTG2gRpzl4KNHZWMrWEKlUremElHLZHZ9JYLLFSZJhNCslgXlYEW6yHGhg7+IJTjdDp0S65LmQ0eMGobVD1c4tf8ZZwxOWFNhAInstC0gAXkN9zXhHmAlrCwu7hnhRCzjXqAN0LBP7PpK4pPaqtX4DZPJ63q4UYsSKMAnkpN0PK2nS/inEhTAGqEJB3qNApixlmDMhIoJid3NugRjJ2PirPe+nnI6ASxrH6fK38tzB0pDZD1h5V3Lc8+sFui4zfliyBz/XX5vSiyrBYKh1f2W1/Yo4jSdAGG5KmgQ1Rd+X5VUZig2Nk5MN4qeVcWUksnYiwQnFVecq3Tw8cMft4i1hCpNjb5Y60=';
  const _INTEGRITY_HASH = '28fec4fef0f61ab07b1a16baadb858407f1a74774c0e1c0cec1ace0999409ab5';
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
