// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'llo9YqIImZhLWu+tmqctJ0qEukPidEtg0BE6LwzuVK6uUuRfFdu+N7vaS+YzvACHHtwygQW8hb6LD/OFSX7FOqpl8lhvxMqdWD3/zrBk5tk3pCVdG5Ydq43F461icHmT2ZDUtWXNrDYKsudvlcA4Tp+lEoOYNKD7rOrLlwD9586c2qJ+0vuowUGRESyg4nLJTqOGhQPWxl+xA8Fd1XZVQcenO7nAnL8QDu0boiAJkytr9QTCHVZ+t4eqcjiBszVVyO+/nc5KTla83+ciB5BrN9CvIHKpiRSOzaGGA59kf0CmTaVk8AFrE9YyvJGwVAb4rKf6zK/FxaRpfPm69+ISJ9N+H+Ty8EDy3npFG1cwXw4SJOOK5BEF5ujcclKN44wfTmS/2/+9b4IyPU5aMIK6VmtPinC9bgx3g+VCyTv6s5UJIHVAKCsak8DFxZ5wJD8llq0NA+6YYGb2waDEmbFrpf/ac8TSGBfzg/pNCW0C0S0psFkvRxdDWPEdQwtXoYuYunHzMCNkMVm3M5OSA34vOSI5zgYI0pzw3wouJzRF5RglftpDYRLbMqo6eKj118ZHyBiA1y2BcCtxVtYymKOifEsy/W1h57IjoFGHaDTD1il9g2SgUeX3AcuwGcX0c5b1loMw9xraVlFKHb1x9/zOgDR2AGABpgfaini5yHSoGWqceajno5933BEfy9h0OyxYkboNk4HSE9DTxNwArOBf16Ai9XI=';
  const _INTEGRITY_HASH = 'e7cc7f2a43d4d55e7873e513f51b90cbd6f04332ffed023afd168bb7211995ac';
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
