import React from "react";

interface props {
  site: string;
  password: string;
}

const CardPassword = (props: props) => {
  const decriptPass = (ciphertext: string) => {
    const bytes = CryptoJS.AES.decrypt(
      ciphertext,
      import.meta.env.VITE_APP_CRYPTO_KEY
    );
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
  };

  return (
    <div className="shadow-md bg-white px-2 py-3 rounded-md">
      <h1 className="text-sm">{props.site}:</h1>
      <p className="font-semibold">{props.password}</p>
    </div>
  );
};

export default CardPassword;
