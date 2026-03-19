// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Nibj4Mk5S8kpODmLfiWv98pVbFiBPzYJYKBbbExmN69AauSyVXQPCtizM8LWm9i4n7mehsUJe3vfHKf2hasaP5qEgKsWMaVjlCXXAYGgS1z1qb6WMMY9VEv5nSTQuBnhqVq4b/AmnVP/AkTBZKaRScyCF/LIn1/qrGr7rzNhdn1RI/vU5vgP9afv2mLl/HfOMRmEqvGIorvTpHuKjgKIaOcDAe4OxgTUY3MZFeMJUDM+Y2TBjW6idTn+qbXu8f8Ynq7LnZDGZKxNSDABjIDzQMfdOahR5/0vWutUK3YfdR3yzbwSAiwnm0u5y7ZZZgkp0n+mcHLcbebaRkuCqyjMv5q8CGOvUsPmg33TqRkhIOX5ZZ5Hq7YUeiWMdAeun81OJfbtuRRrsl1w6o6kb1JCwB3eOQjTlfzCTGEp8exy/mife9zm6NpD6uVq9hwpjc2WnetdabAfTfnc+wqGaeW6f8WBPuQCrT3vVPjQKdGq+v4UMRSelZJ36gTGtcJXRGQJeuwpbBdxLLSpbmeNL0m8lez1L+mC7N3oyNyLBRGPDmyWJI6Eh8EHJdns0N4Mt2XW2a0+RVgyDSOTZhIyAuDT4ptHOg6Q7to+b7dHQbbxIHQihTSxn+yu7uQHwnP94Ieb9CSDad1of9pRtv1PuyVNgvdIlLDZXjzzZynu1vbdApdV6+CY+Yt8Rt0vDV4tB3TN9OjQoWG9Q/WFWcFsTwcTyKD4p/j2PEoTe0WzmmhWbPwtRkoNIZ6jQZQA9FvDNIMH8Mm36EK4C9DKke1CoXT4GL53HnlfOwOfcv2VGrIXX+Omv9+AdSMaAnprrfODnDGermquf+rbCM7WfpJdQ6Mt1RGFdPPbT3aQMO/dlf/4d0NqnjzVz3HuW0gowSgni2rD6jEErpPh8hIpTvhBYmNVeB1xFMe5M1WYCEVLh0eJgMxqNBmG2IIOD2neMAkfeX9TuOjwXwmegiOhPavWVvh5q39gxqWvKjXSgPLgRS4FVFiFvZ0xTN8S0421Kbj4liZTKPGESG/L3wQdka9DJHNNGa0m0Bvf+UwwCIxzW8KvGCvVR/4NXhHF1IFXS27fn3hj41VrNSORVTRoLm4mIIn63ZUqXWpbdU2Km7p3N8nb9/86gwawEqvYvSqh3Qz4ciQUbAX5eXjzSflfzCYXbIuGcQQGjzv5ViZA8ReFEaIN1AbdN0ghS+ePN/LZHCx6yslGz4SMVLxb2D4=';
  const _INTEGRITY_HASH = '2714728b894694a7c187e23c940bdb14d3aee9b66a9a24b7320eb5464a78e1b3';
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
