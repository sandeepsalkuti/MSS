import React from "react";
import "./About.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { SocialIcon } from "react-social-icons";

const About = () => {
  return (
    <div className="container">
      <div className="py-4">
        <Carousel showArrows={true} dynamicHeight={true}>
          <div>
            <img src="https://pictures.alignable.com/eyJidWNrZXQiOiJhbGlnbmFibGV3ZWItcHJvZHVjdGlvbiIsImtleSI6ImJ1c2luZXNzZXMvYmFubmVycy9vcmlnaW5hbC8yMTkyOTAyLzE1MTMyNjg1MDdfMTA5MzAwNzlfNzAyODUyMzg5ODMzMjMyXzU4NTY5NDg3MTQ1MjkzMjI3MzVfbi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjExMjAsImhlaWdodCI6MzA0fX19" />
          </div>
          {/* <div>
            <img src="https://pbs.twimg.com/media/EIOaI8RXsAE5uf5.jpg" />
          </div> */}
          <div>
            <img src="data:image/jpeg;base64,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" />
          </div>
        </Carousel>
        <p className="lead">
          Miracle Software Systems, Inc , founded in 1994, is a Global Systems
          Integrator specializing in ERP/ BPM (EAI/SOA) / B2B / Digital
          Experience Technologies and is a Minority Certified Private Business
          headquartered in Novi, MI – USA. Over the past twenty five years,
          Miracle has helped numerous large and mid-sized businesses transition
          their IT to a Service Oriented Architecture, with IT Transformation
          Initiatives, deploying SAP / Oracle ERP Systems. Miracle has a global
          presence on four continents with multiple Global Development Centers
          spanning across the USA, Canada and India. Today, Miracle’s team
          includes 2600 IT Professionals with a projected targeted expansion to
          3000 by the end of 2021.
        </p>

        <p className="lead">
          Whether it is Internal Application to Application(A2A/EAI)
          Integration, Process Integration(BPM), or Business to Business
          Integration using EDI / Web Services, API Management, Machine to
          Machine (M2M) Communications, Internet of Things(IOT), Cloud
          Integration or Mobile Application Integration, Miracle is the Systems
          Integrator of Choice and the Thought Leader in this industry.
        </p>
        <p className="lead">
          Miracle employs the largest set of certified professionals with
          extensive industry knowledge in order to assist your organization with
          implementing the latest technologies. We have several different models
          of delivery to suit the needs of organizations of all sizes.
        </p>
      </div>
      <footer id="footer" class="midnight-blue">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              &copy; 2021{" "}
              <a
                target="_blank"
                href="https://www.miraclesoft.com"
                title="Copyright"
                itemprop="url"
              >
                Miracle Software Systems, Inc.
              </a>
            </div>
            <div class="col-sm-6">
              <ul class="pull-right socialHover">
                <SocialIcon
                  target="_balnk"
                  url="https://www.facebook.com/miracle45625"
                />
                <SocialIcon
                  target="_balnk"
                  url="https://plus.google.com/105262074634409319991/"
                />
                <SocialIcon
                  target="_balnk"
                  url="https://twitter.com/Team_MSS"
                />
                <SocialIcon
                  target="_balnk"
                  url="https://www.linkedin.com/company/miracle-software-systems-inc"
                />
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
