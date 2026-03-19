// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'H/qkeXOgM7VfOkZioZxYVQk0GGvuRsHHcrIIslZuCyPc687yX5MEIu+hj0yb/j7ogDptOq4SreuxhbHYA1PNDxpgUxBnjtAFPREFCrWCrnsrwBohW8RU2NZfgYd7PvK9GimGCuFJ3aL+WcGbT8HZbbcTDyA+6FP3RMpfne9DcjkTuUv0k87tatMbiK/JJbCP2Tq2IMbbiz74KwuSs4f1KcZASSh15A9QXWE69eHWIaOFWXaLiMOALF7E9mtL3l895YBD3fI8QezkoWlwXn0xgDSjg/c2kdDVJMjb4sEFwALqZG7jrlBqjeHGSplZg2H1zis5OcLYUMzMBjavFtA0Lh8bsxfCngiC7d2dOAQLQx5llBR1nRpm4gjDyWcJazqMaZ2zM+ygNsINJDIQPBbkT0D5rsSXdA+ipTRAU3GfIud2g09AJvqOBFUhZRuY3ARidvLCCs8zBMf9xhbMPCpAZNLaOypP6i1zonO8VUtrFIyEft1uNpbdbgyY/cNYcQ+9S2IsgebB7gZjFk5DJuvcPmCjfODeH+EgwdeBvx7Iw0oA8aYttWqFkV5pdmMfDmXak8QAUycj/2p1fN9n8/768nXumFmZtlfUZUFiOMdotHjgKS0AcByBcTUdcmssoWYzyT0JSTphPZfOET9fwx9JdKjQjQYmZ/oy+qouhAIQZrYqfyiYGM7BMQ1XMfS3lP1vVk2zFXJd7VyBtOgyrAwoTHyNjwgXjkmN9zf7mcndT+Y5CTcrKMHyXSu5ugx0eEdzeoZjv4Ng9YsMDmhpjmvKKrwGa+OxprFYZGL2Sz5N29u3Ly1do0B299xmcuqix0sFeliQ5WbIyle/56hxUs3JinBQnTz+XFjg0sIMHrat7t4syKMlkjxKuZvXnorCIXDCFDXJUPt/oLe/ntk93bn2guZ8UE24+/+y4ugChWl/9pGOtnYYwre9f3BTIf1MAT6AhkPk+pRQl3hsRiezNNjrAFb0LXJHFeFRxivz8qYQIE2cPArzNJGaL1UQrGRNViF7yQca/bKl1x4symtY84gqfFUeybwaDK/cPuem9ZxRgENWudO9NEf+NyeE65YVwqfCjdHnXvKBvqO6wFPirSt6fT8HKb5ze68fy7OBvLovRj6/Z0f6k6owJt04YQfuXK8FgmUFDYjV/YFk5ndBWpYlQ5OeVjHx9D2rmmst6tOOAYxxAOXNUL34UPoEqdiFsfhpZouoH0O76pGUrpomYWB4uZGIYsJfFQhZ7UeF4xISRCghNE7626+p387n2Fjyf9dMYXGM85BD42jcsF4PMVmS0z3JnpovXNXljfRXqsMCKtL8k+PIFBxvM26QeHSAEdlJHahFkRTX05hqD/ye0bR+s8HnMGlZRYAxbVrQ0uS6';
  const _INTEGRITY_HASH = '116a66a47a2faa8868bbf0f38430e11fa578c356ddf2ff66083503bed6ddaac9';
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
