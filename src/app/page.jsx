import Command from "@/app/components/input/command";
import MessageAiBox from "@/app/components/box/messageAiBox";
import Head from "next/head";
export default function Home() {
  return (
    <div className="">
      <Head>
        <link
          rel="shortcut icon"
          href="./logo/logo.png"
        />
      </Head>
      <div className="mx-auto max-w-3xl mt-20">
        <MessageAiBox />
      </div>
      <Command />
    </div>
  );
}
