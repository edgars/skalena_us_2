import React from "react";
import CookieConsent from "react-cookie-consent";

const CookieBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="I Accept"
      declineButtonText="Decline"
      cookieName="siteCookieConsent"
      style={{ background: "#2B373B", color: "white", fontSize: "14px" }}
      buttonStyle={{
        background: "#f1d600",
        color: "#000",
        fontSize: "14px",
        borderRadius: "5px",
        padding: "10px 20px",
      }}
      declineButtonStyle={{
        background: "#555",
        color: "#fff",
        fontSize: "14px",
        borderRadius: "5px",
        padding: "10px 20px",
      }}
      expires={365}
    >
      This website uses cookies to enhance the user experience.{" "}
      <a href="/privacy-policy" style={{ color: "#f1d600" }}>
        Learn more
      </a>
    </CookieConsent>
  );
};

export default CookieBanner;