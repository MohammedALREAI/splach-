import { PhotosItem } from 'Redux/photos/photos.types';

export const GetMyCureentIndex = (arr: PhotosItem[], itemId: string) => {
  return arr.map((x) => x.id).indexOf(itemId);
};

const w = {
  id: 'uX4xl_nVStE',
  created_at: '2021-12-01T19:17:16-05:00',
  updated_at: '2022-01-02T14:16:01-05:00',
  promoted_at: '2022-01-02T14:16:01-05:00',
  width: 3456,
  height: 5184,
  color: '#0c4026',
  blur_hash: 'LCBDvP?b0eEL00j[ofM{4.IU?H-;',
  description: null,
  alt_description: null,
  urls: {
    raw: 'https://images.unsplash.com/photo-1638403960249-d47d26e19833?ixid=MnwxMjA3fDB8MXxhbGx8MjV8fHx8fHwyfHwxNjQxMTU5NDM5&ixlib=rb-1.2.1',
    full: 'https://images.unsplash.com/photo-1638403960249-d47d26e19833?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8MjV8fHx8fHwyfHwxNjQxMTU5NDM5&ixlib=rb-1.2.1&q=85',
    regular:
      'https://images.unsplash.com/photo-1638403960249-d47d26e19833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8MjV8fHx8fHwyfHwxNjQxMTU5NDM5&ixlib=rb-1.2.1&q=80&w=1080',
    small:
      'https://images.unsplash.com/photo-1638403960249-d47d26e19833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8MjV8fHx8fHwyfHwxNjQxMTU5NDM5&ixlib=rb-1.2.1&q=80&w=400',
    thumb:
      'https://images.unsplash.com/photo-1638403960249-d47d26e19833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8MjV8fHx8fHwyfHwxNjQxMTU5NDM5&ixlib=rb-1.2.1&q=80&w=200',
  },
  links: {
    self: 'https://api.unsplash.com/photos/uX4xl_nVStE',
    html: 'https://unsplash.com/photos/uX4xl_nVStE',
    download:
      'https://unsplash.com/photos/uX4xl_nVStE/download?ixid=MnwxMjA3fDB8MXxhbGx8MjV8fHx8fHwyfHwxNjQxMTU5NDM5',
    download_location:
      'https://api.unsplash.com/photos/uX4xl_nVStE/download?ixid=MnwxMjA3fDB8MXxhbGx8MjV8fHx8fHwyfHwxNjQxMTU5NDM5',
  },
  categories: [],
  likes: 3,
  liked_by_user: false,
  current_user_collections: [],
  sponsorship: null,
  topic_submissions: {},
  user: {
    id: 'HO1LefVbOcA',
    updated_at: '2022-01-02T16:10:45-05:00',
    username: 'n1m',
    name: 'nim',
    first_name: 'nim',
    last_name: null,
    twitter_username: 'SuperNimesh',
    portfolio_url: 'http://supnim.com',
    bio: 'supnim.com | deadnice.co | littlecook.io',
    location: 'London',
    links: {
      self: 'https://api.unsplash.com/users/n1m',
      html: 'https://unsplash.com/@n1m',
      photos: 'https://api.unsplash.com/users/n1m/photos',
      likes: 'https://api.unsplash.com/users/n1m/likes',
      portfolio: 'https://api.unsplash.com/users/n1m/portfolio',
      following: 'https://api.unsplash.com/users/n1m/following',
      followers: 'https://api.unsplash.com/users/n1m/followers',
    },
    profile_image: {
      small:
        'https://images.unsplash.com/profile-1638404343721-46d5584d7f34image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32',
      medium:
        'https://images.unsplash.com/profile-1638404343721-46d5584d7f34image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
      large:
        'https://images.unsplash.com/profile-1638404343721-46d5584d7f34image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128',
    },
    instagram_username: 'supernimesh',
    total_collections: 0,
    total_likes: 0,
    total_photos: 17,
    accepted_tos: true,
    for_hire: true,
    social: {
      instagram_username: 'supernimesh',
      portfolio_url: 'http://supnim.com',
      twitter_username: 'SuperNimesh',
      paypal_email: null,
    },
  },
};
