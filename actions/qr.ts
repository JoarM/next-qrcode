"use server"

import QRCode from "qrcode"

export async function generateQrCode(_: any, formData: FormData) {
  const url = formData.get("url")?.toString();
  if (!url) {
    return {
      error: "No url provided",
    }
  }

  const qr = await QRCode.toDataURL(url, { margin: 2 });
  return {
    qrcode: qr
  }
}