import React from 'react';

import '../App.css';

function Navigation(){
    return (
        <nav class="navbar navbar-expand-lg bg-light sticky-top" id='navbar1'>
            <div class='container'>
                <a class="navbar-brand" href="#">Safini</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#acasa" id="navbar-link"><i class="fas fa-home"></i> Acasa</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#despre_noi" id="navbar-link"><i class="far fa-heart"></i> Despre noi</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#produsele_noastre" id="navbar-link"><i class="far fa-clone"></i> Produsele noastre</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact" id="navbar-link-button">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;