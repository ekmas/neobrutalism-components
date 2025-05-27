"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Sample data for our table
const recentActivity = [
  {
    id: 1,
    user: "John Doe",
    action: "Created new project",
    status: "completed",
    date: "2024-03-20",
  },
  {
    id: 2,
    user: "Jane Smith",
    action: "Updated documentation",
    status: "in-progress",
    date: "2024-03-19",
  },
  {
    id: 3,
    user: "Mike Johnson",
    action: "Fixed bug in authentication",
    status: "completed",
    date: "2024-03-18",
  },
];

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button>Create New</Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Total Projects</CardTitle>
                <CardDescription>Active projects this month</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">12</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Active Users</CardTitle>
                <CardDescription>Users currently online</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">24</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tasks Completed</CardTitle>
                <CardDescription>Tasks completed this week</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">48</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest updates from your team</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentActivity.map((activity) => (
                    <TableRow key={activity.id}>
                      <TableCell className="flex items-center gap-2">
                        <Avatar>
                          <AvatarImage src={`https://avatar.vercel.sh/${activity.user}`} />
                          <AvatarFallback>{activity.user[0]}</AvatarFallback>
                        </Avatar>
                        {activity.user}
                      </TableCell>
                      <TableCell>{activity.action}</TableCell>
                      <TableCell>
                        <Badge variant={activity.status === "completed" ? "default" : "secondary"}>
                          {activity.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{activity.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>Update your account settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 