



// // <antArtifact identifier="home-charts" type="application/vnd.ant.react" title="Shadcn UI Charts for Home Page">
// import React from 'react'
// import { 
//   Card, 
//   CardContent, 
//   CardDescription, 
//   CardHeader, 
//   CardTitle 
// } from "@/components/ui/card"
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart"
// import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

// const campaignData = [
//   { month: 'Jan', donations: 4000, goal: 5000 },
//   { month: 'Feb', donations: 3000, goal: 5000 },
//   { month: 'Mar', donations: 5000, goal: 5000 },
//   { month: 'Apr', donations: 4500, goal: 5000 },
//   { month: 'May', donations: 6000, goal: 5000 },
// ]

// const chartConfig = {
//   donations: {
//     label: "Donations",
//     color: "hsl(var(--chart-1))",
//   },
//   goal: {
//     label: "Campaign Goal",
//     color: "hsl(var(--chart-2))",
//   },
// } satisfies ChartConfig

// export function CampaignProgressChart() {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Campaign Progress</CardTitle>
//         <CardDescription>Monthly Donations vs Campaign Goal</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <ChartContainer config={chartConfig}>
//           <BarChart accessibilityLayer data={campaignData}>
//             <CartesianGrid vertical={false} />
//             <XAxis
//               dataKey="month"
//               tickLine={false}
//               axisLine={false}
//               tickMargin={8}
//               tickFormatter={(value) => value.slice(0, 3)}
//             />
//             <YAxis
//               tickLine={false}
//               axisLine={false}
//               tickMargin={8}
//             />
//             <ChartTooltip content={<ChartTooltipContent />} />
//             <Bar dataKey="donations" fill="var(--color-donations)" radius={[4, 4, 0, 0]} />
//             <Bar dataKey="goal" fill="var(--color-goal)" radius={[4, 4, 0, 0]} />
//           </BarChart>
//         </ChartContainer>
//       </CardContent>
//     </Card>
//   )
// }

// const impactData = [
//   { week: 'Week 1', people: 1000, aid: 500 },
//   { week: 'Week 2', people: 2000, aid: 1200 },
//   { week: 'Week 3', people: 3500, aid: 2000 },
//   { week: 'Week 4', people: 5000, aid: 3000 },
//   { week: 'Week 5', people: 6500, aid: 4200 },
// ]

// const impactChartConfig = {
//   people: {
//     label: "People Helped",
//     color: "hsl(var(--chart-1))",
//   },
//   aid: {
//     label: "Aid Distributed",
//     color: "hsl(var(--chart-2))",
//   },
// } satisfies ChartConfig

// export function ImpactMetricsChart() {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Impact Metrics</CardTitle>
//         <CardDescription>Weekly Aid Distribution</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <ChartContainer config={impactChartConfig}>
//           <BarChart accessibilityLayer data={impactData}>
//             <CartesianGrid vertical={false} />
//             <XAxis
//               dataKey="week"
//               tickLine={false}
//               axisLine={false}
//               tickMargin={8}
//             />
//             <YAxis
//               tickLine={false}
//               axisLine={false}
//               tickMargin={8}
//             />
//             <ChartTooltip content={<ChartTooltipContent />} />
//             <Bar dataKey="people" fill="var(--color-people)" radius={[4, 4, 0, 0]} />
//             <Bar dataKey="aid" fill="var(--color-aid)" radius={[4, 4, 0, 0]} />
//           </BarChart>
//         </ChartContainer>
//       </CardContent>
//     </Card>
//   )
// }