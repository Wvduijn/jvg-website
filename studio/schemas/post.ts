import { HiOutlineDocumentAdd } from "react-icons/hi";

export default {
  name: "post",
  title: "Posts",
  icon: HiOutlineDocumentAdd,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: Rule => Rule.required(),
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "excerpt",
      description:
        "Schrijf een korte samenvatting van deze post (voor SEO)",
      title: "Excerpt",
      rows: 5,
      type: "text",
      validation: Rule =>
        Rule.max(160).error(
          "SEO descriptions zijn meestal maximaal 160 karakters"
        )
    },
    {
      name: "body",
      title: "Body",
      type: "block",
      validation: Rule => Rule.required()
    },
    // {
    //   name: "author",
    //   title: "Auteur",
    //   type: "reference",
    //   to: { type: "author" },
    //   validation: Rule => Rule.required()
    // },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
          options: {
            isHighlighted: true
          }
        }
      ],
      options: {
        hotspot: true
      }
    },
    // {
    //   name: "categories",
    //   title: "Categorieën",
    //   type: "array",
    //   of: [{ type: "reference", to: { type: "category" } }],
    //   validation: Rule => Rule.required()
    // },
    {
      name: "publishedAt",
      title: "Gepubliceerd op",
      type: "datetime"
    }
  ],

  // preview: {
  //   select: {
  //     title: "title",
  //     author: "author.name",
  //     media: "mainImage"
  //   },
  //   prepare(selection) {
  //     const { author } = selection;
  //     return Object.assign({}, selection, {
  //       subtitle: author && `door ${author}`
  //     });
  //   }
  // }
};