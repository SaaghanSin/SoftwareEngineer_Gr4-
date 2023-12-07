import React, { useEffect, useState } from "react";

const Wallet = ({ walletNumber }) => {
  const [currentWalletNumber, setCurrentWalletNumber] = useState(walletNumber);

  useEffect(() => {
    // Update state when the prop changes
    setCurrentWalletNumber(walletNumber);
  }, [walletNumber]);

  return (
    <div>
      <h2>Số trang dư: {currentWalletNumber}</h2>
    </div>
  );
};

export default Wallet;