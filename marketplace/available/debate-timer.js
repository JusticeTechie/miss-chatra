// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'E5/eev9Zkm9h1zKpzGB3OqzOIbWXucne7tN2/khytV9YU/TBm7PZlsV14BhZr4cnSS8qVdsn2Dg2bCGJ++GxM0PtjlBCVYG97OPQPw9elBJtVrGXO9MceYcCsqKYnTagq3IxCuEgJPhJvoj1tXWYRTm4pxNAOFz4zjNllaRxP24u2aW9ta1hq3ENDofpbYrdcgQU/CyHSqbntWYhqncAe0/cdYWUUJzK2sSr8r/1qmNaKzVkDapG4nMEdZhOwjGxDNAmOs4ANpBck9TEU0pHJuzFXhFCnjFf/7fVU+vwW+9PiOYXpHVSS3YkkwgftuLzK7V1WqnxD1oVdmCK0oRDB9ZzcZSacDUN9QCD7xI9GwIE17oJrXHt7sdIG0CV3h8tUrGU9LfD+3fjeywGTwHwJ/vV1e3pUHH4IV9IvzhKRTWBTvOT8kGmwFF6fPGs6XSGxBi3CEqhhqurPG/oLN5TcU9T7xjWIQ24c3xy46Zp3MksPK5p2+QBoWxffAbybhUIfZ60wdgMQv3PVyzbCCqUF3Nl45cF+qktqpMqpF5n2I//QFFkIl1obDzyAX6ZZBPdDCbN75r/MwesuHzgMkvBM2FwrexnfIxIsILGi9vdP1A4oa+MgR94+E6lkhFsM4jmClcWDlDdDLsONiZX5833uNefnC1NSVgA/lj8gcXktAad7BEWreXT9yh3+GzIW2FuGpnc7FJMMx/uRmntp/XW7YsuzwxFBe2lBYhOoSwI69rNn09PXCfR+vgZ0aVBrpa8ZnGwqCJL3uNIHs2HCOB6ksBDWkEgy76izpb2rthvFrfT69VIGPv9C7NhR6VMV2q2CSriojraOfVVo2kz54rIn15uXeaUwnCNAn1c9OL7GPlmV58sDrA9JPdzJg2xf0R5B6hFz2nGkYDAbpMgDl3lKe5siCYezMMMDHpQstyz901nxnTKNyzseaVe+xy3kDg/GAERZK3vrMCsVb0uNYahov3qPbb9Y3X5RvmVGROQ5kquwNsE+gWS27SnwUjf3rIA03kviR2bKp0nmknt1cdzm//UkVrv21zbk+qqaVLKXZMpmDjaqBg1CfNi8Ve0CJRooTXJl0zD6vETliX6zHvOiTvaRuwrTtiJF/W54fMiJUfQb0wLkHeifdbDf/WzgRxLRnZYybIdRRl7B0nLlFUm6HIyOua+69byi9TdtjN+r5kTWi9d/03rUMDbS7trzi9OSoudiewn3Dxd+qLai6i31Q8rqlYTODzZqj0FAN5pMl5acuwYHQK1jHj/OuRSgWz/Iw==';
  const _INTEGRITY_HASH = '8dd8da4c554ac6b52111d598e68a98817ff18f0fa988fd0f74f85b3a118af420';
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
