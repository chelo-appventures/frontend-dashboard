"use client";
import { useEffect } from "react";
import AVQRCode from "@/components/qrcode";

export default function qrcode() {
  const [result, setResult] = useState([]);
  useEffect(() => {
    const form0 = JSON.parse(localStorage.getItem("form0"));
    const form1 = JSON.parse(localStorage.getItem("form1"));

    if (form0 && form1) {
      setResult({ form0, form1 });
    }
  }, []);
  return (
    <>
      <AVQRCode text="hola mundo" />
      <div className="">{JSON.stringify(result, null, 2)}</div>
    </>
  );
}
