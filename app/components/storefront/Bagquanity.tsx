"use client";

import InputNumber from "rc-input-number";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useFormStatus } from "react-dom";
interface prorps {
  quantity: number;
  prodid: string;
}

export default function QuantityInput({ quantity, prodid }: prorps) {
  const router = useRouter();
  const [loading,setloading] = useState(false)
  const [val, setval] = useState(quantity);
  async function updatequantity(quantity: number, prodid: string) {
    setloading(true)
    const res = await fetch("/api/updatequantity", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity, prodid }),
    });
    setloading(false)
    if (res.ok) {
      router.refresh();
    }
  }
  const debounced = useDebouncedCallback((value) => {
    updatequantity(parseInt(value), prodid);
    setval(value);
  }, 500);

  return (
    <>
      {loading ? (
        <p>wait...</p>
      ) : (
        <input
          type="number"
          min={1}
          max={10}
          defaultValue={val}
          onChange={(e) => debounced(e.target.value)}
          className="w-6 focus:outline-none  "
        />
      )}
    </>
  );
}
