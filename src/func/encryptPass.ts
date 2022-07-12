import CryptoJs from "crypto-js";

const ChipperPass = (pass: string) => {
  const encrypt = CryptoJs.AES.encrypt(
    pass,
    import.meta.env.VITE_APP_CRYPTO_KEY
  ).toString();

  return encrypt;
};

export { ChipperPass };
