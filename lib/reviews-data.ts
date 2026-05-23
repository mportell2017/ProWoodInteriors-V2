export type Review = {
  quote: string;
  author: string;
  location?: string;
  featured?: boolean;
};

export const reviews: Review[] = [
  {
    quote:
      "Led by Dave Portell, ProWood Interiors is absolutely the best, most professional, and expert group of wood craftspersons around. Our experience with them was outstanding, from start to finish. Design and installation of our massive set of bookcases—double-sided, 9 feet high by 9 feet long—went very smoothly, the finished product was gorgeous, and we could not be happier with the outcome. Dave and his group are wood artists, and they were exacting in their manufacture and installation.",
    author: 'Rich & Kathy Bucholz',
    location: 'Chesterfield, MO',
    featured: true,
  },
  {
    quote:
      'OUTSTANDING customer service and craftsmanship! Dave and team at Professional Wood Interiors provided excellent communications, on time work completion, and very reasonable cost. Superb craftsmanship for extensive living room bookcases, fire place mantel, and bar renovations. Absolutely THE BEST team we have worked with for home renovations in three states over the past 20 years!!!',
    author: 'David Ferguson',
    location: 'Wildwood, MO',
  },
  {
    quote:
      "Dave was very courteous and did an amazing job on my kitchen. The transformation of the cabinets was night and day and Dave was very patient with all of our decisions. He made a dull kitchen into our dream kitchen. Dave's team is also a fantastic group of guys who worked hard, always took care with their craft and cleaned up behind themselves every time. This is craftsmanship at its best. I would recommend Professional Wood Interiors to anyone. They do fantastic work and they were a pleasure to work with.",
    author: 'Kelly Cook',
  },
  {
    quote:
      "I have been grateful for Dave and his staff for their help, kindness and detailed workmanship on a repair for a piece of artwork I had custom made for a dear friend that became broken in two during the shipping process from Thailand. Professional Wood Interiors were so very nice to take my broken piece in and repair it beautifully with the little time I had before my friend's birthday party. I was so happy with everything and so thankful for their help. I have seen their beautiful work and would highly recommend them.",
    author: 'Nancy Alan',
  },
  {
    quote:
      'Pro Wood Interiors are fantastic to work with. The level of expertise and professionalism is second to none. I would highly recommend David and his staff to anyone looking to do renovations to their home. Our new bookcases in our family room simply are stunning. Looking forward to working with David on our next project.',
    author: 'Doug Uthoff',
  },
  {
    quote:
      "Dave is a true professional. He shows up on time, makes recommendations, cleans up, and honors his bids. There was never a time I thought the work would be subpar, or I would be 'squeezed' for extra upgrades. He showed up when it was convenient to our schedule and always kept us in the loop. It is refreshing to call your contractor and they PICK UP THE PHONE! I would recommend Dave to anyone seeking custom cabinets or refacing done (and I have already). Thank you Dave for making our house a home.",
    author: 'Jerry M.',
  },
  {
    quote:
      'Very happy I found this company. I will be using Professional Wood Interiors again in the future. They went above and beyond. They gave good advice and got the job done fast. I am a very satisfied customer. I wish I had found this company years ago.',
    author: 'Beth C.',
  },
];
