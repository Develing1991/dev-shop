import React from "react";

export default function NavWrapper() {
  return (
    <nav>
      <div className="inner">
        <ul>
          <li>
            <a href="">
              <em>햄버거버튼</em>
            </a>
          </li>
          <li>
            <a href="">
              <em>출산/수유</em>
            </a>
            <div className="drop_sub">
              <ul>
                <li>
                  <a href="">탑</a>
                </li>
                <li>
                  <a href="">아우터</a>
                </li>
                <li>
                  <a href="">드레스</a>
                </li>
                <li>
                  <a href="">스커트</a>
                </li>
                <li>
                  <a href="">팬츠</a>
                </li>
              </ul>
              <div className="image">
                <img src="" alt="" />
              </div>
            </div>
          </li>
          <li>
            <a href="">
              <em>외출</em>
            </a>
          </li>
          <li>
            <a href="">
              <em>바디케어</em>
            </a>
          </li>
          <li>
            <a href="">
              <em>세제/주방</em>
            </a>
          </li>
          <li>
            <a href="">
              <em>침구/가구</em>
            </a>
          </li>
          <li>
            <a href="">
              <em>놀이용품</em>
            </a>
          </li>
          <li>
            <a href="">
              <em>장난감</em>
            </a>
          </li>
          <li>
            <a href="">
              <em>신상품</em>
            </a>
          </li>
          <li>
            <a href="">
              <em>베스트</em>
            </a>
          </li>
          <li>
            <a href="">
              <em>브랜드</em>
            </a>
          </li>
          <li>
            <a href="">
              <em>이벤트</em>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
