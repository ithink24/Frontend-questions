export const formSchema = {
  title: "Feedback Form",
  fields: [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      required: true,
    },
    {
      name: "age",
      label: "Age",
      type: "number",
      required: false,
    },
    {
      name: "feedback",
      label: "Your Feedback",
      type: "textarea",
      required: true,
    },
  ],
};
