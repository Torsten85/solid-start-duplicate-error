import { Suspense } from "solid-js";
import { createServerData$ } from "solid-start/server";

export default function Test() {
  const serverData = createServerData$(async () => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return 'hello from the server'
  })
  
  return (
    <div>
      <h1>Server Data Test</h1>
      <Suspense fallback={<>Waiting…</>}>
        Here: {serverData()}
      </Suspense>
    </div>
  );
}
