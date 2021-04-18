import React from "react";
import "./Footer.css";

export default function Footer() {
    return(
        <div class="footer">
    <div class="footer__col">
        <div class="footer-col__row">
            <span class="footer-col-row__label">
                추천작 제보, 문의
            </span>
            <span class="footer-col-row__text">
                team.warchive@gmail.com
            </span>
        </div>
        <div class="footer-col__row">
            <span class="footer-col-row__label">
                후원계좌
            </span>
            <span class="footer-col-row__text">
                농협 333-3333-3333
            </span>
        </div>
    </div>
    <div class="footer__col">
        <div class="footer-col__row footer_sns">
            <i class="fab fa-twitter-square"></i>
        </div>
    </div>
</div>
    )
}