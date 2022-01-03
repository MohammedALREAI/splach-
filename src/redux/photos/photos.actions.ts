import { ACCESS_KEY } from './../../Const/env';
import { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import { PhotosConst } from './photos.const';
import { GetItemsListsActions, GetItemsListActions } from './photos.types';
import axiosIntance from '../../utils/Axios';
import { TState } from 'redux/Store';




export const getPhats = (page = 1): ((dispatch: Dispatch<GetItemsListsActions>, getState:()=>TState) => Promise<void>) =>
  async (dispatch: Dispatch<GetItemsListsActions>, getState:()=>TState) => {
    // console.log('test1');
    try {
      dispatch({
        type: PhotosConst.GET_LIST_ITEMS_PHTOS_START,
      });




      // console.log('test2');

      const response: AxiosResponse = await axiosIntance.get(`/photos/?client_id=${ACCESS_KEY}&page=${page}`);
      // console.log('response', response.data);
      // console.log('test3');

      const oldState = getState().photos.items.item;

      dispatch({
        type: PhotosConst.GET_LIST_ITEMS_PHTOS_SUCCESS,
        payload: [...oldState, ...response.data],
      });
    } catch (e: any) {
      dispatch({
        type: PhotosConst.GET_LIST_ITEMS_PHTOS_FIALED,
        payload: {
          error: e.message,
        },
      });
    }
  };

// export const serchPHAOTO = (page = 1, query:string, isCollections = false, isUser = false): ((dispatch: Dispatch<GetItemsListActions>) => Promise<void>) =>
export const serchPHAOTO = (query:string): ((dispatch: Dispatch<GetItemsListActions>) => Promise<void>) =>

async (dispatch: Dispatch<GetItemsListActions>) => {
    // console.log('test1');
    try {
      dispatch({
        type: PhotosConst.GET_LIST_ITEM_PHTOS_START,
      });
      // let endPoint = isCollections ? '/search/collections/' : '/search/photos/';
      // if (isUser && !isCollections) {
      //   endPoint = '/search/users/';
      // } else if (isCollections && !isUser) {
      //   endPoint = '/search/collections/';
      // } else {
        // }
          const endPoint = '/search/photos/';
      console.log('test2');
      const response: AxiosResponse = await axiosIntance.get(`/search/photos/?client_id=${ACCESS_KEY}&page=${1}&query=${query}`);
      console.log('response', response.data);
      console.log('test3');


      dispatch({
        type: PhotosConst.GET_LIST_ITEM_PHTOS_SUCCESS,
        payload: response.data.results,
      });
    } catch (e: any) {
      dispatch({
        type: PhotosConst.GET_LIST_ITEM_PHTOS_FIALED,
        payload: {
          error: e.message,
        },
      });
    }
  };
