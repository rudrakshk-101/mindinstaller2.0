"use client";
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-12 text-gray-900 dark:text-gray-100">Pathology ML Models</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        <Link
          className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 w-48 h-48"
          href="#"
        >
          <img
            onClick={()=>{
                window.location.href="/diagnosis/kidney";
              }}
            alt="Kidney"
            className="mb-4"
            height={48}
            src="/placeholder.svg"
            style={{
              aspectRatio: "48/48",
              objectFit: "cover",
            }}
            width={48}
          />
          <span className="text-lg font-medium text-gray-900 dark:text-gray-100">Kidney</span>
        </Link>
        <Link
          className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 w-48 h-48"
          href="#"
        >
          <img
          onClick={()=>{
            window.location.href="/diagnosis/liver";
          }}
            alt="Liver"
            className="mb-4"
            height={48}
            src="/placeholder.svg"
            style={{
              aspectRatio: "48/48",
              objectFit: "cover",
            }}
            width={48}
          />
          <span className="text-lg font-medium text-gray-900 dark:text-gray-100">Liver</span>
        </Link>
        <Link
          className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 w-48 h-48"
          href="#"
        >
          <img
          onClick={()=>{
            window.location.href="/diagnosis/cancer";
          }}
            alt="Cancer"
            className="mb-4"
            height={48}
            src="/placeholder.svg"
            style={{
              aspectRatio: "48/48",
              objectFit: "cover",
            }}
            width={48}
          />
          <span className="text-lg font-medium text-gray-900 dark:text-gray-100">Cancer</span>
        </Link>
        <Link
          className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 w-48 h-48"
          href="#"
        >
          <img
          onClick={()=>{
            window.location.href="/diagnosis/malaria";
          }}
            alt="Malaria"
            className="mb-4"
            height={48}
            src="/placeholder.svg"
            style={{
              aspectRatio: "48/48",
              objectFit: "cover",
            }}
            width={48}
          />
          <span className="text-lg font-medium text-gray-900 dark:text-gray-100">Malaria</span>
        </Link>
        <Link
          className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 w-48 h-48"
          href="#"
        >
          <img
          onClick={()=>{
            window.location.href="/diagnosis/heart";
          }}
            alt="Heart"
            className="mb-4"
            height={48}
            src="/placeholder.svg"
            style={{
              aspectRatio: "48/48",
              objectFit: "cover",
            }}
            width={48}
          />
          <span className="text-lg font-medium text-gray-900 dark:text-gray-100">Heart</span>
        </Link>
        <Link
          className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 w-48 h-48"
          href="#"
        >
          <img
          onClick={()=>{
            window.location.href="/diagnosis/diabetes";
          }}
            alt="Diabetes"
            className="mb-4"
            height={48}
            src="/placeholder.svg"
            style={{
              aspectRatio: "48/48",
              objectFit: "cover",
            }}
            width={48}
          />
          <span className="text-lg font-medium text-gray-900 dark:text-gray-100">Diabetes</span>
        </Link>
      </div>
    </div>
  )
}