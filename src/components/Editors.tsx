import Link from "next/link";
import React from "react";

type Props = {};

const Editors = (props: Props) => {
  return (
    <section className="py-2">
      <h2>Editors:</h2>
      <div>
        <div>
          <Link href="/">First Editor</Link>
        </div>
        <div>
          <Link href="/">Second editor</Link>
        </div>
      </div>
    </section>
  );
};

export default Editors;
