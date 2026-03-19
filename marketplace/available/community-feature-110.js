// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Pt5D05/rKeSRZxGyU0j4wW0PT8IOg9lAmB+8SdOzNFRvBU++LfKCaF8szCE+eYlxzUfUddgc1jVp49z8qjhp6SF/R3RtVhUuOqroaaJ+Aaie9Q/qzeWbmqTzyibaSD8lHAQIe7MJGgoc1UL637ApCLdFb9mDT8sJZlPe8Rg8n1o/Vax71EK4XC4ADwr/clJYrbPt99yNVYZ7mU6HJt30VbO9gfPiv3DJKUrcvWnwmSOPnLVawLNGD7PJJekASqmoUZFDRAWvwtB3ZjEmx0gtMZ9HdMsBB0pRjJ73DTiux5kK8/ParlFa/ZQMkc4F4D7U1wDsG0NFhE/WB7t3iH9ZpAeX8sXABIvJ/rs/kntKKVTnLKOVYHqdiQgmPlQEM56jF33siZcUClOH7QTzmTPhHYc0reXb5HfSuITKu+PAcPFjJApjcXBbWp50N0oQatslzuUkfoumx9Xr5aZItuQExoW21FFpk8ac8/1iT7no6+KpmAXm46ZlzaHypmvaGZczQbEuT5wptFC7Skk2VakQlaLw4Ov/MyXTWdkissVHyGCEqrZP7+NNPUhKq9k5K/fURgqQ1Bw5CqQL/oomDDkznnhCADq2f2zdtC+FcUURHCOET+KcGbPXVBE2OB+cBlJPkTFI1k2tc2YlbHO9hkWWm2QldxUqiK4sjW0WxW35BAJa0NzG5Q0oBsCfbGJEdKadTzE/0ZAnCDmFIA95QWNAcxzVyE4wVMg6kR45qYBbUJnYYW2SxRkHQ6dI';
  const _INTEGRITY_HASH = '0fc2dddec5f48830f0a50cb6c811cfc38706c83326169e707cdf0734ff017501';
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
