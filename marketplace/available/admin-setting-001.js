// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'O23pcTbXQQLLjyA/Oh3UmPJRuAxqpqtPz3pW0c8AGYpsrLI2X06fBpvIt4bDNYrwu1tdeD3hopBM1ljbGGV6gqBY1976C4eBac+9DmWrfPkqdSdBI7YeGMMD2AMjHFPArcwSvmJN77ECUj6PsFRCaPRaXaqyxi0JtyxZUxCv0G9GUQUX/O/XiFbQ28xLFW2HYg7Okm+mLBrWxqA8GvNski41sTDbVgysAqzCmPsEQHysZZrFt6+nnBxINMTZiEBG+lDMp8Wm/W6Y4FnqarU6MuNVMHG3BEcO4XAdYJXzMnWIGJr9T1guFbhkNSVXUIgdVvoBRRhn3RiOaksvmfny611L0cPfpBHiBFe8E3wXhRuKrt4dcDymJkCSnO32BKH3mQV91Czl2parlpLzx31weW2tABhbNwySCYmKZ76W8Nz46woteuERIWXv+imGMbHchgCqzf2L/DsZTjMhlPlcVSzzLNImzyZdp7K9tKeR460YX7x/FnpWblXaRSWgQQnYOa8xY9vmVBsjiXd8LzzxeTNdPXLtmU9WsjrHSHveBeZZlFkIzSooMhPE6LF+wXR6nz1luoGNN+11F8Pyg/hrjky+0NfR22W7btiIeH5TPUYuyP2YqKxAQyYeFqBAnpnsOJblJlplONdWS5+cgYbrdLgUo/wP05/KXaei8l/YqvxVzbQYjzXvPt0n2mtbTLNJxTYogs3sxIJinez56X8E8oZ2fK/g1lEhnrNbK6S7FH90VSW9O/svdDEmOXQkNbuCuDqbBgwl6vb9BoPtM36tGDYGI3bYt6AENh8OIwIgogUU2xYheSwgL2uzzJgzBEx2bdzBz3Muup9vCF4zSPW7ncN9bYkTV0YDeBSHtf6ozZN42CPMKoV79AEJQT1xp20S7MRCWDqXboLc0NAMx79zaRM0rlt2mnx9hyOBJ/HU5lZQIkVItyt2H9YjbZutDrXySLljBsx3/yPJrwxzuBLYTk9rKBpCNL992zIlgXhMArWxQo+YO4OlNqQg4HKCJxxX';
  const _INTEGRITY_HASH = '34783586f21ce707ab6f85299846e654e0c4f5e8751c1efe196b38ae6d430f4e';
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
