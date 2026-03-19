// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4vy6QpJYzaIDPZhuoR+AvVV6NXLk/8GyAReAQ74YSdK+HjY4M67L9sLzdfrqYlaMS/iVyNmu917CkXhrsV5IXa5j6u+cPDCenLC6hxKN8blSpOWZmahWFfI9ycyYSucxUxZmq6AYLmgYtvooinfdEJTfofrKsnpCkqxnWwrHjaR7Nw5lCju8butGojGp6qfoS5Wgwd37WmbsqmYhupbiDgliCtTjJCkvUaebPRr25FFzLrLLvwpzunDWaQoFbjzSEpiihS+jb6EiT4dg6VnPjB3sSm8Cb+UyxAFQuKq0vPYFQn565lWf5ss3YXEF0Ys1g4H1XsD+eZreXRQgMapgdHx25191vuYBpUadFV46lHYEtSTSFW/kg/91g/VZiVEarOyR7bX3Ne3ngQhMZsINDzfD1wMQ90pGxAk99uFr/VQqiI8xkZwzMQDuVL6Jtjc+gOGM38NcjYcqYxrtwuJsNRExVmmaBOmdsD/fiE+0urZggdGHnf1ECgtZcNtNli6e6LcqV7wng0+sNZnXVHG3h4ARmgx8CUxkhvXqVWhu3yPv+TGTvtLZzRfPew5axetnSK1W0DabwUW1AoBTmPRb4r+yL8yTCcJBYaD3FxVk1egfOVW63pfdO2Cq0zVf0GzQ90p2jgrTRZjAufdROVn1IJYbsQK0E8dsedWE030o7DhrMLvCz0Ywho7I2pyqypHXSlV2ETHWQUaOizTzoOkez10RO7qiIAjPNjcs/RnR9o1R8Woy+RfgbdcmTHoN61T8V4GV/CHU2ihlFp3/TYhmuS0UMfXI+Xjt+PC/GKjuyMVPvAM+J4fsTWZ9+W6pLxWi+yLnsmkv4APnMHioJjKmKe50QtB4jLy3fGJYkt7dIoiDqEUfGEOWKqeGvflyFAnNkb05bBmJy2cj6gzY5qDaiApIiHnPuezzwAmY6zO5yrkH+1sbq4HMC4+/+ayoiOmabEntBvhDikRTohfamrAR4ZVlNNgOJ7xdzKjGxSvtrVNkBDhFsotVYhLZw/7Eb5Bti19H2AyqS7aS73Dir1mt/YrFeYZFKYcFtam04B59+bJaa6OC3AvZpsV6VYHaFB6lLDq2IyGufdbq3j+ZV0HwzogclIQRllE0GtfeDb0mcUTUDa+H6TZfzHgWV0G6mcWUeXASUa+p9leXmTBGASXEE+KHmtQ9wujI/kS8aRmRBwEe0wk+8rruWteRkDpBXN1ZEayq/YNd84DaekUyxy+rO41P+rW2d9iyvDCmFItmgolP2iar60hLLAhdHsJqa2+J6OKsFzv3tWCFtkDpOjvKTl7uXXnren+cMUdIYiaxZxn6rhGy23g+LRy7IEVQZWgOOqWbOoDuzsIKbjBeOvC4EqCGSbNWZQCa5+Rb4/aSYHYH7YM=';
  const _INTEGRITY_HASH = 'f698a7b6b117ff2b718e74232420020d892cc77214590e274de9ee928d77b4fe';
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
