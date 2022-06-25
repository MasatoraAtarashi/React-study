import React, { Component }  from 'react';
import { Link } from "react-router-dom";

export function RootPage() {
    return (
        <>
            <div className="has-text-right">
                <Link className="button is-warning" to="/restaurants">
                    全てのラーメン店を見る
                </Link>
            </div>
        </>
    );
}