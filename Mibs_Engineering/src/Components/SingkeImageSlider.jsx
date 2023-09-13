import React from "react";

const SingkeImageSlider = ({
  Banner,
  content,
  backgroundcolor,
  blendmode,
  height,
  contact,
  color,
}) => {
  return (
    <>
      <div
        style={{
          height: `${height}`,
          backgroundImage: `url(${Banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
          backgroundColor: ` ${backgroundcolor} `,
          backgroundBlendMode: `${blendmode}`,
          display: "flex",
          flexDirection: contact ? "column" : "row",
          justifyContent: contact ? "space-around" : "center",
          alignItems: contact ? "unset" : "center",
        }}
      >
        <span
          className={`${color} display-2 fw-bold text-uppercase`}
          style={
            contact
              ? {
                  display: contact ? "flex" : "block",
                  justifyContent: contact ? "center" : "unset",
                  padding: contact ? "10px 0px" : "unset",
                }
              : null
          }
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          {content}
        </span>

        {contact ? (
          <>
            <div
              className="container"
              data-aos="fade-down"
              data-aos-duration="3000"
            >
              <div className="row justify-content-center">
                {contact.map((Element) => (
                  <>
                    <div className="col-lg-4 col-md-6 col-12  d-flex flex-column align-items-center gap-2">
                      <i class={`${Element.icon} fs-2`}></i>
                      <div className="fs-4 text-center ">{Element.content}</div>
                      {Element.newcontent ? (
                        <>
                          <div className="fs-4">{Element.newcontent}</div>
                        </>
                      ) : null}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default SingkeImageSlider;
