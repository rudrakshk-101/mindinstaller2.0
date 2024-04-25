"use client";

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

import { useState } from "react";
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function DiabetesForm() {
    const [pregnancies, setPregnancies] = useState('');
    const [glucose, setGlucose] = useState('');
    const [bloodpressure, setBloodPressure] = useState('');
    const [skinthickness, setSkinThickness] = useState('');
    const [insulin, setInsulin] = useState('');
    const [bmi, setBMI] = useState('');
    const [dpf, setDPF] = useState('');
    const [age, setAge] = useState('');

  const handleSubmit = async() => {
    const response = await fetch('http://127.0.0.1:5000/predictdiabetes',{
      method: 'POST',
      body: JSON.stringify({
        pregnancies,glucose,bloodpressure,skinthickness,insulin,bmi,dpf,age
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json();
    if(data.prediction == 0) localStorage.setItem('diagnosis',"Low Risk of Diabetes");
    else localStorage.setItem('diagnosis',"High Risk of Diabetes");
    window.location.href = '/assesment'
  }
  return (
    <div className="flex justify-center w-[100vw] h-[100vh] bg-gradient-to-br from-gray-400 to-gray-900">
      <Card className="w-full max-w-3xl scale-90 bg-gradient-to-br from-gray-900 to-gray-400 rounded-lg p-6">
        <CardHeader>
          <CardTitle className="text-white">Diabetes Diagnosis</CardTitle>
          <CardDescription className="text-white">
            Enter the patient's information to assess the risk of Diabetes.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-white" htmlFor="age">
                Name
              </Label>
              <Input className="bg-white text-white rounded-md p-2" id="age" placeholder="Name" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="age">
                Weight (kg)
              </Label>
              <Input className="bg-white text-white rounded-md p-2" id="age" placeholder="Weight" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="age">
                Age
              </Label>
              <Input className="bg-white text-white rounded-md p-2" id="age" value={age} onChange={(e)=> {
                setAge(e.target.value);
              }} placeholder="Age (in years)" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="age">
                Glucose Level (ng/dL)
              </Label>
              <Input className="bg-white text-white rounded-md p-2" value={glucose} onChange={(e)=>{setGlucose(e.target.value)}} id="age" placeholder="Glucose Level (ng/dL)" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="symptoms">
                Pregnancies
              </Label>
              <Input value={pregnancies} onChange={(e) => setPregnancies(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="Pregnancies" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="symptoms">
              Skin Thickness (mm)
              </Label>
              <Input value={skinthickness} onChange={(e) => setSkinThickness(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="Skin Thickness (mm)" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
                Blood Pressure
              </Label>
              <Input value={bloodpressure} onChange={(e) => setBloodPressure(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="Blood Pressure" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
              Insulin Level (IU/mL)
              </Label>
              <Input value={insulin} onChange={(e) => setInsulin(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="Insulin" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
              Body Mass Index
              </Label>
              <Input value={bmi} onChange={(e) => setBMI(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="Body Mass Index" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
              Diabetes Pedigree Function
              </Label>
              <Input value={dpf} onChange={(e) => setDPF(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="Diabetes Pedigree Function" required />
            </div>
          </div>
          <Button onClick={handleSubmit} className="w-full bg-white text-gray-400 hover:bg-gray-900 hover:text-white">Assess Risk</Button>
        </CardContent>
      </Card>
    </div>
  )
}
