"use client"

import { generateQrCode } from "@/actions/qr";
import { useFormState } from "react-dom";

export default function Home() {
  const [response, qrAction] = useFormState(generateQrCode, null)

  return (
    <main className="min-h-dvh grid place-items-center p-6">
      <div>
        <h1 className="text-3xl font-bold">QR code generator</h1>
        <form action={qrAction} className="max-w-xl">
          <input type="text" name="url" className="block w-full mt-2" />
          <button className="mt-4 block">Submit</button>
          {response?.error && <span className="text-rose-500 text-sm font-medium mt-2">{response.error}</span>}
        </form>
        {response?.qrcode && (
          <img src={response.qrcode} alt="" className="aspect-square max-w-80 w-full mx-auto rounded-3xl mt-4" />
        )}
      </div>
    </main>
  );
}
