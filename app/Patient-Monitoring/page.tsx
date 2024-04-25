
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { CardDescription } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Patient Monitoring Dashboard</h1>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Ward A</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-2xl font-bold">45</p>
                <p className="text-gray-500">Total Patients</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-500">8</p>
                <p className="text-gray-500">Emergency</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-500">37</p>
                <p className="text-gray-500">Healthy</p>
              </div>
            </div>
            <Button className="w-full" variant="primary">
              View Details
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Ward B</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-2xl font-bold">32</p>
                <p className="text-gray-500">Total Patients</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-500">5</p>
                <p className="text-gray-500">Emergency</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-500">27</p>
                <p className="text-gray-500">Healthy</p>
              </div>
            </div>
            <Button className="w-full" variant="primary">
              View Details
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Ward C</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-2xl font-bold">28</p>
                <p className="text-gray-500">Total Patients</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-500">3</p>
                <p className="text-gray-500">Emergency</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-500">25</p>
                <p className="text-gray-500">Healthy</p>
              </div>
            </div>
            <Button className="w-full" variant="primary">
              View Details
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col w-full min-h-screen">
      
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="flex flex-col gap-4">
          <div className="grid w-full gap-2 md:grid-cols-2 lg:grid-cols-4">
            <Card className="flex flex-col items-start p-4 md:p-6">
              <div className="flex flex-row items-center gap-4">
                <BedIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                <div className="grid gap-0.5">
                  <CardTitle className="text-base font-bold">Bed 101</CardTitle>
                  <CardDescription className="text-sm">Patient: John Doe</CardDescription>
                </div>
                <AlertTriangleIcon className="ml-auto w-4 h-4 text-red-500 dark:text-red-400" />
              </div>
            </Card>
            <Card className="flex flex-col items-start p-4 md:p-6">
              <div className="flex flex-row items-center gap-4">
                <BedIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                <div className="grid gap-0.5">
                  <CardTitle className="text-base font-bold">Bed 102</CardTitle>
                  <CardDescription className="text-sm">Patient: Alice Johnson</CardDescription>
                </div>
                <CheckCircleIcon className="ml-auto w-4 h-4 text-green-500 dark:text-green-400" />
              </div>
            </Card>
            <Card className="flex flex-col items-start p-4 md:p-6">
              <div className="flex flex-row items-center gap-4">
                <BedIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                <div className="grid gap-0.5">
                  <CardTitle className="text-base font-bold">Bed 103</CardTitle>
                  <CardDescription className="text-sm">Patient: Emily Smith</CardDescription>
                </div>
                <CheckCircleIcon className="ml-auto w-4 h-4 text-green-500 dark:text-green-400" />
              </div>
            </Card>
            <Card className="flex flex-col items-start p-4 md:p-6">
              <div className="flex flex-row items-center gap-4">
                <BedIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                <div className="grid gap-0.5">
                  <CardTitle className="text-base font-bold">Bed 104</CardTitle>
                  <CardDescription className="text-sm">Patient: David Brown</CardDescription>
                </div>
                <AlertTriangleIcon className="ml-auto w-4 h-4 text-red-500 dark:text-red-400" />
              </div>
            </Card>
          </div>
          
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid w-full gap-2 md:grid-cols-2 lg:grid-cols-4">
            <Card className="flex flex-col items-start p-4 md:p-6">
              <div className="flex flex-row items-center gap-4">
                <BedIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                <div className="grid gap-0.5">
                  <CardTitle className="text-base font-bold">Bed 105</CardTitle>
                  <CardDescription className="text-sm">Patient: John Doe</CardDescription>
                </div>
                <AlertTriangleIcon className="ml-auto w-4 h-4 text-red-500 dark:text-red-400" />
              </div>
            </Card>
            <Card className="flex flex-col items-start p-4 md:p-6">
              <div className="flex flex-row items-center gap-4">
                <BedIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                <div className="grid gap-0.5">
                  <CardTitle className="text-base font-bold">Bed 106</CardTitle>
                  <CardDescription className="text-sm">Patient: Alice Johnson</CardDescription>
                </div>
                <CheckCircleIcon className="ml-auto w-4 h-4 text-green-500 dark:text-green-400" />
              </div>
            </Card>
            <Card className="flex flex-col items-start p-4 md:p-6">
              <div className="flex flex-row items-center gap-4">
                <BedIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                <div className="grid gap-0.5">
                  <CardTitle className="text-base font-bold">Bed 107</CardTitle>
                  <CardDescription className="text-sm">Patient: Emily Smith</CardDescription>
                </div>
                <CheckCircleIcon className="ml-auto w-4 h-4 text-green-500 dark:text-green-400" />
              </div>
            </Card>
            <Card className="flex flex-col items-start p-4 md:p-6">
              <div className="flex flex-row items-center gap-4">
                <BedIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                <div className="grid gap-0.5">
                  <CardTitle className="text-base font-bold">Bed 108</CardTitle>
                  <CardDescription className="text-sm">Patient: David Brown</CardDescription>
                </div>
                <AlertTriangleIcon className="ml-auto w-4 h-4 text-red-500 dark:text-red-400" />
              </div>
            </Card>
          </div>
          
        </div>
      </main>
    </div>
    </div>
  )
  function AlertTriangleIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </svg>
    )
  }
  
  
  function BedIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 4v16" />
        <path d="M2 8h18a2 2 0 0 1 2 2v10" />
        <path d="M2 17h20" />
        <path d="M6 8v9" />
      </svg>
    )
  }
  
  
  function CheckCircleIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    )
  }
  
  
  function Package2Icon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
        <path d="M12 3v6" />
      </svg>
    )
  }
  
  
  function SearchIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }
}