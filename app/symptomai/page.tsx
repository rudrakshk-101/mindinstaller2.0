import React from 'react';

export default function Component() {
 return (
  
    <div className="w-full py-6 space-y-6 md:py-12 w-[100vw] h-[100vh]  bg-black">
      <div className="border-white border-2 w-[20vw] h-[60vh] ml-[75vw] absolute">

      </div>
      <div>
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_600px] lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2 ">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-serif text-white">Symptom To Disease AI ChatBot</h1>
              <div className="pt-[24px] pb-6"> 
              <p className="max-w-[600px] text-green-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-green-700 font-serif">
                Enter your symptoms below to get a preliminary idea of possible conditions. This chatbot is for general
                purposes only. Always consult a healthcare professional for a proper diagnosis.
              </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_600px] lg:gap-12">
          <div className="grid gap-4">
            <div className="flex items-center space-x-4">
            <img
                alt="Avatar"
                className="rounded-full"
                height="40"
                src="/placeholder.svg"
                style={{
                 aspectRatio: "40/40",
                 objectFit: "cover",
                }}
                width="40"
              />
              <div className="bg-gray-100 rounded-xl flex-1 p-4 text-sm dark:bg-white text-black font-serif">
                Hi there! I'm the Symptom To Disease AI ChatBot. I'm here to help you understand your symptoms. Please
                enter your symptoms below, and I'll provide you with some potential conditions. Remember, this is just a
                preliminary assessment. For a proper diagnosis, make sure to consult a healthcare professional.
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      </div>
      </div>
      
    </div>
 )
}
