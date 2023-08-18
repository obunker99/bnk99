/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Split from "../Split";

const BlogsThreeColumn2 = ({ subBG }) => {
  return (
    <section className={`blog-grid section-padding ${subBG ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Postagens Recentes
          </h6>
          <Split>
            <h3 className="wow words chars splitting" data-splitting>
              Conteúdo
            </h3>
          </Split>
          <span className="tbg">Blog</span>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item list wow fadeInUp" data-wow-delay=".8s">
              <div className="img">
                <img src="/img/blog/3.jpg" alt="" />
              </div>
              <div className="cont">
                <Link href="/blog/blog-dark">
                  <a className="date custom-font">
                    <span>
                      Agosto<i>2023</i>
                    </span>
                  </a>
                </Link>
                <div className="info custom-font">
                  <Link href="/blog/blog-dark">
                    <a className="tag">
                      <span>Estratégia</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="/blog-details/blog-details-dark">
                  Melhore seus resultados com estratégias.
                  </Link>
                </h6>
                <div className="btn-more custom-font">
                  <Link href="/blog-details/blog-details-dark">
                    <a className="simple-btn">Ver conteúdo</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsThreeColumn2;
