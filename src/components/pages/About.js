import React from 'react';

export default function About() {
    return (
        <div>
            <h2 className="mt-3 text-center">Hi, I'm <span>J</span>esse.</h2>
            <main className="container rounded custom-main">
            {/* <!-- responsive image, with .img-fluid, takes up whole screen on xs -->
            <!-- text wraps around image responsively on bigger screens --> */}
                <div className="row">
                    <section className="col-12 col-lg-6 my-auto">
                        <figure>
                            <img
                            className="img-fluid mx-auto"
                            src="./assets/images/jesse_shopped_cropped.jpg"
                            alt="It's me Jesse!"
                            />
                        </figure>
                    </section>
                    <p className="col-12 col-lg-6 mx-auto about-me my-auto">
                    I am a web developer from East Los Angeles. My interests include
                    basketball, music, video games, the great outdoors, and the internet.
                    My love for web development began as a teenager tinkering with Xanga
                    blogs and MySpace pages. The responsiveness to seemingly endless build
                    combinations enthralled my young mind. Now, I'm on the road to
                    becoming your favorite web developer.
                    </p>
                </div>
            </main>
        </div>
    )
}
