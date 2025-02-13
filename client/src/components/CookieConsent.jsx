import { useEffect, useState } from "react";
import CookieConsent from "react-cookie-consent";

function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const sendConsentToBackend = async (consent) => {
    try {
      await fetch("https://your-backend.com/api/cookie-consent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ consent }),
        credentials: "include", // Sends cookies with the request if needed
      });
      console.log("Consent sent to backend:", consent);
    } catch (error) {
      console.error("Error sending consent:", error);
    }
  };

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    sendConsentToBackend("accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    sendConsentToBackend("declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      onAccept={handleAccept}
      onDecline={handleDecline}
      style={{
        background: "#222",
        color: "#fff",
        fontSize: "14px",
        padding: "12px",
        textAlign: "center",
        boxShadow: "0 -2px 10px rgba(0,0,0,0.2)",
      }}
      buttonStyle={{
        background: "#f4a261",
        color: "#fff",
        fontSize: "14px",
        borderRadius: "5px",
        padding: "8px 16px",
      }}
      declineButtonStyle={{
        background: "#666",
        color: "#fff",
        fontSize: "14px",
        borderRadius: "5px",
        padding: "8px 16px",
        marginLeft: "10px",
      }}
    >
      <span style={{ fontWeight: "bold" }}>
        This website uses cookies to improve your experience.
      </span>{" "}
      You can accept or decline.
    </CookieConsent>
  );
}

export default CookieBanner;
