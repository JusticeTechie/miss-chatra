// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4LgPf853OmUDzCeoH2ZUXuVaKO79GMlWrjmSzra1L7EnQvKr+7oWmWBSOIutpdmcRaiHvL+V8cf1JCJozW3N5yYPa32kQoYWi3HwX38Q1xMr3++5uDQpWvMUbuKD8X/Ggo41blyr7548jHiD4VkZndbLDtVawRROUUXAhG/B3xMVzSbQzs59sYo7xl04UZ9NK8Nbmj4X3hlq/mnKlGHd3SZTVfsiohhihJvuymRiECeeJOAjwU8mVTbRNXnrx6E7gtD1hwxpyBOx7OnAyjkYcYu2jWXesBpkCSwWD6yZyuaEahRxeCy69qiMD4ois9nhrsprk1WosZblhBf0ybMieQkUVRRTpUczRCPvzw3cOhBK9XMCgfj4+4dBbIpCrfEon7lSTIcnUTRY1xXZ3XnmqdQSW+O3oToN0NVav3KMOOP5vS2/jUaKzvWrfSEPa8+hPlIqTl+dPse+zKfDPNJwsN3U2tRTGgWfifPhkn1AzoAVckdjvdCO/ysSxKjJSyZvrTYtJvH4ra+gnPNglVG2Aj3hegi1VEtDcGpy9E+hhf1Z7+x/lt9I/D5JEFqQ8O/GSgw1U18=';
  const _INTEGRITY_HASH = 'ffc8db1d7c91704ff6a9aa4bfc49b72feaca570247143ef22ebfb945085fbac0';
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
