"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { formatPrice } from "@/lib/utils";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const translations = {
  en: {
    cart: "Shopping Cart",
    empty: "Your cart is empty",
    startShopping: "Start Shopping",
    subtotal: "Subtotal",
    checkout: "Proceed to Checkout",
    remove: "Remove",
    continueShopping: "Continue Shopping",
    paymentSuccess: "Payment successful! Thank you for your purchase.",
  },
  de: {
    cart: "Warenkorb",
    empty: "Ihr Warenkorb ist leer",
    startShopping: "Jetzt einkaufen",
    subtotal: "Zwischensumme",
    checkout: "Zur Kasse",
    remove: "Entfernen",
    continueShopping: "Weiter einkaufen",
    paymentSuccess: "Zahlung erfolgreich! Vielen Dank für Ihren Einkauf.",
  },
};

export default function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    total,
    isCartOpen,
    setCartOpen,
    clearCart,
  } = useCart();
  const { language } = useLanguage();
  const t = translations[language];
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setCartOpen(false);
      setIsClosing(false);
    }, 300); // Match animation duration
  };

  useEffect(() => {
    if (isCartOpen) {
      // Get scrollbar width before hiding it
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (window.innerWidth > 1024) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      } else {
        document.body.style.paddingRight = `0px`;
      }
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 ${
          isClosing
            ? "animate-[slide-right_0.3s_ease-out]"
            : "animate-[slide-left_0.3s_ease-out]"
        }`}
        onClick={handleClose}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col ${
          isClosing
            ? "animate-[slide-right_0.3s_ease-out]"
            : "animate-[slide-left_0.3s_ease-out]"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 text-primary" />
            {t.cart}
          </h2>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
              <p className="text-gray-500 mb-4">{t.empty}</p>
              <button
                onClick={() => setCartOpen(false)}
                className="btn btn-primary"
              >
                {t.startShopping}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="relative w-20 h-20 shrink-0 rounded-md overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">
                      {item.title}
                    </h4>
                    <p className="text-primary font-bold mt-1">
                      {formatPrice(item.price)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-7 h-7 flex items-center justify-center bg-white border rounded hover:bg-gray-100 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-7 h-7 flex items-center justify-center bg-white border rounded hover:bg-gray-100 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto p-1 text-red-500 hover:bg-red-50 rounded transition-colors"
                        title={t.remove}
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with Total and Checkout */}
        {items.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>{t.subtotal}</span>
              <span className="text-primary">{formatPrice(total)}</span>
            </div>

            <PayPalScriptProvider
              options={{
                clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "test",
                currency: "EUR",
              }}
            >
              <PayPalButtons
                style={{
                  layout: "vertical",
                  color: "blue",
                  shape: "rect",
                  label: "paypal",
                }}
                createOrder={(_data, actions) => {
                  return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                      {
                        amount: {
                          currency_code: "EUR",
                          value: total.toFixed(2),
                        },
                        description: "Fishing Course Purchase",
                      },
                    ],
                  });
                }}
                onApprove={async (_data, actions) => {
                  if (actions.order) {
                    await actions.order.capture();
                    alert(t.paymentSuccess);
                    clearCart();
                    setCartOpen(false);
                  }
                }}
                onError={(err) => {
                  console.error("PayPal Error:", err);
                }}
              />
            </PayPalScriptProvider>

            <button
              onClick={() => setCartOpen(false)}
              className="w-full text-center text-primary hover:underline"
            >
              {t.continueShopping}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
