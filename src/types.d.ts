declare module 'slider-moon';
declare module 'react-scroll';
declare module 'react-google-maps/api';

  interface SliderImage {
    opacity: number;
    transform: string;
  }
  
  interface ItemImage {
    id: number;
    name: string;
    location: string;
    imageSrc: string;
    item: CardData | null;
    key: number;
    props: never;
  }  

  interface CardData {
    id?: number;
    name?: string;
    location?: string;
    imageSrc?: string;
  }

  interface ListProps {
    item: string;
    price: number;
}

type SlideTransitionParams = {
  item: CardData | null;
  key: number;
  props: SliderImage;
};
