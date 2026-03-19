// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+fksTftymMZ2kT0Vuh6b7cumPyuq+fILUW/z36sc62F0Bs4JZBA/zM7kl9Cjqzc+dOfgxk/I1EcBKvAP1AV55XWzHgMbiq+kTxNRGiW/o9T0ZrhX/0G+6szjtR/p2kWRIAHC/UkNRxGu8/+iDmfXPsxoAItUgoRSszCM9oztKPwoAHnkfmBf5/bJgkSGTId3/OFkonX5B0qUXqPC1+Hs5CV2BjF/Xn5I263xXJMD7BdQs3DbYgvOPEBxm90ulx9LRXDDCG+OzxLJhO+YlPnJYtLH/IPxzZhXHBZuCHQkdwaTxyKf7GCluske7cBFiaKotfCVtxQIwtOV6mR8wTPtD87p1ydSW0PU27QBaxIUx3dU4PEU3NYMkKOcK9u9wY/BhkyhD9eF/8PXXBEfkgZgr0579OzjY5zZ87aE800F6hWCLYSe13g7YkhLIx1VEIoa8WH627IPScL6KIPNAXfQ4PhMYNllLFRZOlMUeydbnCWT+jB6B9TVHxhOQMI8sRnAa0jQ4iGsaPa9G5UX54B0hzVZEeGlUS54VzGbU+0D3eMDOkCvWxQJWRgIbhFramWPawwAIuhyxiq/X1OIhwbjhlouEKDMxXbdBUyxDsteaRU+0EhG5fCv18NvjwWLWdmQpm4Y0ECH6BOFAdunfORf7unNpDuVUPoRlpHFAVxHR0YfS4qRP1cbsjwtmWFg89WkyaowDJMp6B04pqFzoLv3dfur+NoP2oiQarPjLiLsTe5FWjLw5KfyNiX9NpW7B9daipmm1T8tyMM41XuSNltNUmh+FOrcNkqDkxOb7L5alxX5tYlB4RGHt+YjFWPEL7M2wgcv2HImS10uZOv2r3PM3UMfXTl6j9T17vo9nn8LsoPpWPSyRrQq+AVhkQkz1NN4NwzzGbpUvZe6Qa0lN0pV49nk/kMS5Yt41xoiX23XWNdwvz8Wi+tNGMk/yEfuJtFG5aLFqgPCqrmwmFinqTtIP/uXGQ2HRhGbEKxvAKRIzJ8jkg0PHNM/6BDCjvYC1BYKERiLVfIDL0uZLWjZG1/VWybQ7F2g9iP3OLAHxr7ZZRxu11VQoJiLhLkl6Xnxe6y3nI8C1xGJSwdRc/RITJeKor5G6IdHw1ruhazoKr1CNn2dLOlrWXNQ5pTNVVXftnE9iSgSK+vfU0L7+C6hKb/uGbX2f0tEnw83cStbe0+LHzZjV44Gb4aTnkrOd/RSrZoX8+A7GbrZgzQTvhW2J15LMeBNmf9Rnx+p7d1jsqOL85mKpmCs1QgOSuB7LhpUxi+/5XlTc56twbh3xwLixO8vAuXsMcyTbQ1suVtKgRiRh2JmzcoRGyG+/Sieh9U5Y9jG4u72yOb5b//4hDnegPBAKN+WFouxFmvZA6A62z/t';
  const _INTEGRITY_HASH = '1316a1c25a7cbaf7dd5825fcc076abf7a3e5a8e70f46784df73c88136e4d6e6d';
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
