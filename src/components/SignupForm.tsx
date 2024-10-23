'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

import {
  Button,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Input,
} from '@/components';

import createPreSignup from '@/lib/actions/createPreSignup';
import { signupSchema } from '@/lib/formSchemas';

export default function SignupForm() {
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: '',
      firstName: '',
    },
  });

  const onSubmit = async (data: any) => {
    const response = await createPreSignup(data);

    if (!response?.success) {
      return toast.error(response?.error, {
        description: 'Please try again.',
      });
    }

    form.reset();
    return toast.success(`Thanl you ${data.firstName}!`, {
      description: 'We will notify you when the app is ready.',
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-x-2 flex items-end"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>Your Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your contact email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>Your First Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your first name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Notify me!</Button>
      </form>
    </Form>
  );
}
