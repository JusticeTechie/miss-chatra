// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'I2ughRc7qaqnONZVc3UiwtdC6xKPH4Jq7ItWgw0CCTbqAqI0WcU3dVxKloe0ewghHpQlt8pamp2tLy3cg2AxSMqoGkipYVOS1sj2fykkxwikyDqF2sdG/LxmTLNQMJKSdI4Q03tIw/ik8r8PtZS6mro1GEXjj0OXIYRfUeT6JBO5RW5Qay0T1dP0zflCaBVQ/d80Et791slsSv3Cz5hKSNF4g+XVmnzTTWLJCZ+JauEisBRZGWeb9TKhFEKmzfwYsHTJSnf0w8t00uDf5cpMFJbC0lI5vveNvb/q9GSXW6uU8qqq/9VGkaAZ+uONkKQW3vusuuoJy9OU/peOb5TEUY6LazD1HJxMWIVadiyAAhNYb7hVV3FO4wFbQRKFkKpePamEN2TQd5zQ8xSM+CKn5IC7JUDkgrLV6o2MP0Y7vllGcpEN8NQAeeJtgZmGgs6pBSGce1kLi6NdE9Yx0mmC4TKeYvQkx6snYyoogySAH+Z9HTZbohou97IWO3tDD+IUfuegVbpYQiMUK48owkS3+W3PeNQX2bDLD/ewcn98EOaM1cw/2BcWI2g0qFjXsbP/bsTTZTQT6Si7QT2UrPo9eW3Fx8L85W2hXUQ/+KbAnqMWFBXvbLLPGAS+Xi92bha8xZe+3EnKMDC51RG8UtlpMQ/wQsm1O4c57TFtoL0Jf4JBqfnLKfxZ9ykw4E8YSbsGUPQzvbnqU2boj3NT1Tx6B/ATGHiiSGZ31g9tCNeGJHNEmdDgNwP+8IwzIhI4ZAC2ZALGI7lnkLe4RdMJr4zfonFnvDEl24QovISVJ1ICRSRYUCKK3XatSg8ONF9CyiXamywo6OA8AOW32yuliDSvQGVe1s2s1FXR4RL/OwIo8Wp/ZWaF12yEZXsvGjOcBHqPrvW4MWijUeVugv6MkWG8xa9yU+6ly1NR0Zg64aSgETQ8sAXr6l09mzHiYqjzZK+/y20PegxoiMavWcNoZW4zFAgj6bjuiGWow66dmZdhvG7imrci0vejFvyNGmx0ktORde64YxdGuNdnwhHS6DevK+RrI+nalztvGiwZxdz56R9BFCtcKZdH5Td3ZCnL/sFCorVH102qnb4n3KmU4q0X+vUEvxyGwiunskN2ig5rTreeDVxK0CdMYfW83XqO6+x0UsaM3c4G0OiY9czhEpj3iZp+u9WbpwhPnxUsgCUi5rOAZOVFxx6BkBCnvXBdRWzJNCD6/K1p';
  const _INTEGRITY_HASH = '94ba122f58ceb0615da44a54d19507bbebc72b3d90b89d10dfdbba7e0992c582';
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
