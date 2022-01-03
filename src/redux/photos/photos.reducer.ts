import { PhtosShape } from '@types';
import { PhotosConst } from './photos.const';
import { PhtosActions, PhotosItem } from './photos.types';




interface IState{
    items:{
        item:PhtosShape[],
        isLoading: boolean,
        error: string,

    },
    item:{
        item:any[] | any,
        isLoading: boolean,
        error: string,
    }
}

const initialState:IState = {
    items: {
        item: [],
        isLoading: false,
        error: '',

    },
    item: {
        item: {} as PhtosShape,
        isLoading: false,
        error: '',
    },
};

export const photosReducers = (state:IState = initialState, action:PhtosActions):IState => {
    switch (action.type) {
        case PhotosConst.GET_LIST_ITEMS_PHTOS_START:
          return {
            ...initialState,
            items: {
                ...initialState.items,
                        isLoading: true,

            },
          };
        case PhotosConst.GET_LIST_ITEMS_PHTOS_SUCCESS:
          return {
            ...initialState,
            items: {
                ...initialState.items,
                isLoading: false,
                item: action.payload,

            },
          };
        case PhotosConst.GET_LIST_ITEMS_PHTOS_FIALED:
          return {
            ...initialState,
            items: {
                ...initialState.items,
                isLoading: false,
                error: action.payload.error,

            },
          };


          case PhotosConst.GET_LIST_ITEM_PHTOS_START:
          return {
            ...initialState,
            item: {
                ...initialState.item,
                        isLoading: true,

            },
          };
        case PhotosConst.GET_LIST_ITEM_PHTOS_SUCCESS:
          return {
            ...initialState,
            item: {
                ...initialState.item,
                isLoading: false,
                item: action.payload,

            },
          };
        case PhotosConst.GET_LIST_ITEM_PHTOS_FIALED:
          return {
                ...initialState,
                item: {
                    ...initialState.item,
                    isLoading: false,
                    error: action.payload.error,
                },

          };
        default:
          return initialState;
      }
    };
