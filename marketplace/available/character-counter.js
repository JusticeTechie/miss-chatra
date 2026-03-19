// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gj39m0I3NxvsoO7agoLNkvTSKxqgcMqw4eN9Mb9FGlj/4EwkLRSty0vGuXuuZ5EuEnQHJ/QzDbqAZf/6T+BVwLnweAGXkViO+J08OqZGmiP6QgRFSwJyZDdheZRmsHHbC1F52REMaDGaOyLbqgYbt5V0GQPS6kMdT6Nn/P0bX4LIQEdt8fdBH9BioBW4u7snL8ewmYVtPADSyXo+k2YYlSwZb5qk2HanGXH9X+zWGoIJeAZKHB3udFjZHYYZ4WSt/JlVcT5nvTCMvBRancUedhUEBxj4N8BkKlVn4k3vh6vKfsM9PwMn2dRASTrks/Np+8zfKmYKiiA7aGZJSfSNAVYAXIV2YWm+sEZ1UDnpHnV7GZn+mR7OhKr7djoWoZTc/3x4LoqW9LHja8NbhorqORp6/fA/LHo9Zkxz0WfgbstOzzXYJfZH7QBMs/FPceHdZ8Xnzv7+4FvpklGf6RAf0LYOGPzn570AhEqs7dcMI4fP7/uuvRGmjLEI3LKi1wKdDy/tRFxC/5kiZdP3hx61qYVMVuF+EdjKv6vRLRKtZvYhN2d473nBUB7WtfYoKCKH+AmtAjKt4APn763Akya7iHwU43N9QN2AdM7eT+DBX9mMbdcwcPdI3TyJNASrmkhqlqMv2mZhsb/9G3iNtMOfRi1dCxQIJZ13QnP0kRKI0PeTxlpAXYiDwSWhFH2CH38vE0LfclGU4ZdwX9wbST+yx+F1PDeio+/HqaX5GPJt0XmZ4DEpg7x+4flGMoH2A+at2uhEh2Jte05/GgfGpwHeMviXuCx9fqFf4njJ5xpzKPbFmdfks5Z1CaeP51SB+AjQ5/nXMsf0ADi2+r2TNeWAvmAZrKeSOo9/heKTrVUKdRlfC8vBgwZtsTiLY0u6YrPGl1wXjHej58d7NhdPuKXpXQJEnkQ3etrGSLpDDx5rbixJMRlN5s2/YJXYwz0nvR4DkAx9jJ70Mn/oa8SZFVIVD0dtPR15Z4GhUH1Cj3GbDzjoPbU460peo3+nCH3RbjXAonWti3Wn0LC6EzVsU9kUERsyeSH67AQd/hFUxzBq0fVguOPi8GjhMksZOn3j3Nn8X7RTtRE7iT2rIR9GvSM06BKJ0yTjStJytiz+TzN+lgMPQUk8qt9fXuG/ann38nr7nkp/5Q75tidfw0J06ewWk6qMP8YMzrdAwjB1Ij4B9k6ti3lL432Arts/I/5rrRr3SOytBlVpylhxvY1TceKvrD5Vg9GuuPPUyZjznz5NnVqJ5OZ4iNmCB5RdP/tK7cAVIRdVpuv0TpqUsua41JzABQN6omq73e601MOPD8DkdPDBXpsx2bwulVt4l0zzFI+JkZcReTRM0u+1d87Lo2RGnl0sPvXc27s3jr8x2AOJuS/2hcIYEdmj4NGOpjcigouz/c4JvZDfbyhJzuAv+YEFOW8pVE784Oc6bCnIGCPM0oZVIdp2bTgp+p8pPs/huSBYYJcz4hMd1vBs7SuqgYx2S4mDbQv5Vv8ExCoewQ6JQiwvx053N5sbHyhv953WwNqGc6X/u+JATJIKOu8NZSj2s+PBnvyOknSE0rD4Ytp5n7C3N6D2omcEhsDjTzmkxa1+7k5rQ7DkOqn3kxMeSC8u9xbkpsy44ZnGRSVswKaMbvlBve3MskchRal9PjC8MMslLx7652eb1QIF0OsZh5yxskIDDJ21h+Va02qGWtfWR1cc2Q==';
  const _INTEGRITY_HASH = 'ca487b6d02b3af7f79d1390bc5573bc41c610110d0813954888c8bdacd9fae28';
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
