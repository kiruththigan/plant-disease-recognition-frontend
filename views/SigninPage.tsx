"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { SigninFormSchema, signinFormSchema } from "@/types/schema";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Loader2 } from "lucide-react";
import { authenticate } from "@/actions/signin.action";
import { getServerSession } from "@/actions/session.action";
import { useSessionStore } from "@/stores/session.store";

export default function SigninPage() {
  const router = useRouter();
  const [error, setError] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();

  const { setSession } = useSessionStore();

  async function fetchSession() {
    const serverSession = await getServerSession();
    setSession(serverSession);
  }

  const form = useForm<z.infer<typeof signinFormSchema>>({
    resolver: zodResolver(signinFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: SigninFormSchema) {
    console.log(values);
    setError("");
    try {
      startTransition(async () => {
        await authenticate(values).then((data) => {
          setError(data?.error);
          if ((data.success as boolean) == true) {
            toast.success("Success", { description: "Successfully loggedin!" });
          }
        });
      });
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      await fetchSession();
    }
  }

  return (
    <div className="flex items-center justify-center my-40">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>
            Enter your credentials to access the admin dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your username"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full flex justify-center items-center gap-2"
                disabled={isPending}
              >
                {isPending && <Loader2 className=" animate-spin" size={18} />}
                Sign In
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
