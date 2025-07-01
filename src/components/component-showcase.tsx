"use client";

import { useState } from "react";
import { CalendarDays, Check, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

export function ComponentShowcase() {
  const [progress, setProgress] = useState(13);

  const handleToast = () => {
    toast.success("Component showcase", {
      description: "All components are working perfectly!",
    });
  };

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Form Components</CardTitle>
            <CardDescription>
              Essential form elements with validation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Type your message here" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                  <SelectItem value="billing">Billing</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Submit</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>UI Elements</CardTitle>
            <CardDescription>
              Various UI components and indicators
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium leading-none">shadcn</p>
                <p className="text-sm text-muted-foreground">@shadcn</p>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Progress: {progress}%</Label>
              <Progress value={progress} className="w-full" />
            </div>
            <Separator />
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                Small
              </Button>
              <Button size="sm">
                Default
              </Button>
              <Button size="sm" variant="destructive">
                Destructive
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleToast} className="w-full">
              Show Toast
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Alerts & Notifications</CardTitle>
            <CardDescription>
              Status messages and user feedback
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <CalendarDays className="h-4 w-4" />
              <AlertTitle>Info!</AlertTitle>
              <AlertDescription>
                This is an informational alert message.
              </AlertDescription>
            </Alert>
            <Alert>
              <Check className="h-4 w-4" />
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>
                Your action was completed successfully.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Feature Highlights</CardTitle>
          <CardDescription>
            Key features of this Next.js starter template
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start space-x-3">
              <div className="rounded-full bg-primary p-2">
                <User className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">TypeScript Ready</h3>
                <p className="text-sm text-muted-foreground">
                  Fully configured TypeScript with strict mode and path aliases
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="rounded-full bg-primary p-2">
                <Mail className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">Tailwind CSS v4</h3>
                <p className="text-sm text-muted-foreground">
                  Latest Tailwind CSS with modern configuration and optimization
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="rounded-full bg-primary p-2">
                <CalendarDays className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">shadcn/ui Components</h3>
                <p className="text-sm text-muted-foreground">
                  Pre-installed essential components with dark mode support
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}