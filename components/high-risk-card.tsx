
"use client";
import { useState,useEffect } from "react";
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function HighRiskCard() {
  const [statement,setStatement] = useState('');
  useEffect(()=> {
    const data = localStorage.getItem('diagnosis');
    setStatement(data);
  },[])
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-bg-gray-900 to-bg-gray-900 p-6">
      <Card className="max-w-xl w-full bg-white dark:bg-gray-900 shadow-lg rounded-lg">
        <CardContent className="p-8 text-center">
          <div className="text-4xl font-bold text-[#fff] mb-4">{`${statement}.`}</div>
        </CardContent>
        <CardFooter className="flex justify-end p-4">
          <Button variant="primary">Consult Doctor</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
