// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AEaW7AaHUdyYY7JBpOu/2n8PcPXYprCYty8ywYnBCb1NgWT5GXfzNViVoRo2I77RE7Yjx8XPz2w2wQjpco5fAy5pMYYY1jn+iECgVdXzJbEK2Zv5BgH80ICGEuLJnPsK6rzsx1wOK+sutsQyN0AhLL3RzKNAC7IuaLy4ALSi3MGlShcVQEtIIptXoJTt7qb5odL1m4H8tkP1JVmxUlKsV+9pVRqapAGutn9Ni9JGbBzPIxLMf2tx+MT7ZhnuDWg7gfwIf/FP/ipo231f6+//hx3XU0WK40RPx5nNEdHk1242+xedlI+ypuqLzgKHo9QglBkPnujXpBRvUlebGzLrsw0jXOOzPSK5hn5NwOhOKMFENOD/Q1NQMRF6TQ6Clu2ZwOR55XD7egHVu2ZahOV2QDVaolEc16gmuNuN476BkLp0mJ7FG3Eq/5Y8oGwls2Xlk2xF76knU9xWqrepmeppB9/qAV2q9A2EyUqL/btnUSfiGIq+I1k1/HyWl5POnbd0R6utukr/m9Z0io8O6SH0AOikzJaKjKfmVgmdTHNl5snve6znQv3t72FSIpewmU6wnIPXChVHM8Zr7//isWugPRv1zJawouOz26oLKnu93HwICiCIyKvLu+jpU9znXrG8/YfFa9ct7IEMwWoj9nF5e5skYUJLrNfxkS3TGN2M0T3faeS1rH4l1iRgfsyiL7FJpzjrkc3+sEw4lJifxTYuA9Mdy0PeHZc4YfVuPPDqE24ytduh23CNS4iZuH+XKZGZEVCmeXMjlBF7/sCcUPvLwXskx5gJIlCZMtz7RE7Ts/iS8BQX45r6UlTp0lQMSPxD5tA59ZivKlub159AAgFkKPJCMsUvBmASmgfGlyeKMDRkMgWgUY82TckWLP0gl2G4AWggNeSOv4du+zxUoWPCrPyo+TC2UIbxowxTddm3yD3cs0qU2MvdskrgeC4hoXRmWdbTLF3ELGOw1vFGmSRo+az+pUatwdxUXDX04L1QZK3jrG0UcaMem6INzpLibXt6rNKZEA==';
  const _INTEGRITY_HASH = '09b41296ce1846e139c15e237166fa33586352626b3ea9f41701aa44ee62fbe8';
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
