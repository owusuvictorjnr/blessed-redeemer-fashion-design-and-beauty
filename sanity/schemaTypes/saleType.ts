import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const saleType = defineType({
  name: "sale",
  title: "Sale",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      title: "Sale Title",
      type: "string",
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Sale Description",
      type: "text",
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "badge",
      title: "Discount  Badge",
      type: "string",
      description: "Discount Badge Ratio",
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "discountAmount",
      title: "Discount Amount",
      type: "number",
      description: "Amount off in percentage or fixed value",
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "couponCode",
      title: "Coupon Code",
      type: "string",
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "validFrom",
      title: "Valid From",
      type: "datetime",
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "validUntil",
      title: "Valid Until",
      type: "datetime",
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description: "Toggle to activate or deactivate sale",
      initialValue: true,
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "Image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "title",
      discountAmount: "discountAmount",
      couponCode: "couponCode",
      isActive: "isActive",
    },

    prepare(select) {
      const { title, discountAmount, couponCode, isActive } = select;
      const status = isActive ? "Active" : "Inactive";
      return {
        title: title,
        subtitle: ` ${discountAmount}% off  -code: ${couponCode} - ${status}`,
      };
    },
  },
});
