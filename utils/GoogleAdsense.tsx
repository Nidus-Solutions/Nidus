import Script from "next/script";

type Props = {
  pId: string;
};

const GoogleAdsense: React.FC<Props> = ({ pId }) => {
  return (
    <Script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=-${pId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"

    />
  );
};

export default GoogleAdsense;
