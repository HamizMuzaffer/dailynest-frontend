import { useState } from "react";

// react-hook-form  imports

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod Validation Imports

import { loginSchema } from "@/schemas/loginSchema";
import z from "zod";

// UI Imports

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { EyeOff, Eye, Loader2 } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// import toast, { Toaster } from "react-hot-toast";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LoginForm = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // states declaration
  const [loading, setLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  type formValues = z.infer<typeof loginSchema>;

  const submitHandler = (values: formValues) => {
    setLoading(true);
  };

  return (
    <Card className="w-[500px] shadow-md">
      <CardHeader className="flex justify-center items-center">
        <CardTitle className="text-2xl">Sign in</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitHandler)}
            className="space-y-6"
          >
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="m@example.com" {...field} />
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
                      <div className="relative">
                        <Input
                          placeholder="Enter password"
                          type={isShow ? "text" : "password"}
                          {...field}
                        />
                        {isShow ? (
                          <EyeOff
                            onClick={toggleShow}
                            className="absolute right-3 top-2.5 h-4 w-4 cursor-pointer text-muted-foreground"
                          />
                        ) : (
                          <Eye
                            onClick={toggleShow}
                            className="absolute right-3 top-2.5 h-4 w-4 cursor-pointer text-muted-foreground"
                          />
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-center">
            <Button disabled={loading} className="button" type="submit">
              {loading ? (
                <span className="flex w-full items-center justify-center">
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                </span>
              ) : (
                "Sign in"
              )}
            </Button>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <p className="text-muted-foreground text-sm mt-2">
          Don't have an account?{" "}
          <Link to={"/auth/signup"} className="underline">
            Register
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
