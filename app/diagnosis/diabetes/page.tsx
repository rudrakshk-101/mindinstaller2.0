"use client";
import { DiabetesForm } from "@/components/diabetes-form";

export default function Page()
{
    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
            <DiabetesForm />
            <button
        className="absolute z-100 top-4 right-4 bg-[#0f3460] hover:bg-[#0f3460] text-white font-bold py-2 px-4 rounded w-24 h-10"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        Home
      </button>
        </div>
        
    )
}