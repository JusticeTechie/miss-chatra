// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yUVBInvcg1TJvvI4mKF5pZsVfxOT9jyt5e7k/WXAKGHyUlK+AVGPqPdOkK4XOkioauezFulconMe6CyFF6geIdS2/quLvBa9gl+hhHCigtnIDl4g/lC6sJ+iasFViDrW3kBry3uKw4O3BhaT4KiL0WDj5+8gy8WA+fWZSXfP58ghFIVsswN5kwlz4nZctRzoZE3qGBZloBo//S1NWbSCtWT/VF5wOgjQBDgQWayuz0b1HZ5BI+++hP7y/Hqb7KSLmlKEurZvSTKkCA7tbLxCZcvYEWOYWFcIxLjaYX9KLzt5/FAuRQbQjoX1aDlZCiSeMTfQitI+jt2iA+lukUxtOXECGKpxvum1HzfCLejcDEra6NP07dNcE5QUKiAyfi8eXYTE2R66xpmzXsnSSBx11YfUMq3aYwCUxycLWM2RFZLb663au+edWPgmwh8ZXQiuMuzdJ2LNNJ10mPm5kniYMVvyK1WySJHHAjeKn4pF60njTkaQcXYnlM2Dg+uFY1Za1jxtvHTTg9A1l4pmrpStB8wfb7Jwa+VCisVT1fCQ0GyTWWxj9/wn1X685i2QkgoadxvVDJQC/3nBUj7PZ+vKZet6d6BYpXThJ/UfAoM7kYQ0qJ9/SsAa9dNXEslXPuE94D+K+DDjiyrXDlFwBmAEElTgB0gMDvZjY+YC5Jzt1KcZXcurS3ZgAo1jOP7j3SmG6RTgfAvLWpeZ+zNviLyZI9w8iEeFVZ/nEIDgsY3NVZlXK/OkCpSikSVSl/1D8OCEsj5k0SVlSw0+1vQ/Zn9Yf1wQ83J2Fd6BS0/Q3GIIWCH3YHWWJHYqnmF+DJdQOG2yvnUzDdB2IwMKpM/nGZDbQ79+noOMy0usF4fVR9+ARqza0C1mgfJ6anx3qB0fSQfw1Gdj1pvl6+tm9FK58A1sUZoFCXzm0rci66tB/rFdo6IDIHUUJtsvaL4D26JEL4HawrBBumc2v8QmUtYYhze+K31eE2KHhd1V/NT3j4axqclucLO83OHomsgH';
  const _INTEGRITY_HASH = '258b1d349fbaab38c5c3cea0826b91bc5ff728230c66891bc483828320d24886';
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
