export interface IExample {
    ms: string
}

interface ITags {
    [key: string]: string | object | any

}






export interface PhtosShape {
    'id': string,
    'title': string,
    'description': string,
    'published_at': string,
    'last_collected_at': string,
    'updated_at': string,
    'curated': boolean,
    'featured': number,
    'total_photos': number,
    'private': boolean,
    'share_key': string,
    'urls': {
        'raw': string,
        'full': string,
        'regular': string,
        'small': string,
        'thumb': string
    },


    tags: Array<ITags>,
    'links': {
        [key: string]: string
    },
    'user': {
        [key: string]: string

        'links': {
            [key: string]: string

        },
        'profile_image': {
            [key: string]: string

        },
        'instagram_username': string,
        'total_collections': number,
        'total_likes': number,
        'total_photos': number,
        'accepted_tos': boolean,
        'for_hire': boolean,
        'social': {
            [key: string]: string

            'paypal_email': null | string
        }
    },
    'cover_photo': {
        [key: string]: string | number | null

        'urls': {
            thumb: string
            [key: string]: string

        },
        'links': {
            [key: string]: string

        },
        'categories': Array<any>,
        'likes': number,
        'liked_by_user': boolean,
        'current_user_collections': Array<any>,
        'sponsorship': null | string,
        'topic_submissions': {
            [key: string]: {
                [key: string]: string

            }
        },
        'user': {
            [key: string]: string
            'links': {
                [key: string]: string

            },
            'profile_image': {
                [key: string]: string

            },
            'instagram_username': string,
            'total_collections': number,
            'total_likes': number,
            'total_photos': number,
            'accepted_tos': boolean,
            'for_hire': boolean,
            'social': {
                [key: string]: string | null

            }
        }
    },
    'preview_photos': [
        {
            [key: string]: string | null

            'urls': {
                [key: string]: string

            }
        },
    ]

}
