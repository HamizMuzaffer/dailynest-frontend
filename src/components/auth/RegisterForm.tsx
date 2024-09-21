import { Link } from "react-router-dom";
import { useState } from "react";
import { Loader2, EyeOff, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// react-hook-form  imports

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { userSchema } from "@/schemas/userSchema";
import axiosInstance from "@/axios";
import toast from "react-hot-toast";

const RegisterForm = () => {
  // States declaration
  const [loading, setLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate()

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });
  type formValues = z.infer<typeof userSchema>;
  const submitHandler = async(values: formValues) => {
    setLoading(true);
    const formData = {
      email: values.email,
      username: values.username,
      password: values.password,
    };

    try {
      const response = await axiosInstance.post("/sign-up",formData);
      
      if(response.status == 200){
        toast.success("Account created succesfully")
        navigate("/auth/login")
      }

    } catch (error:any) {
      toast.error(error?.response?.data?.error);
    }
    finally{
      setLoading(false)
    }
  };
  return (
    <Card className="w-[500px] shadow-md">
      <CardHeader className="flex justify-center items-center">
        <CardTitle className="text-2xl">Create your account</CardTitle>
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
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Enter Username"
                          type="text"
                          {...field}
                        />
                      </div>
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
              <Button disabled={loading} className="bg-base" type="submit">
                {loading ? (
                  <span className="flex w-full items-center justify-center">
                    <Loader2 className="mx-4 h-5 w-5 animate-spin" />
                  </span>
                ) : (
                  "Sign up"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <p className="text-muted-foreground text-sm mt-2">
          Already have an account?{" "}
          <Link to={"/auth/login"} className="underline">
            Register
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default RegisterForm;
