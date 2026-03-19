// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'EO/6Zd53tRrqLOdgNUi8q2kP0MrRaq+NJ8nx0B/Vxm+fzcR2e44PGxwDl346UPPfCvn2VbzhfPCcWmm9dTilYiy9EJ+fzV+hvVmIz9GH8vYdQxnkVNmGqD9FGKmJx2iB9WN1PcGYBpRZFKRX+0tAtPWbiNnXU7ETFucqiyNhjIJAxldQvEN9byPkLw6vk2qoXCBE3eaq1fi5LTb61HbEbdZM/YDEKu0hMDd8UZ+ZlXLY6PS2HfBqpIxV8LCR/DY+StXq5XiDwEav/3SzAaIbJxgBelK6nZiJk/UTCQ+WyI5kcXjgTEn4rS7xuAYdxlKJKVKfR63S74LW1muMrrsh7h6fmJ38VLcm0IMzYcHcIF38rHy38zplBgbrmrnZbvxV2tTF9Fe3hVmfqkfGs9KUPaF2olhcX5gMHfYgDcpJOl2uCtIM7FoAyO6D4deBpz/VCI1VJWslU/qNXS4q4OqOJD2Izn6Dqyd18Wn29BLjDCOK7aesapPIa/g3ZwF+XIP/vozn4mBR+/jgHw4UVuQ/eEpqh4R+Yu7whDnC3Me1QO0bu1/2MUVeJ52Xhi0w2ewycdRcXExCZLN7ro3CDLm8p3sjU7sz/qMztdK3atAOHcm+/ID5bYUGZ3I0HKFeySSy5/Na6FYS4ZK0YLGbQyMzT0/3/XczWW7USUR2orxvyFwWq/Kw7WfrCTngpGuptY1ZmcVjpYWlcewt20oFpQCMi78BYR+pNVW0IwczYWqu2DR9nShaykadDx3KOHLN//CBSagc7Ed0zjpd5LFbB3CAHKayN5GZUw1ul+lfEPdST2cECQ8pUCVu6PatADnyHOAV+fg9aANDeoTkAmwjXw+BsQ0v4/REOCCiZLSNNuDpKGL6yRXqf9CBVj0mWBJpMw3uvs60JmD1DU4EDNreH8D4+Ap1dRbCKnhBTFP3oIBh6XLMbWJtjUYrmvJD/MAlTTmemhTqvUq2D79HUaRirqg/aZ0vsEaamuFiaz/5gnl711Xz9rCRpFOxF8PX2o6J+H+fb8fr0OGxgzxUhwcZShdXYJY5F08JWYT+VmniMwg9GNxeud4uB1iea4PAt/uCym1oWn3HlTT7hkvi4EQDUr3GhZNZ3X3c6TdPjRyUqjzwpaEMZG9yqg0GalAaFoCI5lzpaqbQZ4D4+s/uDgFjnytSucpdjz82ieDRALBtllnDim5Pt2QIs+55cdcaSGakhqnC3yxBRFlxqIXDtKhuUb3Z6asqR/4ZuZ2RzJHp/iNlqLlVaKKElfHkjuusCF8tFveoJumP9mkX4IqDfwNymNNeV5YXeuXxBKcM7gWNE1034tULSNFYNI8iSdXQQrBczLdOJYJthjiF+Kacqencoe7j6wvdydRWolaB+tcn7uQy1ymUnMo=';
  const _INTEGRITY_HASH = '8b8c8fdd4c0728b4abee744fa598e15c804bafbcca7e8bcbddcd243d5581d425';
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
