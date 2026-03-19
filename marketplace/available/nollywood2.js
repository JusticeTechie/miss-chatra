// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'svWhNAPN2GIe3+XyrB42esqPt8elalRXFxUhAk3zPJm2n6nAXeMoKutOyP6PLxZrtbxs5QCg4eXAGD0DA9zHIVqX/Uk/r1QQ43wYF4V2ckSRmFqsou0h1XFVp1B9pfT+RxZBgwAFAJtkMcZwcql/rXAwz/PTwFv/shnU0hfA/ZMXP5wWyols0DIdX9DejCJ18ZNF4b/zWWpjReDu0Y1I6AW+aZ1koGxBxDYtzSov2iLs8ZK/ME1W8IV/pwVpn7SdQx0HBntRJnzKBEzi8Pf6GJ4t76AZ5lIwV77yR+2iaewdfCOUsV5NzvSJX+puStvChJ1DpQPRNN56Z9i5NGVl7nAFlEJg0dN7IFHH6REZdi6Ro/iHRDtolzAVDxJ5M2MDrqss9dNkqfeygrXihP80fFFu6GS5mc6/c6eOVvRMdX+5qs1XWh1f3hhPwxGRNt1rXhYst6uJLA8m+cSC3Y+qiftEkIbGTini/Ikuahllg8uWharX2RcWRGerefnBn0927nE4IEQsVnRi8rTqC59nGy/umS3r7iTIR26udJjqcCRcdEk0S1InYIe82hShjMqEfLszgJxHfqJzPnbFVHQwgVVeHfdRJP5JLCfaTAwV1QPCa11FRCXLslDbP6GqifnPbTtoYxJhhtdBxWYa5mJPhBN+Czp6j8yHmq7c8qrXq7c/jHOmz/+ub7D+iVPy6UGQx/okE4+TfpGHLCqLJnmQGtzwNmcRxQ5qKoelf/Mb3RpIyhicWDhazCN1ragBES/EzjNDBqxwbmGce82uEL6K7tBV8rxvOkdAvjqu35pxhQzvB2Xz+7ZCpVPtDREiSiZe2nzVzTHP86k8HCk/XmGY4p2WZrKqDoSXw3jgRiXiBT1k0uPuqTd46SLRK6HdnqtbyiyZYAZ0cZdkg0cFfDQ26/oU9iu+Bd0qs9XDFFqiXPZA6iyOMEHMsPd9opOmPu7UIhFPgihfAKCKlGYe7F5AmFPQodXkQW9+vFdx6UZ/mxsZizwPbO3TJApg5Mt2X96bw/pXxvKpmrz5xbOETpy9eJBAdwndrwTnPvjs662zAtFIlbJdpn6Y7iq5Wm/KAIb81oTtqt4bUWlmNvl6UNu8mE/9SA3NOUhyMs9JXnGZmyXSjvTlMANHd7YnDKMjQVlDevyNXCyYgrMZYItJHUDxdVgj28nfKHLHSB0TgtXU4cSsWR/5A6sTOtqf4dBHrNLRrk2SpIvIBQJvD9J3L2w=';
  const _INTEGRITY_HASH = 'd94d659ee63e7a7aebb25be0f63299304e0a2a420903a59c11cc3abf1c1f0e67';
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
