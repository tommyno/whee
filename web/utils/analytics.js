import config from "constants/config";

// Track pageview
const trackPageView = (url) => {
  try {
    window.gtag("config", config.GA_TRACKING_ID, {
      page_path: url
    });
  } catch (error) {
    console.info("Analytics: Pageview ignored (dev mode)");
  }
};

// Track event
const sendEvent = ({ action, category, label, value }) => {
  try {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value
    });
  } catch (error) {
    console.info("Analytics: Pageview ignored (dev mode)");
  }
};

export default { trackPageView, sendEvent };
