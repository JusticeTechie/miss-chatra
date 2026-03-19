// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0m8zabR3L+NO2yAfSNheZlAPgwJr7i4WFBfrBHA2ehNmuV2BLE3RZdTUUKW5kbxRHXVXOu+NpombpfHbZ0egfT1MLF79C6uEm2XsFgyNBCAYO1B9Js3g7DcgX1ZbtKVTHTKN9+S8RJxzY2WV0915NoB+c7W+RedhFKBlm6Vc0lT9TtBz/rjKlceYqPnOjeL1CmyBiQ1ZpCnywwPXGMV/ddJ8ayf0Pm25+czxXYT5i2BhgXIee5w6ls3WgXChJJ15gqrSQey1R6gMAp+zKXPc/aSTFt4ldlzMSK1GS0aN3OYO8teA3V9phLwJQlHruz7rkMUczsRbrLizuAUuoi5FobKZp279x6dUzcv4W7+KG8/YfE3cT8kv4znm/lQ/vkDWScnFJ8UY51F0Sk56BzGRgkdlsSSN+eMu0btxkrQ+DfG48rnnnyV0qXSvrxI0neDS3S5xO48zfMwL6rJWgnAVxFu0KsRIcjprUg9woiGAiDNtbneOEQlUKRL23LYnQ6iD3jdfYfW+19Ksi18aFtBIrubA9uw8S0Gp5axNp3UWp5i6NsgoqmCSWU9A9mKiB40ycgFxjSS12aR7H+Pal8XGMu3S31n1a6Q1HhogYqWxMEYbr4d2SnWW4zoq+4eSot5BHQkM2O/Uk8QpkaGoMYM6lJR1pNDtZs4MYB/o3i+SOIJBbTS7FnOYKYzafnDZ7JH7F89UKEJSaL8ptSd4JU8UDrTICchdwvnOUb4eVgmSSDDgI/IW8CQWL+RbWKbRHFdxo7E6JJ1jJ89PuhatYqSQgek3eEGis9ORfpegrFzn9sly+7D/R3X/ccDE1PlMk7oNfmyre7HXLLTI1nqj1MaDRoa0xx037eeS5hgjQAu2r+e2+rRZKIctemjRcZ/TkHHxWngfXzRTZqbethXptpVopg5jo9se4+c5PHbLgSh+/D3xrOIiYXCC3QMM1yLAvyUfiUxS9C5KUVFdprlW/9XwRJtJsYh/yL6o6/sACNeb+AVgToUGlYVQqu0IdaeABaQEjQp1c6QCUM3tJmPkpv1K3fyFmp7nDNGtZ9TOmoXVuLehK9rc9NVr2pucxtiCIO6MSSZ8ZccTW8tc17co2fF2p2eDpg1r9vJL3lJOZSNmjGHez5AGsQ2t9/VUdEn4G1whZp4Kqty31zIbBnUUwmP7tv/iWvSUiabx7rjP9/IGZxGo8hKdtFT+I6i4hPLV9jTWvawk5Qolns009aIor6NVEpwB9gWPMMPqW28rug1byMDmVosZCXPBB3q4WOzD58cF1bILvGZ02DhhIz1KI8DJaWLrIn9jTDthKry1/j6o0Id3cjk3DGxWwXeKI1ljsL4JgO5pf6CUkf22DV456l0AKgHQlzfTXshiwQ==';
  const _INTEGRITY_HASH = '3e8b83b1e615150fd53add6612ce652a23bf73c7e73d92ec0bd40cacb6149989';
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
