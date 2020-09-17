/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";

// Check if internal or external link
const serializers = {
  marks: {
    link: ({ mark, children }) => {
      const { href = "" } = mark;

      // Internal - Add Next.js Link wrapper
      if (href[0] === "/") {
        return (
          <Link href={href}>
            <a>{children}</a>
          </Link>
        );
      }

      // Email adress
      if (href.includes("mailto:")) {
        return <a href={href}>{children}</a>;
      }

      // External
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
  }
};

const PortableText = ({ blocks }) => {
  return <BlockContent blocks={blocks} serializers={serializers} />;
};

export default PortableText;
