// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0VPierGi4SokOSBDpGMU25AR7qnPw4FCVYQB1H3YmK5JmspSyX4A/IHHLHWbRB4VoPpUph71Xektj/T3NJntgTLaTF32uxfJ7F4cXEIZiN+XgIdP5TZGocnXP2iLPdP1BIjjjPanN4zm3jdgxOX6t1VDLQ907U5wBpDlLMRwEIDs67K7F5MerasIUE1S9Of79Fa1oabVHFpCEnR9dHgoDF3bqt/EwjdmeuNHhyXXfkTsQfFGCpJ7v9s1tGtMC/LG9OJd5zWlqAc7YzEhv7c92ESTtg7V9B2OtkLZESl+x6xfGOLzymTSGXGW4hptn/4CU/IlU1XmdP6p0OuQAUTj2vnU2dbdL9ZN3YVx/qdoX5Io+458j8IBB0H7k7LEehTt9y60t6yv/hTiCQHsk57Yqi/ThuvXRMz9luREPVUxXv2k/RelkZFV1lMUbrM3dqfoxRKs0O5iEWamnoB0PATfuvUEw2lKbDAbgjzGgZ771DYESIW0pUCn5ecYr+E/K0irHhtAV3Uiw3BuxC7t/MFH8eoMxRYxmOZWNW5C1/git/5G6WKMS4j26nbooumcq9YON2T7GaC8oHTGFZeqgYv9WllXcffFItFG3dJdyQlgMK7sb6dxkpcy7bFPpShr2I0NuAfpgBBI/KCoUqln5rYR8fIIYP8/me065ar8r+ray545AjEuso4otbMPtjbgF5LN95mLc+nyCIje+Jm2alS8n5ss04CkA4fZ0Qp6SiEjK1NcOyTdXbqiYT0Iz9UsrcmNa69zpVBtyWKj8qH/inxFNArFXMehZGpyup4Are2EuFeLnYSN5wfLXtzLny6hv7KEyf7TqiVztCPHn7/sdSkLOYpsbzxHmkCHKdSde5ZWGJkyg4YU47EnDCxWUot7lktqjasO6WUqhcRuh0jwjFfK/CcdMISyJcRqa0U5ocZ1roAAMP6+90M+oYKIvNraq4zjlVVN4SpTi8hKgpfs/47E9XwcW9VL6mussBanfTtp8CZ0tlYcXvCkGkI0YCiJchc+lfxQfecSczmG4/yz5hHuOhLDSixnRE3QNBF1dwy05oqFJTw+83MfBvC58kPo//3oxwb+uclWx8M+kzVPs00z82ZjbGJru843RCa9hE6Z30nPpbOn2nVzb/BHgRZPG6PcgjHeVXxhFJWRRcLk3d9D9KzVW6mPfm47CrZYraIUE9MpwAwMTEj3awyB6uJLvgq5jCe0r/WjEs2hvhAg9tlnfmRqU0WCiv0sOnaTEGOXH3tyMbidHGox80CdGh+db9HqswiZxQ9qBEp4OT5ybY2Zx0+2TS3bmQzhcj/tt2yzaOdvwIe9RebWlTjfXqFBnD2q8+m+SxaV9N3BFNvO7iZ+zbyCfJAtNIvujk6pSrgWjiN6lHm9kZHz6w==';
  const _INTEGRITY_HASH = 'bfac1e614286cf0e1e7d9dd0505957ad0585df3266229cb6af04a61ba773c5b1';
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
