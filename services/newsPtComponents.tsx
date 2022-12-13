import Heading from "components/ui/content/Heading";
import Paragraph from "components/ui/content/Paragraph";
import NewsPostImage from "components/ui/news/NewsPostImage";
import buildUrl from "./sanity-urlbuilder";

// TODO properly type newsitems - extract to helper Object.
export const newsPortableTextComponents = {
  block: {
    h1: ({ children }: any) => (
      <Heading type="h1" weight="font-semibold" color="purple">
        {children}
      </Heading>
    ),
    h2: ({ children }: any) => (
      <Heading type="h2" weight="font-semibold" color="purple">
        {children}
      </Heading>
    ),
    h3: ({ children }: any) => (
      <Heading type="h3" weight="font-semibold" color="purple">
        {children}
      </Heading>
    ),
    h4: ({ children }: any) => (
      <Heading type="h4" weight="font-semibold" color="purple">
        {children}
      </Heading>
    ),
    h5: ({ children }: any) => (
      <Heading type="h5" weight="font-semibold" color="purple">
        {children}
      </Heading>
    ),
    h6: ({ children }: any) => (
      <Heading type="h6" weight="font-semibold" color="purple">
        {children}
      </Heading>
    ),
    paragraph: ({ children }: any) => <Paragraph>{children}</Paragraph>,
  },
  types: {
    image: ({ value }: any) => (
      <NewsPostImage imageUrl={buildUrl(value).url()} alt={value.alt || ''} />
    ),
    span: ({ children }: any) => <Paragraph>{children}</Paragraph>,
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
  },
};
