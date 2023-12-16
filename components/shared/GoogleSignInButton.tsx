"use client";

import { signIn } from "next-auth/react";
import { GoogleLoginButton } from "react-social-login-buttons";

export default function GoogleSignInButton() {
  return <GoogleLoginButton onClick={() => signIn("google")} />;
}
