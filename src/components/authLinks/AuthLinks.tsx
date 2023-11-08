import Link from "next/link";
import React from "react";

type Props = {};

const AuthLinks = (props: Props) => {
  const status = "notauthenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <>
          <Link href="/login">Увійти</Link>
          <Link href="/signup">Зареєструватись</Link>
        </>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className="cursor-pointer">Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
