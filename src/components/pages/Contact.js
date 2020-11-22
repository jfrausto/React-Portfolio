import React from 'react'

export default function Contact() {
    return (
        <div>
            <main className="container mx-auto rounded custom-main">
                <div className="row">
                    <section className="col mx-auto custom-contact">
                    <h2 className="my-auto text-center">Contact Me</h2>
                    </section>
                </div>

                {/* <!-- Form components in grid system -->
                <!-- responsive to fit whole screen --> */}
                <div className="row my-5" id="icon row">
                    <div className="col-12 col-md-4">
                    <a href="https://github.com/jfrausto" target="_blank"><img src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/18282280761580802960-512.png" className="mx-auto d-block color-back" height="175" width="175" alt="GitHub"/></a>
                    </div>
                    <div className="col-12 col-md-4 mt-3 mt-md-0">
                    <a href="https://www.linkedin.com/in/jesse-f-9182331ab/" target="_blank"><img src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-1.svg" className="mx-auto d-block color-back" height="175" width="175" alt="LinkedIn"/></a>
                    </div>
                    <div className="col-12 col-md-4 mt-3 mt-md-0">
                    <a href="mailto:fraustojesse24@gmail.com" target="_blank"><img src="https://cdn.iconscout.com/icon/free/png-512/gmail-32-761667.png" className=" mx-auto d-block color-back" height="175" width="175" alt="GMail"/></a>
                    </div>
                </div>
            </main>
        </div>
    )
}
