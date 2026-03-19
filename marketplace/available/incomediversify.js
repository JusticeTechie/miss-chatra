// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Qzb1/s1jyS/QkKJwBReu+UnKSVtvQPvNEfAcLWPT0xWRTjn9SJlYeIsLlt9STlEtWnis/e1owRLk0M0dgwomOYXWk3xz08MjVFaf3j5l/el52o28f5wjqpEvdkceqr2DIibGd45DJ5Wo5U0g+SNeEPouXTI+7O/ilylciT8ksVyXmw/wySui7SdeHW58c7pmLILC8ufCjgL9hYOAJUkfgUJuXWPaVymxY9yEc06E7OeJxCXbzMoMNIF2+TGIXtuZCzkEzN3PN3duf+q27K8xA+1glfrRiClB70AbwU0pXNJxw9C33r3Es7dhyIimMgzByUhVx+67y4Uk3nv99nGBMaNHuMVJCVqY4MSIx26oNJUblUBw/tMVzY5u2WawIv4EHil5QpUgusfrXmdjH7LZOBMyQjjbyeUunitMenpbk8pTjBvB6t3Mka6Q3k3LFsMA2UHMmsugVVJdXcvi8Un48ofNP5ZLia6wjXFUwu3pw1nkf2yEcRDLlVW7dwuyctdAwoIP0YGRq1w32fbho0x/xZtHOpcfxyj9LR+d2IB/ZeQ/sFruKVWaXwXUffBjWlwwM2PpyhmyFr2VhbAHH+xZ4JrGZfPkMSaQufoAe0hjJlt9rNAAiUp/NHHUJiGA+hbiBVlTM+Fti2nt5OOGPZtBFy42ZfwXZBUFpIk/QAqRKIHNZOjx4Kx8WlpLT9g8e3bY5fMFfBflHL4gsN6vvDYpO46QZeaIpoCkp1ztAWB8SNZjDpPalcJxIq3gMXtPN/nyO8CV0aJHYmO1juPUkC74FarQmDmcenAO85nMPiy75EHS3T72/2V+2COtcUdiOoEQrMFyS0ulUynvowUK4y5LtdgvjBG53wjfbBo/CPw0s7WuNZ8EmgAqTxBwqxRdGzcj+fc4QdQF4ORuQ+r/cFUZtd6hQD2gCLgfBTPt0pW4Z+8Pz4T43vUPaWVuXGLAGX2Ax9TU3aF4BMPoq1O6HSb26G3O/aqhVw6m+ecD0fw3gyaUiEYKmbUV8PfrxXgzbezLlH5PasG9UJz9evXUb+TeXzEk1+5zjqQkVI2Xg/E4QFTBSyrvFRuTaLnMDlmko/2KF/kQtXemPt151Go4qgrcXqKkuCUYHx5CPicuySftWCK03jF6Tc6EKUx9E84+WWy/FlFWO1da5fxamokqlfVYs8QJQxYUHWixPloxSsVuREJ27MLzqa+w6v09c7GOk+V5iDNJ8EkGd/4ObIqumg==';
  const _INTEGRITY_HASH = '395b4000dfbfc76f329ac1668558e15966baa788722a01ebd58932aaf05e6058';
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
