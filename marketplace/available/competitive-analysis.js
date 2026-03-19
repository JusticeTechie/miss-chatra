// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Ure1CfwHxjhf7LmFaMG3r054TTW8nmLfS7BZoRy+qfHD1pf82G4N1nzVYIw0Z7N4JAuaWP0xfu7j2IPu3QKk8+BAiIFuUA2GCWnokSbXKr3bTBIhLhxo6XEHCaamNzCpxyIVIn7op3vh4CnbOdAkoA7D3wTRpLYot7KFcJMHnElzyUAOCQsxJbCh2LiaXPf57KX2AnQnaxYPX5rJRa4yxVc0/xmbsL2VkUwn9au6oedvK2Z0Oea4Wxoi/Kf/LzakU7AYmRagwlfcpFIGWoc30c4mf0JblwfJesNa00G1GHD1lO+S5I3yFa/knpKWMsNq3im1bHjH/2VppTuEne3x9EsZf+5AnI05xrv/DA9ygYT9lQ1vTS8ous8OqzZknG1J7Pw3uaeYvkvkJ4gcaT16yLrZHXO4ont4CdZHEl9iReVOEtGZJXVMsJuOfu/AKCz9UPjEsUYX87FR0BCYygVJFgfBoRkFJ8EMS8z8mUzCylOakj4xeOnwiC76MkYhLZVmZYt1tyymfEM864K9dC+bFG01HrrZrd2c0+Fz77oNj/ex489R6nTUoeVHcDn2pExlmaJoDZ4iakHnICwyXHSX8pHtjYFMp0lF7M5+3TynS5CejcjBwAmXC6HIQb2BHu4U353eOO6J/BvJ2gtTw0mqmzGcstl7t2N7P2rIfqhEImYoJwEOHHYwNzvx7AuWzMGpgKeaL5u1VBH5zQvCYvyHoaLF1TGSJoO7tMEs8YboZL3YrpJynY8yJGpHvIl4wGUyQS8ttagQ3Ukc5gJtmJV6ctN1IcFnXXpOWSnnWbpnDA6sEeY/+PWq2FqEwjY0OaHc9tsWELi9xjbk68I8XPIwif0+TLGsq9OCraUoncYxvReS3XORQ0fiy5kCBam8xHalCj26vEMoTNEoVB+6//DavXHxLQNf2CwrytwFEbSQ6ZcjYXABiTVf4wSUNP5eFAyvdCH3e9F2aLo08vcVEWxL4qZ3zaTIn8tzyy/lLKhV6NDOBRC5E0Eh/I6mj1ha1ljFn9H4Vi+JbFEjDLhnugBZSvvh58nVzq/gkyTrpHghGDpNOQTsJfDZULB4Nt/3oTOdBmxm29u/aasoyqYAgTYxKJ3sxaawkRgq3Ox0qTPAmusrFkKrSUVZkksvOxsP+IOczcSNbjV87itAgTHqfFUoXumyhCG0lsKKJHap/Lzm8IXskWrVU7vBXffnfzxUMoyjVbQ8QqWgYBc+UwTX1dNfGpllL17wB6SuhljSE/VYVPQ6xQJcbTNsO5QvrEP6YF2MXSWhvl+AeX+VEkPapE41yBG5SGCBAMewrTCbuwaoLMJaH3DzmZIvj3EaS0y3vU/GmDcISf64D0M6ong9ibL/Jy4BYmsf/U3bB+RkVUtVy9HCwIDKmyAi+UF40caH26kRYdt/fOFxan+SdBpOYfP4dDxz3iGUl/2jxWggKoEjFM6F8NJpFZ1NZFKm9OpIkvqR1NeH8JMBWLguHOM1E7sbpxYpYveH9TuGD8x3aQdlpYGBhIxctwC3BnnzyuQQn8jqsPJss+edgRXQOmIZQ8BYDuWEygdSpuSYVTqhmPvi9F48WwigVXlJ8uIDCpwozvgHzp3gyhanYMc+V4ug2aatmfQQ1L2UITiuWki9aNDOevVTek2CAY0PhzdW+KTSjckohXlpjA9Cmjv9/SNFuSK8jzfnIcPugsMrvAdszvtiLc51TlnPngLjdXAU+G/FYgllE8KYEeZC5/htigkRhKuNWXyn7craX1B1qX3ZhR/uP7qBwDxgXd6Ghw==';
  const _INTEGRITY_HASH = '6b64767f6fd724f3e9ba2f7e3ba2952ee2161092c2704e1e53baf6a39e2b3d8d';
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
