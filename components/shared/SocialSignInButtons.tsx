"use client";

import { signIn } from "next-auth/react";
import {
  FacebookLoginButton,
  GithubLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

export default function SocialSignInButtons() {
  return (
    <>
      <GoogleLoginButton onClick={() => signIn("google")} />
      <FacebookLoginButton />
      <GithubLoginButton />
    </>
  );
}
