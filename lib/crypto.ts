/**
 * Wallets that take direct crypto payments for the datasets. These are the
 * owner's Binance deposit addresses, read from the QR codes in the app and
 * checksum-verified: a wrong character here means a buyer's money is lost, so
 * change them only by copying from the wallet app, never by hand.
 */
export interface CryptoWallet {
  id: string;
  coin: string;
  network: string;
  address: string;
  /** Pay the USD price as exactly this many coins (stablecoins only). */
  stablecoin: boolean;
  /** Block explorer pages for checking an incoming payment. */
  explorer: { address: (a: string) => string; tx: (hash: string) => string };
}

export const CRYPTO_WALLETS: readonly CryptoWallet[] = [
  {
    id: "usdt-trc20",
    coin: "USDT",
    network: "Tron (TRC20)",
    address: "TMeYwPudrWnnFLSUXee5fUaEYSzmfoeVnj",
    stablecoin: true,
    explorer: {
      address: (a) => `https://tronscan.org/#/address/${a}`,
      tx: (h) => `https://tronscan.org/#/transaction/${h}`,
    },
  },
  {
    id: "btc",
    coin: "BTC",
    network: "Bitcoin",
    address: "1311xHrbcj6vBC8pLNyhUKoD1BM6BZh491",
    stablecoin: false,
    explorer: {
      address: (a) => `https://www.blockchain.com/explorer/addresses/btc/${a}`,
      tx: (h) => `https://www.blockchain.com/explorer/transactions/btc/${h}`,
    },
  },
  {
    id: "eth-erc20",
    coin: "ETH",
    network: "Ethereum (ERC20)",
    address: "0x0fe7bfcb8096f44f95c161297db7dcc2ee2c0d53",
    stablecoin: false,
    explorer: {
      address: (a) => `https://etherscan.io/address/${a}`,
      tx: (h) => `https://etherscan.io/tx/${h}`,
    },
  },
  {
    id: "eth-bep20",
    coin: "ETH",
    network: "BNB Smart Chain (BEP20)",
    address: "0x0fe7bfcb8096f44f95c161297db7dcc2ee2c0d53",
    stablecoin: false,
    explorer: {
      address: (a) => `https://bscscan.com/address/${a}`,
      tx: (h) => `https://bscscan.com/tx/${h}`,
    },
  },
  {
    id: "sol",
    coin: "SOL",
    network: "Solana",
    address: "6kx9JqaVbsGND9MCcrepig3TQdzYoiVwXn39EgPZsGsL",
    stablecoin: false,
    explorer: {
      address: (a) => `https://solscan.io/account/${a}`,
      tx: (h) => `https://solscan.io/tx/${h}`,
    },
  },
];

export function getWallet(id: string): CryptoWallet | undefined {
  return CRYPTO_WALLETS.find((w) => w.id === id);
}

/** "300 USDT" for a stablecoin, "the equivalent of $300 in BTC" otherwise. */
export function amountLabel(wallet: Pick<CryptoWallet, "coin" | "stablecoin">, priceUsd: number): string {
  return wallet.stablecoin
    ? `${priceUsd.toLocaleString("en-US")} ${wallet.coin}`
    : `the equivalent of $${priceUsd.toLocaleString("en-US")} in ${wallet.coin}`;
}

/** Proof of payment: an image or a PDF, small enough for the email it travels in. */
export const PROOF_MAX_BYTES = 4 * 1024 * 1024;
export const PROOF_TYPES = ["image/png", "image/jpeg", "image/webp", "image/heic", "image/heif", "application/pdf"];
