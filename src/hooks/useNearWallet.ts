import { useState, useEffect, useCallback } from 'react';
import { setupWalletSelector } from '@near-wallet-selector/core';
import { setupModal } from '@near-wallet-selector/modal-ui';
import { setupMyNearWallet } from '@near-wallet-selector/my-near-wallet';
import { setupMeteorWallet } from '@near-wallet-selector/meteor-wallet';
import { setupHereWallet } from '@near-wallet-selector/here-wallet';
import { NEAR_CONFIG } from '../config/near';
import type { WalletSelector, AccountState } from '@near-wallet-selector/core';

export function useNearWallet() {
  const [selector, setSelector] = useState<WalletSelector | null>(null);
  const [modal, setModal] = useState<any>(null);
  const [accounts, setAccounts] = useState<Array<AccountState>>([]);

  useEffect(() => {
    setupWalletSelector({
      network: NEAR_CONFIG.networkId,
      modules: [
        setupMyNearWallet(),
        setupMeteorWallet(),
        setupHereWallet()
      ],
    }).then((selector) => {
      setSelector(selector);
      const modal = setupModal(selector, { contractId: NEAR_CONFIG.contractName });
      setModal(modal);
      
      // Get accounts
      selector.store.observable.subscribe((state) => {
        setAccounts(state.accounts);
      });
    });
  }, []);

  const signIn = useCallback(() => {
    modal?.show();
  }, [modal]);

  const signOut = useCallback(async () => {
    if (!selector) return;
    const wallet = await selector.wallet();
    await wallet.signOut();
  }, [selector]);

  const getBalance = useCallback(async () => {
    if (!selector || !accounts[0]) return null;
    const wallet = await selector.wallet();
    const account = await wallet.getAccount(accounts[0].accountId);
    return account.amount;
  }, [selector, accounts]);

  return {
    selector,
    modal,
    accounts,
    signIn,
    signOut,
    getBalance,
    isSignedIn: accounts.length > 0
  };
}