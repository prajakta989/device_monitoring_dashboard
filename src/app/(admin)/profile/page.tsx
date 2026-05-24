"use client";

import { currentUser } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import PageHeader from "@/components/shared/PageHeader";

export default function ProfilePage() {
  return (
    <div className="space-y-6 max-w-xl">
      <PageHeader title="Profile" subtitle="Manage your account details" />

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Personal information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-lg font-semibold text-emerald-700">
              {currentUser.avatarInitials}
            </div>
            <div>
              <p className="font-medium">{currentUser.name}</p>
              <p className="text-sm text-muted-foreground">{currentUser.role}</p>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Full name</Label>
            <Input defaultValue={currentUser.name} />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input defaultValue={currentUser.email} type="email" />
          </div>
          <div className="space-y-2">
            <Label>Role</Label>
            <Input defaultValue={currentUser.role} disabled />
          </div>

          <Button>Save changes</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Change password</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Current password</Label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <div className="space-y-2">
            <Label>New password</Label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <Button variant="outline">Update password</Button>
        </CardContent>
      </Card>
    </div>
  );
}