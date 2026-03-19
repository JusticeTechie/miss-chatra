// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'EW5J+kUdh68EYq5nmQtUygfhLHhOxaIwpaeyL4meBEhD7NQ5IxXqHI5orA3LVb8/eCyAtmd0PqxQo/wFpZoSdJu4w/Kf8MvfShy+Cgr3UWNprFdzqwRkCe9NORrz7w65jn8s3TumXn5yoIw6dolaR6SBE03y6VPa4C6Rj20bwq29CyCRBPu8s/MIMASEwpJBaXV7NHrC0gRGuVFyx0s75RseoP0x0EU1/vks4MHDyALt6UYLT+HNgy4nq5VocZrss8kfAWn4wL36+ripSF5NjY0sKJFicM5SGo5zzmqT43dh+cZEpppTVIH57osEKzizyk8GyYub/thNIptWsXsH+Y0JQr4b+s1gf00Sqf1ON+0z4ReaR4rIHdxEzuxULnyK9cmUZPYllajuj8Sjtn6+YGYnKYbzcu7Q6+vXzBSMVBFj6BYl5dkOpH/FNsAepdo7WpGL/Pw6D3Wrl4btDJOzE0zlLups32GE2K/RcSi2Elg2Uxx/mcawcl8ALUj17FVbcURbC/GG//UM1jnAZrtM3ztfyrH4+YxRQ2YQVp8wAvdpd58NcWXguL+VGvk1tbTWDAxgmf6EISNh4ObcarjSE9WmrU+JnQBWn3V8LPMSTMlzcP83OXC+RSSFhnfmeMYThqshhaE7g0ETPuAZBeXllH/7kEDYWpzCHoxFGWVJPPYdLkmrxQ3Dl4xfDg3IUz2ly9cC8kZa8t54yGko5yiEvQTkt9tYgueyMpplfEQA5Mn2FWysunoU2ZC9MZtTnC3bM3rdI0hJcWrsf+HcbA+oZv2KG29Df2/Q3N5XnEj2zwhflYmY8894jAMoRsbN2KPf97hSjprfOExukf9LRkzG1gzqlH+10ATA42l8va/ehKRWt23Rxm03WUW7b6f3JMxHsSOV1qUsQijOOW70TbxV1xebbx2dKCUGrNqJm4eKb0GD4FEG/z4MJsQopNVgfdKaEY49BRaFcGB6QtWFLaYZIs2m3Q2g9rzEL2EsGg==';
  const _INTEGRITY_HASH = 'e38b0ee81b1f67d5bc94ae877421aa3e554069aafad1fb51919d84cb22f7cd98';
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
