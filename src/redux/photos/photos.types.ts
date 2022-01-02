import { PhtosShape } from '@types';
import { Action } from 'redux';
import { PhotosConst } from './photos.const';



export interface PhotosItem {
    title:string,
    'id': string,
    'created_at': string,
    'updated_at': string,
    'width': number,
    'height': number,
    'color': string,
    'blur_hash': string,
    'downloads': number,
    'likes': number,
    'liked_by_user': boolean,
    'public_domain': boolean,
    'description': string,
    'exif': {
        'make': string,
        'model': string,
        'name': string,
        'exposure_time': string,
        'aperture': string,
        'focal_length': string,
        'iso': number
    },
    'location': {
        'city': 'Montreal',
        'country': 'Canada',
        'position': {
            'latitude': 45.473298,
            'longitude': -73.638488
        }
    },
    'tags': Array<{
        title: string
    }>,
    'current_user_collections': [
        {
            'id': number,
            'title': string,
            'published_at': string,
            'last_collected_at': string,
            'updated_at': string,
            'cover_photo': string | number,
            'user': string | number
        },

    ],
    'urls': {
        'raw': string
        'full': string,
        'regular': string,
        'small': string,
        'thumb': string
    },
    'links': {
        'self': string,
        'html': string,
        'download': string
        'download_location': string
    },
    'user': {
        'id': string,
        'updated_at': string,
        'username': string,
        'name': string,
        'portfolio_url': string,
        'bio': string,
        'location': string,
        'total_likes': number,
        'total_photos': number,
        'total_collections': number,
        'links': {
            'self': string,
            'html': string,
            'photos': string,
            'likes': string,
            'portfolio': string
        }
    }



}



export interface GetListPhatoStart {
    type: PhotosConst.GET_LIST_ITEMS_PHTOS_START;
}
export interface GetListPhatoFialed {
    type: PhotosConst.GET_LIST_ITEMS_PHTOS_FIALED;
    payload: {
        error: string
    }
}

export interface GetItemsListSuccessAction {
    type: PhotosConst.GET_LIST_ITEMS_PHTOS_SUCCESS;
    payload: PhtosShape[];
}



export interface GetItemsListByQueryStartAction {
    type: PhotosConst.GET_LIST_ITEM_PHTOS_START;
}
export interface GetItemsListByQueryFieldAction {
    type: PhotosConst.GET_LIST_ITEM_PHTOS_FIALED;
    payload: {
        error: string
    }
}

export interface GetItemsListByQuerySuccessAction {
    type: PhotosConst.GET_LIST_ITEM_PHTOS_SUCCESS;
    payload: PhtosShape[] | PhtosShape;
}



export type GetItemsListsActions =
GetListPhatoStart |
    GetListPhatoFialed |
    GetItemsListSuccessAction

export type GetItemsListActions =
GetItemsListByQueryStartAction |
GetItemsListByQueryFieldAction |
GetItemsListByQuerySuccessAction




export type PhtosActions = GetListPhatoStart |

GetListPhatoFialed |
GetItemsListSuccessAction |
GetItemsListActions |
GetItemsListByQueryStartAction |
GetItemsListByQueryFieldAction |
GetItemsListByQuerySuccessAction
