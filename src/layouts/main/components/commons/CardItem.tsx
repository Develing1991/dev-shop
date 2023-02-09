import * as S from "./CardItem.styles";
interface ICardItem {
  image: string;
  title: string;
  price: string;
  discount: string;
  rate: string;
  shipping: string;
  center: boolean;
}
export default function CardItem({
  image,
  title,
  price,
  discount,
  rate,
  shipping,
  center = false,
}: Partial<ICardItem>) {
  return (
    <S.CardItem className="card-item" center={center}>
      <div className="image-area">
        <a href="#">
          <img src={image} alt="이미지1" />
        </a>
      </div>
      <h4 className="title">{title}</h4>
      <div className="subtitle">
        <span className="price">{price}</span>
        <span className="discount">{discount}</span>
        <span className="rate">{rate}%</span>
      </div>
      <div className="card-actions">
        <div className="shipping">{shipping}</div>
        <S.HeartIcon className="heart" />
      </div>
    </S.CardItem>
  );
}
