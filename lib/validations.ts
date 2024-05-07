import * as z from 'zod';

export const formSchema = z.object({
  fname: z.string().min(1, { message: 'This field has to be filled.' }).max(10),
  lname: z.string().min(1, { message: 'This field has to be filled.' }).max(10),
  email: z.string().min(1, { message: 'This field has to be filled.' }).email('This is not a valid email.'),
  address: z.string().min(1, { message: 'This field has to be filled.' }).max(120),
  city: z.string().min(1, { message: 'This field has to be filled.' }).max(120),
  postal: z.string().min(1, { message: 'This field has to be filled.' }).max(120),
  country: z.string().min(1, { message: 'This field has to be filled.' }).max(120),
});
