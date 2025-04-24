
# SkillSpark - Supabase Database Schema

When connecting this project to Supabase, you'll need to create the following tables and relationships:

## Tables

### 1. profiles
- `id`: uuid (primary key, references auth.users.id)
- `created_at`: timestamp with time zone
- `updated_at`: timestamp with time zone
- `name`: text
- `avatar_url`: text
- `bio`: text
- `title`: text
- `is_mentor`: boolean
- `hourly_rate`: integer (nullable, only for mentors)
- `available_now`: boolean (default: false, only for mentors)
- `average_rating`: float (default: 0)
- `session_count`: integer (default: 0)

### 2. skills
- `id`: uuid (primary key)
- `created_at`: timestamp with time zone
- `name`: text
- `slug`: text (unique)
- `category_id`: uuid (references categories.id)

### 3. categories
- `id`: uuid (primary key)
- `created_at`: timestamp with time zone
- `name`: text
- `slug`: text (unique)
- `description`: text

### 4. profile_skills
- `id`: uuid (primary key)
- `created_at`: timestamp with time zone
- `profile_id`: uuid (references profiles.id)
- `skill_id`: uuid (references skills.id)
- `skill_level`: integer (1-5)

### 5. sessions
- `id`: uuid (primary key)
- `created_at`: timestamp with time zone
- `updated_at`: timestamp with time zone
- `mentor_id`: uuid (references profiles.id)
- `mentee_id`: uuid (references profiles.id)
- `start_time`: timestamp with time zone
- `end_time`: timestamp with time zone
- `status`: text (enum: 'scheduled', 'completed', 'cancelled')
- `title`: text
- `description`: text (nullable)
- `price`: integer
- `meeting_url`: text (nullable)

### 6. reviews
- `id`: uuid (primary key)
- `created_at`: timestamp with time zone
- `session_id`: uuid (references sessions.id)
- `reviewer_id`: uuid (references profiles.id)
- `rating`: integer (1-5)
- `comment`: text
- `response`: text (nullable, mentor's response to the review)

### 7. availability
- `id`: uuid (primary key)
- `created_at`: timestamp with time zone
- `profile_id`: uuid (references profiles.id)
- `day_of_week`: integer (0-6, where 0 is Sunday)
- `start_time`: time without time zone
- `end_time`: time without time zone
- `is_recurring`: boolean

### 8. messages
- `id`: uuid (primary key)
- `created_at`: timestamp with time zone
- `sender_id`: uuid (references profiles.id)
- `receiver_id`: uuid (references profiles.id)
- `content`: text
- `read`: boolean (default: false)

## RLS (Row Level Security) Policies

These policies should be set up in Supabase to secure your data:

### profiles table
- Allow users to read any profile
- Allow users to update only their own profile
- Insert trigger to create a profile when a user signs up

### skills table
- Allow anyone to read skills
- Allow only administrators to insert, update, or delete skills

### profile_skills table
- Allow users to read any profile_skills
- Allow users to insert, update, or delete only their own profile_skills

### sessions table
- Allow users to read sessions where they are the mentor or mentee
- Allow users to insert new sessions (when booking)
- Allow users to update sessions where they are the mentor or mentee
- Allow users to delete sessions where they are the mentor or mentee

### reviews table
- Allow anyone to read reviews
- Allow users to insert reviews only for sessions they participated in
- Allow users to update or delete only their own reviews
- Allow mentors to add responses to reviews about them

### availability table
- Allow anyone to read availability
- Allow users to insert, update, or delete only their own availability

### messages table
- Allow users to read messages where they are the sender or receiver
- Allow users to insert new messages
- Allow users to update read status only for messages they received
- Don't allow users to delete messages

## Functions

Create the following functions in Supabase:

1. `update_profile_rating`: A function that updates a mentor's average rating whenever a new review is added

2. `update_session_count`: A function that increments a mentor's session count when a session status changes to 'completed'

3. `check_session_availability`: A function that checks if a mentor is available at the requested time before allowing a session to be booked

## Edge Functions

Create the following Edge Functions in Supabase:

1. `send_session_reminder`: A function that sends email reminders to mentors and mentees before their scheduled sessions

2. `process_payment`: A function that handles payment processing when a session is booked (can be integrated with Stripe)
