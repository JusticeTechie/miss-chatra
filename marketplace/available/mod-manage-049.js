// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OjvHaaih3xSHL/pxhhGbp9lPun7ffCSUzhH1wIhu81yt+VA1+yLifCNFwidPXPGGusD++jATG+H2h4o011MoKK5xNnkv3H6p6ihquGAYIVLkCynJEHzVR9fmvNJq35YzS9sVz1DvyzYRUyHxW0A/x6fPJIbl4pj5z3zY0jheMQCo6vQ3QLG9ux2KHrKLfkALdpliSw49LoNQwnoxMeyGloLpJJvUbXIK/Aiioz+foHeStznH3gtc+WfTrC5WJG3CyqDpA9ku9tt5jUWbDIyzX5SUI1SKps8nHflPlPMgDcUm6DC8JwMXRRnDmdHMuYNFe2jDQxw0pTYjOEK+V6vHQEkFCaubbKVW9VSTp577qMLkZX6V781GIxT1DRTV9yPk9Jn/qSfjNz+rPL6XzWvRfojY1+qeACDp7x6lf2EGvSWARzsMsoMo3UibBzUqIHsynKoyyihJKCMmYdmVJanBKEVR1dw61K3ToVIiU9jtE5gcMhE91JUnhO1GtDHhc8F7Yf7yUXtPIN1njLSwOqeer7c7+o/tShLkrHfYymCLcTfMtKvqRqx/u8bHXMSAMxPBWHN22WsLyZ1qJUUTIR/dNHZd1XlPqAnvETy4fn93a0SbV6ZPuGi/bL+/bNqrR4wiICmvUlWENR/kcjGjvMvn0G6noQHpjy05mEkjyf0QPzu7DYcL+G+vh5B8nShMVIuiY2DMvcOGNZq8gw7YRwyh1OEDs355D+Np7eh91j2P86wi/tEcr/Fzzj8YUNj6fDV/JlMi8VvJpyD4wDevb+u44C/BSvSyH1Gimb2uMZfQUQn5AiyJorfd7a97sarhA/BWGZrCz+J6VYaV8UuRsIwPG4rkqcnkV5zSZ5ZXRmxa587A0tgQFM9VfoH3SV5veZEeT2EBd5W6G1K7Ubay4eyL+gp9vvtDeKW/dU8On1OWVpqFBqkZfr3+mty4kDl5gyraHilAcL70G0Sx0Flzbu6XqiSSw54lehusneUA/ADb5b8zjwONq8gelV9Bv4UifrZZirq1dSQGRyTQmi+GCfJcpwnogoODme6kPppN0UuAAGtCjJTSF3bTb2VGwuxHtH6omR3IlW637ROTltuhVl35Mngw6/NtgBM9ILIl/tnZLyiXw716aorLqNcY86jLdAZOHJHh69q5A/o5b8WqZ2sNGbX/GcjcuXaOte6DCZeDRpmX5ZgE1GAnWjx2SwakFtOtM2kckH+Z5ponbfR58UJhy7A+dpdSGxe1z55SL74AdJa+zSer2G+yM5wIKE6dwQAKKbZ85aGCT/ggOBrT/CozOkjcPReBk1Ejz3DqmpxAkZYXKB63ddkRuVCsBCFWibHhD9n+AbgU7d4nRlBcGgPBKoX0sxLemUADJVappO8LIuB4aKk=';
  const _INTEGRITY_HASH = 'a5ac24290dc54ff3343ae4815549a51c83188ccc9b72de020a5233681063be32';
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
