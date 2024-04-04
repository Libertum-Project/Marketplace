'use client';
import React, { useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { formSchema } from '@/lib/validations';
import { Input } from '@/components/ui/input';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { useAddress } from '@thirdweb-dev/react';
import { useToast } from '@/components/ui/use-toast';

const UserForm = () => {
  const [date, setDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const address = useAddress();
  const { toast } = useToast();
  const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;
  const [userData, setUserData] = useState<any>({
    fname: '',
    lname: '',
    email: '',
    address: '',
    city: '',
    postal: '',
    country: '',
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fname: '',
      lname: '',
      email: '',
      address: '',
      city: '',
      postal: '',
      country: '',
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      if (address) {
        const response = await fetch(
          `https://libertum--marketplace.azurewebsites.net/users/${address}`,
          {
            method: 'PATCH',
            headers: {
              Authorization: `Bearer ${secretKey}`,
              Accept: 'application/json',
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
              first_name: values.fname,
              last_name: values.lname,
              email: values.email,
              dob: date,
              present_address: values.address,
              city: values.city,
              country: values.country,
              postal_code: values.postal
            })
          }
        );

        if (response.ok) {
          toast({
            variant: 'default',
            className:
              'bg-[#00B3B5] text-white rounded-[5px] [data-state=open]:top-0',
            title: 'Your profile is updated!'
          });
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  }
  useEffect(() => {
    // Fetch user data when component mounts if address exists
    const fetchUserData = async () => {
      try {
        if (address) {
          const response = await fetch(
            `https://libertum--marketplace.azurewebsites.net/users/${address}`,
            {
              method: 'GET',
              headers: {
                Authorization: `Bearer ${secretKey}`,
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=utf-8'
              }
            }
          );
          if (response.ok) {
            const userData = await response.json();

            setUserData({
              fname: userData.first_name,
              lname: userData.last_name,
              email: userData.email,
              address: userData.present_address,
              city: userData.city,
              postal: userData.postal_code,
              country: userData.country,
            });
            form.reset({
              fname: userData.first_name,
              lname: userData.last_name,
              email: userData.email,
              address: userData.present_address,
              city: userData.city,
              postal: userData.postal_code,
              country: userData.country,
            });
            const date = userData.dob
            setDate(date)
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, [address, secretKey]);

  return (
    <Form {...form}>
      <form
        className="flex flex-1 flex-col gap-7"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex gap-7">
          <div className="w-[50%] flex flex-col gap-2">
            <FormField
              control={form.control}
              name="fname"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col">
                  <FormLabel className="paragraph-semibold text-dark400_light800">
                    First Name
                  </FormLabel>
                  <FormControl className="mt-3.5">
                    <Input
                      placeholder="First Name"
                      className="bg-white rounded-[5px] border border-slate-200 placeholder:text-slate-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
          <div className="w-[50%] flex flex-col gap-2">
            <FormField
              control={form.control}
              name="lname"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col">
                  <FormLabel className="paragraph-semibold text-dark400_light800">
                    Last Name
                  </FormLabel>
                  <FormControl className="mt-3.5">
                    <Input
                      placeholder="Last Name"
                      className="bg-white rounded-[5px] border border-slate-200 placeholder:text-slate-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex gap-7">
          <div className="w-[50%] flex flex-col gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col">
                  <FormLabel className="paragraph-semibold text-dark400_light800">
                    Email
                  </FormLabel>
                  <FormControl className="mt-3.5">
                    <Input
                      type="email"
                      placeholder="Email address"
                      className="bg-white rounded-[5px] border border-slate-200 placeholder:text-slate-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
          <div className="w-[50%] flex flex-col gap-2">
            <FormField
              name={''}
              render={() => (
                <FormItem className="flex w-full flex-col">
                  <FormLabel className="paragraph-semibold text-dark400_light800">
                    Date of Birth
                  </FormLabel>
                  <FormControl className="mt-3.5">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Input
                          type="text"
                          placeholder={
                            date ? format(date, 'yyyy-MM-dd') : 'Date of Birth'
                          }
                          value={
                            date ? format(date, 'yyyy-MM-dd') : 'Date of Birth'
                          }
                          className="bg-white rounded-[5px] border border-slate-200 placeholder:text-slate-400"
                        />
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-white">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          captionLayout="dropdown"
                          fromYear={1970}
                          toYear={2024}
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex gap-7">
          <div className="w-[50%] flex flex-col gap-2">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col">
                  <FormLabel className="paragraph-semibold text-dark400_light800">
                    Address
                  </FormLabel>
                  <FormControl className="mt-3.5">
                    <Input
                      placeholder="Address"
                      className="bg-white rounded-[5px] border border-slate-200 placeholder:text-slate-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>

          <div className="w-[50%] flex flex-col gap-2">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col">
                  <FormLabel className="paragraph-semibold text-dark400_light800">
                    City
                  </FormLabel>
                  <FormControl className="mt-3.5">
                    <Input
                      placeholder="City"
                      className="bg-white rounded-[5px] border border-slate-200 placeholder:text-slate-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex gap-7">
          <div className="w-[50%] flex flex-col gap-2">
            <FormField
              control={form.control}
              name="postal"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col">
                  <FormLabel className="paragraph-semibold text-dark400_light800">
                    Postal Code
                  </FormLabel>
                  <FormControl className="mt-3.5">
                    <Input
                      placeholder="Postal Code"
                      className="bg-white rounded-[5px] border border-slate-200 placeholder:text-slate-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
          <div className="w-[50%] flex flex-col gap-2">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col">
                  <FormLabel className="paragraph-semibold text-dark400_light800">
                    Country
                  </FormLabel>
                  <FormControl className="mt-3.5">
                    <Input
                      placeholder="Country"
                      className="bg-white rounded-[5px] border border-slate-200 placeholder:text-slate-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            className="bg-libertumGreen rounded-[5px] text-white text-center hover:bg-teal-500 min-w-[164px] max-sm:w-full"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Saving...' : 'Save'}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UserForm;
