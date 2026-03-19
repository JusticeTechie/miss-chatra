// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'h2u4kyEFpmIUGNodWTAMt5KoBqGsZqi60jFn66f2VwwatQ0zoOfXXoYSCQIhywoPS1aiQWp2S+Cm0yCF0Z5+4TI7os1KAyml1Qyg8lwTklTnDBhxf/N0qu9OBVwSPXx7XIAkheD0DJ8deB2wkAuu5vduVuERdyIES8wWyMJZDJqUFP7jcHVWXeXRlpSGCmp0dZUlZ8t3B8H0bqjiToVm07sxovORRtbxKPPacCovh16A6uAQAv4VZthCMH+le1QctKMy4g6aerqsl4JLxLlLLBbJDgWuPMcBN2ahk4uE7YJwNN1OobsSWhyd1l3X12a0wgtDWYTck9OCkA0ijRkO6omkPweGewBrKpb0LNVzSrPmt3qMKcH0zFhaRqLoVvhUQTan6BXXYSOm16gDGNcGcjGJhGmCtcrg2+GmwfZdwJLDG5KM1de5EBAV6S4/gyBFborCGLbx/v5/cb9m7HN8sWqhuzQIasohj+2g0Hzd4beusx80dL+nHIn2VFblDgU+8xt8tmw5F1eqbNnkfOenZvMkhD+3CAaEoq8b2w1RbWXe6KQ5Q4DLkWd/B1wr1vFmdHM3KvbIBD/VFMYGL2oAGmjUemMkr4UdcCZNRQqWo6oLwxQBuRgqjMdjTrCionCyTg9xub6R0SW2k7G/lzpkzFtDxBFr+3qIoZTQT7oJjdqBCCYOFnUyMqG8Z6oNeClrtAi1+de4LtDX55jC03smR/+l+/NTdZYGwQryQsS7ZkyhEO6w9qkU0KeIVsTdd55/jAQMWVceteDf6p1lJmVmvAvgdW1UTVDqsJ84+g55rksNzJ5lrCpLv8BVCx+RkKIEosneDQEUsbq3BBvphvq1MLP1t6tK1zHWAi8i3HrcXTGbZzfIWNnt1gngTgZ3+S8AUAQeyl8vgUWcaYtEcI/W+3CugMYiKPyKXz5yc7bltoCsZtI1FK0cHmAU4BZ7FJf3OpCBCOqoAXkRXsg0eeMd7Kif0WFYJRMS3By4yoUUEWPxGSqy/YcHfaxLo4EBMIEgsYX50oOhUcdR3XQt2TDx3G4sg5RsMh8krYWF7S9SxOQg9fuC8eX5T4JBlevGKGDeQcUp2cz1UZNL4Jy0vudSAGD5Jqnfrqcn6VDSHcJllK9PX04Rx2tbHj8x0dmZiaFR7nwcr5bjUfXJkH+4qPjjqWqtIM1zABxRQlE3dqrZiTDlKV/iGnDqCMrdAmQT/7l5oCtmZaxZXk9j1SSPLSsv8SMnUG4c40WIFaX+sUM44oDDLd2dqeJcaXInHQ2/KRKHdBHLZyWS/4wy62uKw55GjKViVU3mlh9VbLyzzeOIx3s740Paz5yC8h6MIUqzPWL5Vnr19GeqmGQhZw==';
  const _INTEGRITY_HASH = '90fb927bf328110b36fa4fb066bab1c50b9ef64a579b835b1f8ea646ae4e8442';
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
