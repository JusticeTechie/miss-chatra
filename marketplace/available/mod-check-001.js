// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mqfcRbU3Rwtz1Zk4R09V7ROdPJWahPJOPhEY4l4MMe519nYCCAOWyzYhgxN3Zmoe/wK74oKGPSSluM8TmD/AHiFcAf+tZMpWWf+BTJbVdjG/ux1SRsWFeHeyQDEL02d5nftNVHf2z5rQcdQdwGt9z+xwQ2YlembbPgONju3h0YV7Q8rCruRHnxfIPrplwYUGl6dxByOhXGxSy10q7HEgHuG5gXd+z/FwbGI8jgJlVKKD8VIVQZAH5eaRZeTZrf8aYt++/pavHs8R2Xxt3QenbPdgYVt3fFk+JVwHdByCmgBsZoyMhs1Fjx4EsBFM0NvULxUwTNtT33QXqxWhlSjzRQDIJHz1Nk1mKjBTQ/6Bt6r32La9l7giS/D3KCCAZpoCQgORA5m0XDz5RspIdHICAdxYLjvCH/SRTqM/Z4qnnFQREdA6LDpKevKS0xSzZwfTg+FYPiZU8/yl2nokv+HvkRe+KxKc79MJxnTGT35oz1rq2aZ1vDLT2pIYgfvALj1niTr4qBnpRqE/A2WMw8AqGCat/P6q5QRM62BWLfe6GtzL1CANNqxdaKFysbUj3IfXLY8AN1x9wZIHEg/d8EbS/E8vBrLmP0mFBcdEtitU0rF4/tcbsMjaqPvYvP40QVJIEY4A+HLc4nK35xTIVbhKiKSMOaLOHF9oI/r7haVtyYf7N4epyKu88dWeEcWdSNt+zZyxUV89q8S6fN6bLeQmyaQEkW/WLzJvPa4o4m/uyntqFLQ0aSeUCUbm/2nloIHYNMIazB8hQxN6HmdoE4omMYSMWZ7uHSg7yNAVtEHRUG8LsqAXjZREiu4SV7jUtEEp9PBNh4jNg0lWL8WB342PiP3GCbhAxoC0nemVEW28Wpc+bRNPQITFm7heCkAoc4Yq4pazuVsfsR+kwDOpP24qNcqSxI+CSe2sK1oSeqXUGwDGydjHOqlXiJlnuq8Ly8glUW+x/ut+lfL6w/OyAWNX2TW5CvjhKV7/Yud54kU+Ai4hpVxerEeaHzusUtEhOpdvfPltWfSTwnS2cxPpb6yFLtNoGiRDl59Tvle3rIV+OZL4ELbA/X5PTmMssqxHEIi7ttesjTED5qytoLXlKG5xA+AHopOw7ALDqowEjnHaVjd0BOF8Ui/bmj47gsX5Jkwg9c5ygIjzf/u3zex3mvQj/1WDEPcfv87RY2Os9ZlY+18TtOVOpo3FjbetFtJaa4HPqXxEFiR+szo2ICbstNoQCPaWu0aZDsi/9+tAUqlDt/M7QwvNj+FhY4EHIbXXeu70Hf/ysjS9S2H7olT/bGFPYDS2DWE20gAib8b8KpdUWsibSAowKT7OTXk+3i9cYZnNaiCHQke7d0hE5GnvhsgC20mKfCw=';
  const _INTEGRITY_HASH = '4ebb6311873e89c59bd9c1882ce97252534491a4d63bc708ef2aa198f0c273f6';
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
