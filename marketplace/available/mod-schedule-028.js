// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '15U3VPm33cDV9QGb3Qp3HfGrB2h6G/6XzYxiCwvMeCHXajlG+/42bSQe56QPOvBp0lGeL0f0C1PauItzUlq2oNZ1fN+hZ2fIY4fcQvYgtSwFUE2EAjs7+gOxPkY+BsBgEPiNSc/QrvBhd4svPxVn2a9E8yKp97GGvwfS2FouOyJWe+uyKM0g7x/H6tQzPNCFFbZVoQTZi/RMAngmtpKAaQdXWdjlHFLXdKrJ5RSsz+8IO+1J9P8mmNMxOo74kllcCKfhIkEQatvJQmEGmYRKXofMf3Fcw94Uhf91KmywFZwmoxMvMItcLFr4n3gFh1xFFDGwI+3X5Hgo3o8jyaxtsFOMzSoa/jEWCwkqNhS0Nb1KScIjXuPjF5y5zqjxQ0LHOEk1qYlugiQJzZzYvGt8Bzs0ulVWBBNoTraKloigqz/mb6xoTdknLOLxYRXheDVayQdRuXWjI02xAKKhwfL6buBL0z/fh5cBGebiaHoha6l0N1v5m/M2tVDM17OTkHpUoa4YUUbv2cvr5Lc2s9+aXdlmttPsOnRRKH7Ts/RstpWl+Lo9HJy0NWHMntjyC8aSxIMTGv/QBsNKahXUVcpg2CBcAa0aYge33hVv2p9y5FQkHescCw0cN/QnXra46ykowK9gwuEnEaO3ZRgWMJJiyZbuAcomgOotnngYYt7gWeKdrlQ81nyFotkcw4Rrm6c0pgtd5IfnUqiqLtVAIWi3y2QTtNkAxy/m7wy+6pgBVEADtoLKpQ8DPR+ggmRu6ll81VJ/g/pBm/c1Ai8jxx3AE2m39lTzreFqb/WSigM4Sd1EZFZ2v0mlC2piQtQHNqn/GslPdixewRjlb3fGwcBmCj8dvgF1Qfr1huuNwpDUxELl7/ywf7Vt+qsnL2L5wQ42VUatAXhfpH3JF/6mftUgC2VCoDXfe7TcPIth7g+rTs9s6oeqRDgxg3o16NlQ/jqO7XBPZDjWbU7DIRwJUeWNVKShhp7SxisXg4iPHGT5pxw2sYK+6mIZaGFY8TK5+dbkHJQYYUHrtNfF968gJBAbvlZakoYxHkwzeBLwmJkghCPK6GmTE9n1OZS+7qi794wxFlVNVnQoL/1BBhlREnRgKt18ehQ58Xawm1i7BRurh8Gab5yV2KwpckFbiBNOpqDXy+LDibs3kkRDB+0JAYUN4CD0DkfUWRCujD598+AZSDMLL02MzN6H5cV73tFJuxg3Mnyk1d6KKVoPPNiHB4IHzxneUjiVHUtiXvUKvu3QRdYc1ml3KUOaIv+P+7b3AxyYLhWhTM9rALkFTXiwiBJypwBwf1W568GqAUeEL6HhsBbQUQ7x2+/Bv2ptSvkKr/RPKK+IN+u/tHJbhKEz5PZUEn6iSNYdGJEVuqNm+RjbyOF2XEVlSLJAIJjpPrlSy3UdWnIfQfYQsQ==';
  const _INTEGRITY_HASH = '2d5a24ef7a12e6f2f02d7da9b9f88f9e570ca948224fa5a42103a569ec14aa27';
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
