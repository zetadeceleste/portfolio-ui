import { useRouter } from "next/router";
import { useEffect } from "react";

import Loader from "@/components/common/Loader";

const Custom404Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, [router]);

  return <Loader />;
};

export default Custom404Page;
