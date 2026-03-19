// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Ut4rxNV7K3RkT1NRXn+DtfZg1q/5jg9KMjIZky/PeWVIWSryAZT4kDPBywvPetpff+X28TbwW3VL9wxnStVauTKtQ1PZ9q4M8+iekl2/yV0oXZZ8skD76bU0ReJ/zI4xpuHqJP87QPMb+jLIaBY8v/eypCrAMxFSTdVxHQlqiol7d9RNf+Mc99M9et4nfEzdWYbxauWU5cIjLYoI/hTSgToF7zt+GjrPa4k7Uz18f9J2tpDOCpViUihnRauNd1KDM2NBXSlJRvDJ2dc0h+dPmCysRA/raexd6unUZa4itVyq7yeN6BUFPM2b50iknY8YsKD3x19BHK0swUch8TM/cf1ARvyzcK4CQl0+joDTQvRg489Kt3uHMdvdJxxJAW2I4/C6tRrVSbX77uDYKJHt7/NDwfcu0UGginTvfZqj56N2e6QPyE2GWCX5kn4IoESS2VLDWZTqfmtcEgJOTaVDqA/TGiLE6Q0vM6SbEuSvrVgmUXuox6xBAuctrllxSUBZw39hTk20ZpKYg5UF0voKU8Lp1i2mcdPFU3hc2YTzwC657BpQ/6Jrhn5B4zsb18lrO0xoYrp10QBn9vGYXgjiZbnVjV+CGm8cSVA8SEdf23Sz4rAWiDuVOaHV8sdclSpfedwXerNGDqUgiN/BwHYMKHcCRDaePUxEZ8eYrC7gJcPzNov8b30x3/V6Bw7iIPhGiSbmeg1+gETy8rDEFPsrbYf1CRF/LI/4dgxAD6qsY/49WAWXp9+gLStvQDV9gDhWejbdujkIQpkcjgsSKmxLh7p6YLwbWlXJK0YwfFJBnix1dvqYGYcDPmkr/PuwLges1/rGxnAeSDKw1MGAbzS7LEhh2w6D9TavzTM6l198iIl4IjL1yzBwYZQ0uixwgucltKkO3uqVswoAdMmvye9+E/ZHUBSnR/qVvIERWhOVHVSZmMDSCjkw6voDheBZk5EKQSt9BBNdphOVKbDDGrMZyzOFreocTTlTCiHNhDQXmPVd/aFgjEmyrGJRsogsnWHVQeApWwEdDN8FdTpA6iOssTC2shq8Up/YqUZ9BkA2dOrfXq5cfeMKdGyd+jQXgABmH5imXN15CTCTmEWuvA2K+zdt7qqOb6qs5bXkCoAfdJ5OwoS0+kDV7RupfekW/nq3Ph0vnnRxlMUhcs+wC5AM1Rr33bGijWMSCSG+nk+C8ZCblhZvLlrVw8HVrYDSC/OyRz5tFv9eeNIucKXxUWBzhQD6uXQtsVT+beM80Q90jyfj/nUmmPS0GJFOpmvqb07WrO3ZtRecUwlAfWdoJSXJnL6/zon9xU6jGgbrbRI6TaCx0eK0ePW2A/WvzZ265QiL71IkOU2dIwTpAkvL8uvxC4aK789T0T9jI18s2J9SBivVU078S7HVBGMwDupIXfZIba+tXs01OF/3+cjidfAfekp0nkpf1mUG0LjmuPcZSlf/8nLofoHwMHbsn8/GHfk3Dpn8iTSsxAp4F58ENI6oxs9HSrkP83AVW3Q6BjYAfn1OqzPie12x9Vo5+WLOeWDIlN0vo25LOWp816WEqLZyHfujW5tkPthQ4vSCgeQ57oFz3wizQvy7lHD9YjI9NiCduKC1K/NwX0FiA7Gb28W+7ob/6wFsIJ10Q9FHJnsNo2u5iy/l1z3U/14KG/17lPBSpqgqy+L9Ky+HGW5tHEdyFjcfu00KcfNH5c4Uawus9e1HQbN9Ln5y7rklQTgwptgPjmpqv+/Xy1t/O98iCaeNGTh2b4H8Y2wIoMIyA2Gmdi7VXbx9IqhAh6z9m0Ua0DA/ZHuMCOfkO7nXRIWsRata8J1Q9gCajT4cub8j5/1xk/Kqc6ubKHRgBXBIsGBYMrZUp3pbJ1RNbF+RcHL8Jua8bJHdCbH4wu8HuL4D2C389FS+oNg2Unh9GYk+OR+RXxWB13KAFhna';
  const _INTEGRITY_HASH = '8738e641ba4b1ebea0234e9d8bafa4a269572945f0b39cf77aa0fb297e3fa239';
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
