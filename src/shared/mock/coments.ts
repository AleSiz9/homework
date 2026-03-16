import { IComment } from "@/entities/comment";

export const mockComments: IComment[] = [
  {
    id: 1,
    postId: 1,
    userId: 2,
    name: "John Doe",
    email: "john.doe@example.com",
    body: "This is an excellent post! Really made me think about the topic.",
    createdAt: "2025-02-10T09:23:45Z"
  },
  {
    id: 2,
    postId: 1,
    userId: 3,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    body: "Thanks for sharing this. I have a question: how would this apply in a different context?",
    createdAt: "2025-02-10T11:45:12Z"
  },
  {
    id: 3,
    postId: 2,
    userId: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    body: "Great explanation! I finally understand this concept.",
    createdAt: "2025-02-11T08:30:22Z"
  },
  {
    id: 4,
    postId: 3,
    userId: 2,
    name: "Bob Williams",
    email: "bob.williams@example.com",
    body: "This is very helpful. I've bookmarked it for later.",
    createdAt: "2025-02-11T14:18:03Z"
  },
  {
    id: 5,
    postId: 5,
    userId: 3,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    body: "I'd love to see more examples like this. Keep up the good work!",
    createdAt: "2025-02-12T10:05:47Z"
  },
  {
    id: 6,
    postId: 5,
    userId: 1,
    name: "Diana Prince",
    email: "diana.prince@example.com",
    body: "Could you clarify the third point? I'm a bit confused.",
    createdAt: "2025-02-12T16:22:31Z"
  },
  {
    id: 7,
    postId: 7,
    userId: 2,
    name: "Ethan Hunt",
    email: "ethan.hunt@example.com",
    body: "Amazing post! I shared it with my team.",
    createdAt: "2025-02-13T09:44:58Z"
  },
  {
    id: 8,
    postId: 8,
    userId: 3,
    name: "Fiona Gallagher",
    email: "fiona.gallagher@example.com",
    body: "This is exactly what I needed. Thanks a lot!",
    createdAt: "2025-02-13T13:37:26Z"
  },
  {
    id: 9,
    postId: 10,
    userId: 1,
    name: "George Costanza",
    email: "george.costanza@example.com",
    body: "I have a different opinion, but your arguments are solid.",
    createdAt: "2025-02-14T08:52:14Z"
  },
  {
    id: 10,
    postId: 12,
    userId: 2,
    name: "Hannah Abbott",
    email: "hannah.abbott@example.com",
    body: "Very well written. I look forward to your next posts.",
    createdAt: "2025-02-14T18:06:33Z"
  },
  {
    id: 11,
    postId: 13,
    userId: 3,
    name: "Ian Malcolm",
    email: "ian.malcolm@example.com",
    body: "This article changed my perspective. Thank you!",
    createdAt: "2025-02-15T11:23:09Z"
  },
  {
    id: 12,
    postId: 15,
    userId: 1,
    name: "Julia Roberts",
    email: "julia.roberts@example.com",
    body: "I'll definitely try this approach in my project.",
    createdAt: "2025-02-15T15:47:52Z"
  },
  {
    id: 13,
    postId: 16,
    userId: 2,
    name: "Kevin Hart",
    email: "kevin.hart@example.com",
    body: "Hilarious and informative! 😂",
    createdAt: "2025-02-16T10:12:28Z"
  },
  {
    id: 14,
    postId: 18,
    userId: 3,
    name: "Lara Croft",
    email: "lara.croft@example.com",
    body: "This is gold! I'm sharing it everywhere.",
    createdAt: "2025-02-16T19:38:41Z"
  },
  {
    id: 15,
    postId: 19,
    userId: 1,
    name: "Michael Scott",
    email: "michael.scott@example.com",
    body: "That's what she said! ... Sorry, couldn't resist. Good post.",
    createdAt: "2025-02-17T09:44:15Z"
  },
  {
    id: 16,
    postId: 20,
    userId: 2,
    name: "Nina Simone",
    email: "nina.simone@example.com",
    body: "Beautifully explained. I love the clarity.",
    createdAt: "2025-02-17T14:21:56Z"
  },
  {
    id: 17,
    postId: 22,
    userId: 3,
    name: "Oscar Wilde",
    email: "oscar.wilde@example.com",
    body: "This is both insightful and witty. A rare combination.",
    createdAt: "2025-02-18T12:05:34Z"
  },
  {
    id: 18,
    postId: 23,
    userId: 1,
    name: "Pam Beesly",
    email: "pam.beesly@example.com",
    body: "I'm going to recommend this to everyone at work.",
    createdAt: "2025-02-18T17:43:22Z"
  },
  {
    id: 19,
    postId: 25,
    userId: 2,
    name: "Quentin Tarantino",
    email: "quentin.tarantino@example.com",
    body: "This article has some killer points! 🔥",
    createdAt: "2025-02-19T08:19:47Z"
  },
  {
    id: 20,
    postId: 27,
    userId: 3,
    name: "Rachel Green",
    email: "rachel.green@example.com",
    body: "Finally someone explained it so well. Thanks!",
    createdAt: "2025-02-19T20:11:03Z"
  },
  {
    id: 21,
    postId: 28,
    userId: 1,
    name: "Steve Rogers",
    email: "steve.rogers@example.com",
    body: "I understood this better than any textbook. Great job!",
    createdAt: "2025-02-20T13:28:59Z"
  },
  {
    id: 22,
    postId: 29,
    userId: 2,
    name: "Tony Stark",
    email: "tony.stark@example.com",
    body: "I have some notes, but overall, impressive work.",
    createdAt: "2025-02-20T16:55:31Z"
  },
  {
    id: 23,
    postId: 30,
    userId: 3,
    name: "Ursula K. Le Guin",
    email: "ursula.leguin@example.com",
    body: "A thought-provoking read. I'll be thinking about this.",
    createdAt: "2025-02-21T10:42:08Z"
  },
  {
    id: 24,
    postId: 30,
    userId: 1,
    name: "Victor Hugo",
    email: "victor.hugo@example.com",
    body: "Merci pour cet excellent article. Très instructif!",
    createdAt: "2025-02-21T18:07:24Z"
  },
  {
    id: 25,
    postId: 30,
    userId: 2,
    name: "Wade Wilson",
    email: "wade.wilson@example.com",
    body: "I'd comment more, but I'm busy being Deadpool. 😉",
    createdAt: "2025-02-22T09:33:17Z"
  }
];