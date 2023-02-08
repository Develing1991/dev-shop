import * as S from "../styles/LogoWrapper.styles";
export default function LogoWrapper() {
  return (
    <S.LogoWrapper>
      <div className="inner">
        <h1 className="logo">
          <a href="">
            <img src="" alt="" />
          </a>
        </h1>
        <div className="search">
          <form>
            <input type="text" placeholder="Search" />
            <button>검색</button>
          </form>
        </div>
      </div>
    </S.LogoWrapper>
  );
}
