"use client"

import { Button } from "@/components";
import { logoutAdmin } from "@/lib/actions/adminAuth";

export default function LogoutButton() {
  const handleLogout = async () => {
    await logoutAdmin();
  };

  return (
    <Button onClick={handleLogout} variant="destructive">
      Logout
    </Button>
  );
}