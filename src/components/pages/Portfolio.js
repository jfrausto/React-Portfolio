import React from 'react';
import Burger from "../images/burger-app-full.PNG";
import Planner from "../images/day_planner.PNG";
import Squads from "../images/learning-squads-full.PNG";
import PubCrawl from "../images/pub-crawl-generator-full.PNG";

export default function Portfolio() {
    return (
        <div>
            <main className="container mx-auto rounded custom-main">
            <div className="row">
                <section className="col mx-auto about-me">
                <h2 className="my-auto text-center">My Work</h2>
                </section>
            </div>
            <div className="row mt-2">
                <section className="col-sm-6">
                <div className="card">
                    <figure>
                    <a
                        href="https://gentle-oasis-33918.herokuapp.com/"
                        target="_blank" rel="noreferrer"
                        ><img
                        className="card-img-top"
                        src={Burger}
                        alt="burger database"
                        />
                    </a>
                    </figure>
                    <div className="card-body">
                    <a
                        href="https://gentle-oasis-33918.herokuapp.com/"
                        target="_blank" rel="noreferrer"
                        ><h5 className="card-title text-center">Out-n-In Burger</h5></a
                    >
                    </div>
                </div>
                </section>
                <section className="col-sm-6">
                <div className="card">
                    <figure>
                    <a
                        href="https://blooming-everglades-09738.herokuapp.com"
                        target="_blank" rel="noreferrer"
                        ><img
                        className="card-img-top"
                        src={Squads}
                        alt="pick your trial and squad view"
                        />
                    </a>
                    </figure>
                    <div className="card-body">
                    <a
                        href="https://blooming-everglades-09738.herokuapp.com"
                        target="_blank" rel="noreferrer"
                        ><h5 className="card-title text-center">Learning Squads</h5></a
                    >
                    </div>
                </div>
                </section>
            </div>
            {/* <!-- 2nd row --> */}
            <div className="row mb-5">
                <section className="col-sm-6">
                <div className="card">
                    <figure>
                    <a href="https://jfrausto.github.io/Day-Planner/" target="_blank" rel="noreferrer"
                        ><img
                        className="card-img-top"
                        src={Planner}
                        alt="day planner layout"
                        />
                    </a>
                    </figure>
                    <div className="card-body">
                    <a href="https://jfrausto.github.io/Day-Planner/" target="_blank" rel="noreferrer"
                        ><h5 className="card-title text-center">Workday Planner</h5></a
                    >
                    </div>
                </div>
                </section>
                <section className="col-sm-6">
                <div className="card">
                    <figure>
                    <a
                        href="https://willrodgers7.github.io/Ultimate-Pub-Crawl/"
                        target="_blank" rel="noreferrer"
                        ><img
                        className="card-img-top"
                        src={PubCrawl}
                        alt="pub crawl generator layout"
                        />
                    </a>
                    </figure>
                    <div className="card-body">
                    <a
                        href="https://willrodgers7.github.io/Ultimate-Pub-Crawl/"
                        target="_blank" rel="noreferrer"
                        ><h5 className="card-title text-center">Pub Crawl Generator</h5></a
                    >
                    </div>
                </div>
                </section>
            </div>
    </main>
        </div>
    )
}
