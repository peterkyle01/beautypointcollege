import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { z } from 'zod'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const studentFormSchema = z.object({
  first_name: z.string().min(1, { message: 'First name must be more than one character.' }),
  second_name: z.string().min(1, { message: 'Second name must be more than one character.' }),
  email_address: z.string().email({ message: 'Please enter a valid email.' }),
  national_id: z.string().min(8, { message: 'ID has fewer digits.' }),
  phone_number: z.coerce
    .number()
    .min(99999999, { message: 'Few numbers' })
    .max(999999999, { message: 'Too many numbers' }),
  date_of_birth: z.date(),
  gender: z.enum(['Male', 'Female']),
  gurdian_full_name: z.string().min(1, { message: 'Name must be more than one character.' }),
  gurdian_phone_number: z.coerce
    .number()
    .min(99999999, { message: 'Few numbers' })
    .max(999999999, { message: 'Too many numbers' }),
  hear_about_us: z.enum([
    'Referral',
    'Facebook',
    'Website',
    'Google',
    'Media',
    'Sign Board',
    'Other',
  ]),
})

export type TstudentFormSchema = z.infer<typeof studentFormSchema>
