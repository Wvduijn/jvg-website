import buildUrl from '@services/sanity-urlbuilder';

interface imageType {
    src: string,
    width: number,
    height: number
}

interface imageArrayType extends Array<imageType>{}

let ImagesArray: imageArrayType = [];

// This function will transform the array of image we get from Sanity to a usable Object which we can pass to the react-image-gallery
export const galleryBuilder = (images: any) => {
    images.forEach((image: any) => {
        let imageObject = {
            src: buildUrl(image).url(),
            width: 4,
            height: 3
        }
        ImagesArray.push(imageObject);
    });
    console.log('IMAGE ARRAY CREATED', ImagesArray);
    return ImagesArray;
}