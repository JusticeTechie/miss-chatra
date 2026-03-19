// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'eSL/dyLO0loPkRcZ2djnf0mBX26paIN4yxiUpuxsPaIZZxld4EyZxknNKGx3Gm30IDc50pXBTbVAWPXQyiir9S/Jd6ihby92UngE2xFh4dB3YB1K97aHb5N/5kmSlzK1GxAbGH0qZ5Fyr0VyGkCkDzilJiADwPGhmV4gw30CdlvLPnZ58ZXMyM/deCU0IN7AGidIDnyR+u8J9Q0fES0e9+XALB/bTpI2KfDX2hAHlxoxZaEtCurE1p8KOIZrMqy18o3mSfW2bjQh7E5oZFH3UW8XPkl01Vja1FXZ57ujhUG9Rz/SPjIbYnJ6VitDbvRStsFaesqjT8xq95r2sSSHa2trCqhyxzfoRl9C7oHqEW0/wA1V2RiRu4s/MVp/Dzw9EUiEFiRsrrmjAAyhnzRLWu4FkCT0Nea8Lrwq+li78Y+aZ6qnDqNmjYFrsPzyS6g0O0iba+0gPxn2RgVUtJzITmKwXNpG/sD8op8HMkEA7sZjamG2ufVgDFgQ06iF3vR2/e/BSUm6XJjr0XgZ5sEhc8AdbdOlyMD9wncBoV7r6LV4wrmxqyAZtXmM94U4/W5/grKz1RtAXjnyyjzKMabVkPdDVaiMkoyygNq3aTo333qrbdwg6dV/MHlJiyQmcEYOVSe8WRjW4GuPY02XiPJGByhi1r5vNBu6ljL1cNYNLvPXpfMv43jwWo5+dWwKBO1uBMDRFSGVNI36Nq7fwONJjkG8pIBywM/VoiBByMmHYZOFGMFKu7dL9ejT';
  const _INTEGRITY_HASH = '78f6cb983567c27339e4f4009fb4e3f3b1b0b93e0f7c92f830339488459a8b69';
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
