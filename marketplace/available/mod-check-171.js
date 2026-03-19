// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aJhMlySYC8vAK1b2X+/HkkTVIFtvtY/3m+U+Uuiqdd4Un9JmCQMLbhRl31F6COSxr5ty//vpNOJC9YLNOp9ZYQBACzMIxD4WNxaBRn4HL3WmikYG9NHsYVrUPJLafskdTK9cT/f6Xr/xf9fP3kiPFhxjYaZFzYO72/X5qU7EsOt6ND2lwUVQHEp9ysrM1b2+ShcPPrIwJSfb28vcGpG86c40wrq1jtNNR7vbKspcGh83AtYcdb6Ek13KJDtP1ThNIeAYocWv4/i3vXJDow2tu2mfnWJQ01uv4eBt4oToakwbRqnG+/OZqiX4elK3T9SlVxzCTSW+3jyRoey0OT0gMByvAe7T4EfVkpwyxj4reYpffXtR/VcmC3GLq/9AXZ0XH22iCgMEI5Imhzii78R09jxO8XHUjSI6+f+34oBrPC8Kk2zrC5BJP4amnFvkdWlvoJlw1U32263aMF9saNGmFPxzfzmZPePHB5jK0+a5Kqn7mE7Pp2lPZiAw/1zptNy3SODRtnJstKQvo09cd9q7cJFpRRN5DX03jQ2VxjCDzBrFo0GkPrxtGJvgL05Wlz+U+9Zlej5bsXqWAtvZSZDvyY2OJZ7YmZWi2EzzKCQrxPY+xshrLuLTQt6syBycnVHrf2PescUF7VM8wS2yrIN1vpUZLF0GcMN1ffp2290H1RCVU8DGqnMbr8+ld+Xbn+jbGQAvGvPu+lnRUPNPVeYef6h4KuAyBDp1N763NOYAgLqquindw942yz2N45xKwR8G2dUuRAgNFWUD541pzXpPqpYs/zKuZCgu202tiYccrN7F8gQ9lRcrL0AjdsOxPKgTWUCOwvNojX4ofMFwrVqgViILnYfb7gIwA/WZ3hZBaRNRQocNJBDQNr7UZ8p8z+d1u9BrABJkk153LYe/bdVoXidRRWJSgK13lqi1pcWOmsb0YdT/nR/yOCps41X1BzBlPl4nCsXqD5zXE7ntFA66sRHCkZZOtr8ty6TcHRUuk6TSq1I5vgaLGrcp3Deq9ViCTvFSsJtlkXnQ7BigD4NEoGI4nRb/mrhpIIhkTFYqrSRC308RhhRs9dlO2X1WdwsxxRKiaMzeBB7CG7Psu4LrV/2wQ5jx1Lo/eEmmBRGNxUxj+YnvhdPLPG+OPG70EBy6CDSvgs0t6sNyJhNcxeWTqqjoVdev6sY9D0kcR3PCCHCjIGTT3lgdoTrJnh9Dcjdbdgg+V//f9c9v5E0Fr3ZwPuEgri1+h5zYAiBz7Q0hfJrB1rw+snqGhlurnyxhE+UAbljMl1VmnWU7/uBuHO9dznyMwrr1osEEty9z/SjQjus0+e54fzRQUd94bhcHK+7YjgCX1iisqWL7qPNx205RXGZtTB34BXbu7U5A4EfV';
  const _INTEGRITY_HASH = '43d85bde61dee16bfeb595e64157d896ac671bbaf3a0192f321e7b15c2da3276';
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
