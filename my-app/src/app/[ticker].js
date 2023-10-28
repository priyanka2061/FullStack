"use client"
import { useRouter } from 'next/router';

const TickerPage = () => {
  const router = useRouter();
  const { ticker } = router.query;

  return (
    <div>
      <h2>Details for {ticker}</h2>
      {/* Add content for the new page here */}
    </div>
  );
};

export default TickerPage;
