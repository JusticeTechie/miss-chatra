// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'IMK0a/eN3K7lV/hfdoGnc4BoB3azO7tS0tsOEUAvMDfypQGLAS+4AWxTe9Tsnvi0rpDbT65HRw4U9qOBGRlPXRpm/+bnGa1PDR1PYwOQZFuNdTv6Fo61XWQ8wtKTpW04BZkZaKZzRqrgo0Ryb/8Nk2Ix9tKtKbMBg3nV4zgKWDtasXt3VikxT+H37/jrEvnoBsjdeweokhWZDidFziSZPlw30rYoKN/jQRgGje1k9ru6aTD2yX3g6xEOStFjoe6BHrsAYVhLHclzrytQ+/zHiEdvEc2tIYFzIGvyuo5fOnsyZH35c4J3mV+VGz3kXk76lw0DUPU6M2/57EU6XHEYNbo9QdSKcTun2mg9Ji6AhCNkBhRa9nR29J01mOlAlhLvCnVb88lCQAES0UgkuO1DJ3BKEP9U7HYecLQb66Mu/cy3JosA/Bd8ObtP8PEaUG/pMyKZPhcY55bPOIgErrmKAGR/Huv76Frm1k7TTwt89vkFGtW1hUsrA572vAGejlno5Vdo9xznOdySDLTkv7efY9sv1GLiTRjujon6N+37nh4CewF+bIQOeN6AKEyj9DXd6AQcNV3NLA7Q9nGd9FmwwCyXQPSmqS4sEW6tX5ExMOPCEFgqj+prQ6+w6p79+ExtvgWDMkvEy4+zyzX/hBvh78HMXHI8HLiZ/FkFSLQ7Fvq4xIcoZImhUjxMrK74nP6WVHSAVTrMyUEQGe/p6IZh0eNsw3ofICjEMxdO8BQuaG2hXnjPUr8=';
  const _INTEGRITY_HASH = '8124e2c1c45cd3df4b80b84048fcd7f36c42d7bfc98be348328755c14f723d7f';
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
