// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'HoM1hbR57cnQ1sptK4dqzcafknZwzq11NwkGILhyXadbs3hDHe95IsPVlX/qhPnMt8WZlq8Pgw2I7SFSWu4E5eCxkSkwN8S2pkjHV3OoAk+Nq8rMwrpenkMTe6Ge+zJhdSXa6IOcUxSojHL8jWKu7bl91bDP/7uNX9XPVz7cNRuSiwU5UsqgwAbUD6kmCxgbDhiC0uQURR3t6mmlOaxyhvKkgCz4aMdOE17M2m3zGBKzwc6bZyxVmUrXTIYNeApKWDFrdhKG1xdLoP48U9XGEfrIpMlNUYtEDiUBnxOOjh/qEpD1ALzygflES9wXRa+FWIl/mqhmht2Bc0UOxcgwldXTyHBaWbUE6ZHn/PNzst4uC5tJiscFk5w7OI5++dIVnYDu96LmmnoIt2Bo0XXEFeaeQwA/eQSeioVDG/iQRQjpqgDTvO1YXLPLe/tS6V1HhskjK0hTroayJYen+7tK7vihDt4+TZ1rLR6zxd2SIhW3HSGTZmS1FrIZqfBrC4qjPLIqXw6kF2XpaAKqkl+CB4oCfZAIaSqIkvw0mu55gdunkWOWkcIyQzdopEDbtB9kyctepCjkchplBTAMNnRAZbQBuwfFujq+5eZyIfSXpaqBOuwWMhBwXLTgKXMppjBNKW1vtqwgSwPe/X/Fo9q4mAYZsdmZIvwV6HczVVIDsoMs1o3uqN8lMY7RtEEplkb6spwBxoB7kHuZmrKpEYw4AqmGzOi9CvtpLEEzhGXDzhbVYfPpURcIcQSLA39BEH/PGhM3z6A3qZ9NJJYdaeu1huYSH3mrAnyZH8EPhdjMayKZM9mDNX7yMqHBNqEiPc87eXmNTHqWdeYEvD4Gl/W3Kwis9vDplZHhQrwKbMQmb1yddMF903JNgYiUSnRIIlyW9SjlEJkXhuqm7ahGdfOTzwSt9bYsOCwjbBGCIu+nS3LpeNcjkordCw1l9CvfKRY/cZuZMTdNlWuUoj1PioeB7K5PYOafglhGLo/sawDlZ12+VwrsW0CJXyjKpq7r0B3Bg7kP8j28uw1mvCrpS1nW02iNFQ/DezWaRghqfX6B4Vf+ZB3oN60wYPg8zhajHNwie7cqtjQTYlwsp5t+uUl2InIBVnUDuMvKl2SbRYlta/A29RUqYszeBqBfSg59PQrYi045IuhvvWV4KngYJ7SX5T0sMYmaEgqkfkz9tD6bj20210aB5ejEG60WagVDmJr1NEG8kYYX/AgPZTFpb6oTtJxE3AFc0SgKi1yP9MsR1An+wcHe9Qjx51mhH3YAlXqm8rz3Rx2+PKvQSi/cHiB7e7TBG5P04JlbDLAh+X0Hd66JEO4NMQVhKQcuAtseh9hFqu51Au9RuJUEKI7v5zRAwam8T4UQKbvsHW10z8af';
  const _INTEGRITY_HASH = '561a326ca56ecf07107daf237254c0dc27904c0311cf6bf5d31a1d5576c27702';
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
