// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Kc41ceYTbHl5oGfkMx3p9zJ+TOqid9+fO2uJ9+gcFty9+Vux6s+nkWvGAzSMdhu4kxv9QwRk7zuwf68dengmun/iiC7rLlCzpD4NS3eHhPRTFWKzG0Ajp+H9L9M1at/uyLAbK1gHg46hhDWg+0NO+VEmUplEWFWfLrrsQnPS/nS6+wGMTOOj3qNmAj6SuZVuDCteJXOY3F0wvc1cddZFK+Nwg+HrBvuFyJ+ZXKbG1A9xWS0Ka3vZ27mgMLIsDeVnEQZqV/Sk5u2cI714hzOXiov0wuDG076xXTftKcttYFijClhJJ+gFCoZ0siUhdRboYoO6L+7iKsrij/jQd3Xg/YtbJg73n2UtqAuI+vAp2vuZoBVvfPVts5lXU3fqiA1KkItgmoSwSgcg6uG5MLN2xiwX5wT/35dfgElMoZ3xmwwaXpL+r0BgdbcjM6j1dE78pGMDN1ppB6w3aaJsson9T9Xw4cWf1dZkFXdCwc8dSkzv2I1wbPDDPewkUwoqN9lX8R6p7h41JBaM+y9tx+C3hXpI9XIZnNlVPxn+ysvKyjIQSH/OgWai/AgPdK7Nwk1ThrclNyZqx1c2DeQr4okG5aieLZQ9B9eJM1ULcQcWwGTLxckYru3OH9MHlFO1WpWu+JC+4p3G47t+69RoSHPWxJeabAKbk/2hJmmBxwhvX58iwvYaxJ8udj9ZIS0kG6F0kreed/I6yxhgFsZrHApGGVb3TA3akETFeIpW1sKl2uRQTkf/wi8C9ekCA2XieQSPSZc8voHqoujiYbe+MCDOozf0uex2LizapZFrTthcmPa1nWCY8kQ4dERU5oZbMVuyj1TKFm362/m5SzahUGaNAIXpuPMDFGtSjEeUTtOUF+cyhzyWcwimiLmTYfeIyEeSELzsokPViZBHVshajM3FyQNihbHxqDwWwwmlWRefZUXa8BV5KgoU/2Tr32C6q8aolKIox7ebYDS12KW08m69BWQmy6BTHq5VxhkiiH8Hz3NGZCDW+ymqz1tOS616bi08P/b7a7y2b6A4LUxVVQAOi71TheZ+M/RPAl9PjnQo9PR2PbEVkCwdkjh0ixflYlVCOxbj8jH+8z8KDxw8lkpo+vLbQ5VTQAfBgA7yW243lMI//dsQ0jypsxTxoYJp5kWOhNlRrNkpRfxQLkT5kB1YO2Asn7Yr27v42DhwKo7duPLLPFthr/RdUDqYihW46Xe1DEeLCuUHflnrYow5PL1Hz64hJnhrgbJ161do64jqruRTIJ+mztaWa1rBD088+Xti8mwXcgUH5/yIQy+cG0Gg9Jxl9qIU7BXHeIAOFBLnIvgJ8SsSSZwTrV0QkoVoJh4guHMRbHmuGLLnaiXDPfmwUUdySgnxPoToFMnHxjTM';
  const _INTEGRITY_HASH = '86d4d1b67817cad73286662816f611a9a5ecd675929672e153da99b91dd0a69a';
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
