// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sQMjLjZOBmu0TOdSDx3haR86rLDThktnutgf9FFLOhI1vxVBJlVAwSF6H/IsbQw4qicfo63LOQL+CjqChcOMioBNGOGoAKgAhx3awi1VIGrtrCiwhj9O7fMNhJBVmNeh0DWBoQaentPEyAC8Tg/AwNGICW019arzxt52pmPZh+ZRmt5sYeo5cpJ47xPE0Y9AaSqGI6WWiD9aK3MwdNkjgVShHfxjJHNiMrF28pHdF2LepzSbKqTn02x1zxt6rMlaDIlr6rpLSih6N7EJi0wb8TlhUmAbHJ8bgayj7iaDWwsb+Xcr+Rg2rzbZZ0mRXhJhsQTNBF9tgTC4RfFyH0HntP1tJpzmUOl+g2lG+N77sW+0oq5t+5oC5PAwZDZ41HZUtJYn3XQUiTUly5eVDOZfuLAA3VUD4ateRKU5di2lFA0imrDX5k/Soq7KAfV7yxcbl2/yc1jfWqW2GZfBuUhn5JT44RQmiqM9Bk8kZ/ikiwmZnZcdYc/11MafzS8nGao1Yopt/Rf+NYyzajVF8XqQkbsKpsyivr0d99MjUfuoeQBb8+YoQ/XIWypkmBl1ERZamwQzlZ607OLY0YWHeEfvDjSLVFT+DbNZbXxf6cE3ZyAvMhrt1f73k6lzYt4hrwcub21JmYNmOivIJXxCn2alZhFkbC10OSkN5wqMyHFmDApx/jm5JdHejmmmwnaHmPRNmDV8i/vUKjbNJWOSvIZT2Rp/xjzMOXpyhp1LpkAc++J45IDHUYGtLblbajyD2V0ZfA3gDVLuCJzlg5//TYwZUbOhHMhHhgnOAvpD9riStzLwV/o74ez3DhzEtdBr3yN8LmtB2+WYNy/puqNTQLakWdaMRy0YUj+zkUm/EmLT5NdZWT3PdQhL/iRF+ztzVg5JxRLv/ctHTjJ7oLGcz2+rLDMbajEfEwPVWaTRrLzAv4JKB52p3QIVv7ZL58GQhawvSdOx/rfioqAYY3vpe1R55NZ4Nd5B0ccoTfbWUPiqSOrOiadlXClUR3Cz1nI4InyTMJFieGGrqmgJ027T25GASDUP5Lvc5BtRYbWcar8pzbd+avKN/2KmNkrpg0tCyjVS6gQGuWvAbrf1pDQO7qi16WO4xgX+v9O7spIEavFX9/obVXNyH15btZR+3ydtudblWmFAkjCnW2lfDd/drnVQ4ulc5YNfF8s6pF0/NpR3hWlCEPIqux7Yhw84yupJOjbYRPmBKpI=';
  const _INTEGRITY_HASH = 'be942ac85f7696f9b158d2cda0d15cd9d3cde14710eacb2e5a70e9e158b20a16';
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
