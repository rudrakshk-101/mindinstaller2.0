"use client";

export default function Page()
{
    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
            <LiverForm />
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

import { useState } from "react";
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function LiverForm() {
    const [totalBilirubin, setTotalBilirubin] = useState("");
    const [directBilirubin, setDirectBilirubin] = useState("");
    const [alkalinePhosphotase, setAlkalinePhosphotase] = useState("");
    const [alamineAminotransferase, setAlamineAminotransferase] = useState("");
    const [totalProtiens, setTotalProtiens] = useState("");
    const [albumin, setAlbumin] = useState("");
    const [albuminAndGlobulinRatio, setAlbuminAndGlobulinRatio] = useState("");
  

  const handleSubmit = async() => {
    const response = await fetch('http://127.0.0.1:5000/predictliver',{
      method: 'POST',
      body: JSON.stringify({
        "Total Bilirubin": totalBilirubin,
        "Direct_Bilirubin": directBilirubin,
        "Alkaline_Phosphotase": alkalinePhosphotase,
        "Alamine_Aminotransferase": alamineAminotransferase,
        "Total_Protiens": totalProtiens,
        "Albumin": albumin,
        "Albumin_and_Globulin_Ratio": albuminAndGlobulinRatio
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json();
    localStorage.setItem('diagnosis',data.prediction);
  }
  return (
    <div className="flex justify-center w-[100vw] h-[100vh] bg-gradient-to-br from-gray-400 to-gray-900">
      <Card className="w-full max-w-3xl scale-90 bg-gradient-to-br from-gray-900 to-gray-400 rounded-lg p-6">
        <CardHeader>
          <CardTitle className="text-white">Liver Diagnosis</CardTitle>
          <CardDescription className="text-white">
            Enter the patient's information to assess the risk of Liver Disease.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-white" htmlFor="name">
                Name
              </Label>
              <Input className="bg-white text-white rounded-md p-2" id="name" placeholder="Name" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="name">
                Age
              </Label>
              <Input className="bg-white text-white rounded-md p-2" id="name" placeholder="Age" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="name">
                Weight
              </Label>
              <Input className="bg-white text-white rounded-md p-2" id="name" placeholder="Weight" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="name">
                Total Bilirubin
              </Label>
              <Input value={totalBilirubin} onChange={(e)=> {
                setTotalBilirubin(e.target.value);
              }} className="bg-white text-white rounded-md p-2" id="name" placeholder="Total Bilirubin" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="age">
                Direct Bilirubin
              </Label>
              <Input value={directBilirubin} onChange={(e) => {
                setDirectBilirubin(e.target.value);
              }} className="bg-white text-white rounded-md p-2" id="age" placeholder="Direct Bilirubin" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="gender">
                Alkaline Phosphotase
              </Label>
              <Input value={alkalinePhosphotase} onChange={(e)=>{
                setAlkalinePhosphotase(e.target.value);
              }} className="bg-white text-white rounded-md p-2" id="gender" placeholder="Alkaline Phosphotase" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="symptoms">
                Alamine Aminotransferase
              </Label>
              <Input value={alamineAminotransferase} onChange={(e) => setAlamineAminotransferase(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="BAlamine Aminotransferase" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
                Total Protiens
              </Label>
              <Input value={totalProtiens} onChange={(e) => setTotalProtiens(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="Total Protiens" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
                Albumin
              </Label>
              <Input value={albumin} onChange={(e) => setAlbumin(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="Albumin" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
                Albumin and Globulin Ratio
              </Label>
              <Input value={albuminAndGlobulinRatio} onChange={(e) => setAlbuminAndGlobulinRatio(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="Albumin and Globulin Ratio" required />
            </div>            
          </div>
          <Button onClick={handleSubmit} className="w-full bg-white text-gray-400 hover:bg-gray-900 hover:text-white">Assess Risk</Button>
        </CardContent>
      </Card>
    </div>
  )
}
