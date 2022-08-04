import CryptoJs from "crypto-js";

const ChipperPass = (pass: string) => {
  const encrypt = CryptoJs.AES.encrypt(
    pass,
    import.meta.env.VITE_APP_CRYPTO_KEY
  ).toString();

  return encrypt;
};

const DecriptPass = (ciphertext: string) => {
  const bytes = CryptoJs.AES.decrypt(
    ciphertext,
    import.meta.env.VITE_APP_CRYPTO_KEY
  );
  const originalText = bytes.toString(CryptoJs.enc.Utf8);

  return originalText;
};

export { ChipperPass, DecriptPass };
