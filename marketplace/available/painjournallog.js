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

  const _b64            = 'G6J2aWq7zgqnouOD8cIhIQG8xu6voxjZQvnhkjITlJh/5Q1C7MQSEAe7hNVa5sika2QyMBTkfxKH7eFPtKrn+RFyRDWJ+L2OrGXmy8c8D4AxF2FjAstZ96tY8HKj0C9c0QZlqEQJcbaBKOJI1L2KQZBZrA3/mIc3731q5BGwzrPUrlbJRqc8DxGuDMsSKpsGnkkOsv1ydwDWb2Ja91IRJx0BWBRkfNyix8m9RlVia/0SWk5b9cmEKyqFTEVcvblOBnjupzlF0NU//LAr+LnLZdGUmb2pPc/KWU/txAnRlII5EvjQmkpnR3SYv7eppkPgZEQGQ/uxBgnLq5YKRscpUTKduROdt646fPYgiEq1A+yEpTW8GH28WYFg52LgcM+H2ACkRuPpt2140mnWlo9xgJCmP6Jp1rSKuXGeJ9s2s7AXSGQHI8xss8fswJVhp2fIfhjOxNomoS8WiRcgVbXPHDh+nzEO05Qe2gc/tAwSxNeEBldc0mN96e8jiDKQUXH3PR+QfOtE1eIgEtd7hAw6PbFiZxKQUygeiBc6rDnICgnFjOoObpm4Ow7vFRH7RTyuDworhGjdBJx2+Ecdk+yOH8vH9U75LbuG4/eQIoV0dzSSZvAxaHFExYJJL/afLzk+WBKkRRGfCLQQAVKTDi17ieRSN5FGB1ijsPQ6gMaiN18QnPBFyrW8Z4TVMY6GUaPNDWZwP5QNsjA+VrqfwsBu7MB67UXdRGeB9Z/NxKOcv2YLkVYuik4NFUUD2NgTV64q0Q3A26tXvDE9zSi3ebot8nn0kChBdOAYuAs+La5C1V+j0JRnhBeCYFy0Z7cSaSeX60hij5uhLkoTR2UE5WzIqNykHYScWWC7KH2irFElTvWpHmZ2aFlp806ocjLACBOmXEx9knFMEja3wRd+DsgyP5gS9iw0S/Cill9qWwmikBoKaDn6t5G3V0rpGrbbks3VdlEDfVn29MGMeQjEscWjQ0bwXk7AB08NZdR6dTOcdYRqiyyrfGWH5p7LQvEzjWCp4Bgoj80KXcS4KgJWEISa/J51m3IGsxPo3i9Kg7ZOdmd7ajWcstk0nNYZvKIzJFps7OTcvrIeJJa+jmoGqu6TQ8afvHKgAimCWVFYv/14jcrYttxajr2H320RmAYQEnbDcGyMXIQJ9PlHbgGB9ZufpawFjeKAkC0m0FkHe/KSTVkTUCE1cYk62ytuhhN4P4AKZ5ZDhJNBxn1bCiU=';
  const _INTEGRITY_HASH = '4369d99fbb6ab77194f2f94e2adb60a405ef136dee2f69bf8c5de5d7cf4b5afe';
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
