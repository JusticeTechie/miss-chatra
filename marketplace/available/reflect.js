// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Kxh4fXEwzErSg6IUMwHjfwlj60g7Gi910nQjzX479HtE2MH4NEYWadmGdvf2NH+xZc6rbfXhWtpp3VLiUD+suOIme+7IRJ8kgjqikbfpg6lmwb2rE/G4j1C8n0mH6hd+kj2vk1nmMSLR92MmNXyU1Y+BKE80n3PTy5/t1fhYhcdizLOZlDsyVkCsmgNeN9HtJKRFQWLdijrfNJvBAxgSLAJbpPGyUnac/BT6/ynxxadygd/6S9v9zZVHB3c47vkBG38TWVjeD/XydGuzxerfnh2mXeSQojIW2IQX0d8aFxIAR546t0HZopbNWgRaPiCuVG8c3uCk7ztmRGaEt4Yjej1L9W8OvmQ5IGapkQ9Z1F9V1bIvfkZrMAt0uoZoIVKZa/1+vXSZkU+C3j+TsMpPeOrUxXCR2KWGKhlzlyhX9HHXfhbdBjy59TbdMpjTjeyl4sDHddQcoDjIOhdVhLPKHwU0cuatDOPoBKLWQ1Y5jIYDjXU9W8kVUu1eJezOvrZLARA5Fcm7AP/tZwi1H6FPZTf4pnZBcklZ8S0DEYmLXBBn66oN5kTkN3Op2UAcIGv+wcm2ne/GP/QvA7Ew1IpYE3D/d3r73cgwrjQqoFEAposqdLUab/6qgeYqq0Q1Uag0iPJ4+Hfzd2bhg4H07TmNeflsffF2qz+9WzkNZx9TOcV15sRSZlmKJhLbxIc4iYO6cVfQX0+4TIxsH3to3t6cOeXU6AL5WyPqFuAuJhybOlgHYnEN8/lwJRjtdzZYJmTg0Os3Z7VWSQ/vDgsjdWq6daifxdedvjYEQ2x1aUDkDMpwOuBdQy8DWf5i1gBVcDLAjPUpToXARsgQWQ7Fl1z5vT4t8nElB7f+0XucDhonottXcTGjc04pWBkJ9+vjYPLGB3iRLzM381IqMxX6rjotHqp79sj/QKY6BsnCmSkFdPeCI73fSZ01srYSEW7/+4bGCDnIs6Pq/QsJlQQnqEZnvSFsM1y/+WAbEZTl8SHSwfkEqGlVUVRtx415YdnrulO4QiDHmX/zTqsehiyIkhZFxk616zPoSm4a1yGIvgCyhL58ZiXG1RASMIBD8ZpkJeVWKyEXD7FKEEGd233VGjNxZvwzFxPjkCJRMh2DiTupeX3yqX84gBE4URZFS0/E/GOVANJyJfPYDso0ce6uYp46Mse2EUF4u+S/VhRHfvz0W53qMl8NW3NS93rvmI3R8i+0LMrJ';
  const _INTEGRITY_HASH = '4f7215de85ee6acb03392b0d86ddb850b03ffeb3e47aae17e58b4bca7743cd9b';
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
