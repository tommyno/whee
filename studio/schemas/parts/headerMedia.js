import image from "./image";
import video from "./video";

export default {
  name: "headerMedia",
  title: "Toppbilde eller -film",
  type: "array",
  description: "Du kan kun legge til ett",
  options: {
    sortable: false,
  },
  validation: (Rule) => Rule.max(1),
  of: [image, video],
};
