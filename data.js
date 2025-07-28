
import { v4 as uuidv4 } from "https://jspm.dev/uuid";
export const postsData = [
  {
    handle: "@Abhay_🚧",
    profilePic: "images/abhay.jpg",
    likes: 87,
    reposts: 21,
    postText: "Pyaar-vyaar sab dhokha hai, padh lo... abhi bhi mauka hai. 📚💔",
    replies: [
      {
        handle: "@NakulKeMemes 😎",
        profilePic: "images/nakul.jpg",
        postText:
          "Bhai ne engineering se bhi toxic logon ko pehle expose kar diya 💀",
      },
    ],
    isLiked: false,
    isReposted: false,
    uuid: uuidv4(),
  },
  {
    handle: "@Tanishka404 ⚡",
    profilePic: "images/tanishka.jpg",
    likes: 143,
    reposts: 30,
    postText:
      "IV drip on left hand. VS Code on right. Coding in hospital is called full-stack commitment. 🏥💻",
    replies: [
      {
        handle: "@ResistorRishabh ⚡",
        profilePic: "images/rishabh.jpg",
        postText: "Doctor: Stable condition. Me: Push to GitHub?",
      },
    ],
    isLiked: false,
    isReposted: false,
    uuid: uuidv4(),
  },
  {
    handle: "@NakulKeMemes 😎",
    profilePic: "images/nakul.jpg",
    likes: 95,
    reposts: 18,
    postText:
      "Hostel water supply: Once in a lifetime experience. Jal hi jeevan hai... but not in Manasbal Hostel 🚿😂",
    replies: [],
    isLiked: false,
    isReposted: false,
    uuid: uuidv4(),
  },
  {
    handle: "@ResistorRishabh ⚡",
    profilePic: "images/rishabh.jpg",
    likes: 57,
    reposts: 11,
    postText:
      "UPSC preparation me sab kuch chhuta... bas syllabus nahi chhuta. 😭📖",
    replies: [
      {
        handle: "@Nyl_Sarcastic 😏",
        profilePic: "images/nyl.jpg",
        postText:
          "Aur syllabus itna lamba ki NASA ne map banane ka contract le liya 📡",
      },
    ],
    isLiked: false,
    isReposted: false,
    uuid: uuidv4(),
  },
  {
    handle: "@Nyl_Sarcastic 😏",
    profilePic: "images/nyl.jpg",
    likes: 120,
    reposts: 40,
    postText: "Group study ka asli matlab: 10% padhai, 90% roast aur chai 🍵📚",
    replies: [],
    isLiked: false,
    isReposted: false,
    uuid: uuidv4(),
  },
];
