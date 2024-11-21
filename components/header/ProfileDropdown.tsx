"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, Settings, User } from "lucide-react";
import { signout } from "@/actions/signout.action";
import { useEffect } from "react";
import { getServerSession } from "@/actions/session.action";
import { useSessionStore } from "@/stores/session.store";
import { useDiseaseTableStore } from "@/stores/table.store";

export const ProfileDropdown = () => {
  const { session, setSession } = useSessionStore();
  const { isLoading } = useDiseaseTableStore();

  async function fetchSession() {
    const serverSession = await getServerSession();
    setSession(serverSession);
  }

  useEffect(() => {
    fetchSession();
  }, [isLoading]);

  if (!session) return null;

  return (
    <div className="flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="User Avatar"
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="p-0">
            <form
              action={signout}
              onSubmit={() => setSession(null)}
              className="w-full"
            >
              <button
                type="submit"
                className="w-full flex justify-start items-center py-[6px] px-2 rounded-sm"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileDropdown;
