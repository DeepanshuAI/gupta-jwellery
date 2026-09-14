'use client';

import { useState, useEffect, useCallback } from 'react';

const WISHLIST_KEY = 'gupta-jwellery-wishlist';

export function useWishlist() {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(WISHLIST_KEY);
      if (stored) {
        setItems(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, []);

  const save = useCallback((newItems: string[]) => {
    setItems(newItems);
    try {
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(newItems));
    } catch {
      // ignore
    }
  }, []);

  const toggle = useCallback(
    (productId: string) => {
      const newItems = items.includes(productId)
        ? items.filter((id) => id !== productId)
        : [...items, productId];
      save(newItems);
    },
    [items, save]
  );

  const isInWishlist = useCallback(
    (productId: string) => items.includes(productId),
    [items]
  );

  const remove = useCallback(
    (productId: string) => {
      save(items.filter((id) => id !== productId));
    },
    [items, save]
  );

  const clear = useCallback(() => {
    save([]);
  }, [save]);

  return { items, toggle, isInWishlist, remove, clear, count: items.length };
}
