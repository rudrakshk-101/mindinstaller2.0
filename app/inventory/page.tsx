// CombinedComponent.tsx
"use client";
import React from 'react';
import { CardTitle, CardHeader, CardContent, Card, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Inter } from 'next/font/google';
import './styles.css';

const Component: React.FC = () => {
 return (
    <div className="grid md:grid-cols-2 items-start gap-4 bg-black">
      <div className="space-y-4 p-6">
        <Card>
          <CardHeader className="pb-0">
            <CardTitle>Map</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div
              style={{
                height: 400,
              }}
            >
              <iframe
      width="710"
      height="400"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28056.253665154218!2d77.46572490338012!3d28.478591720812144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea08ace17459%3A0x2ea993c1f366ebe3!2sKnowledge%20Park%20III%2C%20Greater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1713980364068!5m2!1sen!2sinhttps://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28056.234448722967!2d77.46572488761649!3d28.478664062369376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shospitals%20near%20me!5e0!3m2!1sen!2sin!4v1713980699186!5m2!1sen!2sin"
    ></iframe>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Search</CardTitle>
            <CardDescription>Search for hospitals by name or location.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                 <Label htmlFor="search">Search</Label>
                 <Input className="mt-1" id="search" placeholder="Search for hospitals" />
                </div>
                <div className="relative">
                 <Label htmlFor="location">Location</Label>
                 <Input className="mt-1" id="location" placeholder="Enter your location" />
                </div>
              </div>
              <Button size="sm">Search</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    <div className=" pt-[1.9vw]">
      <Card  className="h-[100vh]">
        <CardHeader>
          <CardTitle>Hospitals</CardTitle>
          <CardDescription>Showing 10 nearby hospitals with oxygen and blood supply.</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div
            className="overflow-auto"
            style={{
              height: "calc(100vh - 5rem)",
            }}
          >
            <table className="w-full text-left whitespace-nowrap">
              <thead>
                <tr>
                 <th className="px-4 py-3 text-sm font-medium tracking-wider text-gray-500 uppercase dark:text-gray-500">
                    Name
                 </th>
                 <th className="px-4 py-3 text-sm font-medium tracking-wider text-gray-500 uppercase dark:text-gray-500">
                    Location
                 </th>
                 <th className="px-4 py-3 text-sm font-medium tracking-wider text-gray-500 uppercase dark:text-gray-500">
                    Oxygen
                 </th>
                 <th className="px-4 py-3 text-sm font-medium tracking-wider text-gray-500 uppercase dark:text-gray-500">
                    Blood
                 </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                <tr>
                 <td className="p-4">St. Mary's Hospital</td>
                 <td className="p-4">1234 Elm St, Toronto, ON</td>
                 <td className="p-4">4</td>
                 <td className="p-4">2 A+ / 1 O+</td>
                </tr>
                <tr>
                 <td className="p-4">General Hospital</td>
                 <td className="p-4">5678 Oak St, Toronto, ON</td>
                 <td className="p-4">0</td>
                 <td className="p-4">2 B+</td>
                </tr>
                <tr>
                 <td className="p-4">City Hospital</td>
                 <td className="p-4">9101 Pine St, Toronto, ON</td>
                 <td className="p-4">3</td>
                 <td className="p-4">0</td>
                </tr>
                <tr>
                 <td className="p-4">Central Hospital</td>
                 <td className="p-4">1212 Maple St, Toronto, ON</td>
                 <td className="p-4">5</td>
                 <td className="p-4">4 O+</td>
                </tr>
                <tr>
                 <td className="p-4">Community Hospital</td>
                 <td className="p-4">1313 Birch St, Toronto, ON</td>
                 <td className="p-4">0</td>
                 <td className="p-4">0</td>
                </tr>
                <tr>
                 <td className="p-4">Memorial Hospital</td>
                 <td className="p-4">1414 Cedar St, Toronto, ON</td>
                 <td className="p-4">2</td>
                 <td className="p-4">3 AB-</td>
                </tr>
                <tr>
                 <td className="p-4">University Hospital</td>
                 <td className="p-4">1515 Spruce St, Toronto, ON</td>
                 <td className="p-4">0</td>
                 <td className="p-4">1 B+</td>
                </tr>
                <tr>
                 <td className="p-4">Children's Hospital</td>
                 <td className="p-4">1616 Pine St, Toronto, ON</td>
                 <td className="p-4">3</td>
                 <td className="p-4">0</td>
                </tr>
                <tr>
                 <td className="p-4">Veterans Hospital</td>
                 <td className="p-4">1717 Elm St, Toronto, ON</td>
                 <td className="p-4">4</td>
                 <td className="p-4">2 O+</td>
                </tr>
                <tr>
                 <td className="p-4">Methodist Hospital</td>
                 <td className="p-4">1818 Oak St, Toronto, ON</td>
                 <td className="p-4">0</td>
                 <td className="p-4">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      </div>
    </div>
 );
};


export default Component;