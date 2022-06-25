import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {RootPage} from "./pages/Root.js";
import {RestaurantDetailPage} from "./pages/RestaurantDetail.js";
import {RestaurantListPage} from "./pages/RestaurantList.js";

function Header() {
    return (
        <section className="hero is-warning">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        日大文理
                        <br className="is-hidden-tablet" />
                        ラーメンレビュー
                    </h1>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="footer ">
            <div className="content">
                <p className="has-text-centered">
                    これは日本大学文理学部情報科学科の開講科目「Web
                    プログラミング」の教材として作成されたサンプルアプリケーションです。
                </p>
            </div>
        </footer>
    );
}

export function App() {
    return (
        <Router>
            <Header />
                    <Routes>
                        <Route path="/" element={<RootPage />}></Route>
                        <Route path="/restaurants" element={<RestaurantListPage />}></Route>
                        <Route path="/restaurants/:restaurantId" element={<RestaurantDetailPage />}></Route>
                    </Routes>
            <Footer />
        </Router>
    );
}