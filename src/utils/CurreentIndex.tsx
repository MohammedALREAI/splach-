import { PhotosItem } from 'Redux/photos/photos.types';

export const GetMyCureentIndex = (arr:PhotosItem[], itemId:string) => {
    return arr.map(x => x.id).indexOf(itemId);
};
