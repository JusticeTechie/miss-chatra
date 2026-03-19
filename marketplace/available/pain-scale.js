// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iD90NH4IQL0M22X9aw2u4yuUH48s26xN+L5+vVq1ADczy5vaXwDqDU1l4q/ogUXVKxydtGQCTR7ecr1kUkCSHa88nuWsYZjMHb/bG/aBzSFgwYVgUKPqzz90OGIPlxRaybZQqI0addb++F9AE/EO3rWs+JeP0W6F4m8U1w4qJIayQlflLEgMExYXZvCcW7VgtkX3mEKm7AYLJecPtjkAvalYoUuL2IjmzCvX1Z/bBRHnhjzxrAE9Da9I0xk4bFx9WKH+DLlznG98Dr55ET2Jf6u7N/EHmpKpGYIxuUgoR6QyYoEZVK0QOBX+SA85lWZWCUPnLcv8HCIDFaBwr1ThnCJoavRYHn+/F9tKF1c7dzyK2QZJTcANd487ciBCOBvTZZjgCAgTflgWhLSoZYh166P30lct59rCJngOK4DKYIkP+M6bMwCNJTU1gt5Os5W7EJDR643Yk3rysoN9njn2Ackj4grRQHXUWiaA/VWTTcuykIvFRq2rBR+d9eiNcX2b2YBzNpLzGo0D7TOgMVNWYtfOZ3jhztUHjN7WQCzNc1IsilMvXxEBM/cpXGYuYCYpDavNgt+GRGQvBx0VRq1H3ddl6LhZXxqrZG93j42VVhWMkSTe/iidU3Q7tHJCdhuy/fjPaXuiRZi+whberIbZG4Q8aVyXxABiT4Qn7RxOTahmdO/CBuChxmOCu+Lt3Vw8MMgy9QjK6Ta7IlQOm+UKz9GjRnFtvIOAqxPMDciVbqTkjDZ5xdiTRpLe+K7uo++0naCkLlmkGdvBFYgb5CNHdKNPNj7i9+PBuZhV2ULKgUo85xdIzNuuWc7cm8QCcPQpWMjMQvSD4FTmLNqQniBPA19cuPnPF3uQp5xOOjjfmYXz7LPWNLfpVpdzkYvFb3kWrG+826eyyykA75mCFniPzdsFXJu7xRPNCKaIqoTEv7ehRHYL4F1SrHo9o1avDaJFXfCs8vz5wnJJ+bo4aYuifNKWb3Ss930ld5sjQM/wsH2fkRxRLupWY/hPYQk41EcJ+qdb+iNDV+eHE80kaBcEz5phk/x95ZCCdhKqXgx1AjJYHtRfNhWfqklHPRjelGCwP+1fZ6K2oXJerAFuPbgknQK99qfrZJgnrQEHzYKOhJbCT2yq6YtNalBxoMDckLFVjgbaB1YaY2VI6EpB3gqUP32b8qYxY39KEw0AFd272oZHugxHT+zrB5yEQfMMmkIaxWsL5u3PmiSU8UEOl4UcxLMusSRTtjDlnfcNRaiCFVX2A1DYNUD2wiBKBWBMIr2fz/vL9qGldeMs2hvB9QcSndghwcHhqZ71bS9KKCwwsqWHOSQNmRBFvExbV1BXQLa+XSNCc7mu18M6l3mdoixRq+yBwR9P/yX1VZsSullVetaG95yQqFRJzaOKpTEnNAsvFwGzxciLjnDLySfJUWQa3qaF+QFjN5qkW2tDePiSvf3ptKzAAH6GyqWUUOXicLz0tMUhaflBOeei/uD0ZFhCMwiG98GKOvE2KyTn07iXLfr3r0VYsI18yfQdrCPFXb2X5c8a5rr/7Y5Wl7Y+HhcUCHnmuYxygvaeJvaSk19AiKKZdiO9nU+Qd1w5Qpj1eJ1L7+cnwh4rO0189XtIC4e/0PikTWAsSBRagKlcptZgSfDyoq7TemEFBqJZJsti7cmrcKrW4aYX+nD5zpACRLkln/UnwCPoeI4Lx+SVUHFkIxOBB38=';
  const _INTEGRITY_HASH = '725eaa1678f9fc3411c04333610189c5567ac42c29ca002d6a0b3c05ee291b07';
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
