# Clerk Authentication Setup

## Overview

This project uses [Clerk](https://clerk.com/) for authentication and user management. Clerk provides a complete authentication solution with features like sign-in, sign-up, user profiles, and more.

## Setup Instructions

### 1. Create a Clerk Account

1. Go to [clerk.com](https://clerk.com/) and sign up for an account
2. Create a new application in the Clerk dashboard
3. From your Clerk dashboard, get your API keys (Publishable Key and Secret Key)

### 2. Configure Environment Variables

Update the `.env.local` file with your Clerk API keys:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key_from_clerk_dashboard
CLERK_SECRET_KEY=your_secret_key_from_clerk_dashboard

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

### 3. Authentication Components

The following Clerk components have been integrated into the application:

- `<SignInButton />` and `<SignUpButton />` in the navbar for unauthenticated users
- `<UserButton />` in the navbar for authenticated users
- `<SignIn />` component on the sign-in page
- `<SignUp />` component on the sign-up page

### 4. Conditional UI Based on Authentication Status

Use the `<SignedIn>` and `<SignedOut>` components to conditionally render UI elements based on the user's authentication status:

```tsx
import { SignedIn, SignedOut } from "@clerk/nextjs";

const MyComponent = () => {
  return (
    <div>
      <SignedIn>
        {/* Content only visible to signed-in users */}
      </SignedIn>
      <SignedOut>
        {/* Content only visible to signed-out users */}
      </SignedOut>
    </div>
  );
};
```

## Additional Resources

- [Clerk Documentation](https://clerk.com/docs)
- [Clerk Next.js Documentation](https://clerk.com/docs/quickstarts/nextjs)
- [Next.js App Router Documentation](https://nextjs.org/docs/app)