import { ResponsiveLine } from "@nivo/line"

export function PulseSensor() {
  return (
    <div className="px-4 py-6 md:px-6 w-[100vw] h-[100vh] scale-90">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Live Pulse</h1>
          <p className="text-gray-500 dark:text-gray-400">Your live pulse rate and history.</p>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center gap-2">
            <HeartIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            <h1 className="text-5xl font-extrabold tracking-tighter leading-none">82</h1>
            <p className="text-sm text-gray-500 grid-areas-input dark:text-gray-400">bpm</p>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            <p className="text-sm text-gray-500 dark:text-gray-400">Last updated 2 minutes ago</p>
          </div>
        </div>
      </div>
      <div className="grid gap-4 mt-4">
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 rounded-full bg-gray-200 dark:bg-gray-800" />
          <div className="w-3 h-3 rounded-full bg-gray-200 dark:bg-gray-800" />
          <div className="w-3 h-3 rounded-full bg-gray-200 dark:bg-gray-800" />
          <div className="w-3 h-3 rounded-full bg-gray-200 dark:bg-gray-800" />
          <div className="w-3 h-3 rounded-full bg-gray-200 dark:bg-gray-800" />
          <div className="w-3 h-3 rounded-full bg-gray-200 dark:bg-gray-800" />
          <div className="w-3 h-3 rounded-full bg-gray-200 dark:bg-gray-800" />
          <div className="w-3 h-3 rounded-full bg-gray-200 dark:bg-gray-800" />
          <div className="w-3 h-3 rounded-full bg-gray-200 dark:bg-gray-800" />
          <div className="w-3 h-3 rounded-full bg-gray-200 dark:bg-gray-800" />
        </div>
        <CurvedlineChart className="w-full aspect-[2/1]" />
      </div>
    </div>
  )
}

function ClockIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function CurvedlineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}
