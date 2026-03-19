// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+gk4b1TdhKpFWM0H2ftZXZz7JGIEpdKC0GPffQw5/ltKz0X+6/0udomnHlf7r48d/EcY7mQUQFAzzexbz8JFj2mX+8zuDZcIvOnRkWBGfNs4l/qSeEyskALCzjqApWfnqERFuHYlf/8dAwTIW7YfjC/Uu21P0Eca3aoPThaE+3vmj7tVvitgwrKwi/x3pJdF34KTX9dsE3TTefoNaY97G4mYJ764ThEByXECDE1v1NIpa1AqI9R/4n1mKw2gqtVVqCY7ZKTDsI/g/NJxsH/xKJMINW8oF10niLoir2qceuDAXwsx2nWfLTmgrI5FXM/Z2htr55jDv5L1/gdvI3xEUlSPXEErxhj4Sh/5k8jBa9z6OgeaP8rZHjnAUFOZLPibTHTdwVO6UV5/tOJKFNozFj57ywh+hXqB2YioaDdKrUa/p1g8niSV1b18KVVveQoNGoQTc/9BMDY3qXVrYuJZQhhIbfTSuU3Rf1IWCWauidxUnIzwNPUtCMBW9Od4hKh6Idi8vpz5iSe+P10I7Aat5oAg3cBvxYwyPe/Er/Ws6pUFzwRAamcm1a12hxbGRaSJTJ+zRtVXgZI2dU1pjeuMW/imhjG5sDMQ6IQjyglSz4b2FIYFy59V3oITOe41i8LIOvYg/X2XUt3KPo0GKJvjMIBvj/i/IXGYsfrOnKNc1dKQ1WrSLp5JzgTB0kb1/tXw0gAjUBbb4F73tdLVk/VrdN7YvX4DjUV8fYKF9KItWGv1x6apCQxc1XJa73Bhn4IAUjt7NTF5AziinvmS0surTGLhD4LVA4gQ9APPv0WIpoF611Ne/48FoNem+89QNQn9oBKLo2eFY6uXblcdMwX+i5ClVVo+TTh/81Wd/Cm2ifEOWoiNNFbD38oy0ksR5rypLmZ4LQrh7KWCTCwrhXboIS98p3Fi5kHAk9R/XjmeKIKvlLvW9K4L6nkrrBxUNk9FHuNbte5oTxmfNiGiAZxo0ktB4LQEQnlJvWnqjIwe';
  const _INTEGRITY_HASH = '470f912a106a179df75c9b40e360f21831a089131fabd720472b60af41d15de9';
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
